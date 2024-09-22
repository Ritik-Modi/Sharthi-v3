import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBus() {
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [travelDate, setTravelDate] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        console.log({ fromLocation, toLocation, travelDate }); // Debugging output
        // Corrected the path to '/SearchBusResult'
        navigate('/SearchBusResult', { state: { fromLocation, toLocation, travelDate } });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800">Hello Mayank</h1>
                <p className="mt-2 text-center text-gray-600">Search for your bus!</p>

                <form onSubmit={handleSearch} className="mt-6 space-y-4">
                    {/* From Location Input */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">From</label>
                        <input
                            type="text"
                            value={fromLocation}
                            onChange={(e) => setFromLocation(e.target.value)}
                            placeholder="Enter starting location"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* To Location Input */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">To</label>
                        <input
                            type="text"
                            value={toLocation}
                            onChange={(e) => setToLocation(e.target.value)}
                            placeholder="Enter destination"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Travel Date Input */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Date</label>
                        <input
                            type="date"
                            value={travelDate}
                            onChange={(e) => setTravelDate(e.target.value)}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Search Buses Button */}
                    <button
                        type="submit"
                        className="w-full py-3 text-lg font-semibold text-white bg-orange-300 rounded-lg hover:bg-orange-400"
                    >
                        Search Buses
                    </button>
                </form>

                {/* Previous Rides Section */}
                <div className="mt-8">
                    <h2 className="text-lg font-medium text-gray-700">Previous Rides</h2>
                    <div className="mt-4 p-4 border rounded-lg shadow-sm">
                        <h3 className="text-md font-bold text-red-500">AC B53</h3>
                        <p className="text-sm text-gray-600">Kashmiri Gate to Huda City Center via Model Town, Malka Ganj, and Yamuna Bazar.</p>
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center">
                                <span className="text-yellow-500">★★★★☆</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBus;
