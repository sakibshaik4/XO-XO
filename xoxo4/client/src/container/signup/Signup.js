import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import formatData from "../../util/formatFormData";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const [reShowPassword, setReShowPassword] = useState(false);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      let data = formatData(event.target);
      if (data?.password?.length < 6) {
        alert("Password length must be atleast 6!");
      } else if (data?.password !== data?.rePassword) {
        alert("Password and Re-Password doesn't match!");
      } else {
        let result = await axios.post(
          "http://localhost:4000/user/add-user",
          data
        );
        alert(result?.data?.message);
        if (result?.data?.success) {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="vh-100 vw-100 signup bg-dark d-flex justify-content-center align-items-center p-5">
      <div className="square border rounded bg-light d-flex justify-content-center align-items-center flex-column">
        <form style={{ height: "100%", width: "100%" }} onSubmit={onFormSubmit}>
          <div className="d-flex justify-content-center align-itemms-center">
            <p className="signUpHeading h1 text-dark">SIGNUP</p>
          </div>
          <div className="signupMainFrom">
            <div className="form-floating m-3">
              <input
                name="name"
                id="nid"
                className="form-control"
                placeholder="NAME"
                required
              />
              <label htmlFor="nid">
                <b>NAME</b>
              </label>
            </div>
            <div className="form-floating m-3">
              <input
                name="phone"
                id="pid"
                className="form-control"
                placeholder="PHONE"
                required
                type="number"
              />
              <label htmlFor="pid">
                <b>PHONE</b>
              </label>
            </div>
            <div className="flex-row passwordDiv">
              <div className="form-floating m-3">
                <input
                  name="password"
                  id="passId"
                  className="form-control"
                  placeholder="********"
                  type={showPassword ? "text" : "password"}
                  required
                />
                <label htmlFor="passId">
                  <b>PASSWORD</b>
                </label>
              </div>
              <span
                className="passwordToggle"
                onClick={() => {
                  setshowPassword(!showPassword);
                }}
              >
                {showPassword ? (
                  <i className="bi bi-eye-fill"></i>
                ) : (
                  <i className="bi bi-eye-slash-fill"></i>
                )}
              </span>
            </div>

            <div className="flex-row passwordDiv">
              <div className="form-floating m-3">
                <input
                  name="rePassword"
                  id="rePassId"
                  className="form-control"
                  placeholder="********"
                  type={reShowPassword ? "text" : "password"}
                  required
                />
                <label htmlFor="rePassId">
                  <b>RE-PASSWORD</b>
                </label>
              </div>
              <span
                className="passwordToggle"
                onClick={() => {
                  setReShowPassword(!reShowPassword);
                }}
              >
                {reShowPassword ? (
                  <i className="bi bi-eye-fill"></i>
                ) : (
                  <i className="bi bi-eye-slash-fill"></i>
                )}
              </span>
            </div>
          </div>
          <div className="signUpFooter">
            <div className="m-3">
              <button className="w-100 btn btn-primary p-3 " type="submit">
                <b>SIGNUP</b>{" "}
              </button>
              <button
                className="w-100 btn btn-primary mt-3 p-3"
                onClick={() => {
                  navigate("/");
                }}
              >
                <b>LOGIN</b>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
