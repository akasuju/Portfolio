import React from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="text-gray-400 hover:text-white">Home</a>
        <a href="#" className="text-gray-400 hover:text-white">About me</a>
        <a href="#" className="text-gray-400 hover:text-white">Contact</a>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full text-white">
          <img src={facebook} alt="" />
        </a>
        <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full text-white">
        <img src={instagram} alt="" />
        </a>
        <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full text-white">
        <img src={twitter} alt="" />
        </a>
        <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full text-white">
        <img src={youtube} alt="" />
        </a>
      </div>
      <p className="text-gray-500 text-sm">Terms of Service - Privacy Policy</p>
    </footer>
  );
};

export default Footer;
