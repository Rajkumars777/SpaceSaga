import React from 'react';

const SearchResult = ({ data }) => {
    return (
        <div>
            {data && data.length > 0 && (
                <div>
                    {data.map((item, index) => (
                        <div key={index}>
                            <img src={item.links && item.links[0] && item.links[0].href} alt={item.data && item.data[0] && item.data[0].title} className="mt-4 mx-auto max-w-sm" />
                            <p className="mt-2 text-gray-700">{item.data && item.data[0] && item.data[0].description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchResult;
