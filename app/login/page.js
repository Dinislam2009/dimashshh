
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                body {
                  background-color: white; /* Ensure the iframe has a white background */
                }

                
              </style>
                        </head>
                        <body>
                            

              <script>
                              "use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "@/lib/auth";
import Image from "next/image";
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
      {/* Логотип бөлігі */}
      <div className="relative bg-gradient-to-br from-horizon via-horizon to-horizon-dark px-6 pt-16 pb-20 overflow-hidden">
        {/* Декоративті шеңберлер */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        
        {/* Логотип контейнері */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Логотип иконкасы - кішірейтілген */}
          <div className="relative group">
            {/* Glow эффект */}
            <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-all duration-500 scale-150"></div>
            
            {/* Логотип суреті - кіші */}
            <div className="relative bg-white/15 backdrop-blur-md rounded-full p-4 border border-white/25 shadow-2xl">
              <Image 
                src="/logo.png" 
                alt="LOOPIT" 
                width={80} 
                height={80}
                priority
                className="drop-shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>
          </div>
          
          {/* LOOPIT жазуы - әдемі шрифтпен */}
          <h1 className="mt-6 font-display font-extrabold text-4xl text-white tracking-wider">
            LOOP<span className="text-blue-300">IT</span>
          </h1>
          <p className="mt-3 text-sm text-white/70 font-medium">Марафон платформасына қош келдіңіз</p>
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


              </script>
                        </body>
                        </html>
                    
