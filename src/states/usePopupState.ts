import { useState } from 'react';

export const usePopupState = (): [boolean, () => void, () => void] => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const openPopup = () => {
    setShowPopup(true);
    sessionStorage.setItem('popupShown', 'true');
  };

  const closePopup = () => {
    setShowPopup(false);
    sessionStorage.removeItem('popupShown');
  };

  return [showPopup, openPopup, closePopup];
};