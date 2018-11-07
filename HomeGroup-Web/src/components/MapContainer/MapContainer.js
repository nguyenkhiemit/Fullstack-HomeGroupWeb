import React, {Component} from 'react';
import './MapContainer.css'
import GoogleMapReact from 'google-map-react';

export class MapContainer extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <div className="goole-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB69FftqA2IzL8uFNEg4DMUpE-AnS1psfE' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
}