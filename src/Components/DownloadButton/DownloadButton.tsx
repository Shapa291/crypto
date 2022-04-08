import "./DownloadButton.scss";
import { IText } from "./Interfaces";

function DownloadButton({text} : IText) {
  return (
    <div className="buttonDiv">
      <button className="downloadButton">download {text}</button>
    </div>
  );
}

export default DownloadButton;
