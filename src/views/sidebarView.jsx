import {dishType, menuPrice, sortDishes} from "/src/utilities.js";
import "/src/style.css"

export function SidebarView(props){
    function checknumber(nprops){
        return nprops <= 1;
    }
    
    return (
    <div>
            <button disabled={checknumber(props.number)}>-</button>
            <span title="props number">{props.number}</span>
            <button>+</button>

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
            return <tr key={ /* Reflect on what's a key in array rendering! */ dish.id } >
                     <td><button>X</button></td>
                     <td><a href="#">{dish.title}</a></td>
                     <td>{dishType(dish)}</td>
                     <td class="right-align">{(dish.pricePerServing*props.number).toFixed(2)}</td>
                   </tr>;
        }
}
