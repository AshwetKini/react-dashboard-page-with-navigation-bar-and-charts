import React from 'react';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsPeopleFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
      {/* Sidebar Header */}
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> TruSpirit
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      {/* Sidebar Items */}
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="/dashboard">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/leads">
            <BsFillArchiveFill className="icon" /> Leads
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/customers">
            <BsPeopleFill className="icon" /> Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/reports">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/settings">
            <BsFillGearFill className="icon" /> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
