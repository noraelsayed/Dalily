"use client";
import styles from "./Slide.module.css";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaUsersGear, FaStar } from "react-icons/fa6";
import { MdCategory, MdSettings, MdLogout } from "react-icons/md";
import { IoListSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { usePathname } from "next/navigation";

const Slide = () => {
  const pathname = usePathname();

  return (
    <div className={styles.slide}>
      <h3>Dalily</h3>
      <ul>
        <Link href="/">
          <li className={pathname === "/" ? styles.isActive : ""}>
            <FaHome className={styles.icons} />
            Home
          </li>
        </Link>
        <Link href="/Users">
          <li className={pathname === "/Users" ? styles.isActive : ""}>
            <FaUsersGear className={styles.icons} />
            Users
          </li>
        </Link>
        <Link href="/Categories">
          <li className={pathname === "/Categories" ? styles.isActive : ""}>
            <MdCategory className={styles.icons} />
            Categories
          </li>
        </Link>
        <Link href="/Items">
          <li className={pathname === "/Items" ? styles.isActive : ""}>
            <IoListSharp className={styles.icons} />
            Lists
          </li>
        </Link>
        <Link href="/Reviews">
          <li className={pathname === "/Reviews" ? styles.isActive : ""}>
            <FaStar className={styles.icons} />
            Reviews
          </li>
        </Link>
        <Link href="#">
          <li>
            <ImProfile className={styles.icons} />
            Profile
          </li>
        </Link>
        <Link href="#">
          <li>
            <MdSettings className={styles.icons} />
            Settings
          </li>
        </Link>
        <Link href="#">
          <li>
            <MdLogout className={styles.icons} />
            Logout
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Slide;
