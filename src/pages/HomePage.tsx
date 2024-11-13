
import { Eye } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img 
                src="/api/placeholder/120/40" 
                alt="TD Bank Logo" 
                className="h-10"
              />
              <div className="ml-10 space-x-8">
                <button className="text-green-600 font-medium">My TD</button>
                <button className="text-gray-600">Products</button>
                <button className="text-gray-600">Solutions</button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              <button className="text-gray-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <select className="text-gray-600 bg-transparent border-none">
                <option>EN</option>
                <option>FR</option>
              </select>
              <button className="flex items-center text-gray-600">
                <span>Log In</span>
                <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 gap-8">
            {/* Login Form */}
            <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Welcome to Online Banking</h2>

        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="User name"
              className="w-full px-5 py-5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-5 py-5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Eye className="absolute right-3 top-2.5 h-5 w-5 text-green-500" />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-gray-700">
              Remember me
            </label>
          </div>

          <button className="w-full bg-gray-100 text-gray-900 py-2 px-4 rounded hover:bg-green-500 transition-colors">
            Log in
          </button>

          <div className="text-green-500 hover:underline cursor-pointer">
            Forgot user name and/or password?
          </div>
        </form>
      </div>
    </div>
  {/* Right Side Content */}
            <div className="flex flex-col space-y-6">
              <button className="text-left text-green-600 hover:underline">
                Sign up for Online Banking →
              </button>
              <button className="text-left text-green-600 hover:underline">
                View the Online Banking demo →
              </button>
              <button className="text-left text-green-600 hover:underline">
                Learn more about TD mobile banking →
              </button>
              
              <div className="mt-6">
                <div className="flex items-start space-x-2">
                  <svg className="h-6 w-6 text-green-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <div>
                    <p className="text-green-600 font-medium">Find out more about TD Bank's online security</p>
                    <p className="text-gray-600">and our commitment to provide you with a safe and secure online and mobile banking experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gray-800 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <p>All the info, none of the clutter. Switch to online-only notices and statements.</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
