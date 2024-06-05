import React, { useState } from "react";
import "./input.scss";
import SendBtn from "../buttons/SendBtn";

export default function Input({ socket }) {
  const [message, setMessage] = useState("");
  const handleTyping = () =>
    socket.emit("typing", `${localStorage.getItem("userName")} is typing`);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };

  return (
    <div className="input__div">
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Type here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <SendBtn />
      </form>
    </div>
  );
}
