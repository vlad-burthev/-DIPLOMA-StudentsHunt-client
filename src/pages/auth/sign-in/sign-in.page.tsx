import type { FC } from "react";
import { useForm } from "react-hook-form";
import { useSignInCompanyMutation } from "../../../api/authApi";
import { DefaultInput } from "../../../ui-kit/ui-input";
import styles from "../sign-up/styles.module.scss";

const SignInPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const [signIn, { data, isError, error, isSuccess, isLoading }] =
    useSignInCompanyMutation();
  const onSubmit = (signInData: any) => {
    signIn(signInData);
  };

  return (
    <div>
      <form
        className={styles["input-wrapper"]}
        onSubmit={handleSubmit(onSubmit)}
      >
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
            aria-invalid={errors.password ? "true" : "false"}
            type="text"
          />
          {errors.password && (
            <p role="alert">{String(errors.password.message)}</p>
          )}
        </div>
        <button disabled={isLoading} type="submit">
          sign in
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
