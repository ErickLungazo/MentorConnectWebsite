import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="bg-white lg:py-8">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* lg+ */}
                    <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
                        <div className="flex-shrink-0">
                            <a href="#" title="MentorConnect" className="flex">
                                <img className="w-auto h-8 lg:h-10" src="/mentorconnect-logo.svg" alt="MentorConnect Logo" />
                            </a>
                        </div>

                        <button type="button" className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>

                        <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
                            <a href="#" title="How It Works" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                How It Works
                            </a>
                            <a href="#" title="Find a Mentor" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                Find a Mentor
                            </a>
                            <a href="#" title="Become a Mentor" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                Become a Mentor
                            </a>
                            <a href="#" title="Resources" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                Resources
                            </a>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:space-x-10">
                            <a href="#" title="Sign Up" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                Sign Up
                            </a>
                            <a href="#" title="Sign In" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                Sign In
                            </a>
                        </div>
                    </nav>

                    {/* xs to lg */}
                    <nav className="flex flex-col py-4 space-y-2 lg:hidden">
                        <a href="#" title="How It Works" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600">
                            How It Works
                        </a>
                        <a href="#" title="Find a Mentor" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600">
                            Find a Mentor
                        </a>
                        <a href="#" title="Become a Mentor" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600">
                            Become a Mentor
                        </a>
                        <a href="#" title="Resources" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600">
                            Resources
                        </a>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;
