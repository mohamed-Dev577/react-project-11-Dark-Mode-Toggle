import { useState} from "react";

function App(){
    const[darkMode, setDarkMode] = useState(false)

  const toggleMode = () =>{
    setDarkMode(!darkMode)
  
    
 }

 return(
    <div style={{
        backgroundColor: darkMode ? "black": "white",
        color: darkMode ? "white": "black",
        height: "100vh",
        textAlign: "center",
        paddingTop: "20px",

    }}>
        <h1 style={{
            color: darkMode ? "white": "black",
        }}>Dark Mode Toggle</h1>
        <button onClick={toggleMode}>
            Toggle Mode
        </button>
    </div>
  );
}


export default App;