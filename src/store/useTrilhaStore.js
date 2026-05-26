import { create } from 'zustand';

const useTrilhaStore = create((set) => ({
  // Quiz State
  sector: null,
  objectives: [],
  experience: null,
  timeToDedicate: null,
  
  // Actions
  setSector: (sector) => set({ sector }),
  toggleObjective: (objective) => set((state) => {
    const isSelected = state.objectives.includes(objective);
    if (isSelected) {
      return { objectives: state.objectives.filter(o => o !== objective) };
    } else {
      return { objectives: [...state.objectives, objective] };
    }
  }),
  setExperience: (experience) => set({ experience }),
  setTimeToDedicate: (timeToDedicate) => set({ timeToDedicate }),
  
  // Reset
  resetQuiz: () => set({
    sector: null,
    objectives: [],
    experience: null,
    timeToDedicate: null,
  })
}));

export default useTrilhaStore;
