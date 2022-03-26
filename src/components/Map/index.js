import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function RenderMap( props ) {

    const [Position, setPosition] = useState([-22.90642, -43.18223])

    useEffect(() => {

        // setPosition(props.ipData.location.lat, props.ipData.location.lng)
        console.log(props.ipData.location)

    }, [props.ipData])

    return(

        <Container>
            <MapContainer style={{ width: "100%", height: "100%" }} center={Position} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={Position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Container>
    )
}

export default RenderMap