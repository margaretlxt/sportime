export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0b160b] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <a href="/" className="text-white font-serif text-2xl">Spor<span className="text-[#8fce6a]">time</span></a>
          <p className="text-white/40 text-sm mt-2">欢迎回来</p>
        </div>

        {/* 卡片 */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h1 className="text-white font-serif text-2xl mb-6">登录账号</h1>

          <div className="space-y-4">
            <div>
              <label className="text-white/60 text-xs tracking-widest uppercase block mb-2">手机号 / 邮箱</label>
              <input
                type="text"
                placeholder="输入你的手机号或邮箱"
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#2d6a2d] transition-colors"
              />
            </div>

            <div>
              <label className="text-white/60 text-xs tracking-widest uppercase block mb-2">密码</label>
              <input
                type="password"
                placeholder="输入密码"
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#2d6a2d] transition-colors"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#2d6a2d]" />
                <span className="text-white/40 text-xs">记住我</span>
              </label>
              <a className="text-[#8fce6a] text-xs hover:underline cursor-pointer">忘记密码？</a>
            </div>

            <button className="w-full bg-[#2d6a2d] text-white py-3 text-sm rounded-sm hover:bg-[#245524] transition-colors mt-2">
              登录
            </button>
          </div>

          {/* 分隔线 */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-white/30 text-xs">或</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* 微信登录 */}
          <button className="w-full border border-white/10 text-white/60 py-3 text-sm rounded-sm hover:border-[#2d6a2d] transition-colors flex items-center justify-center gap-2">
            <span>微信一键登录</span>
          </button>

          <p className="text-center text-white/30 text-xs mt-6">
            还没有账号？
            <a href="/auth/register" className="text-[#8fce6a] hover:underline ml-1">免费注册</a>
          </p>
        </div>

      </div>
    </main>
  )
}