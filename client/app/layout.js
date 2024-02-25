import "./globals.css";
import { Inter } from "next/font/google";
import ThemeRegistry from '@/utils/ThemeRegistry'
import CssBaseline from '@mui/material/CssBaseline';
import ButtonAppBar from "@/components/ButtonAppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ButtonAppBar />
        {/* {children} */}
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ThemeRegistry options={{ key: 'mui-theme' }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
