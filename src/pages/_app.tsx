import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

// Importamos dinámicamente todo App sin SSR para que Node.js no ejecute Ledger en el build
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});