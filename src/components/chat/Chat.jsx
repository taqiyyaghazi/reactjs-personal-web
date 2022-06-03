import React from 'react';
import { useEffect } from 'react';
import { Widget, addResponseMessage, toggleMsgLoader } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import BOT from '../../assets/bot-icon.png';
import "./chat.css";

function Chat() {
  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    toggleMsgLoader();
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      msg: newMessage,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    const apiUrl = `https://ghazi-chatbot.herokuapp.com/msg`;
    fetch(apiUrl, requestOptions)
      .then((res) => res.json())
      .then((msgBot) => {
          document
            .getElementsByClassName('loader')[0]
            .classList.remove('active');
          addResponseMessage(msgBot.data.response);
      });
  };
  return <Widget
  handleNewUserMessage={handleNewUserMessage}
  titleAvatar={BOT}
  title="Zii's Bot"
  subtitle="Ask something about me"
  emojis="true"
/>;
}

export default Chat;
