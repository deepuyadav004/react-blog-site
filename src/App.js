// import Home from "./pages/home/Home";
// import Home from "./components/pages/home/Home";
import Single from "./pages/single/Single";
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Home/> */}
      {/* <Single /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      <Login />
    </div>
  );
}

export default App;
