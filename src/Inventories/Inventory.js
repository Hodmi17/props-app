import'./Inventory.css';
function Inventory(props){
    console.log(props);
    return(
        <div className="inventorycontainer">
            
        <div>
            <h1> Name: {props.Name}</h1>
        </div>
        <div>
            <h1> Count: {props.Count}</h1>
        </div>
        <div>
            <h1> Price: {props.Price}</h1>
        </div>
        
        
        </div>
    

    )
}
export default Inventory;