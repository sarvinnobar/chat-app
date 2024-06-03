import { Routes, Route } from "react-router-dom";
import socketIO from "socket.io-client";
import ChatRoom from "../pages/chatRoom/ChatRoom";
import SignIn from "../pages/signIn/SignIn";
export default function PageRoutes() {
  const socket = socketIO.connect("http://localhost:4000");

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SignIn socket={socket} />}></Route>
          <Route path="/chat" element={<ChatRoom socket={socket} />}></Route>
        </Routes>
      </div>
    </>
  );
}
