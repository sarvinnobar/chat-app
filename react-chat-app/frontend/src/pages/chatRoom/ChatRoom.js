import { React, useState, useEffect, useRef } from "react";
import Header from "../../components/header/Header";
import ChatBox from "../../components/chatBox/ChatBox";
import Center from "../../components/center/Center";

export default function ChatRoom({ socket }) {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);
  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);
  useEffect(() => {
    socket.on("typingResponse", (ndata) => setTypingStatus(ndata));
  }, [socket, messages]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  useEffect(() => {
    socket.on("typingResponse", (data) => setTypingStatus(data));
  }, [socket]);
  return (
    <Center>
      <div className="messageBoxDiv">
        <div className="boxDiv">
          <Header />
          <ChatBox
            messages={messages}
            typingThis={typingStatus}
            lastMessageRef={lastMessageRef}
            socket={socket}
          />
        </div>
      </div>
    </Center>
  );
}
