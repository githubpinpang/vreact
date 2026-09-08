import { Form } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Users() {
  // Original style objects with preserved inline comments
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
    marginBottom: "5px",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //  const [showPassword, setshowPassword] = useState(false);

  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const register = async (e) => {
    e.preventDefault();
    
    // Updated endpoint while preserving previous local reference
    // const response = await fetch("http://localhost:5000/Vs/API/signup", {
    const response = await fetch("https://meba-api.onrender.com/Vs/API/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: email,
        Password: password,
        role: "admin",
      }),
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
  };

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

  // Modern CSS styling objects to keep the layout centered & visually appealing
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
  };

  const formCardStyle = {
    backgroundColor: "#ffffff",
    padding: "25px 30px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
    width: "100%",
    maxWidth: "450px",
    marginBottom: "40px",
    border: "1px solid #e2e8f0",
  };

  const formGroupStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  };

  const labelStyle = {
    fontWeight: "600",
    marginBottom: "6px",
    color: "#2d3748",
    fontSize: "14px",
  };

  const inputStyle = {
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #cbd5e0",
    fontSize: "14px",
    outline: "none",
  };

  const buttonStyle = {
    backgroundColor: "#3182ce",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "10px",
  };

  const tableContainerStyle = {
    width: "100%",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
    border: "1px solid #e2e8f0",
  };

  const thStyle = {
    backgroundColor: "#2d3748",
    color: "#ffffff",
    padding: "14px 20px",
    textAlign: "left",
    fontSize: "14px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  const tdStyle = {
    padding: "14px 20px",
    borderBottom: "1px solid #edf2f7",
    color: "#4a5568",
    fontSize: "14px",
  };

  const badgeStyle = {
    backgroundColor: "#e2e8f0",
    color: "#2d3748",
    padding: "4px 10px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "bold",
    display: "inline-block",
  };

  return (
    <div style={containerStyle}>
      {/* Create Admin Form Section */}
      <div style={formCardStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#1a202c" }}>
          Create Admin User
        </h2>
        <form onSubmit={register} style={formGroupStyle}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Create
          </button>
        </form>
      </div>

      {/* Admin Users Table Section */}
      <div style={tableContainerStyle}>
        <h2 style={{ marginBottom: "20px", color: "#1a202c" }}>Admin Users</h2>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Role</th>
            </tr>
          </thead>

          <tbody>
            {admins.length === 0 ? (
              <tr>
                <td colSpan="2" style={{ ...tdStyle, textAlign: "center", color: "#a0aec0" }}>
                  No admin users found.
                </td>
              </tr>
            ) : (
              admins.map((admin, index) => (
                <tr
                  key={admin._id || index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#f7fafc",
                  }}
                >
                  <td style={tdStyle}>{admin.Email}</td>
                  <td style={tdStyle}>
                    <span style={badgeStyle}>{admin.role}</span>
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