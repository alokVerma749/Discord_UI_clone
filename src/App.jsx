import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
const Login = React.lazy(() => import("./pages/Login/Login"));
const Register = React.lazy(() => import("./pages/Register/Register"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
import Server from "./pages/DiscordServer/Server.jsx";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route
          path="/login"
          exact
          element={
            <React.Suspense fallback={<p>Loading.....</p>}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/register"
          exact
          element={
            <React.Suspense fallback={<p>Loading.....</p>}>
              <Register />
            </React.Suspense>
          }
        />
        <Route
          path="/dashboard"
          exact
          element={
            <React.Suspense fallback={<p>Loading.....</p>}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route path="/server/:id" exact element={<Server />} />
        <Route path="*" exact element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
