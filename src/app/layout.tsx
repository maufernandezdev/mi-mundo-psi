import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/sections/header/Header";
import emailjs from "@emailjs/browser";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi mundo psi",
  description: "Mi mundo psi web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
      </body>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
      ></script>

      <script type="text/javascript">emailjs.init('RMH0qeOLiioEqnILw')</script>
    </html>
  );
}
