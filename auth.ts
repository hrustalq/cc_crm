import NextAuth from 'next-auth';

import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from './lib/prisma.ts';

import authConfig from './auth.config.ts';

export const {
  handlers, signIn, signOut, auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig,
});
