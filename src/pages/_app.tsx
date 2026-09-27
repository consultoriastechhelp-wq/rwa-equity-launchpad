import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

// @ts-ignore
import '../styles/globals.css';

// Importamos solo el contenedor de wallets sin Renderizado en Servidor (SSR)
const ClientWalletProvider = dynamic(
  () => import('../components/ClientWalletProvider'),
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClientWalletProvider>
      <Component {...pageProps} />
    </ClientWalletProvider>
  );
}