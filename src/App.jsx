import React from 'react';
import { Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// ── Pages ──
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import QuizSituacaoAtual from './pages/QuizSituacaoAtual';
import QuizObjetivos from './pages/QuizObjetivos';
import QuizSetorDeAtuacao from './pages/QuizSetorDeAtuacao';
import QuizRespostaDaIA from './pages/QuizRespostaDaIA';
import QuizPerfilERitmo from './pages/QuizPerfilERitmo';
import QuizInicio from './pages/QuizInicio';
import QuizResultado from './pages/QuizResultado';
import DashboardAtivo from './pages/DashboardAtivo';
import DashboardSemTrilha from './pages/DashboardSemTrilha';
import MinhasTrilhas from './pages/MinhasTrilhas';
import ModuloDeTrilha from './pages/ModuloDeTrilha';
import ConclusaoDeModulo from './pages/ConclusaoDeModulo';
import SimuladorFinanceiroInicio from './pages/SimuladorFinanceiroInicio';
import SimuladorRendaEntrada from './pages/SimuladorRendaEntrada';
import SimuladorRendaResultado from './pages/SimuladorRendaResultado';
import SimuladorDespesasEntrada from './pages/SimuladorDespesasEntrada';
import SimuladorDespesasAnalise from './pages/SimuladorDespesasAnalise';
import AnaliseDeMEIs from './pages/AnaliseDeMEIs';
import CasoDeEstudoMEI from './pages/CasoDeEstudoMEI';
import Comunidade from './pages/Comunidade';
import Ferramentas from './pages/Ferramentas';
import Eventos from './pages/Eventos';
import Bancos from './pages/Bancos';
import PerfilDoEmpreendedor from './pages/PerfilDoEmpreendedor';
import Configuracoes from './pages/Configuracoes';

// ── Screen Number Redirect ──
const SCREEN_ROUTES = {
  "1": "/login",
  "2": "/cadastro",
  "3": "/quiz-situacao-atual",
  "4": "/quiz-objetivos",
  "5": "/quiz-setor-de-atuacao",
  "6": "/quiz-resposta-da-ia",
  "7": "/quiz-perfil-e-ritmo",
  "8": "/quiz-inicio",
  "9": "/quiz-resultado",
  "10": "/dashboard",
  "11": "/dashboard-sem-trilha",
  "12": "/minhas-trilhas",
  "13": "/modulo-de-trilha",
  "14": "/conclusao-de-modulo",
  "15": "/simulador",
  "16": "/simulador-renda-entrada",
  "17": "/simulador-renda-resultado",
  "18": "/simulador-despesas-entrada",
  "19": "/simulador-despesas-analise",
  "20": "/oportunidades",
  "21": "/caso-de-estudo-mei",
  "22": "/comunidade",
  "23": "/ferramentas",
  "24": "/eventos",
  "25": "/bancos",
  "26": "/perfil",
  "27": "/configuracoes"
};

const ScreenRedirect = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    const route = SCREEN_ROUTES[id];
    navigate(route || '/login', { replace: true });
  }, [id, navigate]);
  return null;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/screen/:id" element={<ScreenRedirect />} />

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
  );
}

export default App;
