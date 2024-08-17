import { z } from "zod";

const RegisterSchema = z.object({
  login: z.string().refine(value => {
    const isEmail = z.string().email().safeParse(value).success;
    const isPhone = /^(\+7|8)\d{10}$/.test(value);
    return isEmail || isPhone;
  }, {
    message: "Введите корректный email или номер телефона.",
  }),
  password: z.string().min(6, "Пароль должен содержать не менее 6 символов."),
  confirmPassword: z.string(),
}).superRefine(({ password, confirmPassword }, ctx) => {
  if (password !== confirmPassword) {
    ctx.addIssue({
      code: "custom",
      path: ["confirmPassword"],
      message: "Пароль и подтверждение пароля не совпадают.",
    });
  }
});

export default RegisterSchema;
