import "./RadioButtons.css";
import Input from "components/Input/Input";
import Panel from "components/Panel/Panel";

const RadioButtons = (props) => {
  return (
    <Panel>
      <p>I want to be part of: </p>
      <div>
        <Input id="red" name="team" type="radio"/>
        <label htmlFor="red">Red team</label>
      </div>
      <div>
        <Input id="blue" name="team" type="radio"/>
        <label htmlFor="blue">Blue team</label>
      </div>
      <div>
        <Input id="any" name="team" type="radio"/>
        <label htmlFor="any">Choose for me</label>
      </div>
    </Panel>
  );
};

export default RadioButtons;
