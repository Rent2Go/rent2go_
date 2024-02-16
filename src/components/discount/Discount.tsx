import React, { useState } from 'react';
import './style.css'

interface DiscountCodeProps {
  onApplyDiscount: (discountCode: string) => void;
}

const DiscountCode: React.FC<DiscountCodeProps> = ({ onApplyDiscount }) => {
  const [discountCode, setDiscountCode] = useState('');

  const handleApplyDiscount = () => {
    onApplyDiscount(discountCode);
    setDiscountCode('');
  };

  return (
    <div className="discount-code">
      <label htmlFor="discount-code-input">Enter your discount code:</label>
      <input
        type="text"
        id="discount-code-input"
        name="discount-code"
        value={discountCode}
        onChange={(e) => setDiscountCode(e.target.value)}
      />
      <button onClick={handleApplyDiscount} disabled={!discountCode}>
        Apply
      </button>
    </div>
  );
};

export default DiscountCode;