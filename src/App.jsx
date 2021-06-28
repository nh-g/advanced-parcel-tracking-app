//NPM Packages
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
//Project files
import "./style/style.sass"
import NavigationBar from "./components/NavigationBar"
import BackupData from "./data/backup_orders"
import StatusLoading from "./components/status/StatusLoading";
import StatusError from './components/status/StatusError';
import StatusLoaded from "./components/status/StatusLoaded";
function App() {
  // Local states
  const [status, setStatus] = useState(0);
  const [data, setData] = useState([])
  // Constants
  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840"; // change the url to trigger a failure status
  const DEBUG_MODE = false
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
      {/* Navigation Bar */}
        <NavigationBar />
      {/* Content */}
        Hello Boxes
        {status === 0 && <StatusLoading/>}
        {status === 1 && <StatusLoaded data = {data}/>}
        {status === 2 && <StatusError />}
      </BrowserRouter>
    </div>
  );
}

export default App;
