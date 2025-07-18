import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9a924b36-8e85-4f2a-baac-ce2872ee8163/web/IN-en-20250714-TRIFECTA-perspective_dfbf09de-9182-41e1-a9c6-cd7b1a6d84d6_small.jpg"
        alt="background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent/30">
        <Header />
      </div>
    </>
  );
};

export default Login;
