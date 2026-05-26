import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      user: { 
        name: "Ana", 
        email: "", 
        saldo: "1.200,00", 
        despesas: "450,00", 
        meta: "3.500,00" 
      },
      quiz: { 
        situacao: "", 
        objetivo: "", 
        setor: "", 
        ritmo: "", 
        completed: false 
      },
      trilha: { 
        ativa: true, 
        moduloConcluido: false, 
        progresso: 35, 
        nome: "Crescer" 
      },
      
      setUser: (data) => set((state) => ({ user: { ...state.user, ...data } })),
      setQuiz: (data) => set((state) => ({ quiz: { ...state.quiz, ...data } })),
      setTrilha: (data) => set((state) => ({ trilha: { ...state.trilha, ...data } })),
      
      resetState: () => set({
        user: { name: "Ana", email: "", saldo: "1.200,00", despesas: "450,00", meta: "3.500,00" },
        quiz: { situacao: "", objetivo: "", setor: "", ritmo: "", completed: false },
        trilha: { ativa: true, moduloConcluido: false, progresso: 35, nome: "Crescer" }
      })
    }),
    {
      name: 'tramply_state',
    }
  )
);

export default useStore;
