import {
  forwardRef,
  TextareaHTMLAttributes,
  type InputHTMLAttributes,
} from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { InputMask } from "@react-input/mask";

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const DefaultInput = forwardRef<HTMLInputElement, DefaultInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input ref={ref} className={clsx(styles.input, className)} {...props} />
    );
  }
);

export const PhoneInput = forwardRef<HTMLInputElement, DefaultInputProps>(
  ({ className, value, onChange }, ref) => {
    return (
      <InputMask
        className={clsx(styles.input, className)}
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
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = forwardRef<HTMLTextAreaElement, DefaultTextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx(styles.textarea, className)}
        {...props}
      />
    );
  }
);
