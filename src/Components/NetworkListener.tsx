import { useEffect, useState } from 'react'
import Lottie from "lottie-react";
import internetOn from "../lotties/internet_on.json";
import internetOff from "../lotties/internet_off.json";

const NetworkListener = () => {

    const [networkStatus, setNetworkStatus] = useState(true);
    const [networkOkIconShow, setNetworkOkIconShow] = useState(false);

    useEffect(() => {
        try {
            if (navigator.onLine) {
                setNetworkOkIconShow(true);
                onlineHandler()
            } else {
                offlineHandler()
            }
        } catch (e) {
            offlineHandler()
        }
    }, []);

    useEffect(() => {
        window.addEventListener("offline", offlineHandler, false);
        window.addEventListener("online", onlineHandler, false);
        return () => {
            window.removeEventListener("online", onlineHandler, false);
            window.removeEventListener("offline", offlineHandler, false);
        };
    }, []);

    const offlineHandler = () => {
        setNetworkStatus(false);
        setNetworkOkIconShow(true);
        console.log("offline");
    };

    const onlineHandler = () => {
        setNetworkStatus(true);
        console.log("online");
    };

    useEffect(() => {
        const timer = setTimeout(() => networkStatus && setNetworkOkIconShow(false), 5000);
        return () => clearTimeout(timer);
    }, [networkStatus]);

    return (
        <>
            {networkStatus ? ( //online
                networkOkIconShow && (
                    <Lottie
                        animationData={internetOn}
                        className='w-28 h-28'
                        loop={true}
                        onComplete={() => console.log("complete")}
                    />
                )
            ) : ( //offline
                <Lottie
                    animationData={internetOff}
                    className='w-28 h-28'
                    loop={true}
                    onComplete={() => console.log("complete")}
                />
            )}
        </>
    )
}

export default NetworkListener