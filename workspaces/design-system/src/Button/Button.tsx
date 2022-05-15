import clsx from 'clsx';
import { createElement, forwardRef, Ref } from 'react';
import { ButtonProps } from './types';
import styles from './Button.module.css';

const ButtonComponent = (
  {
    as = 'button',
    variant = 'fill',
    color = 'base',
    size = 'md',
    disableShadow,
    className,
    startIcon,
    endIcon,
    children,
    ...props
  }: ButtonProps,
  ref: Ref<HTMLButtonElement | HTMLAnchorElement>
) => {
  const withIcon = Boolean(startIcon) || Boolean(endIcon);

  const classes = clsx(
    styles.MyButton,
    styles[`Button-Size__${size}`],
    styles[`Button-Variant__${variant}`],
    styles[`Button-Color__${color}`],
    [
      disableShadow && styles['Button-NoShadow'],
      withIcon && styles['Button-WithIcon'],
    ]
  );

  return createElement(
    as,
    { ...props, className: clsx(classes, className), ref },
    [
      Boolean(startIcon) &&
        createElement('span', { className: 'material-icons' }, startIcon),
      withIcon ? createElement('span', { children }) : children,
      Boolean(endIcon) &&
        createElement('span', { className: 'material-icons' }, endIcon),
    ]
  );
};

export const Button = forwardRef(ButtonComponent);
