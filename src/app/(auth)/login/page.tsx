"use client";

import LoginUi from "@/components/auth/LoginUi";
import { useLogin } from "@/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending } = useLogin();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data: LoginFormData) => {
    login({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div>
      <LoginUi
        onSubmit={handleSubmit(onSubmit)}
        register={formRegister}
        errors={errors}
        isPending={isPending}
        showPassword={showPassword}
        tooglePassword={() => setShowPassword(!showPassword)}
      />
    </div>
  );
};

export default Login;
