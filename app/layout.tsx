import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Comunidade Editify | Pare de editar sozinho",
  description:
    "A casa do editor de vídeo brasileiro. Estúdio em voz, crítica de vídeo, IA pra responder cliente, portfólio profissional e plataforma de contratação sem comissão. Tudo num lugar só.",
  metadataBase: new URL("https://comunidade.editify.com.br"),
  icons: {
    icon: "/favicon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Comunidade Editify | Pare de editar sozinho",
    description:
      "A casa do editor de vídeo brasileiro. Comunidade, ferramentas e clientes no mesmo lugar.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
