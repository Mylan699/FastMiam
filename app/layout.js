import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './_components/Header';
import Provider from './Provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FastMiam",
  description: "Developpé par Mylan",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    // appearance={{
    //   baseTheme: dark
    // }}
    >
      <html lang="en">
        <body className={inter.className}>
        <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
