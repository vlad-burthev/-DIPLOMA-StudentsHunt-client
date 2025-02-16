import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";
import Header from "./header/header";
import Navbar from "./navbar/navbar";
import Main from "./main/main";

const Layout = () => {
  return (
    <div className={styles["wrapper"]}>
      <Header className={styles["header"]} />

      <Navbar className={styles["navbar"]} />

      <Main className={styles["main"]}>
        <Outlet />
      </Main>
    </div>
  );
};
export default Layout;
