import { React, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { GoogleAuthProvider ,signInWithPopup} from "firebase/auth";


const auth = getAuth(app); //instance of auth object
const googleProvider=new GoogleAuthProvider();

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // creating a new function that returns a promise
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => {
      //main admi
      alert("User created").catch((err) => alert(err));
    });
  };
 
  const signUpWithGoogle=()=>{
    signInWithPopup(auth,googleProvider);
  }
  return (
    <div className="bg-red-100 p-4 flex flex-col justify-center items-center space-y-4 m-10 overflow-hidden">
      <h1 className="font-bold tracking-wider text-red-500 text-3xl border-b-2 p-2 border-red-400">
        Signup Page
      </h1>
      <label className="text-center font-serif text-red-500">Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your email here"
        className="border border-gray-400 rounded-md px-3 py-2 w-full"
      />
      <label className="text-center font-serif text-red-500">Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter your password here"
        className="border border-gray-400 rounded-md px-3 py-2 w-full"
      />
      <br />
      <button onClick={signUpWithGoogle} className="relative overflow-hidden text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-br from-white to-orange-400">
      Sign in with Google
    </button>
      <button
        onClick={createUser}
        className="bg-white text-teal-500 border border-teal-500 rounded-md px-4 py-2 hover:bg-teal-500 hover:text-white transition-colors duration-300 ease-in-out"
      >
        Signup
      </button>
    </div>
  );
}

export default SignupPage;
