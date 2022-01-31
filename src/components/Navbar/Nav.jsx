import React, { useState } from "react";


import './Nav.scss';
import '../../App.scss';

import Hamburger from '@material-ui/icons/MenuRounded';
import SearchIcon from '@material-ui/icons/SearchRounded';
import CrossIcon from '@material-ui/icons/ClearRounded';
import HelpIcon from '@material-ui/icons/HelpOutlineRounded';
import SettingIcon from '@material-ui/icons/SettingsRounded';
import AppsIcon from '@material-ui/icons/AppsRounded';
import AccountIcon from '@material-ui/icons/AccountCircleRounded';

import GmailLogo from '../../assets/gmail-logo.png'

function Navbar() {
  const [search_query, setSearch_query] = useState("");

  const handleSearch = (evt) => {
    evt.preventDefault();
    alert(`Search ${search_query}`)
  }


  return (
    <div className="nav-main-div">
      <div className="left-icon-div center">

        <span className="ham-img-bg center">
          <Hamburger style={{ width: "1.8rem", height: "1.8rem" }} />
        </span>

        <span className="gmail-logo center">
          <img src="https://img.icons8.com/color/48/000000/gmail-new.png" />
        </span>
        <span className="gmail-txt ">Gmail</span>

      </div>

      <div className="search-div">

        <section className="icon-div">
          <SearchIcon style={{ width: "1.8rem", height: "1.8rem" }} />
        </section>
        <div className="input-div">
          <form onSubmit={handleSearch} >
            <input type="text" placeholder="Search mail" value={search_query} onChange={e => setSearch_query(e.target.value)} />
          </form>
        </div>
        <div className={`icon-div ${search_query.length > 0 ? "opacity-full" : "opacity-none"} `}>
          <CrossIcon style={{ width: "1.8rem", height: "1.8rem", cursor: "pointer" }} onClick={() => setSearch_query("")} />
        </div>

      </div>

      <div className="right-options-div">
        <HelpIcon />
        <SettingIcon />
        <AppsIcon />
        <AccountIcon />

      </div>

    </div>
  );
}

export default Navbar;