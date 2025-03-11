import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giselle Martinez for Newburgh',
  description: 'Campaign website for Giselle Martinez, candidate for Newburgh City Council',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&family=Mr+Dafoe&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
