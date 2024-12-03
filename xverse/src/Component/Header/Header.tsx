import React from 'react';
import './Header.css';

interface HeaderProps {
  onConnectWallet: () => void;
}

const Header: React.FC<HeaderProps> = ({ onConnectWallet }) => {
  return (
    <header className="header">
      <h1>Xverse Wallet Integration</h1>
      <button className="connect-wallet-button" onClick={onConnectWallet}>
        Connect Wallet
      </button>
    </header>
  );
};

export default Header;
