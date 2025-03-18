export default function Stat({ totalUsers, usersLastHour, lastRegisteredText }) {
    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">User Stats</h2>
            <p><strong>Total Users:</strong> {totalUsers}</p>
            <p><strong>Registered in Last Hour:</strong> {usersLastHour}</p>
            <p><strong>Last User Registered:</strong> {lastRegisteredText}</p>
        </div>
    );
}
