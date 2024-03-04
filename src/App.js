import {Router,Routes,Route ,BrowserRouter} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Explore from "./pages/explore";
import About from "./pages/About";
import Service from "./pages/Service";

function App() {
  return (

    <BrowserRouter>
      <Routes>
    <Route path='/' element = {<Homepage/>}/>
    <Route path='/Homepage' element = {<Homepage/>}/>
    <Route path = '/Explore' element={<Explore/>} />
    <Route path = '/About' element={<About/>} />
    <Route path = '/Services' element={<Service/>} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
