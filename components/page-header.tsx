import React from 'react';
import Link from 'next/link';
import ThemeToggle from './theme-toggle.tsx';

export default function PageHeader() {
  return (
    <header className="flex jusify-between items-center sticky top-0 left-0">
      <div className="px-3 py-5 flex items-center justify-between basis-full md:container md:mx-auto">
        <Link href="/">
          <h1 className="text-sm font-semibold">
            Название
            <br />
            Клуба
          </h1>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
