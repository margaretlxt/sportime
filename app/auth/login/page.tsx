"use client"
import { useState } from "react"
import { supabase } from "../../lib/supabase"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleLogin = async () => {
    setLoading(true)
    setMessage("")

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setMessage(error.message)
    } else {
      window.location.href = "/"
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#0b160b] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <a href="/" className="text-white font-serif text-2xl">Spor<span className="text-[#8fce6a]">time</span></a>
          <p className="text-white/40 text-sm mt-2">欢迎回来</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h1 className="text-white font-serif text-2xl mb-6">登录账号</h1>

          {message && (
            <div className="bg-red-900/30 text-red-300 text-sm px-4 py-3 rounded-sm mb-4">
              {message}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="text-white/60 text-xs tracking-widest uppercase block mb-2">电子邮件</label>
              <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#2d6a2d] transition-colors" />
            </div>

            <div>
              <label className="text-white/60 text-xs tracking-widest uppercase block mb-2">密码</label>
              <input type="password" placeholder="输入密码" value={password} onChange={e => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#2d6a2d] transition-colors" />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#2d6a2d]" />
                <span className="text-white/40 text-xs">记住我</span>
              </label>
              <a className="text-[#8fce6a] text-xs hover:underline cursor-pointer">忘记密码？</a>
            </div>

            <button onClick={handleLogin} disabled={loading}
              className="w-full bg-[#2d6a2d] text-white py-3 text-sm rounded-sm hover:bg-[#245524] transition-colors disabled:opacity-50">
              {loading ? "登录中..." : "登录"}
            </button>
          </div>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-white/30 text-xs">或</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          <button className="w-full border border-white/10 text-white/60 py-3 text-sm rounded-sm hover:border-[#2d6a2d] transition-colors">
            微信一键登录
          </button>

          <p className="text-center text-white/30 text-xs mt-6">
            还没有账号？<a href="/auth/register" className="text-[#8fce6a] hover:underline ml-1">免费注册</a>
          </p>
        </div>
      </div>
    </main>
  )
}