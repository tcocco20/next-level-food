import Link from "next/link";
import React from "react";
import { Image } from "@nextui-org/image";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image loading="eager" src={logoImg.src} alt="Food on plate" />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <NavLink href="/meals">Browse Meals</NavLink>
            <NavLink href="/community">Foodies Community</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
