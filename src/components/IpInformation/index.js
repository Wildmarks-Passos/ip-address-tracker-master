import React, { useState } from "react";
import { Container, Title, SearchBar, Information } from "./styles"

// Ip FHP = 170.83.249.220

function IpInformation( props ) {

    const [display, setDisplay] = useState(true)

    function hiddenIpInformation(){

        setDisplay(display === true ? false : true)
    }

    return(

        <Container>
            <Title>IP Address Tracker</Title>
            <SearchBar>
                <input value={props.inputValue} onChange={props.handleChange} placeholder="Digite um endereço IP..."></input>
                <button onClick={props.getIp}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                     width="11" 
                     height="14"><path 
                     fill="none" 
                     stroke="#FFF" 
                     stroke-width="3" 
                     d="M2 1l6 6-6 6"/></svg>
                </button>
            </SearchBar>
            <Information display={display}>
                <svg onClick={hiddenIpInformation} 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="11" 
                    height="14"><path 
                    fill="none" 
                    stroke="#FFF" 
                    stroke-width="3" 
                    d="M2 1l6 6-6 6"/></svg>
                <div>
                    <h2>ip address</h2>
                    <p>{props.ipData.ip ? props.ipData.ip : ""}</p>
                </div>
                <div>
                    <h2>location</h2>
                    <p>{props.ipData.location ? `${props.ipData.location.city}, ${props.ipData.location.region} ${props.ipData.location.postalCode}` : ""}</p>
                </div>
                <div>
                    <h2>timerzone</h2>
                    <p>{props.ipData.location ? `UTC ${props.ipData.location.timezone}` : ""}</p>
                </div>
                <div>
                    <h2>isp</h2>
                    <p>{props.ipData.isp ? props.ipData.isp : ""}</p>
                </div>
            </Information>
        </Container>

    )
}

export default IpInformation