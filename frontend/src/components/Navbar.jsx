import { memo } from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
<div className="logo">logo here </div>
<div className="current_screen">posts</div>

<div className="notification">100</div>

    </div>
  );
};

export default memo(Navbar);