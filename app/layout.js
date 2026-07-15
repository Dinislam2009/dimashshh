import { Unbounded, Golos_Text } from "next/font/google";
import { DataProvider } from "@/context/DataContext";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  display: "swap",
});

const golos = Golos_Text({
  subsets: ["latin", "cyrillic"],
  variable: "--font-golos",
  display: "swap",
});

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'LOOPIT - Марафон платформасы',
  description: 'Интенсивтер мен марафондарды ұйымдастыру платформасы',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="kk" className={`${unbounded.variable} ${golos.variable}`}>
      <body>
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
