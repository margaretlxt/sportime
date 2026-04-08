"use client"
import { useState } from "react"
import { supabase } from "../../lib/supabase"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [level, setLevel] = useState("完全零基础")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleRegister = async () => {
    setLoading(true)
    setMessage("")

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name, phone, level }
      }
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage("注册成功！请查收验证邮件 🎾")
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#0b160b] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <a href="/" className="text-white font-serif text-2xl">Spor<span className="text-[#8fce6a]">time</span></a>
          <p className="text-white/40 text-sm mt-2">加入 12,000+ 网球爱好者</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h1 className="text-white font-serif text-2xl mb-6">免费注册</h1>

          {message && (
            <div className={`text-sm px-4 py-3 rounded-sm mb-4 ${message.includes("成功") ? "bg-[#eaf3de] text-[#3b6d11]" : "bg-red-900/30 text-red-300"}`}>
              {message}
            </div>
          )}

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-white/60 text-xs tracking-widest uppercase block mb-2">姓名</label>
                <input type="text" placeholder="你的名字" value={name} onChange={e => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#2d6a2d] transition-colors" />
              </div>
              <div>
                <label className="text-white/60 text-xs tracking-widest uppercase block mb-2">手机号</label>
                <input type="text" placeholder="138 0000 0000" value={phone} onChange={e => setPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#2d6a2d] transition-colors" />
              </div>
            </div>

            <div>
              <label className="text-white/60 text-xs tracking-widest uppercase block mb-2">电子邮件</label>
              <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#2d6a2d] transition-colors" />
            </div>

            <div>
              <label className="text-white/60 text-xs tracking-widest uppercase block mb-2">密码</label>
              <input type="password" placeholder="至少 8 位字符" value={password} onChange={e => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#2d6a2d] transition-colors" />
            </div>

            <div>
              <label className="text-white/60 text-xs tracking-widest uppercase block mb-2">你的网球水平</label>
              <div className="grid grid-cols-2 gap-2">
                {["完全零基础", "初级（1年以内）", "中级", "高级竞技"].map((l) => (
                  <button key={l} onClick={() => setLevel(l)}
                    className={`text-xs py-2 px-3 rounded-sm border text-left transition-colors ${level === l ? "bg-[#2d6a2d] border-[#2d6a2d] text-white" : "border-white/10 text-white/40 hover:border-[#2d6a2d]"}`}>
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={handleRegister} disabled={loading}
              className="w-full bg-[#2d6a2d] text-white py-3 text-sm rounded-sm hover:bg-[#245524] transition-colors mt-2 disabled:opacity-50">
              {loading ? "注册中..." : "免费注册 · 获取试课"}
            </button>
          </div>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-white/30 text-xs">或</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          <button className="w-full border border-white/10 text-white/60 py-3 text-sm rounded-sm hover:border-[#2d6a2d] transition-colors">
            微信一键注册
          </button>

          <p className="text-center text-white/30 text-xs mt-6">
            已有账号？<a href="/auth/login" className="text-[#8fce6a] hover:underline ml-1">立即登录</a>
          </p>
        </div>
      </div>
    </main>
  )
}