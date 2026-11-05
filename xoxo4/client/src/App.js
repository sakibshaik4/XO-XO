import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./container/login/Login";
import Home from "./container/home/Home";
import Signup from "./container/signup/Signup";
import Match from "./container/match/Match";
import Result from "./container/result/Result";
import { io } from "socket.io-client";
import "./App.css";
import { useEffect } from "react";
import MainLayout from "./component/main-layout/MainLayout";

function App() {
  const socket = io("http://localhost:3000/live-stats", {
    path: "/live-socket",
    withCredentials: false,
    autoConnect: true,
  });
  useEffect(() => {
    socket.on("connection", (data) => {
      console.log(data);
    });
    socket.on("ping", (response) => {
      console.log(response);
      socket.emit("pong", "PONG EVENT");
    });
  }, []);
  return (
    <div className="100vh">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/match" element={<Match />} />
            <Route path="/result" element={<Result />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/profile" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
