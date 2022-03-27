import React, { useEffect, useState } from 'react';
import GlobalStyles from './Styles/Global'

import Attribution from "./components/Attribution/index";
import Header from "./components/Header/index";
import IpInformation from "./components/IpInformation/index";
import RenderMap from './components/Map';

function App() {

  const [ip, setIp] = useState('8.8.8.8')
  const [data, setData] = useState({})

  useEffect(() => {

    return getIp()

  }, [])

  function getIp() {
    
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_fVJKvkaEa2GhjDLMvtvhnjmRsLxZB&ipAddress=${ip}`)
      .then( res => {
  
        return res.json()
      }).then( res => {
        
        setData(res)
      })

      setIp("")
  }
  
  function handleChange( event ) {

    setIp(event.target.value)
  }

  return (
    <div className="App">
      <Header />
      <IpInformation 
        inputValue={ip}
        ipData={data} 
        handleChange={handleChange} 
        getIp={getIp} 
      />
      <RenderMap ipData={data} />
      <Attribution />
      <GlobalStyles />
    </div>
  );
}

export default App;