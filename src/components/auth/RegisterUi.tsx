"use client";

import React from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Button } from "@/components/ui/button";

const RegisterUi = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F0EB] p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        {/* Logo */}
        <div className="flex justify-center items-center mb-6">
          <div className="text-3xl mb-1">💍</div>
          <h1 className="text-2xl font-bold text-gray-800">ShaadiBio</h1>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-center text-gray-800 mb-1">
          Create Account
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Start creating your beautiful biodata
        </p>

        {/* Google Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-2.5 text-lg  hover:bg-gray-50 transition mb-4"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Full Name */}
          <div className="relative">
            <input
              id="name"
              placeholder=" "
              className={`peer w-full border rounded-lg px-3 pt-5 pb-2 text-sm outline-none focus:ring-2 transition
                `}
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-3.5 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
                peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#8B1A4A]
                peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs"
            >
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder=" "
              className={`peer w-full border rounded-lg px-3 pt-5 pb-2 text-sm outline-none focus:ring-2 transition
               `}
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3.5 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
                peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#8B1A4A]
                peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs"
            >
              Email Address
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              id="password"
              //   type={showPassword ? 'text' : 'password'}
              placeholder=" "
              className={`peer w-full border rounded-lg px-3 pt-5 pb-2 pr-10 text-sm outline-none focus:ring-2 transition
                `}
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-3.5 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
                peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#8B1A4A]
                peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs"
            >
              Password
            </label>
            <button
              type="button"
              //   onClick={togglePassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <EyeOff className="w-4 h-4" />
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              id="confirmPassword"
              //   type={showConfirm ? 'text' : 'password'}
              placeholder=" "
              className={`peer w-full border rounded-lg px-3 pt-5 pb-2 pr-10 text-sm outline-none focus:ring-2 transition
                `}
            />
            <label
              htmlFor="confirmPassword"
              className="absolute left-3 top-3.5 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
                peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#8B1A4A]
                peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs"
            >
              Confirm Password
            </label>
            <button
              type="button"
              //   onClick={toggleConfirm}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <EyeOff className="w-4 h-4" />
            </button>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            // disabled={isPending}
            className="w-full bg-[#8B1A4A] hover:bg-[#7a1640] text-white rounded-lg py-2.5 text-sm font-semibold transition"
          >
            Create Account
          </Button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#8B1A4A] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterUi;
