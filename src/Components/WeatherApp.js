// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";

// const api = {
//   key: "6b52701097d9e87ac66a6b7b91660fc4",
//   base: "https://api.openweathermap.org/data/2.5/",
// };
// const WeatherApp = () => {
//   // const search = () => {
//   //   const element = document.getElementsByClassName("cityInput");
//   //   if (element[0].value === "") {
//   //     return 0;
//   //   }
//   //  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=6b52701097d9e87ac66a6b7b91660fc4"

//   const [search, setSearch] = useState("");

//   const searchPressed = () => {
//     console.log("Search pressed!");
//     console.log(search);
//   };

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <div className="main">
//             <div className="top-bar">
//               {/* Search Box */}

//               <input
//                 type="text"
//                 className="cityInput"
//                 placeholder="Search..."
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//               {/* <button onClick={(e) => searchPressed}>Search</button> */}
//               <div className="search-icon">
//                 <img
//                   src="/Images/search1.png"
//                   alt="img"
//                   className="img-fluid search"
//                   onClick={(e) => searchPressed}
//                 />
//               </div>
//             </div>
//             {/* Location */}
//             <p className="weatherlocation mt-5">New York City, USA</p>
//             {/* Temperature F/C */}
//             <p className="weathertemp">32°F</p>
//             {/* Condition (Sunny) */}
//             <p className="weathercondition">Sunny</p>

//             {/* <div className="weather-image">
//               <img
//                 src="/Images/cloudyyy-rm.png"
//                 alt="img"
//                 className="img-fluid cloudy"
//               />
//             </div>
//             <div className="weathertemp">24°c</div>
//             <div className="weatherlocation">London</div>
//             <div className="datacontainer">
//               <div className="element">
//                 <img
//                   src="Images/humidity1.png"
//                   alt="img"
//                   className="humidityicon"
//                 />
//                 <div className="data">
//                   <div className="humiditypercent">64%</div>
//                   <div className="text">Humidity</div>
//                 </div>
//               </div>
//               <div className="element">
//                 <img src="Images/windy.png" alt="img" className="windicon" />
//                 <div className="data">
//                   <div className="humiditypercent">18 km/h</div>
//                   <div className="text">Wind Speed</div>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default WeatherApp;
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const api = {
  key: "6b52701097d9e87ac66a6b7b91660fc4",
  base: "https://api.openweathermap.org/data/2.5/",
};

const WeatherApp = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search === "") {
      console.log("Please enter a city name.");
      return;
    }

  //  Perform the API request using `search` and `api` values
    //For example:
    const apiUrl = `${api.base}weather?q=${search}&appid=${api.key}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Handle the data and update the UI
      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="main">
            <div className="top-bar">
              {/* Search Box */}
              <input
                type="text"
                className="cityInput"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
            {/* Location */}
            <p className="weatherlocation mt-5">New York City, USA</p>
            {/* Temperature F/C */}
            <p className="weathertemp">32°F</p>
            {/* Condition (Sunny) */}
            <p className="weathercondition">Sunny</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherApp;
