import React from 'react';
import joan from "@/assets/joan.jpg";
import wiki from "@/assets/wiki.jpg";
import eric from "@/assets/eric.jpg";

const teamMembers = [
    {
        name: "Joan Akinyi",
        role: "Project Manager",
        image: joan,
    },
    {
        name: "Wycliffe Aburiri",
        role: "Front-end Developer",
        image: wiki,
    },
    {
        name: "Eric Lung'atso",
        role: "Back-end Developer",
        image: eric,
    },
];

const Team: React.FC = () => {
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Meet the Brains
                    </h2>
                    <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-10 lg:mt-16">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <img className="object-cover mx-auto rounded-lg w-28 h-28" src={member.image} alt={member.name} />
                            <p className="mt-4 text-lg font-semibold text-black">{member.name}</p>
                            <p className="mt-1 text-base text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
