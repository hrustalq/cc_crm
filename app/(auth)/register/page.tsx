import React from 'react';

import Link from 'next/link';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { type Metadata } from 'next';
import RegisterForm from './components/register-form.tsx';
import ProviderLoginLinks from '../components/provider-login-links.tsx';

export const metadata: Metadata = {
  title: 'Регистрация | Название клуба',
  description: 'Страница регистрации на сайте Название клуба',
};

export default function RegisterPage() {
  return (
    <main className="flex basis-full px-3 grow justify-center items-center">
      <Card className="w-full md:mx-auto md:max-w-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Регистрация</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <RegisterForm />
            <Separator decorative orientation="horizontal" />
            <ProviderLoginLinks />
          </div>
          <div className="mt-4 text-center text-sm">
            Уже есть аккаунт?
            {' '}
            <Link href="/login" className="underline">
              Войти
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
