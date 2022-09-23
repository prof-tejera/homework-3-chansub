import "./Pager.css";
import Panel from "components/Panel/Panel";

const Pager = () => {
  //TODO: If on page 1, make 1 disabled
  return (
    <Panel>
      <ul className="pagesList">
        <li><button className="arrow left"></button></li>  
        <li><button>1</button></li> 
        <li><button>2</button></li> 
        <li><button>3</button></li> 
        <li><button>...</button></li>
        <li><button>6</button></li> 
        <li><button className="arrow right"></button></li>
      </ul>
    </Panel>
  );
};

export default Pager;


