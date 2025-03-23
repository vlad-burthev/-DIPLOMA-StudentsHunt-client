import clsx from "clsx";
import type { FC, HTMLAttributes } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { companyRoutes } from "../../../router/routes";

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={clsx(styles["navbar"], className)}>
      <ul>
        <li>
          <Link to={"/"}>Моя сторінка</Link>
        </li>
        <li>
          <Link to={companyRoutes.recruiters.administrationRecruiterRoute}>
            Рекрутери
          </Link>
        </li>
        <li>
          <Link to={"/"}>Вакансії</Link>
        </li>
        <li>
          <Link to={"/"}>Аналітика</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
