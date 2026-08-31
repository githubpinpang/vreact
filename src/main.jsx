import React, {useState, useEffect} from "react";
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import App from "./App";

import { Routes, Route } from "react-router-dom";
import Admin from "./Admin.jsx";
import Menu from "./menu.jsx";
import Home  from "./home.jsx";
import Users from "./users.jsx";
import Orders from "./orders.jsx";


import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import mebaBurger from './assets/meba.png';
import avatarImg from './assets/avatar.png';
import { use } from "react";

  // Socials Import
  import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
  FaShoppingCart
} from "react-icons/fa";

console.log("🔥 main.jsx is running");


const Cards = ({ foods, setFoods, fetchFoods }) =>{

  const addFood = {
    // marginLeft: '50px',
     marginTop: '10px',
    //This is optional to use, alignSelf:'center'
  
    borderRadius:'20px',
    padding: '25px',
    width: '300px',
    height: '270px',
    backgroundColor: 'yellow',
    boxShadow: '5px 5px 5px red'

   // alignItems: 'center'
  };

  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [Image, setImage] = useState("");

 
 
  const addFoodItem = async () => {


    const formData = new FormData();

    console.log("Name", Name);
    console.log("Price", Price);
    console.log("Category", Category);
    console.log("Image", Image);

    formData.append("Name", Name);
    formData.append("Price", Price);
    formData.append("Category", Category);
    formData.append("Image", Image);

    // const addFood = {
    //   id: Date.now(),
    //   Name,
    //   Price,
    //   Category,
    //   Image
    // };
    
   try {
    // const response = await fetch("http://localhost:5000/food/API/fooditem", {method: "POST", body: formData} );
       const response = await fetch("https://meba-api.onrender.com/food/API/fooditem", {method: "POST", body: formData} );


          await response.json(); // Optional: reads the response

          await fetchFoods();

      // setFoods([...foods, addFood]);

    setName("");
    setPrice("");
    setCategory("");
    setImage("");

    alert("your Item saved succesfully"); 

   } catch (error) {
     console.error(error);
     alert("Couldn't add Food!");
    
   }

   
  }

  return(
     <>
  {/* <div className="addFood" style={addFood}>
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

  </div> */}
  </>)
}


function Hello(){

const navigate = useNavigate();

  const first = {
    //New line
    width: "100%",
    display: 'flex',
    //gap: '20px'
    justifyContent: 'space-between',
    borderBottom: "3px solid black",
    //new alignment
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px",
    padding: "10px"
   

  };
   const logos = {
    margin: '10px',
    width: '300px',
    height:"200px",
    backgroundColor: "pink",
    borderRadius: '20px',
    textAlign: 'center',
    border: "none",
    //new
    maxWidth: "100%"
   };

   const profile = {
    
    width: '500px',
    height:"200px",
    backgroundColor: "yellow",
     borderRadius: '20px',
     marginRight: '40px',
     display: 'flex',
     border: "none",
     //new
      maxWidth: "100%"
   };

   const meba = {
   //borderRadius: '50%'
   width: '200px',
   height: '150px',
   padding: "20px"
   };

   const rightSide ={
    display: 'flex',
    gap:'5px',
    // Newly added
    alignItems: "center",
    flexWrap: "wrap",
    maxWidth: "100%"
   }

   const avatar = {
    borderRadius: '50%',
    height:'100px',
    width:'100px',
    padding: '30px'
   };

   const options ={
    height: '50px',
    width: '250px',
   marginTop: '50px',
   marginRight:'5px',
   borderRadius: '10px'
   };

   const cart = {
    marginTop: '50px',
    height: '200px',
    width: '250px',
    // onClick: ''
   }
                    // menu styles
   const second ={

    display: 'flex',
    marginTop: '20px',
    gap: '25px',
    padding: "30px"
   };
   
   const menu ={
    width: '350px',
    height: '1000px',
    backgroundColor: 'silver',
    borderRadius: '20px',
    marginLeft: '20px',
    //padding: '30px',
    border: 'none',
    textAlign: "center"
   
   };

   const Menus ={
    backgroundColor: 'pink',
    height: '50px',
    width: "100%",
    maxWidth: '150px',
    borderRadius: '15px',
    padding: "center",
    // marginLeft: '80px',
    marginTop: '10px',
    borderRadius: '15px',
   // borderBottom: "3px solid black",
    boxShadow: '5px 5px 5px red',
    fontWeight: 'bold',
    //"boxSizing": "border-box"
   }

   const menuTitle = {
    width: '100%',
    height: '50px',
    border: 'none',
    marginTop: '-60px', 
    borderRadius: '15px',
    fontWeight: 'bold',
    borderBottom: "5px solid black",
   }

    const table ={
    width: '1500px',
    // minHeight: '1000px',
    maxHeight: "1000px",
    borderRadius: '20px',
   // backgroundColor: 'grey',
    backgroundColor: "#F28C00",
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    overflowY: "auto"
   };

  const menuList ={
   alignSelf: 'stretch',
   flex: 1,
 //  backgroundColor: 'red',
   backgroundColor: "#6B3E1E",
   marginBottom: '5px',
   marginLeft: '10px',
   marginTop: '10px',
   marginRight: '5px',
   borderRadius: '15px',
   display: "grid",
   gridTemplateColumns: "repeat(5, 1fr)",
   gap: '30px',
   padding: "15px",
  //  overflowY: "auto"
  };

  const cartDiv ={
    minHeight: '800px',
    maxHeight: '100vh',
    overflowY: 'auto',
    width:'300px',
    // display:'none',
    backgroundColor: 'pink',
    borderRadius: '10px',
    position: 'absolute',
    right: '15px',
    top: '200px',
    boxShadow: '5px 5px 5px 5px grey',
    borderTop: '5px solid grey',
    textAlign: 'center'
  }

  const socialIcons ={
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '15px'
  }


  const signUp = {
    padding: '60px'
  }

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000
}

