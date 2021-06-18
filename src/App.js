import Inventory from './Inventories/Inventory';
import './App.css';



function App() {
  return (
    <div className="container">
      <Inventory Name="Baby Food" Count="40" Price="$3.99" />
      <Inventory Name="Formula" Count="35" Price="$27.99" />
      <Inventory Name="Diaper" Count="100" Price="$12.99" />
      <Inventory Name="Toys" Count="23" Price="$15.99" />
      <Inventory Name="Wipes" Count="45" Price="$4.99" />
      

      
    </div>
    
    
  )
}

export default App;
