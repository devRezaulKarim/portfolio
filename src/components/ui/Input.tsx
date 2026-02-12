import { ValidationError } from "@formspree/react";
import type {
  FieldValues,
  SubmissionError,
  SubmissionSuccess,
} from "@formspree/core";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  state: {
    errors: SubmissionError<FieldValues> | null;
    result: SubmissionSuccess | null;
    submitting: boolean;
    succeeded: boolean;
  };
  error?: string;
}

export const Input = ({
  state,
  label,
  id,
  required,
  error,
  ...props
}: InputProps) => {
  const fieldName = props.name ?? id;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-primary para-text-u">
          {label}
          {required && <sup>*</sup>}
        </label>
      )}

      <input
        id={id}
        name={fieldName}
        className="border-primary para-text-u border-b-2 bg-transparent py-1 text-neutral-300 outline-0"
        required={required}
        {...props}
      />
      <ValidationError
        prefix={label ?? id}
        field={fieldName as keyof FieldValues}
        errors={state.errors}
        className="text-left text-red-500"
      />
      {error && (
        <p className="text-left text-sm font-medium text-red-500">{error}</p>
      )}
    </div>
  );
};
