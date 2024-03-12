import {React, useState} from "react";
import { useEffect } from "react";
import {app} from "./firebase.js"
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import SignupPage from "./pages/Signup.jsx";
import SigninPage from "./pages/Signin.jsx";
import { onAuthStateChanged,getAuth,signOut } from "firebase/auth";

const auth=getAuth(app)

function App() {
// useEffect that will run on mounting

const [user,setUser]=useState(null);
  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      if(user){
        setUser(user);
        //yes you are logged in
        console.log('Hello',user);

      }
      else{
        //user is logged out
        console.log('You are logged out')
        setUser(null);
      }
    })
  },[])
  
  //consitional rendering ki signed in user ko kya dikhana hai
  if(user === null){
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SigninPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
  }

  //agar logged in hai to
  return (
    <div className="flex flex-col justify-center items-center m-4 p-4h-20 bg-teal w-full">
      <h1 className="text-4xl text-center text-wrap font-bold m-2 p-2">Hello {user.email}</h1>
      <button
        onClick={()=>signOut(auth)}
        className="bg-white text-teal-500 border border-teal-500 rounded-md px-4 py-2 hover:bg-teal-500 hover:text-white transition-colors duration-300 ease-in-out m-2"
      >
        Logout
      </button>
    </div>
  )
}

export default App;


//jaiase hi logout button ko click karenge authState change hoga compinet re-render hoga aur hum wapis se signup page me aa jayenge