import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand: React.FC = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://res.cloudinary.com/monday-platform/image/upload/v1664909014/board_views_images/logos/1664909014502_95ee7001-f8ae-e0bd-56ee-3c77fdc2b4a7.png"
          alt="Ulta Media logo"
          width="122"
          height="36"
        />
      </NavLink>
    </div>
  );
};
