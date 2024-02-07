import { useStyles } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import Lottie from "react-lottie";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";

interface SwipeRefreshProps {
    children: any
    handleSwipeStart: any
    handleSwipeEnd: any
    loading: any
    setLoading: any
    onRefresh: any
}

const SwipeRefresh = ({
    children,
    handleSwipeStart,
    handleSwipeEnd,
    loading,
    setLoading,
    onRefresh,
}: SwipeRefreshProps) => {
    const [pStart, setPStart] = useState({ x: 0, y: 0 });
    const [pStop, setPStop] = useState({ x: 0, y: 0 });
    const [diffRef, setDiffRef] = useState(0);
    const swipeRef = useRef<any>();
    const classes = useStyles();

    const swipeStart = (e: any) => {
        if (swipeRef.current.getBoundingClientRect().top > 60) {
            handleSwipeStart?.();
            console.log(swipeRef.current.getBoundingClientRect().top);
            if (typeof e["targetTouches"] !== "undefined") {
                var touch = e.targetTouches[0];
                setPStart({
                    x: touch.screenX,
                    y: touch.screenY,
                });
            } else {
                setPStart({
                    x: e.screenX,
                    y: e.screenY,
                });
            }
        }
    }

    const swipeEnd = (e: any) => {
        if (swipeRef.current.getBoundingClientRect().top > 60) {
            handleSwipeEnd?.();
            console.log("off", swipeRef.current.getBoundingClientRect().top);

            if (typeof e["changedTouches"] !== "undefined") {
                var touch = e.changedTouches[0];
                setPStop({
                    x: touch.screenX,
                    y: touch.screenY,
                });
            } else {
                setPStop({
                    x: e.screenX,
                    y: e.screenY,
                });
            }
            setDiffRef(0);
            console.log("end", touch.screenY);

            swipeCheck(touch.screenX || e.screenX, touch.screenY || e.screenY);
        }
    }

    const swipe = (e: any) => {
        if (typeof e["changedTouches"] !== "undefined") {
            var touch = e.changedTouches[0];
            var changeY = pStart.y - touch.screenY;
            var changeX = pStart.x - touch.screenX;
            setDiffRef(changeY);
            if (isPullDown(changeY, changeX, true)) {
            }
        } else {
        }
    }

    const swipeCheck = (endx: any, endy: any) => {
        var changeY = pStart.y - (endy ? endy : pStop.y);
        var changeX = pStart.x - (endx ? endx : pStop.x);

        if (isPullDown(changeY, changeX)) {
            setLoading(true);
            onRefresh?.();
        }
    }

    const isPullDown = (dY, dX, swipe = false) => {
        console.log("dy", dY);
        console.log("dx", dX);
        return (
            dY < 0 && Math.abs(dX) <= 100 && Math.abs(dY) >= 100
        );
    }

    return (
        <div
            onTouchStart={swipeStart}
            onTouchMove={swipe}
            onTouchEnd={swipeEnd}
            ref={swipeRef}
            className={classes.swipeRefresh}
        >
            {loading ? (
                <div className={classes.loadingIcon}>
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: animationData,
                        }}
                        width={45}
                        height={45}
                    />
                </div>
            ) : (
                <div
                    className={classes.pullIcon}
                    style={{
                        top: -65 - diffRef < 30 ? -65 - diffRef : 30,
                        transform: `rotateZ(${diffRef * -2 < 260 ? diffRef * -2 : 260}deg)`,
                    }}
                >
                    <ReplayOutlinedIcon />
                </div>
            )}
            {children}
        </div>
    );
};

export default SwipeRefresh;