import clsx from 'clsx';

export const Card = ({ className, ...props }: JSX.IntrinsicElements['div']) => (
  <div
    {...props}
    className={clsx(
      'bg-white rounded-xl relative text-brand-dark min-h-[440px] w-[464px]',
      className
    )}
  />
);
