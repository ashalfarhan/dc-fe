import React, { Ref } from 'react';
import clsx from 'clsx';
import { createElement, forwardRef } from 'react';
import styles from './Input.module.css';
import { InputProps } from './types';

const InputComponent = (
  props: InputProps,
  ref: Ref<HTMLInputElement | HTMLTextAreaElement>
) => {
  const {
    isError,
    helpText,
    className,
    size = 'sm',
    label = 'Label',
    multiline = false,
    color = 'primary',
    fullWidth = false,
    placeholder = 'Placeholder',
    ...rest
  } = props;

  const element = createElement(multiline ? 'textarea' : 'input', {
    ...rest,
    className: clsx(styles.MyInput, className),
    placeholder,
    ref,
  });

  return (
    <label
      className={clsx(
        styles.Wrapper,
        styles[`Input-Size__${size}`],
        styles[`Input__default`],
        {
          [styles.Input__error]: isError,
          [styles.Input__disabled]: props.disabled,
          [styles.Input__fullWidth]: fullWidth,
        }
      )}
    >
      <span className={styles['Input-Label']}>{label}</span>
      {element}
      {Boolean(helpText) && <span className={styles.HelpText}>{helpText}</span>}
    </label>
  );
};

export const Input = forwardRef(InputComponent);
