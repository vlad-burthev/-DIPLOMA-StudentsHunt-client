import clsx from "clsx";
import type { FC, HTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface HeaderProps extends HTMLAttributes<HTMLHeadElement> {}

const Header: FC<HeaderProps> = ({ className }) => {
  return <header className={clsx(styles["header"], className)}>Header</header>;
};

export default Header;
