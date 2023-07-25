"use client";

import styles from "./Map.module.css";
import Subtitle from "./Subtitle";
import GoogleMapReact from "google-map-react";

export default function Map() {
  const mapProps = {
    center: {
      lat: 37.8702,
      lng: -122.2595,
    },
    zoom: 14,
  };
  const mapStyles = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi.school",
      elementType: "labels",
      stylers: [{ visibility: "on" }],
    },
    {
      featureType: "transit",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "landscape",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "administrative",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "water",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          gamma: 0.6,
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.subtitle}>
        <Subtitle>Location</Subtitle>
      </div>
      <div className={styles.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDK_wKFjBV8dXXGUKhrKgt9tcIpome3WrI" }}
          defaultCenter={mapProps.center}
          defaultZoom={mapProps.zoom}
          options={{
            styles: mapStyles,
            disableDefaultUI: true,
            draggable: false,
          }}
        />
      </div>
    </div>
  );
}
