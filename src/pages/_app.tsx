import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../../components/layout/layout";
import {CartContextProvider } from "../../contexts/cart-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
    </>
  );
}
