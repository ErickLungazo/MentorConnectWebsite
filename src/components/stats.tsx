import React from 'react';

const Stats = () => {
    return (
        <div>
            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Impact in
                            Numbers</h2>
                        <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                            MentorConnect is transforming mentorship by connecting mentees with experienced
                            professionals, enhancing careers, and fostering growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                        <div>
                            <h3 className="font-bold text-7xl">
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 10,000+ </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">Active Users</p>
                            <p className="text-base mt-0.5 text-gray-500">Mentees and mentors engaging worldwide</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-7xl">
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 5,000+ </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">Successful Mentorships</p>
                            <p className="text-base mt-0.5 text-gray-500">Career-changing mentor-mentee connections</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-7xl">
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 2,500+ </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">Job & Internship Placements</p>
                            <p className="text-base mt-0.5 text-gray-500">Helping mentees kickstart their careers</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Stats;