import { create } from 'zustand';

const useSimuladorStore = create((set) => ({
  incomes: [
    { id: 1, name: 'Vendas Loja Física', amount: 1200, frequency: 'semanal', isGuaranteed: true, icon: 'storefront' },
    { id: 2, name: 'Vendas Online', amount: 3500, frequency: 'mensal', isGuaranteed: false, icon: 'language' }
  ],
  addIncome: (income) => set((state) => ({ incomes: [...state.incomes, { ...income, id: Date.now() }] })),
  removeIncome: (id) => set((state) => ({ incomes: state.incomes.filter(inc => inc.id !== id) })),
  clearIncomes: () => set({ incomes: [] })
}));

export default useSimuladorStore;
