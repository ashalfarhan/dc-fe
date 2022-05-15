import { zodResolver } from '@hookform/resolvers/zod';
import { AuthPayload, authSchema } from '@models';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdLock, MdMail } from 'react-icons/md';
import { Input } from '.';

type LoginFormProps = {
  label?: string;
  onSubmit: SubmitHandler<AuthPayload>;
};

export const LoginForm = ({ onSubmit, label = 'Submit' }: LoginFormProps) => {
  const { register, formState, handleSubmit } = useForm<AuthPayload>({
    resolver: zodResolver(authSchema),
  });
  const { errors, isSubmitting, isValid, isDirty } = formState;

  return (
    <form
      className="flex flex-col items-stretch space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        icon={<MdMail width="20px" height="16px" />}
        placeholder="Email"
        {...register('email')}
        error={errors.email}
      />
      <Input
        icon={<MdLock width="20px" height="16px" />}
        type="password"
        placeholder="Password"
        {...register('password')}
        error={errors.password}
      />
      <button
        type="submit"
        className="disabled:bg-blue-400 bg-blue-500 text-white p-2 rounded-lg font-semibold"
        disabled={isSubmitting || (!isValid && !isDirty)}
      >
        {label}
      </button>
    </form>
  );
};
