import React from "react";
import { Container, Title, SearchBar, Information } from "./styles"

function IpInformation() {

    return(

        <Container>
            <Title>IP Address Tracker</Title>
            <SearchBar>
                <input></input>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                     width="11" 
                     height="14"><path 
                     fill="none" 
                     stroke="#FFF" 
                     stroke-width="3" 
                     d="M2 1l6 6-6 6"/></svg>
                </button>
            </SearchBar>
            <Information>
                <h2>ip address</h2>
                <p>192.212.174.101</p>
                <h2>location</h2>
                <p>Brooklyn, NY 10001</p>
                <h2>timerzone</h2>
                <p>UTC -05:00</p>
                <h2>isp</h2>
                <p>SpaceX Starlink</p>
            </Information>
        </Container>

    )
}

export default IpInformation