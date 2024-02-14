import React, { createContext, useContext, useState } from 'react';

type PaymentContextType = {
  selectedPaymentMethod: string | null;
  setSelectedPaymentMethod: (method: string) => void;
};

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const usePaymentContext = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePaymentContext must be used within a PaymentProvider');
  }
  return context;
};

interface PaymentProviderProps {
  children: React.ReactNode;
}

export const PaymentProvider: React.FC<PaymentProviderProps> = ({ children }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  return (
    <PaymentContext.Provider value={{ selectedPaymentMethod, setSelectedPaymentMethod }}>
      {children}
    </PaymentContext.Provider>
  );
};