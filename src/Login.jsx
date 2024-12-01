import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();


  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { name, password } = data;
    try {
      const { data: loggedInUser } = await axios.post("/login", {
        name,
        password,
      });
      if (loggedInUser.error) {
        toast.error(loggedInUser.error);
      } else {
        setData({});
        toast.success("User logged in, Welcome!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="authenticate d-flex justify-content-center mt-5">
      <div className="register h-75 w-50 pt-3 mt-5 bg-dark rounded-4">
      <h2 className="text-center pt-5  text-white"> SignIn</h2>
        <form onSubmit={loginUser} className="needs-validation" noValidate>
          <div className="mb-3 mt-5 d-flex flex-column align-items-center">
            <label htmlFor="formGroupExampleInput" className="form-label text-white">
              Username
            </label>
            <input
              type="text"
              className="form-control w-50"
              id="formGroupExampleInput"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Enter Username"
              required
            />
            <div className="invalid-feedback">Username is required</div>
          </div>

          <div className="mb-3 d-flex flex-column align-items-center">
            <label htmlFor="formGroupExampleInput3" className="form-label text-white">
              Password
            </label>
            <input
              type="password"
              className="form-control w-50"
              id="formGroupExampleInput3"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Enter Password"
              required
            />
            <div className="invalid-feedback">Password is required</div>
          </div>
          <div className="d-grid col-6 mx-auto pt-3">
            <button className="btn btn-outline-secondary mb-4 text-white" type="submit">
              Login &nbsp; <FontAwesomeIcon icon={faRightToBracket} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
