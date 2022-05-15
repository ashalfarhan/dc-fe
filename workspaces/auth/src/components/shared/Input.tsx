import clsx from 'clsx';
import { forwardRef, ReactNode, Ref } from 'react';
import { FieldError } from 'react-hook-form';

type InputProps = {
  label?: string;
  content?: ReactNode;
  icon?: ReactNode;
  error?: FieldError;
} & JSX.IntrinsicElements['input'];

export const Input = forwardRef(
  (
    { label, content, icon, error, ...props }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div>
        <label className="flex flex-col">
          {label ? <span className="text-gray-400">{label}</span> : null}
          {content || (
            <div className="w-full flex items-center space-x-4 border rounded-lg text-gray-500 dark:text-white dark:bg-[#252329] p-3">
              {icon}
              <input
                {...props}
                ref={ref}
                className={clsx(
                  'bg-transparent text-base flex-1',
                  props.className
                )}
              />
            </div>
          )}
        </label>
        {error && (
          <span className="text-red-400 text-sm" role="alert">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
