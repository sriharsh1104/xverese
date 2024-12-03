import React, { useState } from 'react';
import './Header.css';

interface HeaderProps {
  onConnectWallet: () => void;
}

const Header: React.FC<HeaderProps> = ({ onConnectWallet }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Handle opening/closing the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle navigation actions
  const handleProfile = () => {
    console.log('Navigating to Profile');
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  const handleLogout = () => {
    console.log('Logging out');
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <header className="header">
      <h1>Xverse Wallet Integration</h1>
      <div className="header-right">
        <button className="connect-wallet-button" onClick={onConnectWallet}>
          Connect Wallet
        </button>

        <div className="profile-menu">
          <div className="circle-icon" onClick={toggleDropdown}>
            <span>👤</span>
          </div>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={handleProfile} className="dropdown-item">
                Profile
              </button>
              <button onClick={handleLogout} className="dropdown-item">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
