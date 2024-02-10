import { useEffect, useState } from "react";
import { requestForToken, onMessageListener } from "./firebaseInit";
import {Button, Toast} from 'react-bootstrap';
import { customLog } from "../utils/CustomConsole";

const FirebaseSample = () => {

    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState({ title: '', body: '' });
    const [isTokenFound, setTokenFound] = useState(false);
    requestForToken(setTokenFound);

    onMessageListener().then((payload: any) => {
        customLog('success: ', payload);
        setNotification({ title: payload.notification.title, body: payload.notification.body })
        setShow(true);
        customLog(payload);
    }).catch(err => {
        customLog('failed: ', err)
    });

    const onShowNotificationClicked = () => {
        setNotification({ title: "Notification", body: "This is a test notification" })
        setShow(true);
    }

    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16">
            <h1 className='title'>FirebaseSample</h1>
            <div className='w-full h-full flex items-center justify-center flex-col gap-8'>

                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    minWidth: 200
                }}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">{notification.title}</strong>
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>{notification.body}</Toast.Body>
                </Toast>
                <header className="App-header">
                    {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
                    {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
                    <Button onClick={() => onShowNotificationClicked()}>Show Toast</Button>
                </header>
            </div>
        </div>
    )
}

export default FirebaseSample