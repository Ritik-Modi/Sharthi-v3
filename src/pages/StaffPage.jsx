import React, { useState } from 'react';

function StaffPage() {
    const [staffName] = useState('Jignesh'); // Replace with dynamic staff name if needed
    const [activeTab, setActiveTab] = useState('busDetails'); // To toggle between Bus Details and Staff Details

    // Bus details data
    const busDetails = [
        { station: 'Kashmir gate', time: '01:20 PM ETA' },
        { station: 'Kamla nagar', time: '01:30 PM ETA' },
        { station: 'Cannaught circle', time: '01:45 PM ETA' },
        { station: 'Railway colony', time: '02:00 PM ETA' },
        { station: 'Shankar vihar', time: '02:10 PM ETA' },
        { station: 'Saket', time: '02:25 PM ETA' },
        { station: 'Dhaula Kuan', time: '02:40 PM ETA' },
        { station: 'IFFCO chowk', time: '02:55 PM ETA' },
        { station: 'Huda City Center', time: '03:10 PM ETA' }
    ];

    // Staff details data
    const staffDetails = {
        currentShift: [
            { name: 'Jignesh Rathore', role: 'DRIVER' },
            { name: 'Maulik Gaur', role: 'CONDUCTOR' }
        ],
        nextShift: [
            { name: 'Jaypal Singh', role: 'DRIVER' },
            { name: 'Ritik Modi', role: 'CONDUCTOR' }
        ],
        thirdShift: [
            { name: 'Ravi Kumar', role: 'DRIVER' },
            { name: 'Md. Ismil', role: 'CONDUCTOR' }
        ]
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-orange-300 via-orange-200 to-white">
            {/* Welcome message */}
            <h1 className="mb-6 text-3xl font-bold text-gray-800">Welcome {staffName}</h1>

            {/* Dropdown menu for selecting details */}
            <div className="flex mb-4 space-x-4">
                <button
                    className={`px-4 py-2 rounded-lg ${activeTab === 'busDetails' ? 'bg-orange-400 text-white' : 'bg-gray-200'}`}
                    onClick={() => setActiveTab('busDetails')}
                >
                    Bus Details
                </button>
                <button
                    className={`px-4 py-2 rounded-lg ${activeTab === 'staffDetails' ? 'bg-orange-400 text-white' : 'bg-gray-200'}`}
                    onClick={() => setActiveTab('staffDetails')}
                >
                    Staff Details
                </button>
            </div>

            {/* Bus Details Section */}
            {activeTab === 'busDetails' && (
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <h2 className="mb-4 text-xl font-semibold">Journey starting in 00:00</h2>
                    <ul className="space-y-2">
                        {busDetails.map((bus, index) => (
                            <li key={index} className="flex items-center justify-between">
                                <span>{bus.station}</span>
                                <span>{bus.time}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Staff Details Section */}
            {activeTab === 'staffDetails' && (
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <div className="mb-4">
                        <h2 className="mb-2 text-xl font-semibold">Current Shift</h2>
                        {staffDetails.currentShift.map((staff, index) => (
                            <div key={index} className="p-2 mb-2 bg-orange-300 rounded-lg">
                                <span className="font-bold">{staff.name}</span> ({staff.role})
                            </div>
                        ))}
                    </div>

                    <div className="mb-4">
                        <h2 className="mb-2 text-xl font-semibold">Next Shift</h2>
                        {staffDetails.nextShift.map((staff, index) => (
                            <div key={index} className="p-2 mb-2 bg-orange-300 rounded-lg">
                                <span className="font-bold">{staff.name}</span> ({staff.role})
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2 className="mb-2 text-xl font-semibold">3rd Shift</h2>
                        {staffDetails.thirdShift.map((staff, index) => (
                            <div key={index} className="p-2 mb-2 bg-orange-300 rounded-lg">
                                <span className="font-bold">{staff.name}</span> ({staff.role})
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default StaffPage;
