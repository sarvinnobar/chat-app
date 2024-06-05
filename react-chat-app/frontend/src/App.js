import { BrowserRouter as Router } from "react-router-dom";
import "./assets/fonts/roboto.scss";
import Routes from "./routes/Routes";

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
