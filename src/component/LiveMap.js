import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import sunny from "../img/weather-clear.png";
import cloudy from "../img/drizzling-fw.png";

import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Set the marker icon path
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

let cloudyIcon = L.icon({
    iconUrl: cloudy, // Replace 'url_to_cloudy_icon' with the URL of your cloudy icon image
    shadowUrl: cloudy
});

// Sunny icon
let sunnyIcon = L.icon({
    iconUrl: sunny, // Replace 'url_to_sunny_icon' with the URL of your sunny icon image
    shadowUrl: sunny,
});

// Set the default marker icon
L.Marker.prototype.options.icon = DefaultIcon;

function LiveMap() {
    // Weather data for districts
    const weatherData = {
        "Colombo": {
            temperature: 30,
            humidity: 80,
            pressure: 1010,
            cloudy: true
        },
        "Gampaha": {
            temperature: 29,
            humidity: 75,
            pressure: 1009,
            cloudy: false
        },
        "Kalutara": {
            temperature: 31,
            humidity: 85,
            pressure: 1011,
            cloudy: true
        },
        "Kandy": {
            temperature: 28,
            humidity: 70,
            pressure: 1008,
            cloudy: true
        },
        "Nuwara Eliya": {
            temperature: 20,
            humidity: 90,
            pressure: 1007,
            cloudy: false
        },
        "Anuradhapura": {
            temperature: 32,
            humidity: 78,
            pressure: 1012,
            cloudy: false
        },
        // Add more districts
        "Jaffna": {
            temperature: 33,
            humidity: 76,
            pressure: 1009,
            cloudy: false
        },
        "Batticaloa": {
            temperature: 32,
            humidity: 78,
            pressure: 1010,
            cloudy: true
        },
        "Trincomalee": {
            temperature: 34,
            humidity: 74,
            pressure: 1008,
            cloudy: true
        },
        "Kilinochchi": {
            temperature: 33,
            humidity: 77,
            pressure: 1009,
            cloudy: false
        },
        "Mannar": {
            temperature: 33,
            humidity: 75,
            pressure: 1009,
            cloudy: true
        },
        "Mullaitivu": {
            temperature: 32,
            humidity: 79,
            pressure: 1008,
            cloudy: true
        },
        "Vavuniya": {
            temperature: 33,
            humidity: 76,
            pressure: 1009,
            cloudy: false
        },
        "Puttalam": {
            temperature: 32,
            humidity: 78,
            pressure: 1010,
            cloudy: false
        },
        "Kurunegala": {
            temperature: 31,
            humidity: 79,
            pressure: 1011,
            cloudy: true
        },
        "Polonnaruwa": {
            temperature: 33,
            humidity: 77,
            pressure: 1010,
            cloudy: false
        },
        "Badulla": {
            temperature: 29,
            humidity: 83,
            pressure: 1006,
            cloudy: true
        },
        "Monaragala": {
            temperature: 32,
            humidity: 78,
            pressure: 1008,
            cloudy: false
        },
        "Ratnapura": {
            temperature: 31,
            humidity: 80,
            pressure: 1010,
            cloudy: true
        },
        "Hambantota": {
            temperature: 32,
            humidity: 79,
            pressure: 1009,
            cloudy: false
        },
        "Matara": {
            temperature: 31,
            humidity: 79,
            pressure: 1010,
            cloudy: true
        },
        "Galle": {
            temperature: 31,
            humidity: 79,
            pressure: 1010,
            cloudy: false
        },
        "Ampara": {
            temperature: 33,
            humidity: 76,
            pressure: 1009,
            cloudy: true
        },
        "Kegalle": {
            temperature: 31,
            humidity: 80,
            pressure: 1010,
            cloudy: false
        },
    };

    // Function to get coordinates for each district (sample function, you may replace it with your data)
    function getDistrictCoordinates(district) {
        switch (district) {
            case "Colombo":
                return [6.9271, 79.8612];
            case "Gampaha":
                return [7.0873, 80.0148];
            case "Kalutara":
                return [6.5854, 79.9607];
            case "Kandy":
                return [7.2906, 80.6337];
            case "Nuwara Eliya":
                return [6.9686, 80.7832];
            case "Anuradhapura":
                return [8.3114, 80.4037];
            case "Jaffna":
                return [9.6612, 80.0255];
            case "Batticaloa":
                return [7.7229, 81.6903];
            case "Trincomalee":
                return [8.5879, 81.2152];
            case "Kilinochchi":
                return [9.4001, 80.3996];
            case "Mannar":
                return [8.9762, 79.9027];
            case "Mullaitivu":
                return [9.2677, 80.8137];
            case "Vavuniya":
                return [8.7470, 80.4985];
            case "Puttalam":
                return [8.0332, 79.8262];
            case "Kurunegala":
                return [7.4860, 80.3643];
            case "Polonnaruwa":
                return [7.9403, 81.0188];
            case "Badulla":
                return [6.9924, 81.0550];
            case "Monaragala":
                return [6.8860, 81.3450];
            case "Ratnapura":
                return [6.6930, 80.3860];
            case "Hambantota":
                return [6.1246, 81.1185];
            case "Matara":
                return [5.9549, 80.555];
            case "Galle":
                return [6.0535, 80.2210];
            case "Ampara":
                return [7.2817, 81.6749];
            case "Kegalle":
                return [7.2514, 80.3466];
            default:
                return [0, 0];
        }
    }

    // State to manage the currently hovered district
    const [hoveredDistrict, setHoveredDistrict] = useState(null);

    // Refs to store markers
    const markerRefs = useRef([]);

    useEffect(() => {
        // Add event listeners for each marker
        markerRefs.current.forEach((marker, index) => {
            const handleMouseOver = () => setHoveredDistrict(Object.keys(weatherData)[index]);
            const handleMouseOut = () => setHoveredDistrict(null);

            marker.addEventListener('mouseover', handleMouseOver);
            marker.addEventListener('mouseout', handleMouseOut);

            return () => {
                // Remove event listeners when component unmounts
                marker.removeEventListener('mouseover', handleMouseOver);
                marker.removeEventListener('mouseout', handleMouseOut);
            };
        });
    }, [weatherData]);

    return (
        <MapContainer center={[7.8731, 80.7718]} zoom={7} style={{ height: "400px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />

            {/* Loop through weather data and add markers to the map */}
            {Object.keys(weatherData).map((district, index) => (
                // <Marker
                //     position={getDistrictCoordinates(district)}
                //     key={district}
                //     ref={el => (markerRefs.current[index] = el)}
                // >
                //     <Popup>
                //         <strong>{district}</strong><br />
                //         Temperature: {weatherData[district].temperature}°C<br />
                //         Humidity: {weatherData[district].humidity}%<br />
                //         Air Pressure: {weatherData[district].pressure} hPa<br />
                //         Cloudy: {weatherData[district].cloudy ? "Yes" : "No"}
                //     </Popup>
                // </Marker>
                <Marker
                    position={getDistrictCoordinates(district)}
                    key={district}
                    ref={el => (markerRefs.current[index] = el)}
                    icon={weatherData[district].cloudy ? cloudyIcon : sunnyIcon}
                >
                    <Popup>
                        <strong>{district}</strong><br />
                        Temperature: {weatherData[district].temperature}°C<br />
                        Humidity: {weatherData[district].humidity}%<br />
                        Air Pressure: {weatherData[district].pressure} hPa<br />
                        Cloudy: {weatherData[district].cloudy ? "Yes" : "No"}
                    </Popup>
                </Marker>
            ))}

            {/* Show details when hovering over a marker */}
            {hoveredDistrict && (
                <Popup position={getDistrictCoordinates(hoveredDistrict)}>
                    <strong>{hoveredDistrict}</strong><br />
                    Temperature: {weatherData[hoveredDistrict].temperature}°C<br />
                    Humidity: {weatherData[hoveredDistrict].humidity}%<br />
                    Air Pressure: {weatherData[hoveredDistrict].pressure} hPa<br />
                    Cloudy: {weatherData[hoveredDistrict].cloudy ? "Yes" : "No"}
                </Popup>
            )}
        </MapContainer>
    );
}

export default LiveMap;
