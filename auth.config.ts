import Google from "next-auth/providers/google"
import Yandex from "next-auth/providers/yandex"
import type { NextAuthConfig } from "next-auth"
 
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [Google, Yandex],
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig