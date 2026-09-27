import React, { ReactNode } from 'react';

// Fallback local wrapper so the app still compiles when the wallet context
// provider is not present yet. Replace this with the real provider later.
const WalletContextProvider = ({ children }: { children: ReactNode }) => <>{children}</>;

interface Props {
  children: ReactNode;
}

export default function ClientWalletProvider({ children }: Props) {
  return (
    <WalletContextProvider>
      {children}
    </WalletContextProvider>
  );
}