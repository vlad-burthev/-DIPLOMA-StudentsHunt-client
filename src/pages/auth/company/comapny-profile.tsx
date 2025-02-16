import type { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { DefaultInput } from "../../../ui-kit/ui-input";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { publicRoutes } from "../../../router/routes";
import { ISignUpCompanyData } from "../../../interfaces/company";

interface Props {
  register: UseFormRegister<ISignUpCompanyData>;
  errors: FieldErrors<ISignUpCompanyData>;
  isLoading: boolean;
}

const CompanyProfile: FC<Props> = ({ register, errors, isLoading }) => {
  return (
    <>
      <div className={styles["input-wrapper"]}>
        <label htmlFor="">Email</label>
        <DefaultInput
          placeholder="example@gmail.com"
          {...register("email", {
            required: "Email обовʼязковий",
            minLength: {
              value: 3,
              message: "Email повинний містити мінімум 10 символи",
            },
            maxLength: {
              value: 50,
              message: "Назва компанії повинна бути не довше 60 символів",
            },
          })}
          isError={Boolean(errors.email)}
          aria-invalid={errors.email ? "true" : "false"}
          type="text"
        />
        {errors.email && <p role="alert">{String(errors.email.message)}</p>}
      </div>

      <div className={styles["input-wrapper"]}>
        <label htmlFor="">Password</label>
        <DefaultInput
          {...register("password", {
            required: "Пароль обовʼязковий",
            minLength: {
              value: 6,
              message: "Пароль повинний містити мінімум 6 символи",
            },
          })}
          isError={Boolean(errors.password)}
          aria-invalid={errors.password ? "true" : "false"}
          type="text"
        />
        {errors.password && (
          <p role="alert">{String(errors.password.message)}</p>
        )}
      </div>

      <div className={styles["input-wrapper"]}>
        <label htmlFor="">Лого компанії</label>
        <input
          {...register("photo", { required: "Лого обов'язкове" })}
          type="file"
          className={styles["input__file"]}
          accept="image/*"
          hidden
        />
        {errors.photo && <p role="alert">{String(errors.photo.message)}</p>}
      </div>

      <div className={styles["step-btns"]}>
        <Link
          className={styles["back-btn"]}
          to={publicRoutes.auth.signUpDescriptionPath}
        >
          Крок назад
        </Link>
        <button
          disabled={isLoading}
          className={styles["next-btn"]}
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default CompanyProfile;
