import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";

export default function Searchbar() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [numResults, setNumResults] = useState(10); // Number of results to initially display
    const [currentIndex, setCurrentIndex] = useState(0);
    const [explanations, setExplanations] = useState([]);
    const [searchSiteLink, setSearchSiteLink] = useState('');

    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://cse.google.com/cse.js?cx=b0696d2f0d01d4486';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(e.target.elements.q.value);
    };

    useEffect(() => {
        if (!query) return;

        async function fetchData() {
            try {
                const searchRes = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBdqlKSiP2_jEPdghj6N4cgj1KY5wAWwOM&cx=b0696d2f0d01d4486&q=${query}&num=${numResults}`);
                const searchData = await searchRes.json();
                console.log("Search Results:", searchData); // Log search results for debugging
                if (searchData.items && searchData.items.length > 0) {
                    setSearchResults(searchData.items.map(item => ({
                        title: item.title,
                        image: item.pagemap?.cse_image?.[0]?.src || '', // Corrected image URL extraction
                        link: item.link
                    })));
                } else {
                    setSearchResults([]);
                }
                const wikiRes = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${query}`);
                const mainExplanation = wikiRes.data.extract;
                setExplanations([{
                    title: wikiRes.data.title,
                    explanation: mainExplanation
                }]);
                if (wikiRes.data.sections && wikiRes.data.sections.length > 0) {
                    for (let i = 1; i < Math.min(wikiRes.data.sections.length, 10); i++) { // Fetch up to 10 additional sections
                        const sectionRes = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${query}/${wikiRes.data.sections[i].anchor}`);
                        setExplanations(prevExplanations => [...prevExplanations, {
                            title: wikiRes.data.sections[i].line,
                            explanation: sectionRes.data.extract
                        }]);
                    }
                }
                setSearchSiteLink(wikiRes.data.content_urls.desktop.page);
            } catch (error) {
                console.error("Error fetching data:", error);
                setSearchResults([]);
                setExplanations([]);
                setSearchSiteLink('');
            }
        }

        fetchData();
    }, [query, numResults]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % (searchResults.length - 2)); // -2 for showing only 3 images
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(intervalId);
    }, [searchResults]);

    return (
        <div className="overflow-y-auto h-screen">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative isolate bg-white px-6 py-16 text-center sm:px-16 sm:shadow-sm dark:bg-transparent">
                    <p className="mx-auto max-w-[50%] text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
                        <a href="/">
                            <img src="https://see.fontimg.com/api/renderfont4/jW3R/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/U3BhY2VTQUdB/star-jedi-rounded.png" alt="Star Wars fonts" />
                        </a>
                     
                    </p>
                    <form onSubmit={handleSubmit}>
                        <label className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300" htmlFor="search-bar">
                            <input id="search-bar" placeholder="Enter title or content" name="q" className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" required="" />
                            <button type="submit" className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform  rounded-xl transition-all">
                                <div className="flex items-center transition-all opacity-1">
                                    <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                        Search
                                    </span>
                                </div>
                            </button>
                        </label>
                    </form>

                    {/* Render the SearchResult components */}
                    <div className="flex items-center justify-between my-8">
                        {searchResults.length > 0 && searchResults.slice(currentIndex, currentIndex + 3).map((result, index) => (
                            <div key={index} style={{ width: '300px', height: '300px' }} className="shuffling-image">
                                <img src={result.image} className="w-full h-full rounded-lg shadow-md" />
                               
                            </div>
                        ))}
                    </div>

                    {/* Display multiple explanations */}
                    {explanations.length > 0 && (
                        <div className="mx-auto  text-[190%] mt-8 text-gray-900 dark:text-gray-200">
                            {explanations.map((explanation, index) => (
                                <div key={index}>
                                    <h2 className="text-xxl text-transform: uppercase text-white   font-bold  mt-4">{explanation.title}</h2>
                                    <p>{explanation.explanation}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Button for more information
                    {searchSiteLink && (
                        <div className="mt-8">
                            <a href={searchSiteLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">More Information</a>
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    );
}
