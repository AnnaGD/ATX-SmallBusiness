import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux'
import MakerIcon from '../redux/state'

const MapPin = () => <img alt='maker' src={MakerIcon}></img>;

class GoogleMap extends Component {
    static defaultProps = {
        zoom: 16
    };

    render() {
        console.log('string:', this.props)
        return (
            <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDEoy1FFQU4mZNGZ0DOyHoIG0cb6nOoCi0' }}
                defaultCenter={{ lat: this.props.coordinates [0], lng: this.props.coordinates[1]}}
                defaultZoom={this.props.zoom}>
                    <MapPin
                        position={{
                            lat: this.props.coordinates[0],
                            lng: this.props.coordinates[1]
                        }}/>
                </GoogleMapReact>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        lisitngs: state.listings
    }
}

export default connect(mapStateToProps, null) (GoogleMap);