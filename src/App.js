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
        <Route path="/:continentId" element={<Country />} />
        <Route path="/:continentId/:countryId" element={<Place />} />
        <Route path="/:continentId/:countryId/:placeId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
