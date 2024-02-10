import { SwipeRefreshList } from "react-swipe-down-refresh";
import "./react-swipe-refresh.css";
import { customLog } from "../utils/CustomConsole";

//npm i react-swipe-down-refresh
const SwipeRefresh1 = () => {
    const swipeRefreshDuration = 5000

    const onRefreshRequested = () => {
        return new Promise<void>((resolve) => {
            setTimeout(() => resolve(), swipeRefreshDuration);
        });
    };

    const onStartRefresh = () => {
        customLog('onStartRefresh')
    }

    const onEndRefresh = () => {
        customLog('onEndRefresh')
    }

    return (
        <div className="w-full h-screen py-8 overflow-hidden bg-slate-500 text-white select-none">
            <SwipeRefreshList
                onStartRefresh={onStartRefresh}
                onRefresh={onRefreshRequested}
                onEndRefresh={onEndRefresh}
                disabled={false}
                progressStrokeColor='red'
                progressBackgroundColor='blue'
                className="w-full flex flex-col items-center justify-start gap-8"
            >
                <p className="item h2">Line 1</p>
                <p className="item h2">Line 2</p>
                <p className="item h2">Line 3</p>
                <p className="item h2">Line 4</p>
                <p className="item h2">Line 5</p>
                <p className="item h2">Line 6</p>
                <p className="item h2">Line 7</p>
                <p className="item h2">Line 8</p>
                <p className="item h2">Line 9</p>
                <p className="item h2">Line 10</p>
            </SwipeRefreshList>
        </div>
    );
};

export default SwipeRefresh1;