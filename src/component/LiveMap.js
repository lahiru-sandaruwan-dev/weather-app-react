import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import sunny from "../img/weather-clear.png";
import cloudy from "../img/drizzling-fw.png";

import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import axios from "axios";
import { useSocketContext } from "../context/SocketContext";

// Set the marker icon path
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

let cloudyIcon = L.icon({
    iconUrl: cloudy, // Replace 'url_to_cloudy_icon' with the URL of your cloudy icon image
    shadowUrl: cloudy,
});

// Sunny icon
let sunnyIcon = L.icon({
    iconUrl: sunny, // Replace 'url_to_sunny_icon' with the URL of your sunny icon image
    shadowUrl: sunny,
});

// Set the default marker icon
L.Marker.prototype.options.icon = DefaultIcon;


function LiveMap() {
    const [hoveredDistrict, setHoveredDistrict] = useState(null);
    const [weatherDatas, setWeatherData] = useState([]);

    // Refs to store markers
    const markerRefs = useRef([]);

    const { socket, weatherData } = useSocketContext();

    useEffect(() => {
        // getWeatherData();

        const getWeatherData = async () => {
            try {
                const response = await axios.get("https://weather-app-backend-ry03.onrender.com/api/weather");
                if (response.data.isSuccessful) {
                    setWeatherData(response.data.data);
                }
            } catch (err) {
                console.log(err);
            }
        };

        const fetchWeatherInitially = async () => {
            await getWeatherData();
        };

        fetchWeatherInitially();

        const intervalId = setInterval(fetchWeatherInitially, 300000);

        return () => clearInterval(intervalId);


    }, []);

    // useEffect(() => {
    //     if (weatherData) {
    //         console.log("Socket data received:", weatherData);
    //         setWeatherData(weatherData);
    //     }
    // }, [weatherData]);

    // const getWeatherData = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:8080/api/v1/weather");
    //         if (response.data.isSuccessful) {
    //             setWeatherData(response.data.data); // Assuming response.data.data contains weather data array
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

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
            case "Matale":
                return [7.2906, 80.6234];
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
                return [8.747, 80.4985];
            case "Puttalam":
                return [8.0332, 79.8262];
            case "Kurunegala":
                return [7.486, 80.3643];
            case "Polonnaruwa":
                return [7.9403, 81.0188];
            case "Badulla":
                return [6.9924, 81.055];
            case "Moneragala":
                return [6.886, 81.345];
            case "Ratnapura":
                return [6.693, 80.386];
            case "Hambanthota":
                return [6.1246, 81.1185];
            case "Matara":
                return [5.9549, 80.555];
            case "Galle":
                return [6.0535, 80.221];
            case "Ampara":
                return [7.2817, 81.6749];
            case "Kegalle":
                return [7.2514, 80.3466];
            default:
                return [0, 0];
        }
    }

    return (
        <MapContainer
            center={[7.8731, 80.7718]}
            zoom={7}
            style={{ height: "400px", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Loop through weather data and add markers to the map */}
            {weatherDatas.map((data, index) => (
                <Marker
                    position={getDistrictCoordinates(data.district)}
                    key={index}
                    ref={(el) => (markerRefs.current[index] = el)}
                    icon={data.temperature < 25 ? cloudyIcon : sunnyIcon}
                >
                    <Popup>
                        <strong>{data.district}</strong>
                        <br />
                        {/* <br /> */}
                        Temperature: {data.temperature}°C
                        <br />
                        Humidity: {data.humidity}%
                        <br />
                        Air Pressure: {data.airPressure} hPa
                        <br />
                        Cloudy: {data.temperature < 25.00 ? "Yes" : "No"}
                    </Popup>
                </Marker>
            ))}

            {/* Show details when hovering over a marker */}
            {hoveredDistrict && (
                // <Popup position={getDistrictCoordinates(hoveredDistrict)}>
                //     {/* Display details here */}
                // </Popup>

                <Popup position={getDistrictCoordinates(hoveredDistrict)}>
                    {/* Find data for the hovered district */}
                    {weatherDatas.map((data, index) => {
                        if (data.district === hoveredDistrict) {
                            return (
                                <div key={index}>
                                    <strong>{data.district}</strong><br />
                                    Temperature: {data.temperature}°C<br />
                                    Humidity: {data.humidity}%<br />
                                    Air Pressure: {data.airPressure} hPa<br />
                                    Cloudy: {data.cloudy ? "Yes" : "No"}
                                </div>
                            );
                        }
                        return null;
                    })}
                </Popup>
            )}
        </MapContainer>
    );
}

export default LiveMap;
