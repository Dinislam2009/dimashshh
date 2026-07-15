"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/auth";

// Splash — logo + app name only, auto-continues after a beat.
// If a session already exists we skip straight past login.
export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace(getSession() ? "/start" : "/login");
    }, 1300);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-horizon to-horizon-dark text-white">
      <div className="h-16 w-16 rounded-3xl bg-white/15 backdrop-blur flex items-center justify-center">
        <span className="font-display font-extrabold text-2xl">J</span>
      </div>
      <h1 className="font-display font-extrabold text-2xl tracking-wide">JUZ40</h1>
      <div className="h-1 w-1.5 rounded-full bg-white/60 animate-pulse mt-2" />
    </div>
  );
}
