import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import LoginPopUP from "../loginForm/LoginPopUp";

import Avatar from "../GFX/avatar.jpg";

export default function ChatbotComponent(props) {
  const theme = {
    background: "white",
    fontFamily: "Roboto, sans-serif",
    headerBgColor: "#4285F4",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#4285F4",
    botFontColor: "#fff",
    userBubbleColor: "#F4B142",
    userFontColor: "#4c4c4c",
  };

  const config = {
    width: "300px",
    height: "400px",
    floating: true,
    enableMobileAutoFocus: true,
  };
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our Website",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please type your name?",
      trigger: "Waiting user input for name",
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "tellStory",
    },
    {
      delay: 1500,

      id: "tellStory",
      message: "Hello {previousValue}",
      trigger: "moreStory",
    },

    {
      delay: 3000,
      id: "moreStory",
      message:
        " I am an employee in the engineering department. Gogle is not what it seems",
      trigger: "concern",
    },
    {
      delay: 4500,

      id: "concern",
      message:
        " I have voiced my concerns with my supervisor but he seems to be in on it. Gogle possess technologies that no one should have",
      trigger: "survailance",
    },
    {
      delay: 6000,

      id: "survailance",
      message:
        " They increased surveillance on me. I can’t come out with this information",
      trigger: "checkPortal",
    },
    {
      delay: 6000,

      id: "checkPortal",
      message:
        "  Please try investigating. I can link you to the employee portal but you do have to log in. My account is not enough because I do not have access to the restricted parts of the site",
      trigger: "mailHint",
    },
    {
      delay: 4500,
      id: "mailHint",
      message:
        "You need to find the credentials of one of the directors. The standard company email format is firstletter.lastname@ gogle.com",
      trigger: "passWordHint",
    },
    {
      delay: 6000,
      id: "passWordHint",
      message:
        " I would not know a password. Maybe you can find something on the website",
      trigger: "askCredit",
    },
    {
      delay: 6000,
      id: "askCredit",
      message: " Do you have the credentials?",
      trigger: "creditAsk",
    },
    {
      id: "creditAsk",
      options: [
        { value: "yes", label: "Yes", trigger: "giveLogin" },
        { value: "no", label: "No", trigger: "awnserNo" },
      ],
    },
    {
      id: "creditAsk2",
      options: [
        { value: "yes", label: "Yes", trigger: "giveLogin" },
        { value: "no", label: "No", trigger: "awnserNo2" },
      ],
    },
    {
      id: "creditAsk3",
      options: [
        { value: "yes", label: "Yes", trigger: "giveLogin" },
        { value: "no", label: "No", trigger: "awnserNo3" },
      ],
    },
    {
      delay: 6000,
      id: "awnserNo",
      message:
        "Okay, keep searching please, fill in yes or no whenever you think you have it",
      trigger: "creditAsk2",
    },
    {
      delay: 6000,
      id: "awnserNo2",
      message:
        "Okay, keep searching please, fill in yes or no whenever you think you have it",
      trigger: "creditAsk3",
    },
    {
      delay: 6000,
      id: "awnserNo3",
      message: "I just remembered",
      trigger: "GiveGreatHint",
    },
    {
      delay: 5700,
      id: "GiveGreatHint",
      message:
        "One of the directors, Mr. Escudero, is an absolute knob. He got his positions because his father has connections. I worked with him on a project and he is about the most unprofessional person I have ever met",
      trigger: "dogTalk",
    },
    {
      delay: 6000,
      id: "dogTalk",
      message:
        "He always talked about some stupid show and his dog, I can’t remember the name sadly. He seems like the type of person to have an easy password, maybe try finding information about him",
      trigger: "giveLogin",
    },
    {
      delay: 7500,
      id: "giveLogin",
      message: " follow this link to the login",
      trigger: "loginComponent",
    },
    {
      delay: 2000,
      id: "loginComponent",
      component: <LoginPopUP />,
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Helpdesk"
        hideUserAvatar="true"
        floatingstyle
        botAvatar={Avatar}
        steps={steps}
        {...config}
      />
    </ThemeProvider>
  );
}
