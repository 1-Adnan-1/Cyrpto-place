import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Cryptocurrency",
      description:
        "Explore the latest trends and predictions for cryptocurrency in 2025. Learn how blockchain, DeFi, and NFTs are shaping the future of digital finance.",
      date: "February 25, 2025",
      category: "Cryptocurrency",
      author: "John Doe",
      readingTime: "5 min read",
      tags: ["Cryptocurrency", "Blockchain", "Investing"],
    },
    {
      title: "Blockchain Technology & Security",
      description:
        "Blockchain technology is revolutionizing security in the digital world. Discover how it enhances data integrity and prevents fraud in financial transactions.",
      date: "February 22, 2025",
      category: "Technology",
      author: "Jane Smith",
      readingTime: "6 min read",
      tags: ["Blockchain", "Security", "Tech"],
    },
    {
      title: "Investment Strategies for 2025",
      description:
        "2025 is approaching, and with it comes new opportunities for savvy investors. Learn about the best strategies to grow your wealth in the coming year.",
      date: "February 20, 2025",
      category: "Finance",
      author: "Emily White",
      readingTime: "7 min read",
      tags: ["Finance", "Investment", "Strategies"],
    },
  ];

  return (
    <section className="py-20 ">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-200">Latest Blog Posts</h2>
        <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
          Stay updated with our latest articles and insights on technology,
          finance, and more.
        </p>
      </div>

      <div className="space-y-12 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <div key={index} className="border-b border-gray-600 pb-8 mb-8">
            <div className="flex flex-col space-y-6">
              <div className="ml-0 sm:ml-8">
                <h3 className="text-3xl font-semibold text-[#ffcc00] hover:text-[#ff9900] transition duration-200">
                  {post.title}
                </h3>
                <p className="text-lg text-white mt-4">{post.description}</p>
                <div className="flex justify-between mt-6 text-[#ffcc00] text-sm">
                  <span>{post.date}</span>
                  <span>{post.readingTime}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[#ffcc00] text-[#1a1a40] text-xs py-1 px-3 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-6">
                  <span className="text-[#ffcc00]">By {post.author}</span>
                  <Link
                    to="/"
                    className="text-[#ffcc00] hover:underline transition duration-200"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
