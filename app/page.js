"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/auth";
import Image from "next/image";

// Splash — логотип көрсетіліп, автоматты түрде әрі қарай өтеді.
export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace(getSession() ? "/start" : "/login");
    }, 1300);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <Image 
        src="/logo.png" 
        alt="LOOPIT" 
        width={180} 
        height={180}
        priority
        className="drop-shadow-xl animate-pulse"
      />
    </div>
  );
}
