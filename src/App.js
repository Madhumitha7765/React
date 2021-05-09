//import logo from './logo.svg';
import './App.css';
import FComp from "./Components/FunctionalComp"
import {Class1} from "./Components/ClassComp"
import Click from "./Components/click"
import Counter from "./Components/counter"
import {ButtonOne} from "./Components/hoctest" 
import ParentComp from "./Components/ParentComp"
import ClassProps from "./Props/Classprops"
import Functionprops from './Props/functionprop';

function App() {
  return (
    <div>
      <h1>hey hello</h1>
      <h1>COMPONENTS</h1>
      <FComp />
      {/* <Classcomp></Classcomp> */}
      <Class1></Class1>
      <Click />
      <Counter />
      <ButtonOne />
      <ParentComp />
      <h1>PROPS</h1>
      <ClassProps name="Learner1" place="cbe"><p>This is test for this.props.children</p></ClassProps>
      <ClassProps name="Learner2" place="chennai"><button>Click</button></ClassProps>
      <Functionprops name="Learner3" place="banglore" ></Functionprops>
    </div>
   
  );
}

export default App;

// in case of named export,always use curly braces to imort single or multiple classes
// no braces needed for default export
