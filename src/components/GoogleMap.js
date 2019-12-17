import React from "react";
import GoogleMapReact from "google-map-react";
import { render } from "@testing-library/react";
// import { Container } from "@material-ui/core";
// import LocationOnIcon from "@material-ui/icons/LocationOn"

class GoogleMaps extends Components {

    const (props) {
        super(props);
    }

componentDidMount (){
    fetch(
        "API"
    )

    .then(res => {
        console.log(data)
    })
}

render() {
    return (
        <div></div>
        )  
}
}

GoogleMaps.propTypes = {};

export default GoogleMaps;




// const GoogleMap = props => {
//     const Component = ({ txt }) => (
//         <div>
//             <LocationOnIcon className = "txt-red" />
//         </div>
//     );

//     const defaultProps = {
//         center: {
//             lat: props.lat,
//             lng: props.lng
//         },
//         zoom:11
//     };


// }