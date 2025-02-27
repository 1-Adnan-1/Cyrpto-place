import { useEffect, useState } from "react";
import axios from "axios";
import { GiCheckMark } from "react-icons/gi";

const Pricing = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/plans")
      .then((response) => {
        setPlans(response.data);
      })
      .catch((error) => {
        console.error("Error fetching plans:", error);
      });
  }, []);

  return (
    <section className="h-screen pricing-section py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-200">Our Pricing Plans</h2>
        <p className="text-xl text-gray-300 mt-3">
          Choose the best plan that fits your needs
        </p>
      </div>

      <div className="pricing-cards flex flex-wrap justify-center gap-6">
        {plans.length > 0 ? (
          plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card bg-[#121336] p-8 rounded-lg shadow-2xl hover:shadow-[#ffcc00] transition-all duration-300 ease-in-out transform hover:scale-105 max-w-[320px] w-full text-center`}
            >
              <h3 className="text-3xl font-semibold text-[#ffcc00]">
                {plan.name}
              </h3>
              <p className="text-lg text-white mt-2">{plan.description}</p>
              <div className="pricing text-4xl font-bold text-[#ffcc00] mt-6">
                <span className="currency-symbol">{plan.currency}</span>{" "}
                {plan.price}
                <span className="text-sm">/month</span>
              </div>
              <ul className="text-left mt-6 text-white">
                {plan.features.map((feature, index) => (
                  <li key={index} className="py-2 flex gap-3 items-center">
                    <GiCheckMark className="text-[#ffcc00] text-xl" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="cta-btn mt-6 px-6 py-2 bg-[#ffcc00] text-[#1a1a40] rounded-lg font-semibold hover:bg-[#e6b800] transition-all duration-300 ease-in-out">
                Get Started
              </button>
            </div>
          ))
        ) : (
          <p className="text-white text-lg">Loading plans...</p>
        )}
      </div>
    </section>
  );
};

export default Pricing;
