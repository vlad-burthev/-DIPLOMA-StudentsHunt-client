import { useEffect, type FC } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { publicRoutes } from "../../../router/routes";
import CompanyDetails from "../company/company-details";
import CompanyDescription from "../company/company-description";
import CompanyProfile from "../company/comapny-profile";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { useSignUpCompanyMutation } from "../../../api/authApi";
import { ISignUpCompanyData, ResponseError } from "../../../interfaces/company";

interface Props {}

const SignUpPage: FC<Props> = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
    watch,
    trigger,
    reset,
  } = useForm<ISignUpCompanyData>({
    defaultValues: {
      title: "",
      phone: "",
      egrpou: null as number | null,
      photo: null,
      description: "",
      email: "",
      password: "",
    },
  });

  const [signUp, { error, isLoading, isError, isSuccess }] =
    useSignUpCompanyMutation();

  const onSubmit = (signUpData: any) => {
    console.log(signUpData);
    const formData = new FormData();

    formData.append("title", signUpData.title);
    formData.append("phone", signUpData.phone);
    formData.append("egrpou", signUpData.egrpou);
    formData.append("description", signUpData.description);
    formData.append("email", signUpData.email);
    formData.append("password", signUpData.password);

    if (signUpData.photo && signUpData.photo.length > 0) {
      formData.append("photo", signUpData.photo[0]);
    }

    signUp(formData);
  };

  const onNextStep = (path: string) => {
    trigger();
    if (!isValid) return;
    navigate(path);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      navigate(publicRoutes.homeRoute);
    }
  }, [isSuccess, reset]);

  useEffect(() => {
    navigate(publicRoutes.auth.signUpDetailsPath);
  }, []);

  return (
    <div className={styles["sign-up"]}>
      {isError && error ? (
        (error as ResponseError)?.data?.errors?.[0] ? (
          <div className={styles["error-toast"]}>
            {(error as ResponseError)?.data?.errors?.[0]?.msg}
          </div>
        ) : (
          <div className={styles["error-toast"]}>
            {(error as ResponseError)?.data?.message?.[0]}
          </div>
        )
      ) : null}

      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["steps"]}>
            <h2>Привіт, ласкаво просимо!</h2>
            <p>
              Увійшовши або зареєструвавшись під своїм обліковим записом, ви
              можете отримати всі функції тут.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles["form-container"]}
            >
              <Routes>
                <Route
                  index
                  element={
                    <Navigate
                      to={
                        publicRoutes.auth.signUpPath +
                        "/" +
                        publicRoutes.auth.signUpDetailsRoute
                      }
                    />
                  }
                />
                <Route
                  path={publicRoutes.auth.signUpDetailsRoute}
                  element={
                    <CompanyDetails
                      watch={watch}
                      setValue={setValue}
                      onNextStep={() =>
                        onNextStep(publicRoutes.auth.signUpDescriptionPath)
                      }
                      register={register}
                      errors={errors}
                    />
                  }
                />
                <Route
                  path={publicRoutes.auth.signUpDescriptionRoute}
                  element={
                    <CompanyDescription
                      onNextStep={() =>
                        onNextStep(publicRoutes.auth.signUpProfilePath)
                      }
                      register={register}
                      errors={errors}
                    />
                  }
                />
                <Route
                  path={publicRoutes.auth.signUpProfileRoute}
                  element={
                    <CompanyProfile
                      isLoading={isLoading}
                      register={register}
                      errors={errors}
                    />
                  }
                />
                <Route
                  path="*"
                  element={<Navigate to={publicRoutes.auth.signUpPath} />}
                />
              </Routes>
            </form>
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

export default SignUpPage;
