import clsx from "clsx";
import type { FC, HTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return <nav className={clsx(styles["navbar"], className)}>navBar</nav>;
};

export default Navbar;
