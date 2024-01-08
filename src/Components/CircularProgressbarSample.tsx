import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Divider from './Divider';

interface CircularProgressbarSampleProps {
    percentage: number
}

const CircularProgressbarSample = (props: CircularProgressbarSampleProps) => {
    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16">
            <h1 className='title'>CircularProgressbar</h1>
            <div className='w-full h-full flex items-center justify-center flex-col gap-16'>
                <div className='w-48 h-48'>
                    <CircularProgressbarWithChildren
                        value={props.percentage}
                        maxValue={100}
                        strokeWidth={10}
                        circleRatio={1}
                        counterClockwise={false}>
                        <img
                            style={{ width: 40, marginTop: -5 }}
                            src="https://arashaltafi.ir/arash_circle.png"
                            alt="arashaltafi" />
                        <p className='text-xl mt-1'>60%</p>
                    </CircularProgressbarWithChildren>
                </div>

                <Divider />

                <div className='w-48 h-48'>
                    <CircularProgressbar
                        value={props.percentage}
                        maxValue={100}
                        strokeWidth={10}
                        circleRatio={1}
                        counterClockwise={false}
                        text={`${props.percentage}%`} />
                </div>

            </div>
        </div>
    )
}

export default CircularProgressbarSample