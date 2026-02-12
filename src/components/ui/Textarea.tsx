import { ValidationError } from "@formspree/react";
import type {
  FieldValues,
  SubmissionError,
  SubmissionSuccess,
} from "@formspree/core";
import { type TextareaHTMLAttributes, useRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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

export const Textarea = ({
  state,
  label,
  id,
  required,
  error,
  ...props
}: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fieldName = props.name ?? id;

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-primary para-text-u">
          {label}
          {required && <sup>*</sup>}
        </label>
      )}

      <textarea
        ref={textareaRef}
        id={id}
        name={fieldName}
        rows={1}
        onInput={handleInput}
        className="border-primary para-text-u scrollbar-hidden max-h-100 resize-none overflow-auto border-b-2 bg-transparent py-1 text-neutral-300 outline-none"
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
