import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./sendBtn.scss";

export default function SendBtn() {
  return (
    <button className="sendBtn">
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
}
