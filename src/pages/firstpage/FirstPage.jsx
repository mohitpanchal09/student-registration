import React from "react";
import Chatbot from "react-chatbot-kit";
import { Link } from "react-router-dom";
export default function FirstPage() {
  return (
    <div>
      <h1>Enter into Student Info System</h1>
      <Link to="/chatbot">
        <button>Enroll Now!</button>
      </Link>
    </div>
  );
}
