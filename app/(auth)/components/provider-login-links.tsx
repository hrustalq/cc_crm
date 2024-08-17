'use client';

import React from 'react';
import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button.tsx';
import { FaGoogle, FaYandex, FaSteam } from 'react-icons/fa';

export default function ProviderLoginLinks() {
  return (
    <div className="flex items-center justify-center gap-x-3">
      <form onSubmit={async (e) => {
        e.preventDefault();
        await signIn('google');
      }}
      >
        <Button type="submit">
          <FaGoogle className="size-4" />
        </Button>
      </form>
      <form onSubmit={async (e) => {
        e.preventDefault();
        await signIn('yandex');
      }}
      >
        <Button type="submit">
          <FaYandex className="size-4" />
        </Button>
      </form>
      <form onSubmit={async (e) => {
        e.preventDefault();
        await signIn('credentials');
      }}
      >
        <Button type="submit">
          <FaSteam className="size-4" />
        </Button>
      </form>
    </div>
  );
}
