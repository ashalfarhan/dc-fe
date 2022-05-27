import { getUserProsition } from '@app/utils';
import create from 'zustand';

type PositionState = {
  position: {
    latitude: number;
    longitude: number;
  } | null;
  update(position: PositionState['position']): void;
  getCurrentPosition(): Promise<void>;
};

export const usePosition = create<PositionState>(set => ({
  position: null,
  update: position => set({ position }),
  getCurrentPosition: async () => {
    try {
      const { coords } = await getUserProsition();
      set({
        position: {
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
      });
    } catch {
      //
    }
  },
}));
