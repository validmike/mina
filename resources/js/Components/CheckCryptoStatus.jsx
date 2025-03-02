import { useEffect } from "react";
import axios from "axios";

const CheckCryptoStatus = ({ crypto_id, setStatus }) => {
    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const response = await axios.post("/api/v1/crypto/status", {
                    crypto_id: crypto_id
                });

                setStatus(response.data.status);

                if (response.data.is_paid) {
                    window.location.reload(); // Refresh the page when payment is completed
                }
            } catch (error) {
                console.error("Error fetching payment status:", error);
            }
        };

        // Fetch status every 5 seconds
        const interval = setInterval(fetchStatus, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [crypto_id, setStatus]);

    return null; // No UI needed, just updates the status
};

export default CheckCryptoStatus;
