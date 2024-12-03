import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <div className="sidebar-item" onClick={() => navigate('/dashboard')}>
        Dashboard
      </div>
      <div className="sidebar-item" onClick={() => navigate('/profile')}>
        Profile
      </div>
      <div className="sidebar-item" onClick={() => navigate('/settings')}>
        Settings
      </div>
    </aside>
  );
};

export default Sidebar;
