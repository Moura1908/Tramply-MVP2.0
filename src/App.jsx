import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// ── Fallback Loader ──
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-base">
    <div className="w-8 h-8 border-4 border-tropical-mint border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// ── Lazy Pages ──
const Login = lazy(() => import('./pages/Login'));
const Cadastro = lazy(() => import('./pages/Cadastro'));
const QuizSituacaoAtual = lazy(() => import('./pages/QuizSituacaoAtual'));
const QuizObjetivos = lazy(() => import('./pages/QuizObjetivos'));
const QuizSetorDeAtuacao = lazy(() => import('./pages/QuizSetorDeAtuacao'));
const QuizRespostaDaIA = lazy(() => import('./pages/QuizRespostaDaIA'));
const QuizPerfilERitmo = lazy(() => import('./pages/QuizPerfilERitmo'));
const QuizInicio = lazy(() => import('./pages/QuizInicio'));
const QuizResultado = lazy(() => import('./pages/QuizResultado'));
const DashboardAtivo = lazy(() => import('./pages/DashboardAtivo'));
const DashboardSemTrilha = lazy(() => import('./pages/DashboardSemTrilha'));
const MinhasTrilhas = lazy(() => import('./pages/MinhasTrilhas'));
const ModuloDeTrilha = lazy(() => import('./pages/ModuloDeTrilha'));
const ConclusaoDeModulo = lazy(() => import('./pages/ConclusaoDeModulo'));
const SimuladorFinanceiroInicio = lazy(() => import('./pages/SimuladorFinanceiroInicio'));
const SimuladorRendaEntrada = lazy(() => import('./pages/SimuladorRendaEntrada'));
const SimuladorRendaResultado = lazy(() => import('./pages/SimuladorRendaResultado'));
const SimuladorDespesasEntrada = lazy(() => import('./pages/SimuladorDespesasEntrada'));
const SimuladorDespesasAnalise = lazy(() => import('./pages/SimuladorDespesasAnalise'));
const AnaliseDeMEIs = lazy(() => import('./pages/AnaliseDeMEIs'));
const CasoDeEstudoMEI = lazy(() => import('./pages/CasoDeEstudoMEI'));
const Comunidade = lazy(() => import('./pages/Comunidade'));
const Ferramentas = lazy(() => import('./pages/Ferramentas'));
const Eventos = lazy(() => import('./pages/Eventos'));
const Bancos = lazy(() => import('./pages/Bancos'));
const PerfilDoEmpreendedor = lazy(() => import('./pages/PerfilDoEmpreendedor'));
const Configuracoes = lazy(() => import('./pages/Configuracoes'));

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Standalone Pages (full screen, no sidebar) */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/quiz-situacao-atual" element={<QuizSituacaoAtual />} />
        <Route path="/quiz-objetivos" element={<QuizObjetivos />} />
        <Route path="/quiz-setor-de-atuacao" element={<QuizSetorDeAtuacao />} />
        <Route path="/quiz-resposta-da-ia" element={<QuizRespostaDaIA />} />
        <Route path="/quiz-perfil-e-ritmo" element={<QuizPerfilERitmo />} />
        <Route path="/quiz-inicio" element={<QuizInicio />} />
        <Route path="/quiz-resultado" element={<QuizResultado />} />

        {/* Dashboard Pages (with sidebar, header, AI drawer) */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardAtivo />} />
          <Route path="/dashboard-sem-trilha" element={<DashboardSemTrilha />} />
          <Route path="/minhas-trilhas" element={<MinhasTrilhas />} />
          <Route path="/modulo-de-trilha" element={<ModuloDeTrilha />} />
          <Route path="/conclusao-de-modulo" element={<ConclusaoDeModulo />} />
          <Route path="/simulador" element={<SimuladorFinanceiroInicio />} />
          <Route path="/simulador-renda-entrada" element={<SimuladorRendaEntrada />} />
          <Route path="/simulador-renda-resultado" element={<SimuladorRendaResultado />} />
          <Route path="/simulador-despesas-entrada" element={<SimuladorDespesasEntrada />} />
          <Route path="/simulador-despesas-analise" element={<SimuladorDespesasAnalise />} />
          <Route path="/oportunidades" element={<AnaliseDeMEIs />} />
          <Route path="/caso-de-estudo-mei" element={<CasoDeEstudoMEI />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/ferramentas" element={<Ferramentas />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/bancos" element={<Bancos />} />
          <Route path="/perfil" element={<PerfilDoEmpreendedor />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
