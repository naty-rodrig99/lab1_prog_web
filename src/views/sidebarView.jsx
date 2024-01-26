import {dishType, menuPrice, sortDishes} from "/src/utilities.js";
import "/src/style.css"

export function SidebarView(props){
    function checknumber(nprops){
        return nprops <= 1;
    }

    //asyncronous callback, pass the callback but don't know were is it going to be called, the user controls it
    //ABC means it is asyncronous
    function negativeHandlerABC(evt){
      props.onNumberChange(props.number - 1); //this "fires" a custom
    }

    function positiveHandlerABC(evt){
      props.onNumberChange(props.number + 1);
    }

    return (
    <div>
            <button disabled={checknumber(props.number)} onClick ={negativeHandlerABC} value={props.number}>-</button>
            <span title="props number">{props.number}</span>
            <button onClick ={positiveHandlerABC} value={props.number}>+</button>

            <table>
                <tbody>
                  {  
                      // Here you will use Array Rendering to generate a table row for each element of the ingredients prop (an array)
                      sortDishes(props.dishes).map(dishesTableRowCB)
                  }
                </tbody>
                <tr>
                  <td></td>
                  <td>Total:</td>
                  <td></td>
                  <td class="right-align">{(menuPrice(props.dishes)*props.number).toFixed(2)}</td>
                </tr>
              </table>
    </div>);

        /* callback for Array Rendering */
        function dishesTableRowCB(dish){
            
          //custom event
          //Created inside the function to have access to dish
            function dishClickedHandlerABC(evt){
              props.onDishClick(dish);
          }

          function xClickedHandlerABC(evt){
            props.deleteDish(dish);
        }
            return <tr key={ /* Reflect on what's a key in array rendering! */ dish.id } >
                     <td><button onClick={xClickedHandlerABC}>X</button></td>
                     <td><a href="#" onClick={dishClickedHandlerABC}>{dish.title}</a></td>
                     <td>{dishType(dish)}</td>
                     <td class="right-align">{(dish.pricePerServing*props.number).toFixed(2)}</td>
                   </tr>;
        }
}



