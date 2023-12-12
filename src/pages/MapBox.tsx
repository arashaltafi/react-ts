import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from "mapbox-gl";
import { useEffect } from 'react';
import Divider from '../Components/Divider';

const MapBox = () => {


    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoiYWxpYWhhcmlhbjUiLCJhIjoiY2wyMWUzeGZiMTU4bjNjbWt5Zjk3NHZ6cyJ9.oPpYJC4Xxc315h6S8Tl8Ig'
    });


    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpYWhhcmlhbjUiLCJhIjoiY2wyMWUzeGZiMTU4bjNjbWt5Zjk3NHZ6cyJ9.oPpYJC4Xxc315h6S8Tl8Ig';
        const map = new mapboxgl.Map({
            container: 'mapbox', // container ID
            style: 'mapbox://styles/mapbox/dark-v10', // style URL
            center: [32.14963227368696, 54.16016113907029], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });

        map.on('load', () => {
            map.addLayer({
                id: 'terrain-data',
                type: 'line',
                source: {
                    type: 'vector',
                    url: 'mapbox://mapbox.mapbox-terrain-v2'
                },
                'source-layer': 'contour'
            });
        });

    })

    return (
        <>
            <div id='mapbox' className='w-full h-[90%]'></div>

            <Divider />

            <Map
                style="mapbox://styles/mapbox/streets-v10"
                className='w-full h-[90%]'
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[32.14963227368696, 54.16016113907029]} />
                </Layer>
            </Map>;
        </>
    )
}

export default MapBox