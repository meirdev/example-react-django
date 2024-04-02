import { LockClosedIcon } from "@heroicons/react/24/outline";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import classNames from "classnames";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { postToken } from "../../api/client";

type FormData = {
  email: string;
  password: string;
};

const FORM_ERROR = "FORM_ERROR" as const;

type FormErrors = { [FORM_ERROR]?: never };

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export default function Login() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<FormData & FormErrors>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await postToken({
        email: data.email,
        password: data.password,
      });

      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);

      navigate("/");
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(FORM_ERROR, { message: err?.response?.data?.detail });
      }
    }
  };

  return (
    <div className="h-screen flex items-center mx-auto max-w-sm">
      <div className="card w-full shadow-2xl border-primary border-t-4">
        <form
          className="card-body"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h2 className="card-title">
            <LockClosedIcon className="h-6 w-6" />
            Sign In
          </h2>
          <ErrorMessage
            errors={errors}
            name={FORM_ERROR}
            render={({ message }) => (
              <p className="text-error pt-2">{message}</p>
            )}
          />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className={classNames("input input-bordered", {
                "input-error": errors?.email,
              })}
              {...register("email")}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="text-error px-4 pt-2">{message}</p>
              )}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className={classNames("input input-bordered", {
                "input-error": errors?.password,
              })}
              {...register("password")}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <p className="text-error px-4 pt-2">{message}</p>
              )}
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
