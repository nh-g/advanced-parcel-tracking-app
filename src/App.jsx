//NPM Packages
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

//Project files
import "./style/style.sass"
import BackupData from "./data/backup_orders";
import NavigationBar from "./components/NavigationBar";
import Footer from './components/Footer';
import StatusLoading from "./status/StatusLoading";
import StatusError from './status/StatusError';
import StatusLoaded from "./status/StatusLoaded";

export default function App() {
  // Local states
  const [status, setStatus] = useState(0);
  const [data, setData] = useState([])
  // Constants
  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840"; // change the url to trigger a failure status
  const DEBUG_MODE = false;
  // Methods
  useEffect(() => {
  fetch(API_URL, {mode: "cors"})
    .then((response) => response.json())
    .then((json) => onSuccess(json))
    .catch((error) => onFail(error));
  }, [setData,setStatus])

  function onSuccess(json) {
    setData(json);
    setStatus(1);
  }

  function onFail(error) {
    if (DEBUG_MODE) {
      setData(BackupData);
      setStatus(1);
    }else {
      setStatus(2);
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        {status === 0 && <StatusLoading/>}
        {status === 1 && <StatusLoaded data = {data}/>}
        {status === 2 && <StatusError />}
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

;
