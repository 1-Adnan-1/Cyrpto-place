import FeatureCard from "../../components/FeatureCard";

const Features = () => {
  return (
    <div className="min-h-screen  px-90 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-300 mb-4">
          Discover the Power of Our Features
        </h1>
        <p className="text-lg text-gray-400">
          From real time tracking to intuitive design, explore the features that
          make our platform exceptional.
        </p>
      </div>

      <div className="space-y-10">
        {/* Özellik 1 */}
        <FeatureCard
          title="Real-time Data Tracking"
          description="Monitor your financial assets with up-to-the-minute updates. Our platform provides real-time tracking to help you stay ahead of market trends and make informed decisions."
          imgSrc="./public/fav.png"
        />

        {/* Özellik 2 */}
        <FeatureCard
          title="Smart Portfolio Management"
          description="Take control of your investments with our smart portfolio management tool. Easily track your asset distribution and optimize your strategy with automated recommendations."
          imgSrc="./public/fav.png"
        />

        {/* Özellik 3 */}
        <FeatureCard
          title="Secure Transactions"
          description="Your financial data is safe with us. We employ state-of-the-art encryption technologies to ensure that every transaction you make is secure and private."
          imgSrc="./public/fav.png"
        />

        {/* Özellik 4 */}
        <FeatureCard
          title="Custom Alerts"
          description="Never miss an important update. Set up custom alerts for price movements, news, and other triggers that matter to you, so you're always in the loop."
          imgSrc="./public/fav.png"
        />

        {/* Özellik 5 */}
        <FeatureCard
          title="AI Insights"
          description="Harness the power of artificial intelligence to gain insights into market trends. Our AI-powered analytics provide predictions and actionable insights to improve your strategy."
          imgSrc="./public/fav.png"
        />

        {/* Özellik 6 */}
        <FeatureCard
          title="Mobile App"
          description="Take your financial management with you wherever you go. Our mobile app provides full access to all of your accounts and features, making managing your assets effortless."
          imgSrc="./public/fav.png"
        />
      </div>
    </div>
  );
};

export default Features;
