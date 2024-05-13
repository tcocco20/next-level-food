"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./NavLink.module.css";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={
          pathname.startsWith(href)
            ? `${classes.link} ${classes.active}`
            : classes.link
        }
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
