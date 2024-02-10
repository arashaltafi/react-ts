import Lottie from "lottie-react";
import loading1 from "../lotties/loading1.json";
import loading2 from "../lotties/loading2.json";
import loading3 from "../lotties/loading3.json";
import loading4 from "../lotties/loading4.json";
import loading5 from "../lotties/loading5.json";
import { useLottie } from "lottie-react";
import Divider from './Divider';
import { customLog } from "../utils/CustomConsole";

const LottieSample = () => {

  const options = {
    animationData: loading1,
    loop: true
  };
  const { View } = useLottie(options);

  return (
    <div className="w-full h-screen py-8 flex flex-col gap-16">
      <h1 className='title'>LottieSample</h1>
      <div className='w-full h-full flex items-center justify-center flex-col gap-8'>
        <div className='w-48 h-48'>
          {View}
        </div>

        <Divider />

        <Lottie className='w-48 h-48' animationData={loading2} loop={false} onComplete={() => customLog("complete")} />

        <Divider />

        <Lottie className='w-48 h-48' animationData={loading3} loop={true} />

        <Divider />

        <Lottie className='w-48 h-48' animationData={loading4} loop={true} />

        <Divider />

        <Lottie className='w-48 h-48' animationData={loading5} loop={true} />
      </div>
    </div>
  )
}

export default LottieSample