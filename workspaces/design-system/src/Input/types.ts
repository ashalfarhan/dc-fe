import { ReactNode } from 'react';

export type InputProps = {
  /**
   * Input size
   * @default md
   */
  size?: 'sm' | 'lg' | 'md';
  /**
   * Make this input red
   * @default false
   */
  isError?: boolean;
  /**
   * Help text or error message
   * @default null
   */
  helpText?: ReactNode;
  /**
   * Input label
   * @default null
   */
  label?: ReactNode;
  /**
   * Wheter is fill in the available space to be fullWidth
   * @default false
   */
  fullWidth?: boolean;
} & (InputSingleLine | InputMultilineLine);

type InputSingleLine = {
  /**
   * Multiline will change this input to textarea
   * @default false
   */
  multiline?: false;
} & Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'size'
>;

type InputMultilineLine = {
  /**
   * Multiline will change this input to textarea
   * @default false
   */
  multiline: true;
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;
