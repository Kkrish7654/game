import React from "react";
import { FaCrown, FaGamepad, FaUserFriends } from "react-icons/fa";
import GameImage from "../assets/image/spinner.jpeg";
import Navbar from "./Navbar";

const UserProfile: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white min-h-screen p-4">
        {/* Profile Header */}
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="User Avatar"
            className="rounded-full w-24 h-24 mb-4"
          />
          <h1 className="text-2xl font-bold">Gamer123</h1>
          <p className="text-gray-400">@gamer123</p>
          <div className="mt-4">
            <button className="btn btn-primary  btn-sm">Edit Profile</button>
          </div>
        </div>

        {/* Wallet Section */}
        <div className="flex justify-between items-center mt-6 bg-primary p-4 rounded-lg shadow-lg">
          <div className="indicator flex gap-3 items-center text-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
            </svg>
            <div className="text-sm">
              <p className="font-medium">Your Balance</p>
              <p className="text-lg font-bold">$12,000</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn text-white border-white btn-outline btn-sm  px-4">
              Add Money
            </button>
            <button className="btn btn-outline bg-white btn-sm  px-4">
              Withdraw
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-between mt-6 bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <FaCrown className="text-yellow-500 text-2xl" />
            <p className="mt-2">Rank</p>
            <p className="text-xl font-bold">Platinum</p>
          </div>
          <div className="flex flex-col items-center">
            <FaGamepad className="text-red-500 text-2xl" />
            <p className="mt-2">Level</p>
            <p className="text-xl font-bold">35</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUserFriends className="text-green-500 text-2xl" />
            <p className="mt-2">Friends</p>
            <p className="text-xl font-bold">42</p>
          </div>
        </div>

        {/* Achievements/Badges */}
        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Achievements</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <img src={GameImage} alt="Badge 1" className="w-12 h-12 mb-2" />
              <p className="text-sm text-gray-400">Spinner</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={GameImage} alt="Badge 2" className="w-12 h-12 mb-2" />
              <p className="text-sm text-gray-400">Tiles Game</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={GameImage} alt="Badge 3" className="w-12 h-12 mb-2" />
              <p className="text-sm text-gray-400">Champion</p>
            </div>
          </div>
        </div>

        {/* Recent Games */}
        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Recent Games</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Fortnite</span>
              <span className="text-sm text-gray-400">2 hours ago</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Apex Legends</span>
              <span className="text-sm text-gray-400">5 hours ago</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Call of Duty</span>
              <span className="text-sm text-gray-400">1 day ago</span>
            </li>
          </ul>
        </div>

        {/* Friends List */}
        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Friends</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>GamerPro</span>
              <span className="text-sm text-green-500">Online</span>
            </li>
            <li className="flex justify-between items-center">
              <span>NoobMaster</span>
              <span className="text-sm text-gray-400">Offline</span>
            </li>
            <li className="flex justify-between items-center">
              <span>SniperQueen</span>
              <span className="text-sm text-green-500">Online</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
