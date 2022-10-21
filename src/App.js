import CountryTable from './components/CountryTable/index'
import map from './assets/images/map5.png';

function App() {
  return (
    <>
    <div className="container">
      <div className="row">
        <h1 className="text-center display-7 mt-4" style={{color: "#FEA993"}}>COUNTRY LIST AND FILTER</h1> 
      </div>
      <div className="row">  
        <img src={map} alt="World Map" style={{width: "100%", height: "200px"}} className="mx-auto mt-2"/>
      </div>
    </div>
    <CountryTable/>
    </>
  );
}

export default App;
