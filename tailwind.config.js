import tailwindForms from '@tailwindcss/forms';
import tailwindContainerQueries from '@tailwindcss/container-queries';

/**
 * Tramply — Design System v2 (Premium Fintech Dark)
 * Configuração Tailwind Centralizada
 * Fonte única de verdade para todos os tokens de design.
 *
 * Palette: Nubank meets Linear meets aceleração de negócios.
 * Tipografia: Plus Jakarta Sans exclusivamente.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ─── Vibe Builder Extracted Palette ────────────────────────
        // Superfícies (Dark Scale)
        'background':                '#0d0d0d', // gray-0
        'surface':                   '#181818', // gray-100
        'surface-dim':               '#131313', // gray-50
        'surface-bright':            '#212121', // gray-200
        'surface-container-lowest':  '#0d0d0d', // gray-0
        'surface-container-low':     '#101010', // gray-25
        'surface-container':         '#181818', // gray-100
        'surface-container-high':    '#1c1c1c', // gray-150
        'surface-container-highest': '#212121', // gray-200
        'surface-variant':           '#212121', // gray-200
        'surface-tint':              '#04b84c', // green-400

        // Textos sobre superfícies
        'on-surface':               '#ffffff', // gray-1000
        'on-surface-variant':       '#8f8f8f', // gray-600
        'on-background':            '#ffffff', // gray-1000
        'inverse-surface':          '#ffffff', // gray-1000
        'inverse-on-surface':       '#0d0d0d', // gray-0

        // Primária (Vibe Green)
        'primary':                  '#00a240', // green-500
        'on-primary':               '#ffffff', // white
        'primary-container':        '#04b84c', // green-400
        'on-primary-container':     '#ffffff', // white
        'primary-fixed':            '#04b84c', // green-400
        'primary-fixed-dim':        '#00a240', // green-500
        'on-primary-fixed':         '#0d0d0d', // gray-0
        'on-primary-fixed-variant': '#181818', // gray-100
        'inverse-primary':          '#04b84c', // green-400

        // Secundária (Vibe Blue)
        'secondary':                     '#0169cc', // blue-500
        'on-secondary':                  '#ffffff', // white
        'secondary-container':           '#0285ff', // blue-400
        'on-secondary-container':        '#ffffff', // white
        'secondary-fixed':               '#0285ff', // blue-400
        'secondary-fixed-dim':           '#0169cc', // blue-500
        'on-secondary-fixed':            '#0d0d0d', // gray-0
        'on-secondary-fixed-variant':    '#181818', // gray-100

        // Terciária (Vibe Purple for discovery)
        'tertiary':                     '#8046d9', // purple-500
        'on-tertiary':                  '#ffffff', // white
        'tertiary-container':           '#924ff7', // purple-400
        'on-tertiary-container':        '#ffffff', // white
        'tertiary-fixed':               '#924ff7', // purple-400
        'tertiary-fixed-dim':           '#8046d9', // purple-500
        'on-tertiary-fixed':            '#0d0d0d', // gray-0
        'on-tertiary-fixed-variant':    '#181818', // gray-100

        // Erro (Vibe Red)
        'error':                '#e02e2a', // red-500
        'on-error':             '#ffffff', // white
        'error-container':      '#fa423e', // red-400
        'on-error-container':   '#ffffff', // white

        // Contornos
        'outline':          '#303030', // gray-300
        'outline-variant':  '#212121', // gray-200

        // Aliases semânticos do brand
        'tropical-mint': '#00a240',   // Acento primário de ação (vibe green)
        'deep-navy':     '#181818',   // Fundo de cards / sidebar (vibe gray)
        'eggshell':      '#ffffff',   // Texto primário (títulos)
        'medium-slate':  '#8f8f8f',   // Texto secundário
        'black':         '#0d0d0d',   // Fundo base
      },

      borderRadius: {
        'sm':      '0.375rem',  // vibe sm
        'DEFAULT': '0.5rem',    // vibe md
        'md':      '0.625rem',  // vibe lg
        'lg':      '0.75rem',   // vibe xl
        'xl':      '1rem',      // vibe 2xl
        '2xl':     '1.25rem',   // vibe 3xl
        'full':    '9999px',
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
        'headline-lg':        ['Plus Jakarta Sans', 'sans-serif'],
        'headline-lg-mobile': ['Plus Jakarta Sans', 'sans-serif'],
        'headline-md':        ['Plus Jakarta Sans', 'sans-serif'],
        'headline-sm':        ['Plus Jakarta Sans', 'sans-serif'],
        'body-lg':            ['Plus Jakarta Sans', 'sans-serif'],
        'body-sm':            ['Plus Jakarta Sans', 'sans-serif'],
        'label-md':           ['Plus Jakarta Sans', 'sans-serif'],
      },

      fontSize: {
        'headline-lg':        ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg-mobile': ['28px', { lineHeight: '36px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md':        ['24px', { lineHeight: '32px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-sm':        ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-lg':            ['15px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm':            ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-md':           ['12px', { lineHeight: '16px', letterSpacing: '0.04em', fontWeight: '600' }],
      },
    },
  },
  plugins: [
    tailwindForms,
    tailwindContainerQueries
  ]
};