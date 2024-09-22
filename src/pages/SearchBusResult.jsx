import React, { useEffect, useState } from 'react';
import BusCard from '../comp/BusCard.jsx';
import { useNavigate } from 'react-router-dom';

const SearchBusResult = () => {
    const [buses, setBuses] = useState([]);
    const [selectedDate, setSelectedDate] = useState('Sep 22');
    const navigate = useNavigate();

    const busDataByDate = {
        'Sep 20': [
            { id: 1, busNumber: 'AC B21', time: '8:00 am', route: 'Kashmiri Gate to Rajiv Chowk', isAvailable: true, rating: 4.1 },
            { id: 2, busNumber: 'AC B22', time: '9:30 am', route: 'Kashmiri Gate to Saket', isAvailable: true, rating: 4.3 }
        ],
        'Sep 21': [
            { id: 1, busNumber: 'AC B31', time: '9:00 am', route: 'Kashmiri Gate to Hauz Khas', isAvailable: true, rating: 4.5 }
        ],
        'Sep 22': [
            { id: 1, busNumber: 'AC B51', time: '9:00 am', route: 'Kashmiri Gate to Huda City Center', isAvailable: true, rating: 4.5 },
            { id: 2, busNumber: 'AC B52', time: '10:00 am', route: 'Kashmiri Gate to Iffco Chowk', isAvailable: true, rating: 4.2 },
            { id: 3, busNumber: 'AC B53', time: '10:30 am', route: 'Kashmiri Gate to Indra Gandhi Airport', isAvailable: true, rating: 4.0 },
            { id: 4, busNumber: 'AC B55', time: 'Unavailable', route: 'Kashmiri Gate to Huda City Center', isAvailable: false, rating: 3.8 }
        ],
        'Sep 23': [
            { id: 1, busNumber: 'AC B61', time: '7:00 am', route: 'Kashmiri Gate to Indra Gandhi Airport', isAvailable: true, rating: 4.4 }
        ]
    };

    // Fetch buses based on selected date
    useEffect(() => {
        setBuses(busDataByDate[selectedDate] || []);
    }, [selectedDate]);

    const handleRideClick = (busNumber) => {
        navigate(`/bus/${busNumber}`); // Navigate to specific bus route page
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="px-6 py-4 text-white bg-orange-300">
                <h2 className="text-2xl font-bold">Kashmiri Gate → Huda City Center</h2>
            </div>

            {/* Date Selection Scrollable */}
            <div className="flex justify-around py-4 overflow-x-auto bg-gray-200">
                {Object.keys(busDataByDate).map(date => (
                    <button
                        key={date}
                        onClick={() => handleDateClick(date)}
                        className={`px-4 py-2 ${selectedDate === date ? 'text-white bg-orange-300' : ''}`}
                    >
                        {date}
                    </button>
                ))}
            </div>

            {/* Display bus cards */}
            <div className="p-4 space-y-4">
                {buses.map(bus => (
                    <BusCard
                        key={bus.id}
                        busNumber={bus.busNumber}
                        time={bus.time}
                        route={bus.route}
                        isAvailable={bus.isAvailable}
                        rating={bus.rating}
                        onRide={() => handleRideClick(bus.busNumber)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SearchBusResult;
