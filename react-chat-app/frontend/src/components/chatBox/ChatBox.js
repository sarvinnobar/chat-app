import React from "react";
import "./chatBox.scss";
import Input from "../input/Input";
import { dateString } from "../../utils/getDate";

export default function ChatBox({ messages, lastMessageRef, socket }) {
  return (
    <>
      <div className="chatBox__div">
        <div className="chatBox">
          <div className="time__div">
            <p>{dateString}</p>
          </div>
          {messages.map((message) =>
            message.name === localStorage.getItem("userName") ? (
              <div key={message.id}>
                <div className="chat__div sent">
                  <p>{message.text}</p>
                </div>
              </div>
            ) : (
              <div key={message.id}>
                <div className="chat__div received">
                  <p>{message.text}</p>
                </div>
              </div>
            )
          )}
          <div ref={lastMessageRef} />
        </div>
        <div className="div__input">
          <Input socket={socket} />
        </div>
      </div>
    </>
  );
}
