import React from 'react'
import BarLoader from 'react-spinners/BarLoader'
import BeatLoader from 'react-spinners/BeatLoader'
import BounceLoader from 'react-spinners/BounceLoader'
import CircleLoader from 'react-spinners/CircleLoader'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import ClipLoader from 'react-spinners/ClipLoader'
import ClockLoader from 'react-spinners/ClockLoader'
import DotLoader from 'react-spinners/DotLoader'
import FadeLoader from 'react-spinners/FadeLoader'
import GridLoader from 'react-spinners/GridLoader'
import HashLoader from 'react-spinners/HashLoader'
import MoonLoader from 'react-spinners/MoonLoader'
import PacmanLoader from 'react-spinners/PacmanLoader'
import PropagateLoader from 'react-spinners/PropagateLoader'
import PuffLoader from 'react-spinners/PuffLoader'
import PulseLoader from 'react-spinners/PulseLoader'
import RingLoader from 'react-spinners/RingLoader'
import RiseLoader from 'react-spinners/RiseLoader'
import RotateLoader from 'react-spinners/RotateLoader'
import ScaleLoader from 'react-spinners/ScaleLoader'
import SkewLoader from 'react-spinners/SkewLoader'
import SquareLoader from 'react-spinners/SquareLoader'
import SyncLoader from 'react-spinners/SyncLoader'
import Divider from './Divider'

const ReactSpinners = () => {

    const handleClick = (e: any) => {
        e.preventDefault()
        window.open("https://www.davidhu.io/react-spinners/", "_blank")
    }

    return (
        <div className='w-full h-full flex flex-col'>
            <div className='title py-12 no-underline'>React Spinners</div>

            <div className='grid grid-cols-3 gap-20 items-center justify-center self-stretch justify-items-center'>
                <BarLoader color="#F44336" />
                <BeatLoader color="#673AB7" />
                <BounceLoader color="#2196F3" />
                <CircleLoader color="#4CAF50" />
                <ClimbingBoxLoader color="#E91E63" />
                <ClipLoader color="#FFEB3B" />
                <ClockLoader color="#FF5722" />
                <DotLoader color="#9E9D24" />
                <FadeLoader color="#4527A0" />
                <GridLoader color="#36d7b7" />
                <HashLoader color="#00838F" />
                <MoonLoader color="#448AFF" />
                <PacmanLoader color="#E040FB" />
                <PropagateLoader color="#E91E63" />
                <PuffLoader color="#FF6E40" />
                <PulseLoader color="#757575" />
                <RingLoader color="#6D4C41" />
                <RiseLoader color="#607D8B" />
                <RotateLoader color="#9C27B0" />
                <ScaleLoader color="#3F51B5" />
                <SkewLoader color="#F44336" />
                <SquareLoader color="#CDDC39" />
                <SyncLoader color="#36d7b7" />
            </div>

            <div className='flex items-end justify-center flex-grow py-24'>
                <a className='subtitle text-center hover:text-sky-500 hover:underline'
                    onClick={(e) => handleClick(e)}
                    href="https://www.davidhu.io/react-spinners/">ReactSpinners</a>
            </div>
        </div>
    )
}


export default ReactSpinners