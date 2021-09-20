import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          <h1>other</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
