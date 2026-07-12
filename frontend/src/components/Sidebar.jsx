import { memo } from 'react';
import './Sidebar.css';

const navItems = [
  { icon: '🏠', label: 'Home' },
  { icon: '🔍', label: 'Explore' },
  { icon: '🔔', label: 'Notifications' },
  { icon: '✉️', label: 'Messages' },
  { icon: '🔖', label: 'Bookmarks' },
  { icon: '👤', label: 'Profile' },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {navItems.map(({ icon, label }) => (
          <button key={label} className="sidebar-item">
            <span className="sidebar-icon">{icon}</span>
            <span className="sidebar-label">{label}</span>
          </button>
        ))}
      </nav>
      <button className="sidebar-post-btn">Post</button>
    </aside>
  );
};

export default memo(Sidebar);
