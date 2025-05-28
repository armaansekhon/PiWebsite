import React, { useState } from 'react';
import Stepper, { Step } from '../Stepper';

function Stepp() {
  const [name, setName] = useState("");

  return (
    <div className="flex f md:flex-row w-full h-screen px-6 py-10 gap-6">
      
     

      {/* Right Side: Stepper */}
      <div className="w-full md:w-full flex items-center justify-center">
       <Stepper
          initialStep={1}
          onStepChange={(step) => console.log(step)}
          onFinalStepCompleted={() => console.log("All steps completed!")}
          backButtonText="Previous"
          nextButtonText="Next"
          stepContainerClassName="justify-center right-10 mb-6" // center step circles
          contentClassName="text-center"
        >
          <Step>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="meeting.jpg"
                alt="Center Illustration"
                className="w-250 h-90 object-cover rounded-full"
              />
              <h2 className="text-[32px] font-jr  text-gray-800"> We Start By Listening</h2>
              <p className="text-gray-600 font-jr max-w-[700px]">
                We begin by actively listening to our clients Through open dialogue and detailed discussions, we gather all requirements to align our solutions with their vision.
              </p>
            </div>
          </Step>

          <Step>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="Plan.jpg"
                alt="Next Step"
                className="w-120 h-100 object-cover "
              />
             <h2 className="text-[32px] font-jr  text-gray-900">Planning & Strategy</h2>
              <p className="text-gray-600  font-jr  max-w-[700px]">
                we create a tailored plan and strategy to align the project goals with the client’s vision and timeline.
              </p>
            </div>
          </Step>

          <Step>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="Develop.jpg"
                alt="Final Step"
                className="w-200 h-90  object-cover rounded-full"
              />
              <h2 className="text-[32px] font-jr  text-gray-800">Development</h2>
              <p className="text-gray-600 font-jr max-w-[700px]">
                We transform ideas into reality through intuitive design and robust development tailored to client needs.
              </p>
            </div>
          </Step>
          <Step>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="test.jpg"
                alt="Final Step"
                className="w-200 h-90  object-cover rounded-full"
              />
              <h2 className="text-[32px] font-jr  text-gray-800">Testing and Optimizations</h2>
              <p className="text-gray-600 font-jr max-w-[700px]">
                We ensure quality through thorough testing and optimize performance for a seamless user experience.
              </p>
            </div>
          </Step>
          <Step>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="Support.jpg"
                alt="Support.jpg"
                className="w-200 h-90  object-cover rounded-full"
              />
              <h2 className="text-[32px] font-jr text-gray-800">Ongoing Support</h2>
              <p className="text-gray-600 max-w-[700px]">
                We deliver the final product on time and provide ongoing support to ensure long-term success and client satisfaction.
              </p>
            </div>
          </Step>
        </Stepper>
      </div>
    </div>
  );
}

export default Stepp;
