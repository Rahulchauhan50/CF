import Link from "next/link";
import { useState, useEffect } from "react";
import appData from "@data/app.json";
import { headerSticky } from "@common/utilits";

const DefaultHeader = ({ darkHeader, cartButton }) => {
  const navItems = [];
  const clickedDesktopMenu = (e) => {
  
    e.preventDefault();
    desktopMenuToggle(!desktopMenu);
    
    const menuPopup = document.querySelector('.onovo-menu-popup');
    const menuContainer = document.querySelector('.onovo-menu-container');
    const menuBody = document.querySelector('body');
    const menuHeader = document.querySelector('.onovo-header');
    const menuButton = document.querySelector('.onovo-menu-btn');

    if ( desktopMenu ) {
			menuBody.classList.remove('onovo--noscroll');
			menuHeader.classList.remove('header--active');
			menuPopup.classList.remove('menu--ready');
			menuContainer.classList.add('onovo--noscroll');
      menuButton.parentNode.classList.add('onovo--notouch');
			let timer1 = setTimeout(function(){
				menuPopup.classList.remove('menu--open');
			}, 300);
			let timer2 = setTimeout(function(){
				menuButton.parentNode.classList.remove('onovo--notouch');
				menuPopup.classList.remove('menu--visible');
			}, 1600);
		} else {
			menuBody.classList.add('onovo--noscroll');
			menuHeader.classList.add('header--active');
			menuPopup.classList.add('menu--visible');
			menuPopup.classList.add('menu--open');
      menuButton.parentNode.classList.add('onovo--notouch');
			let timer3 = setTimeout(function(){
				menuButton.parentNode.classList.remove('onovo--notouch');
				menuContainer.classList.remove('onovo--noscroll');
				menuPopup.classList.add('menu--ready');
			}, 600);
		}

  }
  appData.header.menu.forEach((item, index) => {
    let s_class1 = 'dropdown-link';

    if ( item.children != 0 ) {
      s_class1 += 'menu-item-has-children';
    }
    let newobj = Object.assign({}, item, { "classes" :  s_class1 });
    navItems.push(newobj);
    
  });
  
  const [desktopMenu, desktopMenuToggle] = useState(false);


  const clickedMobileMenuItemParent = (e) => {
    e.preventDefault();
    e.target.parentNode.classList.toggle('opened');
  }

  useEffect(() => {
    headerSticky();
  }, []);

  return (
    <>
      {/* Header */}
      <header className={darkHeader ? "onovo-header" : "onovo-header header--white"}>
        <div className="header--builder">
          <div className="container-fluid customHeader">
            <div className="row">
              <div className=" col-sm-4 col-md-4 col-lg-3 align-self-center">

                {/* Logo */}
                {/* style={{"maxWidth": "300px"}} */}
                <div className="onovo-logo-image" >
                  <Link href="/">
                    <img src={appData.header.logo.image} alt={appData.header.logo.alt} />
                    <img className="logo--white" src={appData.header.logo.image_white} alt={appData.header.logo.alt} />
                  </Link>
                </div>

              </div>
              <div className=" col-sm-2 col-md-4 col-lg-5 align-self-center align-center">

                {/* Menu Hamburger */}
                {/* <a href="#" className={desktopMenu ? "onovo-menu-btn btn--active" : "onovo-menu-btn"} onClick={ (e) => clickedDesktopMenu(e) }><span /></a> */}

                <div className="onovo-menu-popup align-left">
                  <div className="onovo-menu-overlay" />
                  <div className="onovo-menu-overlay-after" />

                  <div className="onovo-menu-container onovo--noscroll">
                    <div className="container sidebardown">
                      <div className="onovo-menu">
                        <ul className="onovo-menu-nav">
                          {navItems.map((item, key) => (
                          <li key={`header-nav-item-${key}`} className={item.classes}>
                            <Link className={item.children ? "onovo-lnk lnk--active onovo-dropdown-toggle" : "onovo-lnk lnk--active"} onClick={item.children != 0 ? (e) => clickedMobileMenuItemParent(e) : ""} href={item.link}>{item.label}</Link>
                            {item.children != 0 &&
                            <i className="icon fas fa-chevron-down" />
                            }
                            {item.children != 0 &&
                            <ul className="sub-menu">
                              {item.children.map((subitem, key) => (
                              <li key={`header-nav-sub-item-${key}`}>
                                <Link className="onovo-lnk lnk--active" href={subitem.link}>{subitem.label}</Link>
                              </li>
                              ))}
                            </ul>
                            }
                          </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className=" col-sm-4 col-md-4 col-lg-4 align-self-center align-right headercta">
                  {/* Button */}
                  {/* <Link className="onovo-head-btn onovo-hover-btn" href={appData.header.button.link}>
                    <span>
                      <span className="onovo-lnk lnk--active">{appData.header.button.label}</span>
                    </span>
                    <i className="arrow">
                      <span />
                    </i>
                  </Link> */}
                  <a className="CTA_buttons_header" href="/contact">Contact Us</a>
                  {/* <a className="CTA_buttons_header" href="#">Know More</a> */}
                
                 {/* Menu Hamburger */}
                 {/* <a href="#" className={desktopMenu ? "onovo-menu-btn btn--active" : "onovo-menu-btn"} onClick={ (e) => clickedDesktopMenu(e) }><span /><span /></a> */}
                  <a href="#" className={desktopMenu ? "onovo-menu-btn btn--active" : "onovo-menu-btn"} onClick={ (e) => clickedDesktopMenu(e) }>
                      <span style={{height:'2px'}}></span>
                      <span style={{height:'2px'}}></span>
                      <span style={{height:'2px'}}></span>
                      {/* <span></span> */}
                  </a>

                  <div className="onovo-menu-popup align-left">
                    <div className="onovo-menu-overlay" />
                    <div className="onovo-menu-overlay-after" />

                    <div className="onovo-menu-container onovo--noscroll">
                      <div className="container">
                        <div className="onovo-menu">
                          <ul className="onovo-menu-nav">
                            {navItems.map((item, key) => (
                            <li key={`header-nav-item-${key}`} className={item.classes} onClick={(e)=>clickedDesktopMenu(e)}>
                              <Link className={item.children ? "onovo-lnk lnk--active onovo-dropdown-toggle" : "onovo-lnk lnk--active"} onClick={item.children != 0 ? (e) => clickedMobileMenuItemParent(e) : ""} href={item.link}>{item.label}</Link>
                              {item.children != 0 &&
                              <i className="icon fas fa-chevron-down" />
                              }
                              {item.children != 0 &&
                              <ul className="sub-menu">
                                {item.children.map((subitem, key) => (
                                <li key={`header-nav-sub-item-${key}`}>
                                  <Link className="onovo-lnk lnk--active" href={subitem.link}>{subitem.label}</Link>
                                </li>
                                ))}
                              </ul>
                              }
                            </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default DefaultHeader;
