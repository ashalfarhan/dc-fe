import { useTemperature } from '@app/states';
import clsx from 'clsx';

export function TempSwitcher() {
  const { change, temp } = useTemperature();
  return (
    <div className="hidden md:flex justify-end space-x-2">
      <button
        onClick={() => change('C')}
        className={clsx(
          'text-xl font-bold rounded-full bg-accent text-white w-10 h-10',
          {
            'bg-white text-black': temp === 'C',
          }
        )}
      >
        °C
      </button>
      <button
        onClick={() => change('F')}
        className={clsx(
          'text-xl font-bold rounded-full bg-accent text-white w-10 h-10',
          {
            'bg-white text-black': temp === 'F',
          }
        )}
      >
        °F
      </button>
    </div>
  );
}
