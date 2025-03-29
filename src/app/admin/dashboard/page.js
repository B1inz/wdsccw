"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Correct Hook
import { useSession } from "next-auth/react";

const AdminDashboard = () => {
  const { data: session, status } = useSession(); // NextAuth session
  const router = useRouter(); // ✅ Use correct router for App Router

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/ward-13"); // Redirect if not authenticated
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {session ? (
        <p>Welcome, {session.user?.email}!</p>
      ) : (
        <p>Please log in to view the dashboard.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
