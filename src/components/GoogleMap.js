import React from "react";
import GoogleMapReact from "google-map-react";
import { Container } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn"

const GoogleMap = props => {
    const Component = ({ txt }) => (
        <div>
            <LocationOnIcon className = "txt-red" />
        </div>
    );

    const defaultProps = {
        center: {
            lat: props.lat,
            lng: props.lng
        },
        zoom:11
    };


}