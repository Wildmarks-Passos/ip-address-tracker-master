import GlobalStyles from './Styles/Global'

import Attribution from "./components/Attribution/index";
import Header from "./components/Header/index";
import IpInformation from "./components/IpInformation/index";
import RenderMap from './components/Map';

function App() {
  return (
    <div className="App">
      <Header />
      <IpInformation />
      <RenderMap />
      <Attribution />
      <GlobalStyles />
    </div>
  );
}

export default App;