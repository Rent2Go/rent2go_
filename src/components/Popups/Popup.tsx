import React from "react";
import "./popup.css";
import { IoMdCloseCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const { t } = useTranslation();
  return (
    <div className="popup shadow-rounded-box">
      <div className="actionContent">
       
        <button title="Kapat" onClick={onClose} className="btn justify-right">
          <IoMdCloseCircle />
        </button>
      </div>
      <div className="popup-content">
        <p>{t("popupFirst")}</p>
        <p>{t("popupSecond")}</p>
        <p>{t("popupThird")}</p>
      </div>
    </div>
  );
};

export default Popup;
