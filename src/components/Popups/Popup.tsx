import React from "react";
import "./popup.css";
import { IoMdCloseCircle } from "react-icons/io";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="popup shadow-rounded-box">
      <div className="actionContent">
       
        <button title="Kapat" onClick={onClose} className="btn justify-right">
          <IoMdCloseCircle />
        </button>
      </div>
      <div className="popup-content">
        <p>Web Sitemiz Geliştirme Amaçlı Yayına Alınmıştır.</p>
        <p>Hiç bir şekilde gerçek bir kiralama işlemi yapılmamaktadır.</p>
        <p>Anlayışınız için teşekkür ederiz ...</p>
      </div>
    </div>
  );
};

export default Popup;
