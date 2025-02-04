import { type FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import styles from "./styles.module.scss";
import { TextArea } from "../../../ui-kit/ui-input";
import { Link } from "react-router-dom";
import { publicRoutes } from "../../../router/routes";
import { ISignUpCompanyData } from "../../../interfaces/company";

interface Props {
  register: UseFormRegister<ISignUpCompanyData>;
  errors: FieldErrors<ISignUpCompanyData>;
  onNextStep: () => void;
}

const CompanyDescription: FC<Props> = ({ register, errors, onNextStep }) => {
  return (
    <>
      <div className={styles["input-wrapper"]}>
        <label htmlFor="">Детально розкажіть про компанію</label>
        <TextArea
          placeholder="Розкажіть про компанію..."
          {...register("description", {
            required: "Опис компанії обовʼязковий",
            minLength: {
              value: 25,
              message: "Опис компанії повинний містити мінімум 25 символи",
            },
            maxLength: {
              value: 1000,
              message: "Опис компанії повинний бути не довше 1000 символів",
            },
          })}
          aria-invalid={errors.description ? "true" : "false"}
        />
        {errors.description && (
          <p role="alert">{String(errors.description.message)}</p>
        )}
      </div>
      <div className={styles["step-btns"]}>
        <Link
          className={styles["back-btn"]}
          to={publicRoutes.auth.signUpDetailsPath}
        >
          Крок назад
        </Link>
        <button
          type="button"
          className={styles["next-btn"]}
          onClick={onNextStep}
        >
          Наступний крок
        </button>
      </div>
    </>
  );
};

export default CompanyDescription;
