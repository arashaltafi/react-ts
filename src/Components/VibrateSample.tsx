const VibrateSample = () => {

    const handleClickToVibrate = () => {
        if ('vibrate' in navigator) {
            navigator.vibrate(1500);
            console.log('!!!vibrate!!!');
        } else {
            console.error('vibrate is not supported by your browser');
        }
    }

    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16">
            <h1 className='title'>VibrateSample</h1>
            <div className='w-full h-full flex items-center justify-center flex-col gap-8'>
                <button className='btnSuccess' onClick={handleClickToVibrate}>vibrate</button>
            </div>
        </div>
    )
}

export default VibrateSample