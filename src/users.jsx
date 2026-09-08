import { Form } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Users() {

  const formStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  //  border: "2px solid red",
   // flexDirection: "center"
  };

  const forms = {
    //display: "inline-block",
   // width: "100px",
   margin: "center",
    padding: "15px",
     border: "2px solid red",
  };

  const labels = {
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
    // const response = await fetch("http://localhost:5000/Vs/API/signup", {
    const response = await fetch("https://meba-api.onrender.com/Vs/API/signup", {
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

  // Styling matching the Main Page color palette (Pink, Yellow, Orange #F28C00, Brown #6B3E1E, Red shadows)
  const mainContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "20px",
    boxSizing: "border-box"
  };

  const formCardTheme = {
    backgroundColor: "pink",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "5px 5px 5px red",
    width: "100%",
    maxWidth: "400px",
    marginBottom: "40px",
    boxSizing: "border-box",
    textAlign: "center"
  };

  const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "15px"
  };

  const labelTheme = {
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#000000",
    fontSize: "14px"
  };

  const inputTheme = {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "2px solid #6B3E1E",
    outline: "none",
    boxSizing: "border-box",
    backgroundColor: "#ffffff",
    fontSize: "14px"
  };

  const buttonTheme = {
    backgroundColor: "#22c55e", // Order/Action button green from main page
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "15px",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
    boxShadow: "3px 3px 5px rgba(0,0,0,0.2)",
    marginTop: "10px",
    width: "100%"
  };

  const tableContainerTheme = {
    width: "100%",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const tableTheme = {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    backgroundColor: "#F28C00", // Main page food table background
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "5px 5px 5px red", // Signature main page red drop-shadow
    border: "3px solid black"
  };

  const thTheme = {
    backgroundColor: "#6B3E1E", // Deep brown from menu list header
    color: "#ffffff",
    padding: "15px 20px",
    textAlign: "left",
    fontSize: "15px",
    fontWeight: "bold",
    borderBottom: "3px solid black"
  };

  const tdTheme = {
    padding: "12px 20px",
    borderBottom: "1px solid #6B3E1E",
    color: "#000000",
    fontWeight: "600",
    fontSize: "14px"
  };

  const badgeTheme = {
    backgroundColor: "pink",
    color: "#000000",
    padding: "4px 12px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "bold",
    border: "1px solid black",
    display: "inline-block"
  };

  return (
    <div style={mainContainerStyle}>
      {/* Registration Form Card */}
      <div style={formCardTheme}>
        <h2 style={{ marginBottom: "20px", fontWeight: "bold", borderBottom: "3px solid black", paddingBottom: "10px" }}>
          Create Admin User
        </h2>

        <form onSubmit={register}>
          <div style={inputGroupStyle}>
            <label style={labelTheme}>Email:</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputTheme}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelTheme}>Password:</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputTheme}
              required
            />
          </div>

          <button type="submit" style={buttonTheme}>
            Create
          </button>
        </form>
      </div>

      {/* Admin Users Table Section */}
      <div style={tableContainerTheme}>
        <h2 style={{ marginBottom: "15px", fontWeight: "bold", textDecoration: "underline" }}>
          Admin Users
        </h2>

        <table style={tableTheme}>
          <thead>
            <tr>
              <th style={thTheme}>Email</th>
              <th style={thTheme}>Role</th>
            </tr>
          </thead>

          <tbody>
            {admins.length === 0 ? (
              <tr>
                <td colSpan="2" style={{ ...tdTheme, textAlign: "center", color: "#ffffff" }}>
                  No admin users found.
                </td>
              </tr>
            ) : (
              admins.map((admin, index) => (
                <tr
                  key={admin._id || index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#fff3c4", // Alternating rows between crisp white & warm food yellow
                  }}
                >
                  <td style={tdTheme}>{admin.Email}</td>
                  <td style={tdTheme}>
                    <span style={badgeTheme}>{admin.role}</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}