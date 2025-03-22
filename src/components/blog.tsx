import React from 'react';

const blogPosts = [
    {
        title: "The Power of Mentorship: How Guidance Shapes Careers",
        category: "Mentorship",
        categoryColor: "text-green-500 bg-green-100",
        image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg",
        description: "Discover how mentorship accelerates career growth, builds confidence, and opens doors to new opportunities.",
        author: "Eric Lung'atso",
        date: "March 22, 2025",
        link: "#",
    },
    {
        title: "AI in Career Coaching: How Technology is Shaping the Future",
        category: "Technology",
        categoryColor: "text-blue-500 bg-blue-100",
        image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-2.jpg",
        description: "Explore how AI-powered mentorship is revolutionizing career guidance, providing personalized recommendations for mentees.",
        author: "MentorConnect Team",
        date: "March 18, 2025",
        link: "#",
    },
    {
        title: "Networking for Success: How to Connect with the Right People",
        category: "Career Development",
        categoryColor: "text-purple-500 bg-purple-100",
        image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-3.jpg",
        description: "Learn strategies to expand your professional network and unlock career opportunities through mentorship and networking.",
        author: "Jane Doe",
        date: "March 15, 2025",
        link: "#",
    },
    {
        title: "Internship Tips: How to Stand Out and Secure Opportunities",
        category: "Internships",
        categoryColor: "text-orange-500 bg-orange-100",
        image: "https://plus.unsplash.com/premium_photo-1661611218805-2886d4e39667?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "From resume-building to interview preparation, here’s how to make the most of internship opportunities.",
        author: "John Smith",
        date: "March 10, 2025",
        link: "#",
    },
    {
        title: "Soft Skills That Employers Look for in Fresh Graduates",
        category: "Career Growth",
        categoryColor: "text-red-500 bg-red-100",
        image: "https://plus.unsplash.com/premium_photo-1714265045061-f86cec392544?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Technical skills are important, but here are the soft skills that set job seekers apart in the competitive job market.",
        author: "MentorConnect Team",
        date: "March 5, 2025",
        link: "#",
    },
];


const Blog: React.FC = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Latest from the Blog
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
                    </p>
                </div>

                <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
                    {blogPosts.map((post, index) => (
                        <div key={index}>
                            <a href={post.link} title={post.title} className="block aspect-w-4 aspect-h-3">
                                <img className="object-cover w-full h-full" src={post.image} alt={post.title} />
                            </a>
                            <span className={`inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full ${post.categoryColor} mt-9`}>
                {post.category}
              </span>
                            <p className="mt-6 text-xl font-semibold">
                                <a href={post.link} title={post.title} className="text-black">
                                    {post.title}
                                </a>
                            </p>
                            <p className="mt-4 text-gray-600">{post.description}</p>
                            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                {post.author} . {post.date}
              </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
