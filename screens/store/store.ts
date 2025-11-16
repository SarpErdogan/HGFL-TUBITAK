import {create} from 'zustand';

type ScreenState = {
  currentScreen: 'home' | 'mebi' | 'search';
  setScreen: (screen: 'home' | 'mebi' | 'search') => void;
};

export const useScreenStore = create<ScreenState>((set:any) => ({
  currentScreen: 'home',
  setScreen: (screen:any) => set({ currentScreen: screen }),
}));
