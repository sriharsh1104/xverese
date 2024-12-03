import React, { ReactNode } from 'react';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/SideBar/SideBar';
// import "./MainLayout.css"
interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header onConnectWallet={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
