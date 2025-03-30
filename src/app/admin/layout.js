"use client";
import { Suspense } from "react";
import { SessionProvider } from "next-auth/react";

export default function AdminLayout({ children }) {
  return (
    <SessionProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </SessionProvider>
  );
}