const modalStyle = {
    width: "350px",
    background: "white",
    padding: "25px",
    borderRadius: "10px",
    textAlign: "center"
}

  const [hover, setHover] = useState(false);

   const footer ={
    textAlign: 'center',
   };

   const [foods, setFoods] = useState([]);

   const [selectedCategory, setSelectedCategory] = useState("");
   const [showCart, setShowCart] = useState(false);
   const [cartItems, setCartItems] = useState([]);

   const [signIn, setSignIn] = useState(false);

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const fetchFoods = async () => {
  try {
   // const response = await fetch("http://localhost:5000/food/API/foods");
      const response = await fetch("https://meba-api.onrender.com/food/API/foods");


    const data = await response.json();

    setFoods(data);

  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchFoods();
}, []);


   const filterMenu = (category)=>{
   setSelectedCategory(category);
     }

   const filteredFoods = selectedCategory
  ? foods.filter((food) => food.Category === selectedCategory)
  : foods;

  const addToCart = (food) => {
  setCartItems(prev => [...prev, food]);


   setShowCart(true);
};

 const login = async () => {

    try {
      // const response = await fetch(
      //       "http://localhost:5000/Vs/API/login",

        const response = await fetch(
            "https://meba-api.onrender.com/Vs/API/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Email: email,
                    Password : password
                })
            }
        );
       console.log(email);
       console.log(password);
        const data = await response.json();

        if (!response.ok) {
            alert(data.message);
            return;
        }

        // Save token and role
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.User.role);

        setSignIn(false);

        // Redirect according to role
        if (data.User.role === "admin") {
            navigate("/admin");
        } else {
            navigate("/");
        }

    } catch (error) {

        console.log(error);
        alert("Login failed");

    }

};


    return (  
      <>
  <div className="first" style={first}>

    <div className="logos" style={logos}>

    <img src={mebaBurger} className="meba" style={meba}
    style={{
    ...meba,
    transition: "transform 0.3s ease"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1) rotate(0deg)";
  }}
    /> <br />
    <h4>Meba Burger</h4>


    </div>

<div className="rightSide" style={rightSide}>
    <div className="profile" style={profile}>
      <img src={avatarImg} className="avatar" style={avatar}/>

       <select className="options" style={options}>
        
        <option value="">Choose an Action</option>
        <option value="apple">Profile</option>
        <option value="banana">Banana</option>
        <option value="orange" >Logout</option>
      </select>
    </div> 

    <div className="cart" style={cart}>
       <nav>
      <FaShoppingCart 
      onClick={() => setShowCart(!showCart)}
      style={{
        color: "green",
        fontSize: "35px",
        cursor: "pointer",
        height:'50px',
        width: '80px'
      }}
      />
      <span>Cart</span>
    </nav>
   
    </div>
    <div style={signUp}>
      <button onClick={() => setSignIn(true)} > SignUp/LogIn</button>
    </div>
