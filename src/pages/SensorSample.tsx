import Swal from 'sweetalert2';

const SensorSample = () => {

    const handleVibration = () => {
        if ('vibrate' in navigator) {
            navigator.vibrate(200);
        } else {
            Swal.fire({
                title: "Error",
                text: "Vibration API not supported",
                icon: "error"
            });
        }
    }

    const handleBattery = () => {
        if ('getBattery' in navigator) {
            (navigator as any).getBattery().then((battery: any) => {
                Swal.fire({
                    title: "Battery API",
                    text: `Battery level: ${battery.level * 100}%  -   Status: ${battery.charging ? "Charging" : "Not charging"}`,
                    icon: "success"
                });
            });
        } else {
            Swal.fire({
                title: "Error",
                text: "Battery API not supported",
                icon: "error"
            });
        }
    }

    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16">
            <h1 className='title'>Sensor Sample</h1>
            <div className='w-full h-full flex items-center justify-center flex-col gap-8'>
                <button
                    onClick={handleVibration}
                    className='btnSuccess'
                >
                    Set Vibrate
                </button>

                <button
                    onClick={handleBattery}
                    className='btnSuccess'
                >
                    Check Battery
                </button>
            </div>
        </div>
    )
}

export default SensorSample