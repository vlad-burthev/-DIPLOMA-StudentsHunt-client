import styles from "../sign-up/styles.module.scss";
import LoginForm from "./login-form/login-form";

const SignInPage = () => {
  return (
    <div className={styles['"sign-up"']}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["steps"]}>
            <h2>Привіт, ласкаво просимо!</h2>
            <p>
              Увійшовши або зареєструвавшись під своїм обліковим записом, ви
              можете отримати всі функції тут.
            </p>
            <LoginForm />
          </div>
          <div className={styles["banner"]}>
            <h2>Students Hunt</h2>
            <p>
              Ваша кар'єра - гарантована на нашій платформі працевлаштування
            </p>
            <p>
              Розпочніть свою нову кар'єру з нами, скориставшись послугами, які
              ми надаємо.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
