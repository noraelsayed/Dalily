"use client";
import styles from "./header.module.css";
import Link from "next/link";
import { MdCategory, MdLogout, MdSettings } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { FaHome, FaStar } from "react-icons/fa";
import { IoListSharp } from "react-icons/io5";
import { FaUsersGear } from "react-icons/fa6";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isopen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <header>
      <div className={styles.wapper}>
        <input type="search" placeholder="Search" className={styles.search} />
        <div className={styles.user}>
          <p>Welcome User</p>
        </div>
        <RiMenu2Line
          className={styles.Menu}
          onClick={() => setIsOpen(!isopen)}
        />
        <div className={`${styles.Menu_Mobile} ${isopen && styles.Open_Menu}`}>
          <div
            className={styles.overLay}
            onClick={() => setIsOpen(false)}
          ></div>
          <div className={styles.ListMenu}>
            <h3>Dalily</h3>
            <ul>
              <Link href="/" onClick={() => setIsOpen(false)}>
                <li className={pathname === "/" ? styles.isActive : ""}>
                  <FaHome className={styles.icons} />
                  Home
                </li>
              </Link>
              <Link href="/Users" onClick={() => setIsOpen(false)}>
                <li className={pathname === "/Users" ? styles.isActive : ""}>
                  <FaUsersGear className={styles.icons} />
                  Users
                </li>
              </Link>
              <Link href="/Categories" onClick={() => setIsOpen(false)}>
                <li className={pathname === "/Categories" ? styles.isActive : ""}>
                  <MdCategory className={styles.icons} />
                  Categories
                </li>
              </Link>
              <Link href="/Items" onClick={() => setIsOpen(false)}>
                <li className={pathname === "/Items" ? styles.isActive : ""}>
                  <IoListSharp className={styles.icons} />
                  Lists
                </li>
              </Link>
              <Link href="/Reviews" onClick={() => setIsOpen(false)}>
                <li className={pathname === "/Reviews" ? styles.isActive : ""}>
                  <FaStar className={styles.icons} />
                  Reviews
                </li>
              </Link>
              <Link href="#" onClick={() => setIsOpen(false)}>
                <li>
                  <ImProfile className={styles.icons} />
                  Profile
                </li>
              </Link>
              <Link href="#" onClick={() => setIsOpen(false)}>
                <li>
                  <MdSettings className={styles.icons} />
                  Settings
                </li>
              </Link>
              <Link href="#" onClick={() => setIsOpen(false)}>
                <li>
                  <MdLogout className={styles.icons} />
                  Logout
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
