import React from "react";
import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const ProfileIcon = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setDropdownOpen((dropdownOpen) => !dropdownOpen);
  };

  return (
    <div className='pa4 tc'>
      <Dropdown isOpen={dropdownOpen} toggle={handleToggle}>
        <DropdownToggle data-toggle='dropdown' tag='span'>
          <img
            src='http://tachyons.io/img/logo.jpg'
            className='br-100 ba h3 w3 dib'
            alt='avatar'
          />
        </DropdownToggle>
        <DropdownMenu
          className='b--transparent shadow-5'
          style={{
            marginTop: "20px",
            backgroundColor: "rgba(255,255,255, 0.5)",
          }}
        >
          <DropdownItem>View Profile</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ProfileIcon;
