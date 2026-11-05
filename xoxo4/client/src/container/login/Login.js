import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import formatData from "../../util/formatFormData";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);

  useEffect(() => {
    let userData = localStorage.getItem("userData");
    if (userData) {
      navigate("/home");
    }
  }, []);

  const onLoginSubmit = async (event) => {
    event?.preventDefault();
    let data = formatData(event.target);
    console.log(data);
    try {
      let result = await axios.post("http://localhost:4000/user/login", data);
      console.log("result ", result);
      alert(result?.data?.message);
      if (result?.data?.success) {
        navigate("/home");
        localStorage.setItem("userData", JSON.stringify(result?.data?.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login bg-dark d-flex justify-content-center align-items-center">
      <div className="square border rounded bg-light mt-5 d-flex justify-content-center align-items-center flex-column">
        <div className="d-flex justify-content-center align-itemms-center">
          <p className="h1 text-dark">LOGIN</p>
        </div>
        <form className="w-100" onSubmit={onLoginSubmit}>
          <div className="form-floating m-3">
            <input
              name="phone"
              id="pid"
              className="form-control"
              placeholder="PHONE"
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
          </div>
          <div className="mx-3">
            <button className="w-100 btn btn-primary py-3" type="submit">
              <b>LOGIN</b>
            </button>
            <button
              className="w-100 btn btn-primary mt-3 p-3"
              onClick={() => {
                navigate("/signup");
              }}
            >
              <b>SIGNUP</b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
