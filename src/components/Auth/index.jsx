import { MdArrowOutward } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { signInWithGoogle, logout } from "../../firebase";
import { useState, useRef, useEffect } from "react";

const AuthButtons = ({ user }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  const togglePopup = () => setIsPopupVisible((prev) => !prev);

  useEffect(() => {
    if (isPopupVisible && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      if (popupRef.current) {
        popupRef.current.style.left = buttonRect.left - 20 + "px";
        popupRef.current.style.top = buttonRect.top - 330 + "px";
      }
    }
  }, [isPopupVisible]);

  if (!user) {
    return (
      <button
        onClick={signInWithGoogle}
        className="flex items-center gap-2 px-3 py-1.5 rounded-[20px] bg-white text-[15px] text-black cursor-pointer hover:bg-[#ffde4d] transition"
      >
        <span className="whitespace-pre">Sign up</span>
        <MdArrowOutward className="size-6" />
      </button>
    );
  }

  return (
    <>
      <div
        ref={buttonRef}
        className="fixed bottom-5 right-5 flex items-center gap-3 bg-opacity-70 bg-[#0000008d] p-3 rounded-[20px] text-white shadow-lg z-40 cursor-pointer"
        onClick={togglePopup}
      >
        <img
          src={user.photoURL}
          alt={user.displayName}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-white">
          {user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)}
        </span>
      </div>

      {/* Popup bölümü */}
      <div
        ref={popupRef}
        className={`popup fixed w-60 bg-[#0000008d] p-5 rounded-lg shadow-lg z-50 transition-transform transform ${
          isPopupVisible ? "popup-visible" : ""
        }`}
        style={{
          // display: "none",
          transform: "translateY(10px)",
          animation: "slideUp 0.3s ease-out forwards",
        }}
      >
        <div className="flex flex-col items-center">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold">
            {user.displayName.charAt(0).toUpperCase() +
              user.displayName.slice(1)}
          </h3>
          <p className="text-gray-400 mt-2"> {user.email}</p>
          <p className="text-gray-400 mt-2">
            Member Since:{" "}
            {new Date(user.metadata.creationTime).toLocaleDateString()}
          </p>
          <p className="text-[#FFCC00] font-semibold">Premium Plan</p>
          <button
            onClick={logout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-[20px] hover:bg-red-600 transition"
          >
            <RiLogoutBoxRLine />
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthButtons;
