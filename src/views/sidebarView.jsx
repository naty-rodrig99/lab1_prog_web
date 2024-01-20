
export function SidebarView(props){
    function checknumber(nprops){
        return nprops <= 1;
    }
    
    return (
    <div>
            <button disabled={checknumber(props.number)}>-</button>;
            <span title="props number" >{props.number}</span>
            <button>+</button>;
        </div>);
}
