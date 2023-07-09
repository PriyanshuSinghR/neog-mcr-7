import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Country } from './pages/Country';
import { Details } from './pages/Details';
import { Place } from './pages/Place';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countryId" element={<Country />} />
        <Route path="/:placeId" element={<Place />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
