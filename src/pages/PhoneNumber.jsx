import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo/logo.png';

function PhoneNumber() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock sending OTP logic
        navigate('/otp', { state: { phoneNumber } }); // Redirect to OTP page after submitting phone number
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Full-screen container */}
            <div className="flex flex-col items-center justify-center w-full h-screen px-4 bg-gray-100">
                <img src={logo} alt="Saarthi Logo" className="w-auto h-20" />
                {/* Saarthi Title */}
                <h1 className="text-3xl font-bold text-center text-gray-800">Saarthi</h1>

                {/* Welcome Text */}
                <p className="mt-4 text-lg text-center text-gray-600">
                    Welcome to Saarthi
                </p>
                <p className="text-sm text-center text-gray-500">
                    login using your mobile number to sign in
                </p>

                {/* Phone Number Input Form */}
                <form onSubmit={handleSubmit} className="w-full mt-8 space-y-6">
                    <label htmlFor="phoneNumber" className="block text-lg font-medium text-center text-gray-700">
                        your mobile number
                    </label>
                    <input
                        id="phoneNumber"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="91+ 8877665544"
                        className="w-full p-3 mt-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-3 text-lg font-semibold text-white bg-orange-300 rounded-lg hover:bg-orange-400"
                    >
                        Get OTP
                    </button>

                    {/* Privacy Policy and Terms */}
                    <p className="mt-4 text-sm text-center text-gray-500">
                        By pressing this you agree to our{' '}
                        <a href="/" className="text-gray-700 underline">
                            Privacy policy
                        </a>{' '}
                        and{' '}
                        <a href="/" className="text-gray-700 underline">
                            Terms and Conditions
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default PhoneNumber;
