import { SidebarView } from "../views/sidebarView.jsx";
import { observer } from "mobx-react-lite";

const Sidebar = observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function SidebarRender(props){
        return <SidebarView people={props.model.numberOfGuests} ingredients={[] /* empty array for starters */}/>;
    }
);

export { Sidebar };