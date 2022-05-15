import { AnchorHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from 'react';

export type ButtonVariant = 'text' | 'outline' | 'fill';

export type ButtonSize = 'sm' | 'lg' | 'md';

export type ButtonProps = {
  /**
   * Variant of the button
   * @default fill
   */
  variant?: ButtonVariant;
  /**
   * Color variant of button
   * @default base
   */
  color?: 'base' | 'primary' | 'danger' | 'secondary';
  /**
   * Size of button, impact font-size and padding
   * @default base
   */
  size?: ButtonSize;
  /**
   * Disable the shadow
   * @default false
   */
  disableShadow?: boolean;
  /**
   * Icon name of Material Design
   * @see https://fonts.google.com/icons
   */
  endIcon?: string;
  /**
   * Icon name of Material Design
   * @see https://fonts.google.com/icons
   */
  startIcon?: string;
} & (ButtonButtonProps | ButtonAnchorProps);

type ButtonButtonProps = {
  /**
   * What element to render
   * @default button
   */
  as?: 'button';
} & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonAnchorProps = {
  /**
   * What element to render
   * @default button
   */
  as: 'a';
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
