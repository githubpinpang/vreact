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

import "./tailwind.css";

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
    marginTop: '10px',
    borderRadius:'20px',
    padding: '25px',
    width: '300px',
    height: '270px',
    backgroundColor: 'yellow',
    boxShadow: '5px 5px 5px red'
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
    
    try {
      const response = await fetch("https://meba-api.onrender.com/food/API/fooditem", {method: "POST", body: formData} );

      await response.json();
      await fetchFoods();

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
    </>
  )
}

function Hello(){

  const navigate = useNavigate();
  const styles = {

    first : {
      width: "100%",
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: "3px solid black",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "15px",
      padding: "10px",
      boxSizing: "border-box",
    },
    logos : {
      margin: '10px',
      width: '300px',
      height:"200px",
      backgroundColor: "pink",
      borderRadius: '20px',
      textAlign: 'center',
      border: "none",
      maxWidth: "100%",
      boxSizing: "border-box",
    },

    profile : {
      width: '500px',
      height:"200px",
      backgroundColor: "yellow",
      borderRadius: '20px',
      marginRight: '40px',
      display: 'flex',
      border: "none",
      maxWidth: "100%",
      boxSizing: "border-box",
      minWidth: "0",
    },

    meba : {
      width: '200px',
      height: '150px',
      maxWidth: "80%",
      objectFit: "contain",
      padding: "10px",
      boxSizing: "border-box",
    },

    rightSide :{
      display: 'flex',
      gap:'5px',
      alignItems: "center",
      flexWrap: "wrap",
      maxWidth: "100%",
      justifyContent: "flex-end",
      flex: "1",
      minWidth: "0",
    },

    avatar : {
      borderRadius: '50%',
      height:'100px',
      width:'100px',
      padding: '30px'
    },

    options :{
      height: '50px',
      width: '250px',
      marginTop: '50px',
      marginRight:'5px',
      borderRadius: '10px'
    },

    cart : {
      marginTop: '50px',
      height: '200px',
      width: '250px',
    },
    second :{
      display: 'flex',
      marginTop: '20px',
      gap: '25px',
      padding: "30px",
      width: "100%",
      alignItems: "flex-start",
      boxSizing: "border-box",
    },
   
    menu :{
      width: '350px',
      height: '1000px',
      backgroundColor: 'silver',
      borderRadius: '20px',
      marginLeft: '20px',
      border: 'none',
      textAlign: "center",
      maxWidth: "100%",
      minWidth: "0",
      minHeight: "600px",
      height: "auto",
      flexShrink: 0,
      boxSizing: "border-box",
    },

    Menus :{
      backgroundColor: 'pink',
      height: '50px',
      width: "100%",
      maxWidth: '150px',
      padding: "center",
      marginTop: '10px',
      borderRadius: '15px',
      boxShadow: '5px 5px 5px red',
      fontWeight: 'bold',
      boxSizing: "border-box",
    },

    menuTitle : {
      width: '100%',
      height: '50px',
      border: 'none',
      marginTop: '-60px', 
      borderRadius: '15px',
      fontWeight: 'bold',
      borderBottom: "5px solid black",
    },

    table :{
      minHeight: '1000px',
      maxHeight: "1000px",
      borderRadius: '20px',
      backgroundColor: "#F28C00",
      display: 'flex',
      flexDirection: 'column', 
      overflowY: "auto",
      width: "100%",
      flex: "1 1 0",
      minWidth: "0",
      maxWidth: "100%",
      alignItems: "stretch",
      overflowX: "hidden",
      boxSizing: "border-box",
    },

    menuList :{
      alignSelf: 'stretch',
      flex: 1,
      backgroundColor: "#6B3E1E",
      marginBottom: '5px',
      marginLeft: '10px',
      marginTop: '10px',
      marginRight: '5px',
      borderRadius: '15px',
      display: "grid",
      gap: '30px',
      padding: "15px",
      width: "auto",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      boxSizing: "border-box",
    },

    cartDiv :{
      height: 'calc(100vh - 140px)',
      minHeight: '550px',
      maxHeight: 'calc(100vh - 140px)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      width:'300px',
      minWidth: '280px',
      flexShrink: 0,
      backgroundColor: 'pink',
      borderRadius: '15px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
      borderTop: '5px solid grey',
      textAlign: 'center',
      boxSizing: 'border-box',
      padding: '15px'
    },

    socialIcons :{
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      marginTop: '15px'
    },

    signUp : {
      padding: '60px'
    },

    overlayStyle : {
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
    },

    modalStyle : {
      width: "350px",
      background: "white",
      padding: "25px",
      borderRadius: "10px",
      textAlign: "center"
    },

    footer :{
      textAlign: 'center',
    },
  }

  const [hover, setHover] = useState(false);
  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [signIn, setSignIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchFoods = async () => {
    try {
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

  const filterMenu = (category) => {
    setSelectedCategory(category);
  }

  const filteredFoods = selectedCategory
    ? foods.filter((food) => food.Category === selectedCategory)
    : foods;

  const addToCart = (food) => {
    setCartItems(prev => [...prev, food]);
    setShowCart(true);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  // Calculate total cart price dynamically
  const totalAmount = cartItems.reduce((sum, item) => sum + (parseFloat(item.Price) || 0), 0);

  const login = async () => {
    try {
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

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.User.role);

      setIsLoggedIn(true);
      setSignIn(false);

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
      <div className="w-full flex items-center justify-between gap-2 border-b-2 border-black p-2 box-border">

        <div className="w-[25%] sm:w-[22%] md:w-[20%] lg:w-[25%] flex-shrink-0 flex flex-col items-center justify-center bg-pink-300 rounded-xl p-2">
          <img
            src={mebaBurger}
            className="w-[70%] sm:w-[70%] md:w-[70%] lg:w-[70%] max-w-[180px] h-auto object-contain"
            alt="Meba Burger"
          />
          <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
            Meba Burger
          </h4>
        </div>

        <div className="flex-1 min-w-0 flex items-center justify-end gap-1 sm:gap-2 md:gap-4">

          {/* Profile Section - Rendered ONLY when logged in */}
          {isLoggedIn && (
            <div className="w-[55%] sm:w-[55%] md:w-[55%] lg:w-[55%] flex-shrink-0 flex items-center justify-center bg-yellow-300 rounded-xl p-2">
              <img
                src={avatarImg}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0"
                alt="Profile"
              />
              <select className="min-w-0 w-[70%] ml-1 sm:ml-2 h-7 sm:h-9 md:h-10 text-[9px] sm:text-xs md:text-sm lg:text-base px-1 sm:px-2 rounded-lg">
                <option>Choose an Action</option>
                <option>Profile</option>
              </select>
            </div> 
          )}

          {/* Cart Icon Button */}
          <div className="w-[15%] flex-shrink-0 flex flex-col items-center justify-center">
            <FaShoppingCart
              onClick={() => setShowCart(!showCart)}
              className="text-green-600 text-2xl sm:text-3xl md:text-4xl cursor-pointer"
            />
            <span className="text-[9px] sm:text-xs md:text-sm">
              Cart
            </span>
          </div>

          {/* SignUp/Login Button */}
          <div className="w-[20%] flex-shrink-0 flex justify-center items-center">
            <button
              onClick={() => setSignIn(true)}
              className="text-[9px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap"
            >
              SignUp/Login
            </button>
          </div>
        </div>
      </div>  

      {/* Main Container */}
      <div
        className="w-full overflow-x-auto overflow-y-hidden box-border"
        style={{
          marginTop: "20px",
          padding: "12px",
          boxSizing: "border-box"
        }}
      >
        <div
          className="flex flex-row flex-nowrap items-start gap-3 box-border"
          style={{
            width: "100%",
            minWidth: "760px"
          }}
        >
          {/* Menu Div */}
          <div
            className="flex flex-col flex-shrink-0 bg-gray-300 rounded-2xl overflow-hidden box-border"
            style={{
              width: "220px",
              minWidth: "220px",
              height: "calc(100vh - 140px)",
              minHeight: "550px"
            }}
          >
            <div className="h-[55px] flex-shrink-0 w-full flex items-center justify-center border-b-[5px] border-black font-bold text-lg">
              Menu
            </div>
            
            <div className="flex-1 w-full flex flex-col justify-evenly p-4 box-border">
              <button
                onClick={() => filterMenu("")}
                className="w-full h-12 md:h-14 bg-pink-300 rounded-2xl font-bold text-sm sm:text-base shadow-[5px_5px_5px_red]"
              >
                All
              </button>

              <button
                onClick={() => filterMenu("Burger")}
                className="w-full h-12 md:h-14 bg-pink-300 rounded-2xl font-bold text-sm sm:text-base shadow-[5px_5px_5px_red]"
              >
                Burger
              </button>

              <button
                onClick={() => filterMenu("Pizza")}
                className="w-full h-12 md:h-14 bg-pink-300 rounded-2xl font-bold text-sm sm:text-base shadow-[5px_5px_5px_red]"
              >
                Pizza
              </button>

              <button
                onClick={() => filterMenu("Juice")}
                className="w-full h-12 md:h-14 bg-pink-300 rounded-2xl font-bold text-sm sm:text-base shadow-[5px_5px_5px_red]"
              >
                Juice
              </button>

              <button
                onClick={() => filterMenu("Sweets")}
                className="w-full h-12 md:h-14 bg-pink-300 rounded-2xl font-bold text-sm sm:text-base shadow-[5px_5px_5px_red]"
              >
                Sweets
              </button>
            </div>
          </div>

          {/* Food Table */}
          <div
            className="flex flex-col bg-orange-500 rounded-2xl overflow-y-auto overflow-x-hidden box-border p-2"
            style={{
              flex: "1 1 0%",
              minWidth: "400px",
              height: "calc(100vh - 140px)",
              minHeight: "550px"
            }}
          >
            <Cards
              foods={foods}
              setFoods={setFoods}
              fetchFoods={fetchFoods}
            />

            <div
              className="menuList w-full flex flex-wrap justify-evenly items-stretch gap-4 p-3 bg-[#6B3E1E] rounded-2xl box-border"
              style={{ minWidth: "0" }}
            >
              {filteredFoods.map((food) => (
                <div
                  key={food._id}
                  className="bg-white rounded-xl p-2.5 flex-1 min-w-[160px] max-w-[220px] overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 flex flex-col items-center justify-between text-center border border-amber-100"
                  style={{ boxSizing: "border-box" }}
                >
                  <h3 className="font-bold text-xs sm:text-sm text-gray-800 line-clamp-1 w-full text-center">
                    {food.Name}
                  </h3>

                  {food.Image && (
                    <img
                      src={`https://meba-api.onrender.com/uploads/${food.Image}`}
                      alt={food.Name}
                      className="w-[85px] h-[85px] object-cover rounded-lg my-1.5 shadow-sm"
                    />
                  )}
              
                  <div className="w-full flex items-center justify-between gap-1 mt-1 pt-1.5 border-t border-gray-100">
                    <p className="font-bold text-xs text-gray-800">
                      {food.Price} <span className="text-[9px] font-semibold text-gray-500">ETB</span>
                    </p>

                    <button
                      onClick={() => addToCart(food)}
                      className="bg-green-500 hover:bg-green-600 active:scale-95 text-white px-2 py-1 rounded-md text-xs font-bold transition-all shadow-sm"
                    >
                      Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          {showCart && (
            <div className="cartDiv" style={styles.cartDiv}>

              {/* Fixed Header */}
              <div className="flex-shrink-0 mb-3 pb-2 border-b border-gray-400">
                <button
                  className="cartClose cursor-pointer float-right text-lg font-bold"
                  onClick={() => setShowCart(false)}
                  aria-label="Close cart"
                >
                  ❌
                </button>
                <h2 className="text-lg font-bold">Shopping Cart</h2>
              </div>

              {/* Scrollable Items Container */}
              <div className="flex-1 overflow-y-auto pr-1">
                {cartItems.length === 0 ? (
                  <p className="text-sm font-medium text-gray-700 mt-4">Your cart is empty.</p>
                ) : (
                  cartItems.map((item, index) => (
                    <div key={index} className="mb-4 p-2 bg-white rounded-lg shadow-sm">
                      <h4 className="font-bold text-sm">{item.Name}</h4>

                      <p className="text-xs font-semibold my-1">
                        Price: {item.Price} ETB
                      </p>

                      {item.Image && (
                        <img
                          src={`https://meba-api.onrender.com/uploads/${item.Image}`}
                          alt={item.Name}
                          width="70"
                          height="70"
                          className="mx-auto rounded-md object-cover my-2"
                        />
                      )}

                      <div className="flex justify-center gap-2 mt-2">
                        <button className="bg-green-600 text-white text-xs px-3 py-1 rounded font-bold hover:bg-green-700">
                          Checkout
                        </button>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="bg-red-500 text-white text-xs px-3 py-1 rounded font-bold hover:bg-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Fixed Bottom Total Amount Button - ONLY render if cart has items */}
              {cartItems.length > 0 && (
                <div className="flex-shrink-0 mt-3 pt-2 border-t border-gray-400">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-3 rounded-xl shadow-md transition-all text-xs sm:text-sm">
                    Total: {totalAmount} ETB
                  </button>
                </div>
              )}

            </div>
          )}
        </div>

        {signIn && (
          <div style={styles.overlayStyle}>
            <div style={styles.modalStyle}>
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

              <button onClick={login}>Login</button>

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
          <footer className="footer" style={styles.footer}>
            <div style={styles.socialIcons}>
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