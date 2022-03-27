import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

function RenderMap( props ) {

    const [position, setPosition] = useState([37.38605, -122.08385])

    useEffect(() => {
        
        if(props.ipData.location){
            
            setPosition([props.ipData.location.lat, props.ipData.location.lng])
        }

    }, [props.ipData])

    function FlyToLocationIp() {
        const map = useMap()
        map.flyTo(position, 13)
        return null
    }

    return(

        <Container>
            <MapContainer style={{ width: "100%", height: "100%" }} center={position} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <FlyToLocationIp />
            </MapContainer>
        </Container>
    )
}

export default RenderMap