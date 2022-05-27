import create from 'zustand';
import { persist } from 'zustand/middleware';

type Temperature = 'C' | 'F';

type TemperatureState = {
  temp: Temperature;
  change: (temp: Temperature) => void;
};

export const useTemperature = create<TemperatureState>()(
  persist(set => ({
    temp: 'C',
    change: temp => set({ temp }),
  }))
);
