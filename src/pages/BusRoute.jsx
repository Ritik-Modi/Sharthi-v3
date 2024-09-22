import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft, FaEllipsisV, FaBus } from 'react-icons/fa';

const BusRoute = () => {
    const { busNumber } = useParams(); // Get bus number from URL

    // Mock bus stop data (replace this with your API call)
    const [currentStop, setCurrentStop] = useState('Cannaught Circle'); // Example of the current stop the bus has departed from
    const busDetails = {
        'AC B51': {
            time: '9:00 am',
            route: 'Kashmiri Gate to Huda City Center',
            stops: [
                { name: 'Kashmiri gate', arrival: '01:20 AM', departure: '01:22 AM' },
                { name: 'Kamla nagar', arrival: '01:33 AM', departure: '01:37 AM' },
                { name: 'Cannaught circle', arrival: '02:20 AM', departure: '02:22 AM' },
                { name: 'Railway colony', arrival: '02:33 AM', departure: '02:37 AM' },
                { name: 'Shankar vihar', arrival: '03:05 AM', departure: '03:10 AM' },
                { name: 'Saket', arrival: '03:25 AM', departure: '03:35 AM' },
                { name: 'Dhaula Kuan', arrival: '03:35 AM', departure: '03:35 AM' },
                { name: 'IFFCO chowk', arrival: '03:50 AM', departure: '03:58 AM' },
                { name: 'Huda City Center', arrival: '03:58 AM', departure: '03:58 AM' },
                { name: 'SIH', arrival: '04:10 AM', departure: '04:10 AM' }
            ]
        }
    };

    const busInfo = busDetails[busNumber] || {};

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 text-white rounded-b-lg shadow-md bg-gradient-to-r from-orange-400 to-orange-600">
                <FaArrowLeft className="text-lg text-white cursor-pointer" />
                <h1 className="text-lg font-bold">{busNumber} ({busInfo.time})</h1>
                <FaEllipsisV className="text-lg text-white cursor-pointer" />
            </div>

            {/* Date Toggle Button */}
            <div className="flex justify-center py-4">
                <button className="px-6 py-2 font-medium bg-gray-200 rounded-full text-md">Today</button>
            </div>

            {/* Scrollable Stops */}
            <div className="max-h-screen p-4 overflow-y-auto bg-white rounded-t-lg shadow-lg">
                <div className="grid grid-cols-2 mb-4 text-lg font-semibold text-gray-600">
                    <span>Arrival</span>
                    <span className="text-right">Departure</span>
                </div>

                {/* Route Timeline */}
                {busInfo.stops && busInfo.stops.map((stop, index) => (
                    <div key={index} className="relative flex items-center mb-6">
                        {/* Timeline Line */}
                        <div className="absolute top-0 bottom-0 w-1 bg-gray-300 left-4"></div>

                        {/* Timeline Dot */}
                        <div className="relative z-10">
                            <div className={`w-6 h-6 rounded-full ${currentStop === stop.name ? 'bg-orange-500' : 'bg-gray-300'} flex items-center justify-center`}>
                                {currentStop === stop.name && <FaBus className="text-white" />}
                            </div>
                        </div>

                        {/* Stop Information */}
                        <div className="flex-1 ml-8">
                            <div className="flex items-center justify-between">
                                <div className="font-bold text-gray-700 text-md">{stop.name}</div>
                                <div className="text-sm text-gray-500">
                                    {stop.arrival} - <span className="font-semibold text-orange-500">{stop.departure}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Departed Stop Status */}
                {currentStop && (
                    <div className="p-4 mt-4 font-bold text-center text-orange-500 bg-orange-100 rounded-md">
                        Departed from {currentStop}<br />
                        Updated 1 minute ago
                    </div>
                )}
            </div>
        </div>
    );
};

export default BusRoute;
