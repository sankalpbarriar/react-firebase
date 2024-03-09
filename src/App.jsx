import {React} from "react";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import SignupPage from "./pages/Signup.jsx";
import SigninPage from "./pages/Signin.jsx";



function App() {
  


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

export default App;
