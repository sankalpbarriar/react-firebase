import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage=()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => alert("Sign in with success"))
      .catch((err) => alert(err));
  };
  return (
    <div className="bg-blue-100 p-4 flex flex-col justify-center items-center space-y-4 m-10 overflow-hidden">
      <h1 className="font-bold tracking-wider text-blue-500 text-3xl border-b-2 border-blue-400 p-2">
        Signin Page
      </h1>
      <label className="text-center font-serif text-blue-500">
        {" "}
        Enter your Email
      </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="border border-gray-400 rounded-md px-3 py-2 w-full"
        type="email"
        placeholder="Enter yout email here"
      />
      <label className="text-center font-serif text-blue-500">
        Enter your Password
      </label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="border border-gray-400 rounded-md px-3 py-2 w-full"
        type="password"
        placeholder="Enter yout password here"
      />
      <button
        className="bg-white text-teal-500 border border-teal-500 rounded-md px-4 py-2 hover:bg-teal-500 hover:text-white transition-colors duration-300 ease-in-out"
        onClick={signInUser}
      >
        Sign in
      </button>
    </div>
  );
}

export default SigninPage;
