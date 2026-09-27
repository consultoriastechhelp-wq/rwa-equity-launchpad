import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

// @ts-ignore
import '../styles/globals.css';

// 1. Componente base de la aplicación con sus props normales
function MainApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// 2. Exportar dinámicamente forzando que SSR sea falso
// Esto evita que Ledger o los adaptadores de wallet ejecuten código en el servidor durante el build
export default dynamic(() => Promise.resolve(MainApp), {
  ssr: false,
});