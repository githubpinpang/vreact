jsx
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Admin from "./Admin.jsx";
import Menu from "./menu.jsx";
import Home from "./home.jsx";
import Users from "./users.jsx";
import Orders from "./orders.jsx";

import mebaBurger from "./assets/meba.png";
import avatarImg from "./assets/avatar.png";

import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaShoppingCart,
} from "react-icons/fa";

import "./responsive.css";

console.log("🔥 main.jsx is running");


/* =========================
   ADD FOOD COMPONENT
========================= */

const Cards = ({ fetchFoods }) => {
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [Image, setImage] = useState("");

  const addFoodItem = async () => {
    const formData = new FormData();

    formData.append("Name", Name);
    formData.append("Price", Price);
    formData.append("Category", Category);
    formData.append("Image", Image);

    try {
      const response = await fetch(
        "https://meba-api.onrender.com/food/API/fooditem",
        {
          method: "POST",
          body: formData,
        }
      );

      await response.json();
      await fetchFoods();

      setName("");
      setPrice("");
      setCategory("");
      setImage("");

      alert("Your item was saved successfully");
    } catch (error) {
      console.error(error);
      alert("Couldn't add food!");
    }
  };

  return (
    <>
      {/*
        Add Food form is currently disabled.

        You can enable it later if needed.
      */}
    </>
  );
};


/* =========================
   MAIN HOME PAGE
========================= */

