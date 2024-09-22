import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../logo/logo.png'; // Assuming you have a logo like in the PhoneNumber page

function Otp() {
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const location = useLocation();
    const phoneNumber = location.state?.phoneNumber || "";

    const handleOtpChange = (index, value) => {
        if (!isNaN(value)) {
            let newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Automatically focus the next input field if the value is entered
            if (value !== "" && index < 3) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyPress = (index, e) => {
        // Backspace handling to focus previous input
        if (e.key === "Backspace" && otp[index] === "" && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock OTP verification logic
        navigate('/SearchBus'); // Redirect to dashboard after successful OTP verification
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Full-screen container */}
            <div className="flex flex-col items-center justify-center w-full h-screen px-4 bg-gray-100">
                <img src={logo} alt="Saarthi Logo" className="w-auto h-20" />
                <h1 className="text-3xl font-bold text-center text-gray-800">Welcome</h1>

                <p className="mt-4 text-lg text-center text-gray-600">
                    Enter the verification code sent to {phoneNumber}
                </p>

                {/* OTP Input Form */}
                <form onSubmit={handleSubmit} className="w-full mt-8 space-y-6">
                    <div className="flex justify-center space-x-4">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                ref={(el) => inputRefs.current[index] = el}
                                type="text"
                                maxLength="1"
                                value={data}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyPress(index, e)}
                                className="w-12 h-12 p-2 text-xl text-center border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 text-lg font-semibold text-white bg-orange-300 rounded-lg hover:bg-orange-400"
                    >
                        Login / Get Started
                    </button>
                </form>

                <p className="mt-4 text-sm text-center text-gray-500">
                    Resend in 30 secs
                </p>
            </div>
        </div>
    );
}

export default Otp;
