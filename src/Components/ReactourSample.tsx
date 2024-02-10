import React, { useState } from 'react'
import Tour, { ReactourStep } from "reactour";
import { DeviceUUID } from "device-uuid";
import { customLog } from '../utils/CustomConsole';

const ReactourSample = () => {
  const du = new DeviceUUID().parse();

  const steps: ReactourStep[] = [
    {
      selector: ".btnSuccess",
      content: "Click here to see the tour",
      action: () => {
        customLog('first tour');
      },
      position: "bottom",
      stepInteraction: true,
      style: {
        backgroundColor: "rgb(255, 255, 255)",
        color: "red",
        borderRadius: "20px",
        padding: "32px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      }
    },
    {
      selector: ".btnError",
      content: "Click here to close the tour",
      action: () => {
        customLog('second tour');
      },
      position: "top",
      stepInteraction: false,
      style: {
        backgroundColor: "rgb(255, 255, 255)",
        color: "red",
        borderRadius: "20px",
        padding: "32px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      }
    },
  ];

  const [tourOpen, setTourOpen] = useState<boolean>(false);

  const handleCloseTour = () => {
    setTourOpen(false);
  };


  return (
    <div className="w-full h-screen py-8 flex flex-col gap-16">
      <h1 className='title'>ReactourSample</h1>
      <Tour
        steps={steps}
        isOpen={tourOpen}
        onRequestClose={() => handleCloseTour()}
        closeWithMask={true}
        showCloseButton={true}
        showNavigation={true}
        showButtons={true}
        showNumber={true}
      />
      <div className='w-full h-full flex items-center justify-center flex-col gap-8'>
        <button className='btnSuccess' onClick={() => setTourOpen(true)}>show tour</button>
        <button className='btnError' onClick={() => setTourOpen(false)}>Close tour</button>
      </div>
    </div >
  )
}

export default ReactourSample