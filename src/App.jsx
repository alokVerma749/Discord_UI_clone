import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Server from "./pages/DiscordServer/server";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/server/:id" exact element={<Server />} />
        <Route path="*" exact element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
