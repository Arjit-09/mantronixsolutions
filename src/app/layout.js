import './globals.css';
import { Rajdhani, Inter, Exo_2 } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedCursor from '@/components/AnimatedCursor';

const inter    = Inter({ subsets: ['latin'], variable: '--font-inter' });
const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-rajdhani' });
const exo2     = Exo_2({ subsets: ['latin'], weight: ['300','400','500','600','700','800','900'], variable: '--font-heading' });

export const metadata = {
  title: 'Mantronix Solutions | Automation & Robotics Integrators India',
  description: "Mantronix Solutions – India's trusted automation & robotics integrator. Robotic welding cells, welding SPM, automation equipment. Serving industries across India from Ghaziabad, UP.",
  keywords: 'robotic welding, welding automation, welding SPM, automation equipment, robotics integrator India, Mantronix Solutions',
  openGraph: {
    title: 'Mantronix Solutions | Automation & Robotics Integrators India',
    description: 'Leading automation & robotics integrator in India specializing in robotic welding and welding SPM solutions.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${rajdhani.variable} ${exo2.variable}`}>
        <AnimatedCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
