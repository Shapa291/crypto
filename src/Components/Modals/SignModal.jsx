import { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { SignUserInDataBase } from "../../API/UsersReq";
import checkIfPasswordAreEqual from "../../HelpFunctions/ValidatePassword";
import useKeyPress from "../../Hooks/UseKeyPress";
import usePortalForModals from "../../Hooks/UsePortalForModals";
import { logInUser } from "../../Redux/actions";
import "./SignModal.scss";
const modalElement = document.querySelector("#modal");

const SignModal = ({ onHide }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch() 
  const element = usePortalForModals(modalElement);
  useKeyPress("Escape", onHide);

  const setEmailValue = (event) => {
    setEmail(event.target.value);
  };

  const setPasswordValue = (event) => {
    setPassword(event.target.value);
  };

  const getInputValues = () => {
    SignUserInDataBase({password, email}).then((res) => {
      console.log(res.data);
      dispatch(logInUser(res.data.token))
    })
    console.log("Password ", password, " Email ", email);
    onHide();
    setEmail("");
    setPassword("");
  };

  const validateState = checkIfPasswordAreEqual(password, email);

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
          <h1 className="headerFont">Sign in</h1>
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
              value={password}
              onChange={setPasswordValue}
              required
              minLength="3"
              maxLength="15"
            />
            <button
              disabled={!validateState}
              className="confirmButton"
              onClick={getInputValues}
            >
              sign in
            </button>
          </form>
        </div>
      </div>
    </div>,
    element
  );
};

export default SignModal;
