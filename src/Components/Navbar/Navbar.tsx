import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import LogModal from "../Modals/LogModal";
import SignModal from "../Modals/SignModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/rootReducer";
import { logOutUser } from "../../Redux/actions";

function Navbar() {
  const [showLogButton, setShowLogButton] = useState(false);
  const [showSignButton, setShowSignButton] = useState(false);

  const handleShowLog = () => setShowLogButton(true);
  const handleCloseLog = () => setShowLogButton(false);

  const handleShowSign = () => setShowSignButton(true);
  const handleCloseSign = () => setShowSignButton(false);

  const dispatch = useDispatch()
  const token = useSelector((state : RootState) => state.user.token)

  return (
    <div className="navbar">
      <div className="container">
        <ul className="toolbar">
          <ul className="navigation" id="toolbarElement">
            <li>
              <Link className="navbarLink" to="/">
                Home
              </Link>
            </li>
            {token ?
            <li>
              <Link className="navbarLink" to="/main">
                Main
              </Link>
            </li>
            :
            <li></li>  
          }
          </ul>

          <ul className="auth" id="toolbarElement">
            {!token ? (
              <>
                <li id="log_in" onClick={handleShowLog}>
                  Log in
                </li>
                <li id="sign_in" onClick={handleShowSign}>
                  Sign in
                </li>
              </>
            ) : (
              <li id="sign_in" onClick={()=> dispatch(logOutUser())}><Link className="navbarLink" to="/">log out</Link></li>
            )}
          </ul>
        </ul>

        {showLogButton && <LogModal onHide={handleCloseLog} />}
        {showSignButton && <SignModal onHide={handleCloseSign} />}
      </div>
    </div>
  );
}

export default Navbar;
