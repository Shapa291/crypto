import { useState } from "react";
import { createPortal } from "react-dom";
import { RegisterUserInDataBase } from "../../API/UsersReq";
import checkIfPasswordAreEqual from "../../HelpFunctions/ValidatePassword";
import useKeyPress from "../../Hooks/UseKeyPress";
import usePortalForModals from "../../Hooks/UsePortalForModals";
import "./LogModal.scss";

const modalElement = document.querySelector("#modal");

const LogModal = ({ onHide }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const element = usePortalForModals(modalElement);
  useKeyPress("Escape", onHide);

  const setEmailValue = (event) => {
    setEmail(event.target.value);
  };

  const setPasswordValue = (event) => {
    setPassword(event.target.value);
  };

  const setConfirmPasswordValue = (event) => {
    setConfirmPassword(event.target.value);
  };

  const getInputValues = () => {
    console.log("Password ", password, " Email ", email);
    RegisterUserInDataBase({password, email}).then((res)=>{
      console.log(res.data);
    })
    onHide();
    setConfirmPassword("");
    setEmail("");
    setPassword("");
  };

  const validateState = checkIfPasswordAreEqual(
    password,
    email,
    confirmPassword
  );

  return createPortal(
    <div className="modalContainer" onClick={onHide}>
      <div
        className="modalWindow"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <div className="header">
          <button onClick={onHide} className="closeButton">
            Close
          </button>
          <h1 className="headerFont">Log in</h1>
        </div>
        <div className="body">
          <form className="form">
            <label htmlFor="femail">Email</label>
            <input
              type="email"
              id="femail"
              name="femail"
              value={email}
              onChange={setEmailValue}
              required
            />
            <label htmlFor="fpassword">Password</label>
            <input
              type="password"
              name="fpassword"
              id="fpassword"
              onChange={setPasswordValue}
              required
              minLength="3"
              maxLength="15"
            />
            <label htmlFor="fconfirmPassword">Confirm password</label>
            <input
              type="password"
              name="fconfirmPassword"
              id="fconfirmPassword"
              onChange={setConfirmPasswordValue}
              required
            />
            <button
              disabled={!validateState}
              className="confirmButton"
              onClick={getInputValues}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>,
    element
  );
};

export default LogModal;
