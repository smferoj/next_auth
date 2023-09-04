"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false)

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-700">
      <h1 className="text-2xl pb-5 "> Login </h1>
      <hr />
      
      <label htmlFor="email">Email</label>
      <input
        className="p-2 w-1/3 mt-2 border bg-transparent border-gray-300 rounded-lg mg-4 focus:outline-none focus:border-gray-600"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 w-1/3 mt-2 border bg-transparent border-gray-300 rounded-lg mg-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="text"
        value = {user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />

      <button onClick ={onLogin} className="p-2 mt-5 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"> Login here</button>
      <Link href="/signup"> Problem?  Go to Signup page </Link>
    </div>
  );
}
