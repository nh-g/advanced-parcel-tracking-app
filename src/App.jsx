//NPM Packages
import { BrowserRouter } from "react-router-dom";
//Project files
import "./style/style.sass"
import NavigationBar from "./components/NavigationBar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        Hello Boxes
      </BrowserRouter>
    </div>
  );
}

export default App;
