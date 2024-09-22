import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo/logo.png'; // Assuming logo is available in the logo folder

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlePassengerLogin = (e) => {
        e.preventDefault();
        // Mock login logic for passenger
        navigate('/phoneNumber'); // Redirect to Phone Number page after clicking "Sign In as Passenger"
    };

    const handleStaffLogin = () => {
        // Redirect to staff login page
        navigate('/StaffPage'); // Redirect to Staff login page
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-300 via-orange-200 to-white">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                {/* Logo */}
                <div className="flex justify-center">
                    <img src={logo} alt="Saarthi Logo" className="w-auto h-16" />
                </div>

                {/* Sign In Title */}
                <h2 className="text-3xl font-semibold text-center text-gray-800">Sign in to Saarthi</h2>

                {/* Input Fields */}
                <form onSubmit={handlePassengerLogin} className="space-y-6">
                    <div className="space-y-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="text-sm">Remember me</span>
                        </label>
                        <a href="/" className="text-sm text-orange-500">Forgot Password?</a>
                    </div>

                    {/* Sign in as Passenger Button */}
                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                        Sign in as Passenger
                    </button>
                </form>

                {/* Login as Staff Button */}
                <button
                    onClick={handleStaffLogin}
                    className="w-full py-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Login as Staff
                </button>

                {/* Divider for alternative login methods */}
                <div className="flex items-center justify-center my-4">
                    <span className="w-1/4 border-t"></span>
                    <span className="px-2 text-sm text-gray-500">Or login with</span>
                    <span className="w-1/4 border-t"></span>
                </div>

                {/* Social Login Buttons */}
                <div className="flex space-x-4">
                    <button className="flex items-center justify-center w-full py-2 space-x-2 border rounded-lg">
                        {/* <img src="/google-icon.svg" alt="Google" className="w-6 h-6" /> */}
                        <span>Google</span>
                    </button>
                    <button className="flex items-center justify-center w-full py-2 space-x-2 border rounded-lg">
                        {/* <img src="/apple-icon.svg" alt="Apple" className="w-6 h-6" /> */}
                        <span>Apple</span>
                    </button>
                </div>

                {/* Sign Up Link */}
                <div className="mt-4 text-center">
                    <p className="text-sm">
                        Don’t have an account?
                        <a href="/signup" className="text-orange-500"> Sign up now</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
