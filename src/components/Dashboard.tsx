import GameImage from "../assets/image/spinner.jpeg";
import ColorImage from "../assets/image/color.jpg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section className="p-5 ">
        <h1 className="text-[4rem] new-amsterdam-regular">Play & Earn</h1>

        <p className="new-amsterdam-regular">
          Level Up Your Game – Your Ultimate Hub for All Things Gaming!
        </p>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <Link to={"/game"}>
            <img src={GameImage} className="rounded-[3rem]" alt="game" />
            <p>Spinner Game</p>
          </Link>
          <Link to={"/game"}>
            <img src={ColorImage} className="rounded-xl w-full" alt="game" />
            <p>Colour Game</p>
          </Link>
        </div>
      </section>
      <section className="p-5 bg-gray-100">
        <h2 className="text-[3rem] new-amsterdam-regular">Why Choose Us?</h2>
        <p className="new-amsterdam-regular">
          We offer the best gaming experience with exclusive rewards and a
          vibrant community.
        </p>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="text-center">
            <h3 className="text-[2rem] new-amsterdam-regular mt-2">
              Exclusive Rewards
            </h3>
            <p>Earn rewards as you play and compete in our games.</p>
          </div>
          <div className="text-center">
            <h3 className="text-[2rem] new-amsterdam-regular mt-2">
              Vibrant Community
            </h3>
            <p>Join a community of passionate gamers.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
