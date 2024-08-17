import React, { type ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils.ts';
import ThemeProvider from '@/components/theme-prodiver.tsx';
import PageHeader from '@/components/page-header.tsx';

const fontSans = FontSans({
  subsets: ['latin', 'cyrillic-ext'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Главная | Название клуба',
  description: 'Главная страница сайта Название клуба',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen flex flex-col bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
