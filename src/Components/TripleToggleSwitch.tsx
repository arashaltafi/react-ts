import { useEffect, useState } from 'react'
import "./switch-style.css";
import { customLog } from '../utils/CustomConsole';

type ValueType = string | number | boolean;

interface TripleToggleSwitchProps {
    labels?: {
        left: {
            icon: string;
            value: ValueType;
        };
        center: {
            icon: string;
            value: ValueType;
        };
        right: {
            icon: string;
            value: ValueType;
        };
    };
    onChange: (value: ValueType) => void;
}

const TripleToggleSwitch = (props: TripleToggleSwitchProps) => {

    const [state, setState] = useState<{
        switchPosition: ValueType,
        animation?: string | null,
    }>({
        switchPosition: 'center',
        animation: null,
    });

    const [position, setPosition] = useState<ValueType>('center');
    useEffect(() => {
        customLog('test render')
        if (localStorage.getItem('theme') === 'dark') {
            setPosition("left")
            state.switchPosition = 'left'
        } else if (localStorage.getItem('theme') === 'light') {
            setPosition("right")
            state.switchPosition = 'right'
        } else {
            setPosition("center")
            state.switchPosition = 'center'
        }
    }, [])

    customLog(position)

    const getSwitchAnimation = (value: ValueType) => {
        const { switchPosition } = state;
        let animation = null;
        if (value === "center" && switchPosition === "left") {
            animation = "left-to-center";
        } else if (value === "right" && switchPosition === "center") {
            animation = "center-to-right";
        } else if (value === "center" && switchPosition === "right") {
            animation = "right-to-center";
        } else if (value === "left" && switchPosition === "center") {
            animation = "center-to-left";
        } else if (value === "right" && switchPosition === "left") {
            animation = "left-to-right";
        } else if (value === "left" && switchPosition === "right") {
            animation = "right-to-left";
        }
        props.onChange(value);
        setState({ switchPosition: value, animation });
    };

    return (
      <div className='w-full flex items-center justify-center py-32'>
        <div className="main-container">
            <div
                className={`switch ${state.animation} ${state.switchPosition}-position`}
            ></div>
            <input
                className='radio'
                onChange={(e) => getSwitchAnimation(e.target.value)}
                name="map-switch"
                id="left"
                type="radio"
                value="left"
            />
            <label
                className={`label left-label ${state.switchPosition === "left" ? "black-font" : ""}`}
                htmlFor="left"
            >
                <img className='img' src={props.labels?.left.icon} alt="left" />
            </label>

            <input
                className='radio'
                onChange={(e) => getSwitchAnimation(e.target.value)}
                name="map-switch"
                id="center"
                type="radio"
                value="center"
            />
            <label
                className={`label center-label ${state.switchPosition === "center" ? "black-font" : ""}`}
                htmlFor="center"
            >
                <img className='img' src={props.labels?.center.icon} alt="center" />
            </label>

            <input
                className='radio'
                onChange={(e) => getSwitchAnimation(e.target.value)}
                name="map-switch"
                id="right"
                type="radio"
                value="right"
            />
            <label
                className={`label right-label ${state.switchPosition === "right" ? "black-font" : ""}`}
                htmlFor="right"
            >
                <img className='img' src={props.labels?.right.icon} alt="right" />
            </label>
        </div>
      </div>
    );
}

export default TripleToggleSwitch