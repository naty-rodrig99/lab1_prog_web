import { SummaryView } from "../views/summaryView.jsx";
import {shoppingList} from "/src/utilities.js";

function Summary(props){
    //props for number of guests and dishes from the DinnerModel
    return <SummaryView people={props.model.numberOfGuests} ingredients={shoppingList(props.model.dishes)}/>;
}

export { Summary }