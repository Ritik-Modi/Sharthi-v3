import React from 'react';

const BusCard = ({ busNumber, time, route, isAvailable, rating, onRide }) => {
    return (
        <div className={`flex justify-between items-center p-4 border ${isAvailable ? 'border-orange-300' : 'border-gray-300 bg-gray-200'}`}>
            <div>
                <h3 className="text-xl font-bold text-orange-500">
                    {busNumber} ({time})
                </h3>
                <p className="text-sm text-gray-500">{route}</p>
            </div>
            <div className="flex items-center">
                <div className="flex items-center">
                    <img src="https://via.placeholder.com/40" alt="Profile" className="w-8 h-8 mr-2 rounded-full" />
                    <span className="font-bold text-yellow-500">{rating} ★</span>
                </div>
                <button
                    className={`ml-4 px-4 py-2 text-white font-bold ${isAvailable ? 'bg-orange-400 hover:bg-orange-500' : 'bg-gray-300'}`}
                    disabled={!isAvailable}
                    onClick={onRide}
                >
                    {isAvailable ? 'Ride' : 'Unavailable'}
                </button>
            </div>
        </div>
    );
};

export default BusCard;
