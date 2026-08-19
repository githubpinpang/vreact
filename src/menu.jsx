import React, {useState, useEffect} from "react";

export default function menu(){

  const menu = {
    height: '300px',
    width: '300px',
    backgroundColor: "grey",
   // padding: '200px'
  // display: 'flex',
  // justifycontent: 'center',
  // alignItems: 'center'
     margin: "0 auto",
     padding: "50px",
     borderRadius: '15px'
  }

  const table = {
    minWidth: "1000px",
    minHeight: "800px",
    width: "fit-content",
    height: "fit-content",
  background: `
      radial-gradient(circle at 20% 20%, #ffd6e8 0%, transparent 40%),
      radial-gradient(circle at 80% 30%, #cdeffd 0%, transparent 35%),
      radial-gradient(circle at 40% 80%, #d7f9d7 0%, transparent 35%),
     #fffaf5
     `,
  margin : '20px auto',
   borderRadius: '15px'
  }

 const addButton = {
  textAlign: 'center'
 } 

 const [name, setName] = useState("");
 const [price, setPrice] = useState("");
 const [category, setCategory] = useState("");
 const [image, setImage] = useState(null);



  return  <>
  <p>Menu page</p>
  <div className="menu" style={menu}>
   Name: <input type="text" value="food" placeholder="Food Name" style={{placeHolder: "Food Name"}}></input> <br></br><br></br>
   Price: <input type="text" value="price" placeholder="Price"></input> <br></br><br></br>
   Category: <select>
    <option value="">Choose Category</option>
    <option value="burger">Burger</option>
    <option value="pizza">Pizza</option>
    <option value="juice">Juice</option>
    <option value="sweets">Sweets</option>
   </select> <br></br><br></br>
   Image: <input type="file"  accept="image/*" onChange={(e) => setImage(e.target.files[0])} /> <br></br><br></br>
   <button style={addButton}> Add </button>
 
  </div>
  <div className="table" style={table}> 


  </div>
  </>
}