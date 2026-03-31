"use client";

import React from "react";
import RegisterUi from "@/components/auth/RegisterUi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useRegister } from "@/hooks/useAuth";

const registerSchema = z
  .object({
    name: z.string().min(3, "Name should be atleast 3 characters."),
    email: z.email("Please enter a valid email."),
    password: z.string().min(6, "Password must be at least 6 characters."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { mutate: register, isPending } = useRegister();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) });

  const onSubmit = (data: RegisterFormData) => {
    register({
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
  };

  return (
    <div>
      <RegisterUi
        onSubmit={handleSubmit(onSubmit)}
        register={formRegister}
        errors={errors}
        isPending={isPending}
        showPassword={showPassword}
        showConfirm={showConfirm}
        tooglePassword={() => setShowPassword(!showPassword)}
        confirmPassword={() => setShowConfirm(!showConfirm)}
      />
    </div>
  );
};

export default Register;
