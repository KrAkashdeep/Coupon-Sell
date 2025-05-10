import React, { useState } from 'react';
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="mt-20 mb-20 w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Illustration Section */}
        <div className="md:w-1/2 bg-gradient-to-r from-gray-900 to-purple-900  p-12 text-white hidden md:block">
          <div className="max-w-xs mx-auto">
            <h2 className="text-3xl font-bold mb-6">Welcome Back!</h2>
            <p className="text-lg mb-8">Unlock exclusive deals and manage your coupons with ease</p>
            <img 
              src="/public/login.png" 
              alt="Login Illustration"
              className="w-full h-72 mt-20 object-contain"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="mx-auto bg-gradient-to-r from-gray-900 to-purple-900  w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
              <UserIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Login In</h1>
            <p className="text-gray-600">Access your coupon marketplace account</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <EnvelopeIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <LockClosedIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="cursor-pointer h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a className="cursor-pointer text-sm text-purple-600 hover:text-purple-700">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-gradient-to-r from-gray-900 to-purple-900 text-white py-3 rounded-lg hover:from-purple-700 transition-colors"
            >
              Sign In
            </button>

            <div className="relative mt-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <button
                type="button"
                className="flex items-center justify-center py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <img src="/public/google.png" alt="Google" className=" h-5 w-5" />
                <span className="cursor-pointer ml-2 text-sm">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <img src="/public/facebook.webp" alt="Facebook" className=" h-5 w-5" />
                <span className="cursor-pointer ml-2 text-sm">Facebook</span>
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-8">
              Don't have an account?{' '}
              <a onClick={() => navigate('/signup')} className="cursor-pointer text-purple-600 hover:text-purple-700 font-semibold">
                Sign up here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Login;
