import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import photo from "../../assets/img/profile-photo-1.jpg";
import "./header.scss";

const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} />;

export default function Header() {
  const sampleUser = {
    name: "Amy",
    img: photo,
  };
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="header__div">
      <div className="user">
        <div className="avatar__div">
          <img src={sampleUser.img} alt="userAvatar" />
        </div>
        <div className="name__div">
          <p>{sampleUser.name}</p>
        </div>
      </div>
      <div className="logoutBtn">
        <button onClick={handleLeaveChat}>{logoutIcon}</button>
      </div>
    </div>
  );
}
