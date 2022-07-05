import { useState } from 'react';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { SidebarData } from './SidebarData';

function Navbar({ nome }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const logout = () => localStorage.clear()

  const styles = {
    navbar: {
      backgroundColor: '#01b245',
      height: "55",
      display: 'flex',
      alignItems: 'center',
    },
    headerApp: {
      fontFamily: "'Lato', sans-serif",
      color: 'white',
    },
    menuBars: {
      marginLeft: '2rem',
      fontSize: '2rem',
      background: 'none',
      marginTop: '1px'
    },
    navMenu: {
      zIndex: 1,
      backgroundColor: '#01c248',
      width: 250,
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      left: '-100%',
      transition: '850ms',
    },
    navMenuActive: {
      left: 0,
      transition: '350ms',
    },
    navMenuItems: {
      width: '100%',
    },
    navbarToggle: {
      backgroundColor: '#01c248',
      width: '100%',
      height: 80,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    '&:hover': {
      backgroundColor: '#01b315',
    },

  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div style={styles.navbar} className='navbar'>
          <Link to='#' style={styles.menuBars}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h3 style={styles.headerApp}>Academia</h3>
          <Link to='#' style={styles.menuBars}>
            <FaIcons.FaSignInAlt onClick={logout} />
          </Link>
        </div>
        {
          //style={sidebar ? styles.navMenuActive : styles.navMenu}
        }
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul style={styles.navMenuItems} onClick={showSidebar}>
            <li style={styles.navbarToggle}>
              <Link to='#' style={styles.menuBars}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

      </IconContext.Provider>
    </>
  );
}

export default Navbar;
