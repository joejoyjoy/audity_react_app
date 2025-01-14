import { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "context/theme/ThemeContext";
import { useTranslation } from "react-i18next";
import LogoLightTheme from "assets/img/png/logoAudityBlackTransp.png";
import LogoDarkTheme from "assets/img/png/logoAudityWhiteTransp.png";
import { FiMusic } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { IoHeadsetOutline } from "react-icons/io5";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { FaGuitar } from "react-icons/fa";
import { SlCompass } from "react-icons/sl";
// import { BsMusicPlayer } from "react-icons/bs";
import { message } from "antd";
import "./sidebarBComponentDesktop.scss";

const SidebarBComponentDesktop = () => {
  const { t } = useTranslation();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { isAuthenticated } = useAuth0()

  return (
    <nav className="side-bar">
      <div className="side-bar-header">
        <div className="side-bar-header__logo">
          <Link to={"/"}>
            <img src={theme === 'light' ? LogoLightTheme : LogoDarkTheme} alt="logo" />
          </Link>
        </div>
        <div className="side-bar-header__sections">
          <NavLink to={"/"} className="side-bar-header__sections--options">
            <div className="side-bar-header__sections--options__decoration"></div>
            <FiMusic
              size={20}
              className="side-bar-header__sections--options__icon"
            />
            <p>{t("sidebar_music")}</p>
          </NavLink>


          <Link to={"#"}
            className="side-bar-header__sections--options"
            onClick={() => setToggleDropdown(!toggleDropdown)}
          >
            <div className="side-bar-header__sections--options__decoration"></div>
            <SlCompass
              size={20}
              className="side-bar-header__sections--options__icon"
            />
            <p>{t("sidebar_explore")}</p>
          </Link>

          {toggleDropdown ? (
            <div>
              <div>
                <NavLink to={"/artists"} className="side-bar-header__sections--options">
                  <div className="side-bar-header__sections--options__decoration"></div>
                  <FaGuitar
                    size={15}
                    className="side-bar-header__sections--options__icon--dropdown"
                  />
                  <p className="side-bar-header__sections--options__icon--dropdown">{t("sidebar_explore_artist")}</p>
                </NavLink>
                <NavLink to={"/albums"} className="side-bar-header__sections--options">
                  <div className="side-bar-header__sections--options__decoration"></div>
                  <MdOutlineLibraryMusic
                    size={15}
                    className="side-bar-header__sections--options__icon--dropdown"
                    />
                  <p className="side-bar-header__sections--options__icon--dropdown">{t("sidebar_explore_album")}</p>
                </NavLink>
                <NavLink to={"/playlists"} className="side-bar-header__sections--options">
                  <div className="side-bar-header__sections--options__decoration"></div>
                  <IoHeadsetOutline
                    size={15}
                    className="side-bar-header__sections--options__icon--dropdown"
                    />
                  <p className="side-bar-header__sections--options__icon--dropdown">{t("sidebar_explore_playlist")}</p>
                </NavLink>
              </div>

            </div>
          ) : null}

          <NavLink
            to={"/library"}
            className="side-bar-header__sections--options"
            onClick={() => {
              !isAuthenticated && message.info('Login required')
            }}
            >
            <div className="side-bar-header__sections--options__decoration"></div>
            <VscLibrary
              size={20}
              className="side-bar-header__sections--options__icon"
              />
            <p>{t("sidebar_library")}</p>
          </NavLink>
          
              {/* <NavLink to={"/radio"} className="side-bar-header__sections--options">
                <div className="side-bar-header__sections--options__decoration"></div>
                <RiRadioLine
                  size={20}
                  className="side-bar-header__sections--options__icon"
                />
                <p>{t("sidebar_radio")}</p>
              </NavLink> */}

          {/* <NavLink
            to={"/studio"}
            className="side-bar-header__sections--options"
          >
            <div className="side-bar-header__sections--options__decoration"></div>
            <BsMusicPlayer
              size={20}
              className="side-bar-header__sections--options__icon"
            />
            <p>{t("sidebar_studio")}</p>
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};

export default SidebarBComponentDesktop;
