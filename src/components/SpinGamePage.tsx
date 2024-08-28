/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { ISpinWheelProps } from "./SpinWheel.interface";
import SpinWheel from "./SpinWheel";
import Navbar from "./Navbar";

const SpinGamePage = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [amount, setAmount] = useState("");

  const handleSpinFinish = (result: string) => {
    alert("You Won " + result);
  };

  const segments = [
    { segmentText: "500", segColor: "red" },
    { segmentText: "100", segColor: "blue" },
    { segmentText: "200", segColor: "green" },
    { segmentText: "300", segColor: "red" },
    { segmentText: "400", segColor: "black" },
    { segmentText: "0", segColor: "pink" },
    { segmentText: "700", segColor: "violet" },
  ];

  const spinWheelProps: ISpinWheelProps = {
    segments,
    onFinished: handleSpinFinish,
    primaryColor: "black",
    contrastColor: "white",
    buttonText: "Spin",
    isOnlyOnce: false,
    size: 150, // Increased size for better visual impact
    upDuration: 100,
    downDuration: 600,
    fontFamily: "Arial",
    arrowLocation: "top",
    showTextOnSpin: true,
    isSpinSound: true,
  };

  const childRef: any = useRef();

  const handleCallChildFunction = () => {
    if (childRef.current) {
      childRef.current.childFunction();
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-5 space-y-5">
        <div className="flex flex-col items-center space-y-4">
          <SpinWheel {...spinWheelProps} ref={childRef} />

          <div className="flex flex-col space-y-4 mt-8">
            <select
              className="select select-bordered w-full max-w-xs"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option disabled value="">
                Select a Segment Color
              </option>
              {segments.map((segment, index) => (
                <option key={index} value={segment.segColor}>
                  {segment.segColor}
                </option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Enter Amount"
              className="input input-bordered w-full max-w-xs"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button
              className="btn btn-primary w-full max-w-xs"
              onClick={handleCallChildFunction}
            >
              Submit & Spin
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpinGamePage;
