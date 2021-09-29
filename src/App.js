import React, { useState } from 'react';
import { brackets,symbols } from './Functions/function';
import './App.css';

const App = () => {

  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleResult = () => {
    let flag=1;
    if(expression===""){
      flag=0
    }
    else if(!brackets(expression)){
      flag=0;
    }
    else if(symbols(expression)){
      flag=0;
    }

    if(flag){  
      let str=expression.replace(/[^-()\d/*+.]/g, '');
      console.log(str)
      let ans=eval(str);
      setResult(ans)
    }
    else{
      setResult("Invalid Expression")
    }
    
  }

  const handleExpression = (event) => {
    setExpression(event.target.value);
  }


  return (
    <div>
      <h1 className="landing-text">Calculator</h1>
        <label htmlFor="expression">Enter Expression:</label>
        <input id="expression" data-testid='expression-input' type="text" value={expression} onChange={handleExpression}></input>
        <br />
        <br />
        <br />
        <button onClick={handleResult} className="calculate_btn" data-testid='calculate_btn'>Calculate</button>
        <br />
        <br />
        <br />
        <label htmlFor="result">Result:</label>
        <input data-testid='result-output' id="result" type="text" value={result}></input>
    </div>
  )
}

export default App;
