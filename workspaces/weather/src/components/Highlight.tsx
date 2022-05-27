import { Current } from '@app/types';

export const Highlight = ({ today }: { today: Current }) => {
  return (
    <div className="mt-6">
      <h1 className="font-bold text-md md:text-xl">Today's Hightlights</h1>
      <div className="grid grid-cols-2 gap-8 mt-6">
        <div className="bg-card px-5 py-6 flex flex-col items-center">
          <h1>Visibility</h1>
          <HighlightItem unit="miles" value={today.vis_miles} />
        </div>
        <div className="bg-card px-5 py-6 flex flex-col items-center">
          <h1>Air Pressure</h1>
          <HighlightItem unit="mb" value={today.pressure_mb} />
        </div>
        <div className="bg-card px-5 py-6 flex flex-col items-center">
          <h1>Wind Status</h1>
          <HighlightItem unit="mph" value={today.wind_mph} />
        </div>
        <div className="bg-card px-5 py-6 flex flex-col items-center">
          <h1>Humidity</h1>
          <HighlightItem unit="%" value={today.humidity} />
          <HumidityRange value={today.humidity} />
        </div>
      </div>
    </div>
  );
};

function HighlightItem({ value = 0, unit = '' }) {
  return (
    <div>
      <span className="text-4xl font-bold">{value}</span>
      <span className="text-xl">{unit}</span>
    </div>
  );
}

function HumidityRange({ value = 0 }) {
  return (
    <div className="w-full bg-gray-500 h-2 relative mt-8 rounded-xl">
      <span className="absolute text-accent left-0 bottom-2">0</span>
      <span className="absolute text-accent left-[50%] bottom-2">50</span>
      <span className="absolute text-accent right-0 bottom-2">100</span>
      <span className="absolute text-accent right-0 top-2">%</span>
      <div
        className="h-full bg-yellow-200 w-10 rounded-xl"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
