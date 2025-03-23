import React, { useRef, useState } from 'react';
import LandData from '../../constants/landData';
import LandCard from './LandCard';
import './Land.css';

const Land = () => {
  const [searchResults, setSearchResults] = useState(LandData);

  const landTypeRef = useRef(null);
  const districtRef = useRef(null);
  const cityRef = useRef(null);

  const handleSearch = () => {
    const landType = landTypeRef.current.value;
    const district = districtRef.current.value;
    const city = cityRef.current.value;

    const filteredResults = LandData.filter((land) => {
      return (
        (landType == '' || land.landType == landType) &&
        (district == '' || land.district == district) &&
        (city == '' || land.city == city)
      );
    });

    setSearchResults(filteredResults);
    console.log("land  filter is",searchResults);
  };

  return (
    <div className="land-container">
      <div className="land-flex">
        <div className="land-left">
          <h1 className="land-head">{'Find Your Ideal'.toUpperCase()}  <span style={{ color: "green", textAlign: "center", justifyContent: "center",alignItems:'center' }}>
          LAND
      </span></h1>
        </div>

        <div className="land-right">
          <div className="land-grid">
            {/* Land Type */}
            <div className="input-group">
              <label>Land Type</label>
              <select ref={landTypeRef}>
                <option value="">All</option>
                <option value="commercial">Commercial</option>
                <option value="coconut">Coconut Land</option>
                <option value="agricultural">Agricultural Land</option>
              </select>
            </div>

            {/* District */}
            <div className="input-group">
              <label>District</label>
              <select ref={districtRef}>
                <option value="">All Districts</option>
                <option value="Kandy">Kandy</option>
                <option value="Colombo">Colombo</option>
                <option value="Gampaha">Gampaha</option>
                <option value="Matara">Matara</option>
              </select>
            </div>

            {/* City */}
            <div className="input-group">
              <label>City</label>
              <select ref={cityRef}>
                <option value="">All Cities</option>
                <option value="Katugasthota">Katugasthota</option>
                <option value="Digana">Digana</option>
                <option value="Hadeniya">Hadeniya</option>
                <option value="Moratuwa">Moratuwa</option>
                <option value="Piliyandala">Piliyandala</option>
                <option value="Kottawa">Kottawa</option>
                <option value="Matara">Matara</option>
                <option value="Gampaha">Gampaha</option>
              </select>
            </div>
          </div>
          <button onClick={handleSearch} className="search-btn">Search</button>
        </div>
      </div>

      {/* Display Search Results */}
      <div className="land-card-container">
        {searchResults.length > 0 ? (
          searchResults.map((land, index) => <LandCard key={index} land={land} />)
        ) : (
          <p>No lands match your search</p>
        )}
      </div>
    </div>
  );
};

export default Land;
