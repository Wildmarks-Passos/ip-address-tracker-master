import React, { useState } from 'react';
import GlobalStyles from './Styles/Global'

import Attribution from "./components/Attribution/index";
import Header from "./components/Header/index";
import IpInformation from "./components/IpInformation/index";
import RenderMap from './components/Map';

function App() {

  const [ip, setIp] = useState('')
  const [data, setData] = useState([])

    function getIp() {

        fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_8a2K3V6V16EEn0fsWxchBPymNNhWi&ipAddress=${ip}`)
        .then( res => {
    
          return res.json()
        }).then( res => {
          console.log(res)
          setData(res)
        })
    }
  
  function handleChange( event ) {

    setIp(event.target.value)
}

  return (
    <div className="App">
      <Header />
      <IpInformation handleChange={handleChange} getIp={getIp} />
      <RenderMap ipData={data} />
      <Attribution />
      <GlobalStyles />
    </div>
  );
}

export default App;