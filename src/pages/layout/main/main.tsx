import clsx from "clsx";
import type { FC, HTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface MainProps extends HTMLAttributes<HTMLDivElement> {}

const Main: FC<MainProps> = ({ className, children }) => {
  return (
    <main className={clsx(styles["main"], className)}>
      Main
      {children}
    </main>
  );
};

export default Main;
