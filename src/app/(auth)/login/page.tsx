"use client";

import LoginUi from "@/components/auth/LoginUi";
import { useLogin } from "@/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Login = () => {
  return (
    <div>
      <LoginUi />
    </div>
  );
};

export default Login;
