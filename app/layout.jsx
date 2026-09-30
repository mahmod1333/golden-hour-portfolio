import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'AVO — Creative Web Developer Portfolio',
  description: 'AVO — Frontend engineer crafting joyful, accessible digital spaces with thoughtful micro-interactions.',
};

const themeInitializer = `
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,400&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400&family=Noto+Sans+Arabic:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream dark:bg-warmdark-bg text-espresso dark:text-warmdark-text font-sans antialiased transition-colors duration-500 overflow-x-hidden selection:bg-sunset selection:text-white relative bg-grain">
        <Script id="theme-initializer" strategy="beforeInteractive">
          {themeInitializer}
        </Script>
        {children}
      </body>
    </html>
  );
}
