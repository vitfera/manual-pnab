import './global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

const ptBR = {
  search: 'Buscar',
  searchNoResult: 'Nenhum resultado encontrado.',
  toc: 'Nesta página',
  tocNoHeadings: 'Sem títulos',
  lastUpdate: 'Última atualização',
  chooseLanguage: 'Selecionar idioma',
  nextPage: 'Próxima página',
  previousPage: 'Página anterior',
  chooseTheme: 'Selecionar tema',
  editOnGithub: 'Editar no GitHub',
};

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/icons/favicon.ico' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: ['/icons/favicon.ico'],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'icon', url: '/icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider i18n={{ locale: 'pt-BR', translations: ptBR }}>{children}</RootProvider>
      </body>
      <GoogleAnalytics gaId="G-DT0EVCZ0KY" />
    </html>
  );
}
