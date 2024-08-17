import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card.tsx';

export default function Home() {
  return (
    <main className="flex grow basis-full overflow-hidden flex-col items-center justify-center p-3">
      <Card className="max-w-md p-4">
        <h1 className="text-center text-lg font-medium my-4">Добро пожаловать!</h1>
        <p className="text-base text-center my-3">
          Чтобы воспользоваться системой,
          пожалуйста, создайте учетную запись или зарегистрируйтесь
        </p>
        <div className="py-5 flex flex-col gap-y-3 w-full">
          <Link href="/login" className="basis-full grow text-center mx-4 px-4 py-2 rounded-md text-white bg-black dark:bg-white dark:text-black">Войти</Link>
          <Link href="/register" className="basis-full grow text-center mx-4 px-4 py-2 rounded-md text-white bg-black dark:bg-white dark:text-black">Зарегистрироваться</Link>
        </div>
      </Card>
    </main>
  );
}
