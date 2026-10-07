function Hello() {
  const navigate = useNavigate();

  // Existing states
  const [signIn, setSignIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // New states for Registration & Mode Toggle
  const [isRegistering, setIsRegistering] = useState(false);
  const [phone, setPhone] = useState("");

  // Existing Login function
  const login = async () => {
    try {
      const response = await fetch("https://meba-api.onrender.com/Vs/API/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Email: email, Password: password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
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
      console.error(error);
      alert("Login failed");
    }
  };

  // New Registration function
  const register = async () => {
    try {
      const response = await fetch("https://meba-api.onrender.com/Vs/API/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Email: email,
          Phone: phone,
          Password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("Registration successful! Please log in.");
      setIsRegistering(false); // Switch back to login view after successful registration
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  // Reset form fields when closing modal
  const handleCloseModal = () => {
    setSignIn(false);
    setIsRegistering(false);
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <>
      {/* Rest of your JSX header, menu, food list, and cart... */}

      {/* Auth Modal Popup */}
      {signIn && (
        <div style={styles.overlayStyle}>
          <div style={styles.modalStyle}>
            <h2 className="text-xl font-bold mb-4">
              {isRegistering ? "Create Account" : "Login"}
            </h2>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              />

              {/* Phone field rendered only in Registration Mode */}
              {isRegistering && (
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              )}

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              />

              {/* Primary Action Button */}
              <button
                onClick={isRegistering ? register : login}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded-md transition-all mt-2"
              >
                {isRegistering ? "Sign Up" : "Login"}
              </button>

              {/* Toggle Link between Login & Register */}
              <p className="text-xs text-gray-600 mt-2">
                {isRegistering ? (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsRegistering(false)}
                      className="text-blue-600 font-bold underline cursor-pointer hover:text-blue-800"
                    >
                      Sign In
                    </button>
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsRegistering(true)}
                      className="text-blue-600 font-bold underline cursor-pointer hover:text-blue-800"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </p>

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-1.5 rounded-md text-xs mt-1"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}