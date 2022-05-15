import clsx from 'clsx'
import { createElement } from 'react'

type ButtonColor = 'primary' | 'danger'
type ButtonVariant = 'fill' | 'text'

type ButtonProps = {
  color?: ButtonColor
  variant?: ButtonVariant
} & JSX.IntrinsicElements['button']

const ButtonStyleMap = {
  primary: {
    fill: 'bg-green-500 text-white',
    text: 'text-gray-400 transparent',
  },
  danger: {
    fill: 'bg-red-500 text-white',
    text: 'text-gray-400 transparent',
  },
}

export default function Button({ className, color = 'primary', variant = 'fill', ...props }: ButtonProps) {
  return createElement('button', {
    ...props,
    className: clsx('px-5 py-3 font-bold font-noto rounded-xl disabled:cursor-not-allowed', ButtonStyleMap[color][variant], className),
  })
}
