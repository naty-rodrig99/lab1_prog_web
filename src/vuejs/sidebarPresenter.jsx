import { SidebarView } from "../views/sidebarView.jsx";

function Sidebar(props){             // needed for the presenter to update (its view) when relevant parts of the model change
    
    function firstACB(evt){
        props.model.setNumberOfGuests(evt);
    }

    function secondACB(evt){
        props.model.setCurrentDishId(evt.id);
    }

    function thirdACB(evt){
        props.model.removeFromMenu(evt);
    }
    //props for number of guests and dishes from the DinnerModel    
    return <SidebarView number={props.model.numberOfGuests} dishes={props.model.dishes} onNumberChange={firstACB} onDishClick={secondACB} deleteDish={thirdACB}/>;
    }

export { Sidebar };