import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { customLog } from "../utils/CustomConsole";

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const requestForToken = (setTokenFound: any) => {
    return getToken(messaging, { vapidKey: 'BH0U_ar3VRiMKE9aO_gg_D3BSdjlURzdxt9VXUZV_YwjfE8BMPejOLRUGDAWfJ2TV-pwz73oegmhr8rw7HSBNXE' })
        .then((currentToken) => {
            if (currentToken) {
                customLog('current token for client: ', currentToken);
                setTokenFound(true);
            } else {
                customLog('No registration token available. Request permission to generate one.');
                setTokenFound(false);
            }
        })
        .catch((err) => {
            customLog('An error occurred while retrieving token. ', err);
        });
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            customLog("payload", payload)
            resolve(payload);
        });
    });

