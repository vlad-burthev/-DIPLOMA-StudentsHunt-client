import {
  forwardRef,
  TextareaHTMLAttributes,
  type InputHTMLAttributes,
} from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { InputMask } from "@react-input/mask";

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  ariaInvalid?: boolean;
}

export const DefaultInput = forwardRef<HTMLInputElement, DefaultInputProps>(
  ({ className, isError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(styles.input, className, isError && styles.error)}
        {...props}
      />
    );
  }
);

export const PhoneInput = forwardRef<HTMLInputElement, DefaultInputProps>(
  ({ className, value, onChange, isError, ariaInvalid = false }, ref) => {
    return (
      <InputMask
        aria-invalid={ariaInvalid}
        className={clsx(styles.input, className, isError && styles.error)}
        mask="+380_________"
        placeholder="+38(0_)-___-__-__"
        replacement={{ _: /\d/ }}
        value={value}
        onChange={onChange}
        ref={ref}
      />
    );
  }
);

interface DefaultTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isError: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, DefaultTextareaProps>(
  ({ className, isError, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx(styles.textarea, className, isError && styles.error)}
        {...props}
      />
    );
  }
);
