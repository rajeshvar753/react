"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    const data = await response.json();

    if (data.token) {

      localStorage.setItem("token", data.token);

      alert("Login Successful");

      window.location.href = "/home";

    } else {

      alert(data.message);

    }

  };

  return (
    <div>
<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
      Welcome Back to BharatInvesto
    </h2>

    {/* FORM */}
    <form onSubmit={handleLogin} className="mx-auto max-w-lg rounded-lg border">

      <div className="flex flex-col gap-4 p-4 md:p-8">

        {/* EMAIL */}
        <div>
          <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800"
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800"
          />
        </div>

        {/* LOGIN BUTTON */}
        <button
          type="submit"
          className="block rounded-lg bg-gray-800 px-8 py-3 text-white hover:bg-gray-700"
        >
          Log in
        </button>

      </div>

      <div className="flex items-center justify-center bg-gray-100 p-4">
        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-indigo-500 hover:text-indigo-600"
          >
            Register
          </a>
        </p>
      </div>

    </form>

  </div>
</div>
    </div>
  )
}

export default Login