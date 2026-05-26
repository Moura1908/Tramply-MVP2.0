import tailwindForms from '@tailwindcss/forms';
import tailwindContainerQueries from '@tailwindcss/container-queries';

/**
 * Tramply — Configuração Tailwind Centralizada
 * Fonte única de verdade para todos os tokens de design.
 * Alinhado ao DESIGN.md (Tramply Vision).
 *
 * IMPORTANTE: Este arquivo deve ser carregado ANTES do CDN do Tailwind.
 * O CDN lê window.tailwind.config ao inicializar.
 *
 * Uso em cada HTML:
 *   <script src="tailwind.config.js"></script>
 *   <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ─── Superfícies ──────────────────────────────────────────
        'background':                '#000f3b',
        'surface':                   '#000f3b',
        'surface-dim':               '#000f3b',
        'surface-bright':            '#293763',
        'surface-container-lowest':  '#000b30',
        'surface-container-low':     '#081843',
        'surface-container':         '#0d1d47',
        'surface-container-high':    '#192752',
        'surface-container-highest': '#25325e',
        'surface-variant':           '#25325e',
        'surface-tint':              '#9bd3b2',

        // ─── Textos sobre superfícies ─────────────────────────────
        'on-surface':               '#dce1ff',
        'on-surface-variant':       '#c0c9c1',
        'on-background':            '#dce1ff',
        'inverse-surface':          '#dce1ff',
        'inverse-on-surface':       '#202e59',

        // ─── Primária (verde-menta) ───────────────────────────────
        'primary':                  '#ffffff',
        'on-primary':               '#003822',
        'primary-container':        '#b7efcd',
        'on-primary-container':     '#3a6f53',
        'primary-fixed':            '#b7efcd',
        'primary-fixed-dim':        '#9bd3b2',
        'on-primary-fixed':         '#002112',
        'on-primary-fixed-variant': '#1a5037',
        'inverse-primary':          '#34684d',

        // ─── Secundária (slate/índigo) ────────────────────────────
        'secondary':                     '#bec2ff',
        'on-secondary':                  '#272b5e',
        'secondary-container':           '#404479',
        'on-secondary-container':        '#b0b4f0',
        'secondary-fixed':               '#e0e0ff',
        'secondary-fixed-dim':           '#bec2ff',
        'on-secondary-fixed':            '#111548',
        'on-secondary-fixed-variant':    '#3e4276',

        // ─── Terciária (creme/dourado) ────────────────────────────
        'tertiary':                     '#ffffff',
        'on-tertiary':                  '#333122',
        'tertiary-container':           '#e9e2cd',
        'on-tertiary-container':        '#696453',
        'tertiary-fixed':               '#e9e2cd',
        'tertiary-fixed-dim':           '#cdc6b2',
        'on-tertiary-fixed':            '#1e1c0f',
        'on-tertiary-fixed-variant':    '#4a4737',

        // ─── Erro ─────────────────────────────────────────────────
        'error':                '#ffb4ab',
        'on-error':             '#690005',
        'error-container':      '#93000a',
        'on-error-container':   '#ffdad6',

        // ─── Contornos ────────────────────────────────────────────
        'outline':          '#8a938c',
        'outline-variant':  '#404943',

        // ─── Aliases semânticos do brand ──────────────────────────
        'tropical-mint': '#4ff0aa',  // Acento primário de ação
        'deep-navy':     '#001242',  // Fundo da sidebar / painéis
        'eggshell':      '#dbe1ff',  // Texto primário suavizado
        'medium-slate':  '#6d77fa',  // Texto secundário / ícones inativos
        'black':         '#000000',
      },

      borderRadius: {
        'sm':      '0.25rem',   //  4px — micro elementos
        'DEFAULT': '0.5rem',    //  8px — padrão
        'md':      '0.75rem',   // 12px — cards e inputs
        'lg':      '1rem',      // 16px — containers maiores
        'xl':      '1.5rem',    // 24px — painéis
        'full':    '9999px',    // pill — botões primários
      },

      spacing: {
        'unit-xs':        '4px',
        'unit-sm':        '8px',
        'unit-md':        '16px',
        'unit-lg':        '32px',
        'unit-xl':        '64px',
        'gutter':         '24px',
        'margin-mobile':  '16px',
        'margin-desktop': '40px',
        'sidebar-width':  '260px',
        'container-max':  '1280px',
      },

      fontFamily: {
        'headline-lg':        ['Sora', 'sans-serif'],
        'headline-lg-mobile': ['Sora', 'sans-serif'],
        'headline-md':        ['Sora', 'sans-serif'],
        'headline-sm':        ['Sora', 'sans-serif'],
        'body-lg':            ['Plus Jakarta Sans', 'sans-serif'],
        'body-sm':            ['Plus Jakarta Sans', 'sans-serif'],
        'label-md':           ['Plus Jakarta Sans', 'sans-serif'],
      },

      fontSize: {
        'headline-lg':        ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg-mobile': ['28px', { lineHeight: '36px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md':        ['24px', { lineHeight: '32px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-sm':        ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-lg':            ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm':            ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-md':           ['12px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '600' }],
      },
    },
  },
  plugins: [
    tailwindForms,
    tailwindContainerQueries
  ]
};