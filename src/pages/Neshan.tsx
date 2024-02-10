import React, { useEffect, useRef, useState } from 'react'
import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react";
import "@neshan-maps-platform/mapbox-gl-react/dist/style.css";
import NeshanMap, { NeshanMapRef } from "@neshan-maps-platform/react-openlayers"
import Divider from '../Components/Divider';
import { customLog } from '../utils/CustomConsole';

const Neshan = () => {
  //standard-night  ,  neshan  ,  osm-bright   ,  dreamy

  const mapRef = useRef<NeshanMapRef | null>(null)

  useEffect(() => {
    if (mapRef.current?.map) {
      mapRef.current?.map.switchTrafficLayer(false)
      mapRef.current?.map.switchPoiLayer(false)
      // mapRef.current?.map.setMapType("standard-night")
      customLog('isTrafficLayerEnabled', mapRef.current?.map.isTrafficLayerEnabled());
      customLog('getAllLayers', mapRef.current?.map.getAllLayers());
    }
  }, [])

  return (
    <>
      <NeshanMap
        className='w-full h-[90%]'
        ref={mapRef}
        mapKey="web.d43ed7896859410ab458ff1cbd87f758"
        center={{ latitude: 35.7665394, longitude: 51.4749824 }}
        zoom={11}
      />

      <Divider />

      <NeshanMap
        className='w-full h-[90%]'
        mapKey="web.d43ed7896859410ab458ff1cbd87f758"
        center={{ latitude: 35.7665394, longitude: 51.4749824 }}
        poi={true}
        traffic={false}
        defaultType="neshan"
        zoom={13}
      />

      <Divider />

      <NeshanMap
        className='w-full h-[90%]'
        mapKey="web.d43ed7896859410ab458ff1cbd87f758"
        ref={mapRef}
        center={{ latitude: 32.14963227368696, longitude: 54.16016113907029 }}
        poi={true}
        traffic={true}
        defaultType="dreamy"
        zoom={5}
      />

      <Divider />

      <MapComponent
        className='w-full h-[90%]'
        options={{
          mapKey: "web.d43ed7896859410ab458ff1cbd87f758",
          mapType: MapTypes.neshanRasterNight
        }} />

    </>

  )
}

export default Neshan