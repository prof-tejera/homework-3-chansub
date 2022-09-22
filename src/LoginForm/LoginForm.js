import { useState } from "react";
import "./LoginForm.css";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import Input from "components/Input/Input";

const LoginForm = () => {
  const [myUsername, setUsername] = useState('');
  const [activeType, setActiveType] = useState('disabled');

  const handleChange = event => {
    setUsername(event.target.value);

    let letterCnt  = myUsername.trim().length;
    
    //Enable login button only if username has 2 or more characters
    if(letterCnt > 1){
      setActiveType('enabled');
      console.info("onChange enabled");
    }
    else if (letterCnt < 2) {
      setActiveType('disabled');
      console.info("onChange disabled");
    }
  };
  
  const handleClick = event => {
    event.preventDefault();
    console.info("Login button pushed!");
  };
  
  return (<Panel className="LoginContainer">

    <Panel><Input id="username" name="username" type="text" placeholder="Username" onChange={handleChange}/></Panel>
    
    <Panel><Input id="password" name="password" type="password" placeholder="Password"/></Panel>

    <Button
      onClick={handleClick}
      text="Login"
      id = "loginSubmit"
      className = {"btnSubmit-" + activeType}
      disabled= {(activeType === 'disabled') ? true : false}
    />
    </Panel>
  );
};

export default LoginForm;
