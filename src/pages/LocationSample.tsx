import { useState } from "react";
import { mapScreenShot } from "../utils/mapBoxUtils";

const LocationSample = () => {

    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);

    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                },
                (error) => {
                    console.error('Error getting location:', error.message);
                }
            );
        } else {
            console.error('Geolocation is not supported by your browser');
        }
    };

    return (
        <>
            <div className='title mt-12'>LocationSample</div>

            <button className="mt-32 px-8 py-4 text-xl btnSuccess mx-auto text-center block" onClick={handleGetLocation}>Get Location</button>

            {location && (
                <div className="mt-32">
                    <p className="subtitle mt-4">Latitude: {location.latitude}</p>
                    <p className="subtitle mt-4">Longitude: {location.longitude}</p>

                    <img
                        className="mt-8 w-1/5 border-2 border-dashed border-black rounded-full shadow-xl mx-auto"
                        src={mapScreenShot(location.latitude, location.longitude)} alt="map"
                    />
                </div>
            )}
        </>
    )
}

export default LocationSample