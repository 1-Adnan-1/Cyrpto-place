import { Link } from "react-router-dom";

const FeatureCard = ({ title, description, imgSrc }) => {
  return (
    <div className="bg-[#121336] p-6 rounded-lg shadow-2xl hover:shadow-[#ffcc00] transition-all duration-100 ease-in-out transform">
      <div className="flex items-center space-x-4 mb-6">
        <img src={imgSrc} alt={title} className="w-12 h-12" />
        <h2 className="text-2xl font-semibold text-[#ffcc00]">{title}</h2>
      </div>
      <p className="text-white mb-4">{description}</p>
      <Link className="text-[#ffcc00] hover:text-[#ffde4d]">Learn More</Link>
    </div>
  );
};

export default FeatureCard;
