import { type TextareaHTMLAttributes, useRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  id: string;
}

export const Textarea = ({ label, id, required, ...props }: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
        rows={1}
        onInput={handleInput}
        className="border-primary para-text-u scrollbar-hidden max-h-100 resize-none overflow-auto border-b-2 bg-transparent py-1 text-white outline-none"
        {...props}
      />
    </div>
  );
};
