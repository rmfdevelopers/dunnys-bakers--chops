import './globals.css';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
const heading = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-heading' });
const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${sans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}