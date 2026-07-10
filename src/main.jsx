import React, {useState} from "react";
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import App from "./App";

import mebaBurger from './assets/meba.png';
import avatarImg from './assets/avatar.png';
import { use } from "react";

console.log("🔥 main.jsx is running");


const Cards = ({ foods, setFoods }) =>{

  const addFood = {
    // marginLeft: '50px',
     marginTop: '10px',
    //This is optional to use, alignSelf:'center'
  
    borderRadius:'20px',
    padding: '25px',
    width: '300px',
    height: '270px',
    backgroundColor: 'yellow',

   // alignItems: 'center'
  };

  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [Image, setImage] = useState("");

 
 
  const addFoodItem = () => {
    console.log("Name", Name);
    console.log("Price", Price);
    console.log("Category", Category);
    console.log("Image", Image);

    const addFood = {
      id: Date.now(),
      Name,
      Price,
      Category,
      Image
    };


      setFoods([...foods, addFood]);
   setName("");
    setPrice("");
    setCategory("");
    setImage("");

  }

  return(
     <>
  <div className="addFood" style={addFood}>
    Name: <input type="text" placeholder="Food Name" value={Name} onChange={(e) => setName(e.target.value)}/> <br /> <br />
    Price:  <input type="text" placeholder="Price" value={Price} onChange={(e) => setPrice(e.target.value)}/>  <br /> <br />
    Category: <select value={Category} onChange={(e)=> setCategory(e.target.value)}>
      <option value="">Choose Category</option>
      <option value="Burger"> Burger</option>
      <option value="Pizza"> Pizza</option>
      <option value="Juice"> Juice</option>
      <option value="Sweets"> Sweets</option>
    </select> <br /> <br />
    Image: <input type="file" onChange={(e) => setImage(e.target.files[0])}/><br /> <br />
        <button onClick={addFoodItem}>ADD</button>

  </div>
  </>)
}


function Hello(){

  const first = {
    display: 'flex',
    //gap: '20px'
    justifyContent: 'space-between'

  };
   const logos = {
    margin: '10px',
    width: '300px',
    height:"300px",
    backgroundColor: "pink",
    borderRadius: '20px',
    textAlign: 'center',
   };

   const profile = {
    
    width: '600px',
    height:"300px",
    backgroundColor: "yellow",
     borderRadius: '20px',
     marginRight: '40px',
     display: 'flex'
   };

   const meba = {
   //borderRadius: '50%'
   width: '200px',
   height: '200px',
   padding: "20px"
   };

   const avatar = {
    borderRadius: '50%',
    height:'200px',
    width:'200px',
    padding: '30px'
   };

   const options ={
    height: '50px',
    width: '250px',
   marginTop: '70px',
   marginRight:'5px'
   };
                    // menu styles
   const second ={

    display: 'flex',
    marginTop: '20px',
    gap: '25px',
   };
   
   const menu ={
    width: '350px',
    height: '1000px',
    backgroundColor: 'silver',
    borderRadius: '20px',
    marginLeft: '20px',
    //padding: '30px',
    border: 'none'
    
   
   };

   const Menus ={
    backgroundColor: 'pink',
    height: '50px',
    width: '150px',
    borderRadius: '15px',
    marginLeft: '80px',
    marginTop: '10px'
   }

   const menuTitle = {
    width: '100%',
    height: '50px',
    border: 'none',
    marginTop: '-60px', 
    borderRadius: '15px',
    fontWeight: 'bold'
   }

    const table ={
    width: '1500px',
    height: '1000px',
    borderRadius: '20px',
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center'
   };

  const menuList ={
   alignSelf: 'stretch',
   flex: 1,
   backgroundColor: 'red',
   marginBottom: '5px',
   marginLeft: '10px',
   marginTop: '10px',
   marginRight: '5px',
   borderRadius: '15px',
   display: "grid",
   gridTemplateColumns: "repeat(5, 1fr)",
   gap: '30px',
    padding: "15px",
  };

   const footer ={
    textAlign: 'center',
   };

   const [foods, setFoods] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState("");


   const filterMenu = (category)=>{
   setSelectedCategory(category);
     }

   const filteredFoods = selectedCategory
  ? foods.filter((food) => food.Category === selectedCategory)
  : foods;


    return (  
      <>
  <div className="first" style={first}>

    <div className="logos" style={logos}>

    <img src={mebaBurger} className="meba" style={meba}/> <br />
    <h4>Meba Burger</h4>


    </div>

    <div className="profile" style={profile}>
      <img src={avatarImg} className="avatar" style={avatar}/>

       <select className="options" style={options}>
        
        <option value="">Choose an Action</option>
        <option value="apple">Profile</option>
        <option value="banana">Banana</option>
        <option value="orange">Logout</option>
      </select>
    </div> 

  </div>  
                   {/* Menu Divs */}
  <div className="second" style={second}>

    <div className="menu" style={menu}>
       <button style={menuTitle}>Menu</button>
      <button style={Menus}  onClick={() => filterMenu("")} >All</button> <br /><br /> <br /><br /> <br /><br />
      <button style={Menus}  onClick={() => filterMenu("Burger")} >Burger</button> <br /><br /> <br /><br /> <br /><br />
      <button style={Menus}  onClick={() => filterMenu("Pizza")} >Pizza</button> <br /><br /> <br /><br /> <br /><br />
      <button style={Menus}  onClick={() => filterMenu("Juice")} >Juice</button> <br /><br /> <br /><br /> <br /><br />
      <button style={Menus}  onClick={() => filterMenu("Sweets")} >Sweets</button> <br /><br /> <br /><br /> <br /><br />
      <button style={Menus}  onClick={() => filterMenu("Soup")} >Soup</button> <br /><br /> <br /><br /> <br /><br />
    </div>

    <div className="table" style={table}>
     <Cards foods={foods} setFoods={setFoods} />

     <div className="menuList" style={menuList}>
        {filteredFoods.map((food) => (
    <div key={food.id}>
       <h3>{food.Name}</h3>
       {food.Image && (
        <img
          src={URL.createObjectURL(food.Image)}
          alt={food.Name}
          width="100"
          height="100"
        />
      )}
      
      <p>{food.Price}</p>
      {/* <p>{food.Category}</p> */}
      <button>Add to Cart</button>

       </div>
       ))}

     </div>
    </div>
  </div>

                  {/* Footer Section */}
  <div>
    <footer className="footer" style={footer}>
      All Right Reserved, &copy; V's Business
    </footer>
    </div>                
    </>
  )
   
}

createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <Hello />
    </React.StrictMode>
);


// export default function AddtoCart {

    
    
    
//     return;
// }