import { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

const Input = forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements['input'] & { label: string; error?: FieldError }
>(({ label, error, ...props }, ref) => {
  return (
    <label className="flex flex-col space-y-2">
      <span>{label}</span>
      <input
        className="border-2 border-gray-300 text-gray-500 p-4 text-sm rounded-xl"
        ref={ref}
        {...props}
      />
      {error && <span className="text-xs text-red-400">{error.message}</span>}
    </label>
  )
})

export default Input
