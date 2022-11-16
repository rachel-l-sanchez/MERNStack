import React, {useState} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link, 
} from "react-router-dom";
import { useParams} from "react-router"; 


const Home = (props) => {
  return (
    <div>
        <h1>Welcome</h1>
    </div>
  );
}
    


const Color = (props) => {
  const style1 = {backgroundColor: "blue"};
  const style2 = {color: "red"};
  return (
    <div>
        <h1 style={{...style1, ...style2}}>Hello</h1>
        <Link to={"/"}>Go Home</Link> 
    </div>
  );
}

const WordOrNumber = (props) => {
  const {paramsVariable} = useParams();
  var newValue = (isNaN(5));
  const [isBool, setBool] = useState(isNaN(paramsVariable));

  return (
      <div>
        { isBool ? 
          <h1>The word is: {paramsVariable}</h1>:
          <h1>The number is: {paramsVariable}</h1>
        }       
    </div>
   );
}
    
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
          <Route path="/:paramsVariable" element={<WordOrNumber />}/>
          <Route path="/hello/:style1/:style2" element={<Color/>}/>
          <Route path="/:paramsVariable" element={<WordOrNumber/>}/>
      </Routes>
    </BrowserRouter>
  );
}
    
export default App

