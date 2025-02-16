import type { FC } from "react";
import { DefaultInput, PhoneInput } from "../../../ui-kit/ui-input";

import styles from "./styles.module.scss";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { ISignUpCompanyData } from "../../../interfaces/company";

interface Props {
  register: UseFormRegister<ISignUpCompanyData>;
  errors: FieldErrors<FieldValues>;
  setValue: UseFormSetValue<ISignUpCompanyData>;
  onNextStep: () => void;
  watch: UseFormWatch<ISignUpCompanyData>;
}

const CompanyDetails: FC<Props> = ({
  setValue,
  register,
  errors,
  onNextStep,
  watch,
}) => {
  return (
    <>
      <div className={styles["input-wrapper"]}>
        <label htmlFor="">Назва компанії</label>
        <DefaultInput
          placeholder="Students Hunt"
          {...register("title", {
            required: "Назва компанії обовʼязкова",
            minLength: {
              value: 3,
              message: "Назва компанії повинна містити мінімум 3 символи",
            },
            maxLength: {
              value: 50,
              message: "Назва компанії повинна бути не довше 50 символів",
            },
          })}
          aria-invalid={errors.title ? "true" : "false"}
          type="text"
        />
        {errors.title && <p role="alert">{String(errors.title.message)}</p>}
      </div>

      <div className={styles["input-wrapper"]}>
        <label htmlFor="">Номер тел.</label>
        <PhoneInput
          {...register("phone", {
            required: "Номер телефону обовʼязковий",
            pattern: {
              value: /^\+380\d{9}$/,
              message: "Формат номера: +380123456789",
            },
          })}
          ariaInvalid={errors.phone && watch("phone").length < 1 ? true : false}
          value={watch("phone")}
          onChange={(e) => setValue("phone", e.target.value)}
        />
        {errors.phone && watch("phone").length < 1 && (
          <p role="alert">{String(errors.phone.message)}</p>
        )}
      </div>

      <div className={styles["input-wrapper"]}>
        <label htmlFor="">ЄДРПОУ</label>
        <DefaultInput
          {...register("egrpou", {
            required: "Код ЄДРПОУ обовʼязковий",
            pattern: {
              value: /^\d{8}$/,
              message: "ЄДРПОУ повинен містити рівно 8 цифр",
            },
          })}
          aria-invalid={errors.egrpou ? "true" : "false"}
          placeholder="12345678"
          type="number"
          onInput={(e) => {
            if (e.currentTarget.value.length > 8) {
              e.currentTarget.value = e.currentTarget.value.slice(0, 8);
            }
          }}
        />
        {errors.egrpou && <p role="alert">{String(errors.egrpou.message)}</p>}
      </div>

      <button type="button" className={styles["next-btn"]} onClick={onNextStep}>
        Наступний крок
      </button>
    </>
  );
};

export default CompanyDetails;
