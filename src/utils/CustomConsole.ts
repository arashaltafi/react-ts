const customLog = (
    message1: any = null,
    message2: any = null,
    message3: any = null,
    message4: any = null
) => {
    if (process.env.NODE_ENV === 'development') {
        if (message1 && message2 && message3 && message4) {
            console.log(message1, message2, message3, message4);
        } else if (message1 && message2 && message3) {
            console.log(message1, message2, message3);
        } else if (message1 && message2) {
            console.log(message1, message2);
        } else if (message1) {
            console.log(message1);
        }
    }
}

export {
    customLog
}