import "./RadioButtons.css";
import Input from "components/Input/Input";
import Panel from "components/Panel/Panel";

const RadioButtons = (props) => {
  return (
    <Panel>
      <p>I want to be part of: </p>
      <div class="radio">
        <Input id="red" name="team" type="radio" checked/>
        <label for="red" class="radio-label">Red team</label>
      </div>
      <div class="radio">
        <Input id="blue" name="team" type="radio"/>
        <label for="blue" class="radio-label">Blue team</label>
      </div>
      <div class="radio">
        <Input id="any" name="team" type="radio"/>
        <label for="any" class="radio-label">Choose for me</label>
      </div>
    </Panel>
  );
};

export default RadioButtons;
