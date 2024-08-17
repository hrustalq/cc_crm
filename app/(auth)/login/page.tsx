import React from 'react';

import Link from 'next/link';

import { signIn } from '@/auth.ts';

import { Button } from '@/components/ui/button.tsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { FaGoogle, FaSteam, FaYandex } from 'react-icons/fa';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Войти | Название клуба',
  description: 'Страница авторизации на сайте Название клуба',
};

export default function LoginPage() {
  return (
    <main className="flex basis-full px-3 grow justify-center items-center">
      <Card className="mx-auto max-w-sm lg:max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Войти</CardTitle>
          <CardDescription className="text-sm text-center">
            Для авторизации введите вашу почту или номер телефона
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <form
              className="grid gap-4"
              onSubmit={async () => {
                'use server';

                await signIn('credentials');
              }}
            >
              <div className="grid gap-2">
                <Label htmlFor="email">Почта</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="user@mail.ru"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Пароль</Label>
                  <Link href="/" className="ml-auto inline-block text-sm underline">
                    Забыли пароль?
                  </Link>
                </div>
                <Input id="password" placeholder="****" autoComplete="current-password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Войти
              </Button>
            </form>
            <Separator decorative orientation="horizontal" />
            <div className="flex items-center justify-center gap-x-3">
              <form onSubmit={async () => {
                'use server';

                await signIn('google');
              }}
              >
                <Button type="submit">
                  <FaGoogle className="size-4" />
                </Button>
              </form>
              <form onSubmit={async () => {
                'use server';

                await signIn('yandex');
              }}
              >
                <Button type="submit">
                  <FaYandex className="size-4" />
                </Button>
              </form>
              <form onSubmit={async () => {
                'use server';

                await signIn('credentials');
              }}
              >
                <Button type="submit">
                  <FaSteam className="size-4" />
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            Нет аккаунта?
            {' '}
            <Link href="/register" className="underline">
              Зарегистрироваться
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
