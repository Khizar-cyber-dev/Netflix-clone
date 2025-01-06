import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Login = ({ setNames }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const handlePasswordChange = (e) => {
    const input = e.target.value;
    setPassword(input);
    checkPasswordStrength(input);
  };

  const checkPasswordStrength = (password) => {
    let strength = "Weak";
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mediumPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    if (strongPasswordRegex.test(password)) {
      strength = "Strong";
    } else if (mediumPasswordRegex.test(password)) {
      strength = "Medium";
    } else {
      strength = "Weak";
    }

    setPasswordStrength(strength);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (passwordStrength === "Weak") {
      alert("Please choose a stronger password.");
      return;
    }

    localStorage.setItem("names", JSON.stringify(name));
    setNames(name);
    console.log("Posted");
    navigate("/home");
  };

  return (
    <div className="login h-[100vh]">
    <img src={logo} alt="Logo" className="login-icon w-[150px] p-4" />
    <div className="login-form w-[100%] max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded p-[60px] m-auto">
        <h1 className="texxt-md font-bold mb-[28px]">Sign In</h1>
        <div className="flex justify-center items-center">
            <div>
                <form onSubmit={handleSignIn} className="flex flex-col justify-center">
                    <input type="text" placeholder="Enter your Name" value={name} onChange={(e)=> setName(e.target.value)} className="w-100 h-[50px] bg-[#333] text-white my-[12px] mx-0 border-[1px] border-gray-500 outline-none py-[16px] px-[20px] text-md font-bold" required />
                    <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} className="w-100 h-[50px] bg-[#333] text-white my-[12px] mx-0 border-[1px] border-gray-500 outline-none py-[16px] px-[20px] text-md font-bold" required />
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} className="w-100 h-[50px] bg-[#333] text-white my-[12px] mx-0 border-[1px] border-gray-500 outline-none py-[16px] px-[20px] text-md font-bold" required />
                    <div className="password-strength mt-2 text-sm">
                        {password && (
                        <>
                            <p className={`${ passwordStrength==="Strong" ? "text-green-500" : passwordStrength==="Medium" ? "text-yellow-500" : "text-red-500" }`}>
                                Password Strength: {passwordStrength}
                            </p>
                            {passwordStrength === "Weak" && (
                            <p className="text-red-500">
                                Tip: Use at least 8 characters with uppercase, lowercase, numbers, and special symbols.
                            </p>
                            )}
                            </> )}
                    </div>
                    <button type="submit" className="block w-100 p-[16px] bg-[#e50914] rounded text-md mt-[20px] cursor-pointer">
                        Sign In
                    </button>
                    <div className="form-help flex items-center justify-between text-[#b3b3b3] mt-[20px]">
                        <p>Need help?</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  );
};

export default Login;
