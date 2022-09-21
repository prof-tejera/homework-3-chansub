import "./LoginForm.css";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import Input from "components/Input/Input";

const LoginForm = () => {
  
  const handleClick = (type) => {
    console.info("type is", type);
  };
  
  
  return (<Panel>

    <Panel myClass="susanaChan"><Input name="username" type="text" maxlength="200" placeholder="Username"/></Panel>
    
    <Panel><Input name="password" type="password" maxlength="200" placeholder="Password"/></Panel>

    <Button
      onClick={() => handleClick("login")}
      text="Login"
    />
    </Panel>
  );
};

export default LoginForm;
