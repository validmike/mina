import { useState, useEffect } from "react";
import axios from "axios";

export default function RandomNumber() {
    const [number, setNumber] = useState(null);

    useEffect(() => {
        const fetchRandomNumber = () => {
            axios.post("/api/random-number")
                .then(response => {
                    setNumber(response.data.data.random_number);
                })
                .catch(error => {
                    console.error("Error fetching random number:", error);
                });
        };

        fetchRandomNumber(); // Fetch immediately
        const interval = setInterval(fetchRandomNumber, 5000); // Fetch every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="p-4 text-center">
            <h1 className="text-2xl font-bold">Random Number</h1>
            <p className="text-lg mt-2">{number !== null ? number : "Loading..."}</p>
        </div>
    );
}
