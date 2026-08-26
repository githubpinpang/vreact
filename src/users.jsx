import { Form } from "react-router-dom";

import {FaEye, FaEyeSlash} from "react-icons/fa"
import { useState, useEffect } from "react";



export default function Users(){

  const formStyle ={
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  //  border: "2px solid red",
   // flexDirection: "center"
     
  };

  const forms ={
    //display: "inline-block",
   // width: "100px",
   margin: "center",
    padding: "15px",
     border: "2px solid red",
  };

  const labels={
    display: "inline-block",
    width: "100px",
    padding: "10px",
    marginBottom: "5px"
  }
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
//  const [showPassword, setshowPassword] = useState(false);

 const [admins, setAdmins] = useState([]);
 useEffect(() => {
        fetchAdmins();
    }, []);


 const register = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/Vs/API/signup", {
       
         method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: email,
          Password: password,
          role: "admin"
        })
      });
    const data = await response.json();



     if (response.ok) {
        alert("User registered successfully");

         setEmail("");
         setPassword("");
          fetchAdmins();

    } else {
        alert(data.message || "Registration failed");
    }

     // setAdmins(data);
 }

    
    const fetchAdmins = async () => {
        try {
            // const response = await fetch("http://localhost:5000/Vs/API/admins");
            const response = await fetch("https://meba-api.onrender.com/Vs/API/admins");
            const data = await response.json();

            setAdmins(data);
        } catch (error) {
            console.log(error);
        }
    };

   return(
   <>
 <div style={formStyle}>
   <form style={forms} onSubmit={register}>

  <label style={labels}> Email: </label> <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />

   <label style={labels}> Password: </label> <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/> <br /><br />
   <button type="submit">Create</button> 
   </form>
</div><br /> <br />


 <div>
            <h2>Admin Users</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Role</th>
                        
                    </tr>
                </thead>

                <tbody>
                    {admins.map((admin) => (
                        <tr key={admin._id}>
                            <td>{admin.Email}</td>
                            <td>{admin.role}</td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    
   </> )
}