</div>
  </div>  
                   {/* Menu Divs */}
  <div className="second" style={second}>

    <div className="menu" style={menu}>
       <button style={{
        ...menuTitle, color: hover ? "red" : "black",transition: "0.3s",
        }}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
        >Menu</button>

      <button style={{
        ...Menus, color: hover ? 'red' : 'black', transition:'0.35s'}}  onClick={() => filterMenu("")} 
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
        >All</button> <br /><br /> <br /><br /> <br /><br />
      <button style={{...Menus, color: hover ? 'red' : 'black', transition:'0.35s'}}  onClick={() => filterMenu("Burger")} 
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
        >Burger</button> <br /><br /> <br /><br /> <br /><br />

      <button style={{...Menus, color:hover ? 'red' : 'black' }}  onClick={() => filterMenu("Pizza")} 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >Pizza</button> <br /><br /> <br /><br /> <br /><br />

      <button style={{...Menus, color:hover ? 'red' : 'black'}}  onClick={() => filterMenu("Juice")} 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >Juice</button> <br /><br /> <br /><br /> <br /><br />

      <button style={{...Menus, color:hover ? 'red' : 'black'}}  onClick={() => filterMenu("Sweets")} 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >Sweets</button> <br /><br /> <br /><br /> <br /><br />
      <button style={{Menus}}  onClick={() => filterMenu("Soup")} >Soup</button> <br /><br /> <br /><br /> <br /><br />
    </div>

    
  <div className="table" style={table}>


            <Cards foods={foods} setFoods={setFoods}   fetchFoods={fetchFoods} /> 

     <div className="menuList" style={menuList}>
        {filteredFoods.map((food) => (
    <div key={food._id}>
       <h3>{food.Name}</h3>
       {food.Image && (
         <img
        // src={`http://localhost:5000/uploads/${food.Image}`}
        src={`https://meba-api.onrender.com/uploads/${food.Image}`}
        // https://meba-api.onrender.com/food/API/fooditem
        width="150"
        height="150"
        style={{borderRadius: "10px"}}
      />
      )}
      
      <p>{food.Price}</p>
       <p>{food.Name}</p>
      {/* <p>{food.Category}</p> */}


 

    <button onClick={() => addToCart(food)}>
      Order
    </button>
  </div>
))}
       
       

     </div>
    </div>

  {/* <div className="cartDiv" style={cartDiv}> */}
     {/* <span>Cart</span> */}
     {showCart && (
  <div className="cartDiv" style={cartDiv}>
    <h2>Shopping Cart</h2>
   {cartItems.length === 0 ? (
  <p>Your cart is empty.</p>
) : (
  cartItems.map((item, index) => (
    <div key={index}>
      <h4>{item.Name}</h4>
      <p>{`Price: ${item.Price} ETB`}</p>

      {item.Image && (
        <img
           //src={`http://localhost:5000/uploads/${item.Image}`}
           src={`https://meba-api.onrender.com/uploads/${item.Image}`}
           alt={item.Name}
           width="70"
           height="70" 
        />
      )} <br /> <br />
      <button> Checkout </button>
    </div>
  ))
)}
  </div>
)}
  
  </div>

  {signIn && (
    <div style={overlayStyle}>
        <div style={modalStyle}>

            <h2>Login</h2>

            <input
                type="email"
                placeholder="Email"
                value={email}
             onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button
            onClick={login}
            >Login</button>

            <button
                onClick={() => setSignIn(false)}
                style={{ marginLeft: "10px" }}
            >
                Close
            </button>

        </div>
    </div>
)}





                  {/* Footer Section */}
  <div>
    <footer className="footer" style={footer}>
      
       <div style={socialIcons}>
    <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <FaFacebook size={30} />
    </a>

    <a href="https://instagram.com" target="_blank" rel="noreferrer">
      <FaInstagram size={30} />
    </a>

    <a href="https://t.me/yourusername" target="_blank" rel="noreferrer">
      <FaTelegram size={30} />
    </a>

     <a href="https://tiktok.com" target="_blank" rel="noreferrer">
      <FaTiktok size={30} />
    </a>
  </div>
                     All Right Reserved, &copy; Powered by V's Business
    </footer>
    
    </div>                
    </>
  )

 

   
}

createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <BrowserRouter>
    <Routes> 
      <Route>
         <Route path="/" element={<Hello />} />
         <Route path="/admin" element={<Admin />} >
         <Route index element={<Home />} />
         <Route path="menu" element={<Menu />} />
         <Route path="users" element={<Users />} />
         <Route path="orders" element={<Orders />} />
      </Route>
       </Route>
      
    </Routes>
    
    </BrowserRouter>
   
    </React.StrictMode>
);


// export default function AddtoCart {

    
    
    
//     return;
// }