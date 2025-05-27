import React, { useState } from 'react';
import Stepper, { Step } from '../Stepper';

function Stepp() {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col md:flex-row w-full h-screen px-6 py-10 gap-6">
      
      {/* Left Side: Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Let's Get Started!
        </h1>
        <p className="text-lg text-gray-600">
          Follow the steps on the right to complete your journey.
        </p>
      </div>

      {/* Right Side: Stepper */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
       <Stepper
          initialStep={1}
          onStepChange={(step) => console.log(step)}
          onFinalStepCompleted={() => console.log("All steps completed!")}
          backButtonText="Previous"
          nextButtonText="Next"
          stepContainerClassName="justify-center  mb-6" // center step circles
          contentClassName="text-center"
        >
          <Step>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="meeting.jpg"
                alt="Center Illustration"
                className="w-92 h-92 object-cover rounded-full"
              />
              <h2 className="text-2xl font-bold text-gray-800">Welcome to Our Process</h2>
              <p className="text-gray-600 max-w-md">
                This step will guide you through the basics. We’re excited to have you here!
              </p>
            </div>
          </Step>

          <Step>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Next Step"
                className="w-32 h-32 object-cover rounded-full"
              />
              <h2 className="text-2xl font-bold text-gray-800">Customize Your Experience</h2>
              <p className="text-gray-600 max-w-md">
                Fill out the information to tailor this experience to your needs.
              </p>
            </div>
          </Step>

          <Step>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Final Step"
                className="w-32 h-32 object-cover rounded-full"
              />
              <h2 className="text-2xl font-bold text-gray-800">All Set!</h2>
              <p className="text-gray-600 max-w-md">
                You're ready to get started. Click finish to proceed to the dashboard.
              </p>
            </div>
          </Step>
          <Step>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Final Step"
                className="w-32 h-32 object-cover rounded-full"
              />
              <h2 className="text-2xl font-bold text-gray-800">All Set!</h2>
              <p className="text-gray-600 max-w-md">
                You're ready to get started. Click finish to proceed to the dashboard.
              </p>
            </div>
          </Step>
        </Stepper>
      </div>
    </div>
  );
}

export default Stepp;
