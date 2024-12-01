import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("User Registered Successfully!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="authenticate d-flex justify-content-center mt-5">
      <div className="register h-75 w-50 mt-5 bg-dark rounded-4">
        <h2 className="text-center pt-5  text-white"> SignUp</h2>
        <form onSubmit={registerUser} className="needs-validation" noValidate>
          <div className="mb-3 mt-5 d-flex flex-column align-items-center">
            <label
              htmlFor="formGroupExampleInput"
              className="form-label text-white"
            >
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
            <label
              htmlFor="formGroupExampleInput2"
              className="form-label text-white"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control w-50"
              id="formGroupExampleInput2"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Enter Email Address"
              required
            />
            <div className="invalid-feedback">
              Please enter a valid email address
            </div>
          </div>
          <div className="mb-3 d-flex flex-column align-items-center">
            <label
              htmlFor="formGroupExampleInput3"
              className="form-label text-white"
            >
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
            <button
              className="btn btn-outline-secondary mb-4 text-white"
              type="submit"
            >
              Register &nbsp; <FontAwesomeIcon icon={faUserPlus} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
