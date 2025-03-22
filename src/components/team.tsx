import React from 'react';

const teamMembers = [
    {
        name: "Jenny Wilson",
        role: "Founder",
        image: "https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-1.jpg",
    },
    {
        name: "Darrell Steward",
        role: "CTO",
        image: "https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-2.jpg",
    },
    {
        name: "Bessie Cooper",
        role: "CMO",
        image: "https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-3.jpg",
    },
    {
        name: "Arlene McCoy",
        role: "Senior Developer",
        image: "https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-4.jpg",
    },
    {
        name: "Brooklyn Simmons",
        role: "Product Designer",
        image: "https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-5.jpg",
    },
    {
        name: "Jerome Bell",
        role: "Customer Success",
        image: "https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-6.jpg",
    },
    {
        name: "Dianne Russell",
        role: "Front-end Developer",
        image: "https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-7.jpg",
    },
    {
        name: "Kristin Watson",
        role: "H.R",
        image: "https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-8.jpg",
    },
    {
        name: "Eleanor Pena",
        role: "UI Designer",
        image: "https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-9.jpg",
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

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 lg:mt-16">
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
