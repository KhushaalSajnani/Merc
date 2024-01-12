'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import './CSSheader.css'

import ProductsMenuApi from "./productsMenuApi"
import ServicesMenuApi from "./servicesMenuApi"
import CompanyMenuApi from "./companyMenuApi"

import SingleColumnMenu from "./SingleColumnMenu";
import svg from "../../../public/assets/logos/mercury-official-logo.svg"

export default function TopNav() {
    const [productsMenuData] = useState(ProductsMenuApi);  
    const [servicesMenuData] = useState(ServicesMenuApi);
    const [companyMenuData] = useState(CompanyMenuApi);

    //const menu = document.querySelector(".menu");
    let subMenu;

    const clickedMenuMain = (e) => {
        if(!document.querySelector(".menu").classList.contains("active")){
            return;
        }
        if(e.target.closest(".menu-item-has-children")){
            const hasChildren = e.target.closest(".menu-item-has-children");
            showSubMenu(hasChildren);
        }
    };

    function toggleMenu(){
        console.log("inside toggle menu");
        document.querySelector(".menu").classList.toggle("active");
 	    document.querySelector(".menu-overlay").classList.toggle("active");
    }

    function showSubMenu(hasChildren){
        subMenu = hasChildren.querySelector(".sub-menu");
        subMenu.classList.add("active");
        subMenu.style.animation = "slideLeft 0.5s ease forwards";
        const menuTitle = hasChildren.querySelector("span").parentNode.childNodes[0].textContent;
        document.querySelector(".menu").querySelector(".current-menu-title").innerHTML=menuTitle;
        document.querySelector(".menu").querySelector(".mobile-menu-head").classList.add("active");
    }

    function  hideSubMenu(){  
        subMenu.style.animation = "slideRight 0.5s ease forwards";
        setTimeout(() =>{
        subMenu.classList.remove("active");	
        },0); 
        document.querySelector(".menu").querySelector(".current-menu-title").innerHTML="";
        document.querySelector(".menu").querySelector(".mobile-menu-head").classList.remove("active");
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                if (document.querySelector(".menu").classList.contains("active")) {
                    toggleMenu();
                }
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            // Cleanup the event listener when the component is unmounted
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <header className="header" id="main_header">
            <div className="container w-full max-parent-grid-container-width m-auto">
                <div className="row v-center flex-row justify-between">
                    <div className="header-item item-left flex-row">
                        <div className="mobile-menu-trigger" onClick={toggleMenu}><span /></div>
                        <div className="logo">
                            <Link href="/">
                                <div
                                    style={{ width: 220, height: 80 }}
                                    className="logo-container cursor-pointer"
                                >
                                    <img
                                        src={svg.src}
                                        style={{ objectFit: "contain", width: "100%", height: "100%" }}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* <button
                    type="button"
                    className="membership-button cursor-pointer sm-screen-btn display-block"
                    >
                    Contact Us
                    </button> */}
                    {/* menu start here */}
                    <div className="header-item item-center">
                        <div className="menu-overlay" onClick={toggleMenu}></div>
                        <nav className="menu" onClick ={clickedMenuMain}>
                            <div className="mobile-menu-head">
                            <div className="go-back" onClick={hideSubMenu}>
                                <span className="bold">←</span>
                            </div>
                            <div className="current-menu-title" />
                            <div className="mobile-menu-close" onClick={toggleMenu}>×</div>
                            </div>
                            <ul className="menu-main">
                                {/* <li className="menu-item-has-no-children" style={{ marginTop: 10 }}>
                                    <Link href="/">Home</Link>
                                </li> */}
                                <li className="menu-item-has-children">
                                    {/* <a href="#"> */}
                                    {/* <Link href="/"> */}
                                        Products <span className="menu-nav-arrow bold">↓</span>
                                    {/* </Link> */}
                                    {/* </a> */}
                                    <div className="sub-menu single-column-menu">
                                        <ul>
                                            <SingleColumnMenu menuData={productsMenuData} />
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item-has-children">
                                    {/* <Link href="/services"> */}
                                    {/* <Link href="/services"> */}
                                        Services <span className="menu-nav-arrow bold">↓</span>
                                    {/* </Link> */}
                                    {/* </Link> */}
                                    <div className="sub-menu single-column-menu">
                                        <ul>
                                            <SingleColumnMenu menuData={servicesMenuData} />
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item-has-children">
                                    {/* <a href="#"> */}
                                    {/* <Link href="#"> */}
                                        Company <span className="menu-nav-arrow bold">↓</span>
                                    {/* </Link> */}
                                    {/* </a> */}
                                    <div className="sub-menu single-column-menu">
                                        <ul>
                                            <SingleColumnMenu menuData={companyMenuData} />
                                        </ul>
                                    </div>
                                </li>
                                <Link href="/pages/contact-us">
                                    <button
                                        type="button"
                                        className="w-max bg-black text-white rounded-md p-4 cursor-pointer"
                                    >
                                        Contact Us
                                    </button>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            </header>
        </>
    );
}
