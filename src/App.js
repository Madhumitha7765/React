//import logo from './logo.svg';
import './App.css';
import FComp from "./components/FunctionalComp"
import {Class1} from "./components/ClassComp"

function App() {
  return (
    <div>
      <h1>hey hello</h1>
      <h1>this is test 2</h1>
      <FComp />
      {/* <Classcomp></Classcomp> */}
      <Class1></Class1>
    </div>
   
  );
}

export default App;

// in case of named export,always use curly braces to imort single or multiple classes
// no braces needed for default export
