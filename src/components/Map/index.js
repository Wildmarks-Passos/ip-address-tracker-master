import React from 'react';
import { Container } from './styles';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function RenderMap() {

    return(

        <Container>
            <MapContainer style={{ width: "100%", height: "100%" }} center={[51.505, -0.09]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Container>
    )
}

export default RenderMap