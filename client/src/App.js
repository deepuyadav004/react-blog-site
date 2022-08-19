
import Home from "./pages/home/Home";
// import Home from "./components/pages/home/Home";
import Single from "./pages/single/Single";
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/write" element={ user  ? <Write /> : <Login /> } />
        <Route path="/settings" element={ user ? <Settings /> : <Login /> } />
        <Route path="/post/:postId" element={ <Single /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
