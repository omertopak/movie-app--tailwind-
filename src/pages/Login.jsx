import React from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div
        className={`mt-[3vh] mx-auto overflow-hidden relative w-[380px] h-[620px] rounded-[8px] bg-[#1c1c1c] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}>
        <form className="absolute inset-[2px] rounded-[8px] bg-gray-100 dark:bg-[#28292d] z-[10] flex flex-col py-[50px] px-[40px]">
          <h2 className="text-red-800 text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign in
          </h2>
          
          
          <div className="mt-16">
            <input name="floating_email" type="email" />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div>
            <input name="floating_password" type="password" />
            <label htmlFor="floating_password">Password</label>
          </div>
          <div className="flex justify-between text-red-900 font-semibold mt-8">
            <span href="#" className="hover:text-slate-400"> Forgot Password</span>
            <Link className="hover:text-slate-400">Sign Up</Link>
          </div>
          <button type="submit" className="btn-danger mt-20">
            Register
          </button>
          <button type="button" className="btn-danger flex justify-between items-center">
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

