import React, { useState } from "react";

const Header = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div className="relative z-10">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-2/15 mx-10 py-2"
      />
      <form className="flex flex-col absolute text-amber-50 p-10 m-4  mx-auto right-0 left-0 w-2/5 bg-black/80">
        <h2 className="text-4xl font-bold py-3">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        {isSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 border-gray-50 rounded-lg  bg-gray-700/40 "
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-2 my-2 border-gray-50 rounded-lg  bg-gray-700/40 "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2  border-gray-50 rounded-lg  bg-gray-700/40  "
        />
        <button className="cursor-pointer bg-amber-700 hover:bg-amber-800 p-2 my-2 rounded-sm font-bold text-sm">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p className="mx-auto my-2 text-sm">{!isSignUp && "OR"}</p>
        {!isSignUp && (
          <button className="cursor-pointer bg-gray-700/50 hover:bg-gray-800/80 p-2 my-2 rounded-sm font-bold text-sm">
            Use a sign-in code
          </button>
        )}
        {!isSignUp && (
          <a href="/" className="underline mx-auto">
            Forgot password?
          </a>
        )}
        {!isSignUp && (
          <label htmlFor="rem me">
            <input type="checkbox" id="rem me" /> Remember me
          </label>
        )}

        <p>
          {isSignUp ? "Already have account?" : "New to Netflix?"}
          <span
            className="font-bold hover:underline cursor-pointer"
            onClick={handleSignUp}
          >
            {isSignUp ? "Sign In now." : "Sign Up"}
          </span>
        </p>
        <p className="text-xs my-2 text-gray-500">
          Sign In OR Forgot password? New to Netflix?Sign up now. This page is
          protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
        <a href="/" className="underline text-blue-700 text-sm">
          Learn more.
        </a>
      </form>
    </div>
  );
};

export default Header;
