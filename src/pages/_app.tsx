import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "@/components/Navbar";
// import theme from '@/config/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar />
      <div className="p-5">
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}
