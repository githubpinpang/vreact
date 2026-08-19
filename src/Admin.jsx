import { BsDisplay } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

export default function Admin() {
  const admins ={
    display: "flex",
    flexDirection: 'column',
    backgroundColor: "pink",
    gap: '10px',
     borderRadius: '10px'

  };
  
  const adminP ={
   marginRight : '20px',
   right: "20px"
  }

  const profile ={
    display: "flex",
    marginRight: "20px",
    right: "20px",
    justifyContent: 'right'
  }

  const profileI ={
    height: "100px",
    width: "100px",
   borderRadius: "20%"
  }

  const one = {
    backgroundColor: "grey",
    height: '500px',
    borderRadius: '10px'
  };

  const two ={
    backgroundColor: "blue",
    height: '500px',
    borderRadius: '10px' 
  };

  const navs ={
   
    // backgroundColor: 'blue',
    display: 'flex',
    gap: '20px',
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    padding: "center"
  };

  const links={
   display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    height: "60px",
    width: "100px",
    border: "2px solid white",
    backgroundColor: "aliceblue",
    borderRadius: "20px"
  }

  const logouts={
    marginRight: "20px"
  }


  return (
    <>
    <div>
     <h1 style={{textAlign: "center"}}> Admin Home Page </h1> 
 
  <div className="profile" style={profile}>
   <div className="profiles" style={profileI}>
   <img src="Profile_avatar.png"  alt="Profile"
    style={{
      borderRadius: "50%",
      height: "100px",
      width: "100px"
    }}  />
    </div>  

    
      <div style={adminP}>  
        <select style={logouts}>
        <option value="logOut">Log Out</option>
        <option value="setting">Setting</option>
      </select>
     
       </div>
 </div> 


      <nav className="navs" style={navs}>
      <Link to="" style={links}>Home</Link> |
      <Link to="users" style={links}>Users</Link> |
      <Link to="menu" style={links}>Menu</Link> |
      <Link to="orders" style={links}> Orders</Link> 
     
      </nav>

     

      <Outlet />

    </div>

  
    </>
  );
}