import "./Pager.css";
import Panel from "components/Panel/Panel";

const Pager = () => {
  //TODO: If on page 1, make 1 disabled
  return (
    <Panel>
      <ul class="pagesList">
        <li><a href="#" class="arrow left"></a></li>  
        <li><a href="?page=1">1</a></li> 
        <li><a href="?page=1">2</a></li>
        <li><a href="?page=1">3</a></li>
        <li>...</li>
        <li><a href="?page=1">6</a></li>
        <li><a href="#" class="arrow right"></a></li>
      </ul>
    </Panel>
  );
};

export default Pager;


