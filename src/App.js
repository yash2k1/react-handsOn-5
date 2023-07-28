import './App.css';
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';
import PureComponent from './HOC/PureComponent';

function App() {
  return (
    <div className='App'>
 <div className="heading">Pure Component and HOC</div>

    <PureComponent/>

           <h1>HOC Component</h1>

<div className="hoc">
Hoc is high order component it is a code patern that is use for minimizing code repeatability and create an optimized code. Here one component holds all the common logic (that component is the HOC) that can be used by diffrent components .
<h2>NewComponent = HOC(Wrapper Component)</h2>

<h3>
How it works??
</h3>
<div className="steps">
    <div className="step"> <span>1st Step :</span> create a Hoc Component which returns and Hoc function ,hoc function holds all the logic that may be show on the browser. </div>
    <div className="step"> <span>2st Step :</span> create a Counter Component (any componet that gona use Hoc Logic) it import the Hoc component then export "Hoc Component(Counter Component)"(this is the enhanced components) </div>
    <div className="step"> <span>3st Step :</span> Now in Hoc Componet we have to accept a parameter say "WraperComponent" ( make sure its first letter should capital) that represents Counter componet in this case .  </div>
</div>


</div>
<div className="counter">
    <ClickCounter/>
    <HoverCounter />
</div>
  
    </div>
  );
}

export default App;
