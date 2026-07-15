"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "@/lib/auth";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = loginUser(identifier, password);
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    router.push("/start");
  }

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      {/* Логотип бөлігі - мәтіндік логотип */}
      <div className="relative bg-gradient-to-br from-horizon via-horizon to-horizon-dark px-6 pt-20 pb-24 overflow-hidden">
        {/* Декоративті шеңберлер */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        
        {/* Мәтіндік логотип */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* LOOPIT жазуы - үлкен градиентті шрифтпен */}
          <h1 className="font-display font-extrabold text-6xl md:text-7xl text-white tracking-tight">
            LOOP<span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">IT</span>
          </h1>
          
          {/* Астындағы сызық */}
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          
          {/* Сипаттама */}
          <p className="mt-4 text-base text-white/80 font-medium tracking-wide">
            Марафон платформасына қош келдіңіз
          </p>
        </div>
      </div>

      <div className="flex-1 px-6 -mt-8">
        <div className="bg-white rounded-3xl shadow-lg border border-mist-light p-6 max-w-sm mx-auto">
          <h2 className="font-display text-xl font-semibold text-ink mb-1">Кіру</h2>
          <p className="text-sm text-mist mb-6">Аккаунтыңызға кіріп жалғастырыңыз</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-ink">Email немесе телефон нөмірі</span>
              <input
                required
                autoFocus
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="email@mail.kz немесе +7..."
                className="rounded-xl border border-mist-light px-3.5 py-3 text-sm"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-ink">Құпия сөз</span>
              <div className="relative">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-mist-light px-3.5 py-3 text-sm pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-mist"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </label>

            {error && <p className="text-xs text-ember bg-ember-light rounded-lg px-3 py-2">{error}</p>}

            <Button type="submit" size="lg" disabled={loading} className="mt-2 w-full">
              {loading ? "Тексерілуде..." : "Кіру"}
            </Button>
          </form>

          <p className="text-center text-sm text-mist mt-6">
            Аккаунтыңыз жоқ па?{" "}
            <Link href="/register" className="text-horizon-dark font-medium">
              Тіркелу
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