function Hello() {
  const navigate = useNavigate();

  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [signIn, setSignIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  /* =========================
     FETCH FOODS
  ========================= */

  const fetchFoods = async () => {
    try {
      const response = await fetch(
        "https://meba-api.onrender.com/food/API/foods"
      );

      const data = await response.json();

      setFoods(data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchFoods();
  }, []);


  /* =========================
     FILTER MENU
  ========================= */

  const filterMenu = (category) => {
    setSelectedCategory(category);
  };


  const filteredFoods = selectedCategory
    ? foods.filter((food) => food.Category === selectedCategory)
    : foods;


  /* =========================
     CART
  ========================= */

  const addToCart = (food) => {
    setCartItems((prev) => [...prev, food]);
    setShowCart(true);
  };


  /* =========================
     LOGIN
  ========================= */

  const login = async () => {
    try {
      const response = await fetch(
        "https://meba-api.onrender.com/Vs/API/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Email: email,
            Password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.User.role);

      setSignIn(false);

      if (data.User.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };


  return (
    <div className="page">

      {/* =========================
          HEADER
      ========================= */}

      <header className="first">

        {/* LOGO */}

        <div className="logos">

          <img
            src={mebaBurger}
            className="meba"
            alt="Meba Burger logo"
          />

          <h4>Meba Burger</h4>

        </div>


        {/* RIGHT SIDE */}

        <div className="rightSide">

          {/* PROFILE */}

          <div className="profile">

            <img
              src={avatarImg}
              className="avatar"
              alt="User avatar"
            />

            <select className="options">

              <option value="">
                Choose an Action
              </option>

              <option value="profile">
                Profile
              </option>

              <option value="banana">
                Banana
              </option>

              <option value="logout">
                Logout
              </option>

            </select>

          </div>


          {/* CART */}

          <div className="cart">

            <button
              className="cartButton"
              onClick={() => setShowCart(!showCart)}
              aria-label="Open shopping cart"
            >

              <FaShoppingCart className="cartIcon" />

              <span>Cart</span>

            </button>

          </div>


          {/* LOGIN BUTTON */}

          <div className="loginButtonContainer">

            <button
              className="loginButton"
              onClick={() => setSignIn(true)}
            >
              SignUp / LogIn
            </button>

          </div>

        </div>

      </header>


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <main className="second">


        {/* =========================
            SIDE MENU
        ========================= */}

        <aside className="menu">

          <h2 className="menuTitle">
            Menu
          </h2>


          <button
            className={`menuButton ${
              selectedCategory === "" ? "active" : ""
            }`}
            onClick={() => filterMenu("")}
          >
            All
          </button>


          <button
            className={`menuButton ${
              selectedCategory === "Burger" ? "active" : ""
            }`}
            onClick={() => filterMenu("Burger")}
          >
            Burger
          </button>


          <button
            className={`menuButton ${
              selectedCategory === "Pizza" ? "active" : ""
            }`}
            onClick={() => filterMenu("Pizza")}
          >
            Pizza
          </button>


          <button
            className={`menuButton ${
              selectedCategory === "Juice" ? "active" : ""
            }`}
            onClick={() => filterMenu("Juice")}
          >
            Juice
          </button>


          <button
            className={`menuButton ${
              selectedCategory === "Sweets" ? "active" : ""
            }`}
            onClick={() => filterMenu("Sweets")}
          >
            Sweets
          </button>

        </aside>


        {/* =========================
            FOOD AREA
        ========================= */}

        <section className="table">

          <Cards
            foods={foods}
            setFoods={setFoods}
            fetchFoods={fetchFoods}
          />


          <div className="menuList">

            {filteredFoods.map((food) => (

              <article
                className="foodCard"
                key={food._id}
              >

                <h3 className="foodName">
                  {food.Name}
                </h3>


                {food.Image && (

                  <img
                    className="foodImage"
                    src={`https://meba-api.onrender.com/uploads/${food.Image}`}
                    alt={food.Name}
                  />

                )}


                <p className="foodPrice">
                  {food.Price} ETB
                </p>


                <p className="foodCategory">
                  {food.Category}
                </p>


                <button
                  className="orderButton"
                  onClick={() => addToCart(food)}
                >
                  Order
                </button>

              </article>

            ))}

          </div>

        </section>


        {/* =========================
            SHOPPING CART
        ========================= */}

        {showCart && (

          <aside className="cartDiv">

            <button
              className="cartClose"
              onClick={() => setShowCart(false)}
              aria-label="Close cart"
            >
              ✕
            </button>


            <h2>
              Shopping Cart
            </h2>


            {cartItems.length === 0 ? (

              <p className="emptyCart">
                Your cart is empty.
              </p>

            ) : (

              <div className="cartItems">

                {cartItems.map((item, index) => (

                  <div
                    className="cartItem"
                    key={index}
                  >

                    <h4>
                      {item.Name}
                    </h4>


                    <p>
                      Price: {item.Price} ETB
                    </p>


                    {item.Image && (

                      <img
                        className="cartImage"
                        src={`https://meba-api.onrender.com/uploads/${item.Image}`}
                        alt={item.Name}
                      />

                    )}


                    <button className="checkoutButton">
                      Checkout
                    </button>

                  </div>

                ))}

              </div>

            )}

          </aside>

        )}

      </main>


      {/* =========================
          LOGIN MODAL
      ========================= */}

      {signIn && (

        <div className="overlay">

          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-title"
          >

            <button
              className="modalClose"
              onClick={() => setSignIn(false)}
              aria-label="Close login"
            >
              ✕
            </button>


            <h2 id="login-title">
              Login
            </h2>


            <input
              className="loginInput"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />


            <input
              className="loginInput"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />


            <div className="modalButtons">

              <button
                className="loginSubmit"
                onClick={login}
              >
                Login
              </button>


              <button
                className="loginCancel"
                onClick={() => setSignIn(false)}
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="socialIcons">

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>


          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>


          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>


          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>

        </div>


        <p>
          All Rights Reserved, &copy; Powered by V's Business
        </p>

      </footer>

    </div>
  );
}


/* =========================
   ROUTES
========================= */

createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Hello />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        >

          <Route
            index
            element={<Home />}
          />

          <Route
            path="menu"
            element={<Menu />}
          />

          <Route
            path="users"
            element={<Users />}
          />

          <Route
            path="orders"
            element={<Orders />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  </React.StrictMode>

);

