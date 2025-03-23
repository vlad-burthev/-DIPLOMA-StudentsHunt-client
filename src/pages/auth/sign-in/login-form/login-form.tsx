import { useEffect, type FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignInCompanyMutation } from "../../../../api/authApi";
import { publicRoutes } from "../../../../router/routes";
import { DefaultInput } from "../../../../ui-kit/ui-input";
import signStyles from "../../company/styles.module.scss";
import styles from "./styles.module.scss";
import { ResponseError } from "../../../../interfaces/company";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();
  const [signIn, { isSuccess, isLoading, error: submitErrors, isError }] =
    useSignInCompanyMutation();
  const onSubmit = async (signInData: any) => {
    await signIn(signInData).unwrap();
    navigate(publicRoutes.homeRoute, {
      replace: true,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(publicRoutes.homeRoute);
    }
  }, [isSuccess]);

  console.log(errors);

  return (
    <>
      {isError && submitErrors ? (
        (submitErrors as ResponseError)?.data?.errors?.[0] ? (
          <div className={styles["error-toast"]}>
            {(submitErrors as ResponseError)?.data?.errors?.[0]?.msg}
          </div>
        ) : Array.isArray((submitErrors as ResponseError)?.data?.message) ? (
          <div className={styles["error-toast"]}>
            {(submitErrors as ResponseError)?.data?.message[0]}
          </div>
        ) : (
          <div className={styles["error-toast"]}>
            {(submitErrors as ResponseError)?.data?.message}
          </div>
        )
      ) : null}
      <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
        <div className={signStyles["input-wrapper"]}>
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

        <div className={signStyles["input-wrapper"]}>
          <label htmlFor="">Password</label>
          <DefaultInput
            placeholder="123456"
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
        <button
          className={styles["sign-in__btn"]}
          disabled={isLoading}
          type="submit"
        >
          sign in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
