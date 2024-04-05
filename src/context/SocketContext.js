import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext(undefined);

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const socket = io("http://localhost:8080");

        setSocket(socket);

        socket.on("getWeatherData", (data) => {
            setWeatherData(data);
        });
    }, []);

    return (
        <SocketContext.Provider value={{ socket, weatherData }}>
            {children}
        </SocketContext.Provider>
    );
};
