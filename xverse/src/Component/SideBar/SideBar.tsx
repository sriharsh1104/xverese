import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SideBar.css';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();  // To highlight the active item

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <aside className="sidebar">
      <ul>
        <li className={`sidebar-item ${isActive('/dashboard')}`} onClick={() => navigate('/dashboard')}>
          <i className="fas fa-tachometer-alt"></i> Dashboard
        </li>
        <li className={`sidebar-item ${isActive('/profile')}`} onClick={() => navigate('/profile')}>
          <i className="fas fa-user"></i> Profile
        </li>
        <li className={`sidebar-item ${isActive('/settings')}`} onClick={() => navigate('/settings')}>
          <i className="fas fa-cogs"></i> Settings
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
