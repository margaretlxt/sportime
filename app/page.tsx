export default function Home() {
  const coaches = [
    { name: "李明远", initial: "李", title: "前职业球员 · ITF 认证 · 北京", tags: ["竞技提升", "发球技术", "青少年"], price: "¥380", rating: "4.9", reviews: "128", bg: "from-[#1a3a1a] to-[#2d5a1a]", featured: true, id: "li-mingyuan" },
    { name: "王雅琴", initial: "王", title: "体育学院硕士 · USPTA 认证 · 上海", tags: ["零基础入门", "女子专场", "体能训练"], price: "¥280", rating: "4.8", reviews: "96", bg: "from-[#1a2a3a] to-[#1a3a4a]", featured: false, id: "wang-yaqin" },
    { name: "张峰", initial: "张", title: "ATP 赛事裁判 · 广州 · 12年经验", tags: ["战术分析", "双打技巧", "成人班"], price: "¥320", rating: "4.9", reviews: "74", bg: "from-[#3a1a1a] to-[#4a2a10]", featured: false, id: "zhang-feng" },
  ]

  return (
    <main className="min-h-screen bg-[#0b160b]">

      {/* 导航栏 */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10">
        <div className="text-white font-serif text-xl">Spor<span className="text-[#8fce6a]">time</span></div>
        <div className="flex gap-6 items-center">
          <a className="text-white/60 text-sm hover:text-white cursor-pointer">找教练</a>
          <a className="text-white/60 text-sm hover:text-white cursor-pointer">成为教练</a>
          <a className="text-white/60 text-sm hover:text-white cursor-pointer">定价</a>
          <button className="bg-[#2d6a2d] text-white text-sm px-4 py-2 rounded-sm hover:bg-[#245524]">免费注册</button>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex flex-col items-center justify-center text-center px-8 py-32">
        <div className="text-[#8fce6a] text-xs tracking-widest uppercase mb-6">全国认证教练平台 · 800+ 教练</div>
        <h1 className="text-white font-serif text-6xl font-light leading-tight mb-6">
          找到你的<br />
          <em className="text-[#8fce6a] not-italic">完美教练</em><br />
          赢在每一拍
        </h1>
        <p className="text-white/50 text-sm max-w-md leading-relaxed mb-10">连接全国专业认证网球教练，智能匹配最适合你水平与目标的训练方案</p>
        <div className="flex gap-4">
          <button className="bg-[#2d6a2d] text-white px-8 py-3 text-sm rounded-sm hover:bg-[#245524]">立即找教练</button>
          <button className="border border-white/30 text-white px-8 py-3 text-sm rounded-sm hover:border-[#8fce6a]">了解更多</button>
        </div>
        <div className="flex gap-12 mt-16">
          <div><div className="text-[#8fce6a] font-serif text-3xl">800+</div><div className="text-white/40 text-xs tracking-widest uppercase mt-1">认证教练</div></div>
          <div><div className="text-[#8fce6a] font-serif text-3xl">50+</div><div className="text-white/40 text-xs tracking-widest uppercase mt-1">覆盖城市</div></div>
          <div><div className="text-[#8fce6a] font-serif text-3xl">98%</div><div className="text-white/40 text-xs tracking-widest uppercase mt-1">好评率</div></div>
          <div><div className="text-[#8fce6a] font-serif text-3xl">12k+</div><div className="text-white/40 text-xs tracking-widest uppercase mt-1">活跃学员</div></div>
        </div>
      </div>

      {/* 使用流程 */}
      <div className="px-8 py-24 border-t border-white/10">
        <div className="text-center mb-16">
          <div className="text-[#8fce6a] text-xs tracking-widest uppercase mb-3">使用流程</div>
          <h2 className="text-white font-serif text-4xl font-light">四步开启训练之旅</h2>
        </div>
        <div className="grid grid-cols-4 gap-8 max-w-4xl mx-auto relative">
          <div className="absolute top-6 left-[18%] right-[18%] h-px bg-[#2d6a2d]/50"></div>
          {[
            { num: "1", title: "填写信息", desc: "告诉我们你的水平、目标与时间安排" },
            { num: "2", title: "智能匹配", desc: "AI 精准推荐最适合你的教练" },
            { num: "3", title: "免费试课", desc: "一键预约，零门槛体验第一节课" },
            { num: "4", title: "持续进步", desc: "个性化课程计划，追踪你的成长" },
          ].map((step) => (
            <div key={step.num} className="text-center relative z-10">
              <div className="w-12 h-12 rounded-full border border-[#2d6a2d] flex items-center justify-center mx-auto mb-4 bg-[#0b160b] text-[#2d6a2d] font-serif text-lg">{step.num}</div>
              <div className="text-white text-sm font-medium mb-2">{step.title}</div>
              <div className="text-white/40 text-xs leading-relaxed">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 教练卡片 */}
      <div className="px-8 py-24 border-t border-white/10">
        <div className="text-center mb-16">
          <div className="text-[#8fce6a] text-xs tracking-widest uppercase mb-3">精选教练</div>
          <h2 className="text-white font-serif text-4xl font-light">认识我们的明星教练</h2>
          <p className="text-white/40 text-sm mt-3">每位教练均通过严格资质认证，平均执教经验 8 年以上</p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {coaches.map((coach) => (
            <div key={coach.name} className={`rounded-xl overflow-hidden border ${coach.featured ? "border-[#2d6a2d]" : "border-white/10"} bg-white/5`}>
              <div className={`h-20 bg-gradient-to-br ${coach.bg} relative`}>
                <div className="absolute top-2 right-2 bg-black/40 text-[#8fce6a] text-xs px-2 py-1 rounded">✓ 认证</div>
                <div className="absolute -bottom-6 left-4 w-12 h-12 rounded-full bg-[#2d6a2d] border-2 border-[#0b160b] flex items-center justify-center text-white font-serif text-lg">{coach.initial}</div>
              </div>
              <div className="pt-8 px-4 pb-4">
                <div className="text-white font-medium mb-1">{coach.name}</div>
                <div className="text-white/40 text-xs mb-3">{coach.title}</div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {coach.tags.map((tag, i) => (
                    <span key={tag} className={`text-xs px-2 py-1 rounded-sm ${i === 0 ? "bg-[#eaf3de] text-[#3b6d11]" : "bg-white/10 text-white/50"}`}>{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div>
                    <div className="text-white font-serif text-lg">{coach.price}<span className="text-xs font-sans text-white/40">/时</span></div>
                    <div className="text-white/30 text-xs">含场地费</div>
                  </div>
                  <div className="text-white/60 text-xs">★ {coach.rating} ({coach.reviews})</div>
                  <a href={`/coaches/${coach.id}`} className="bg-[#2d6a2d] text-white text-xs px-3 py-2 rounded-sm hover:bg-[#245524]">预约</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 定价方案 */}
      <div className="px-8 py-24 border-t border-white/10">
        <div className="text-center mb-16">
          <div className="text-[#8fce6a] text-xs tracking-widest uppercase mb-3">定价方案</div>
          <h2 className="text-white font-serif text-4xl font-light">选择最适合你的方案</h2>
          <p className="text-white/40 text-sm mt-3">透明定价，无隐藏费用。所有方案均含免费试课一次。</p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { name: "入门", price: "免费", period: "永久免费", features: ["浏览所有教练资料", "免费试课 1 次", "基础搜索与筛选", "课后评价功能"], featured: false, btn: "免费注册" },
            { name: "进阶", price: "¥98", period: "每月", features: ["无限次课程预约", "AI 智能教练匹配", "课后视频回放", "进度追踪报告", "优先客服支持"], featured: true, btn: "立即订阅" },
            { name: "精英", price: "¥298", period: "每月", features: ["包含所有进阶功能", "专属训练顾问", "赛事报名协助", "营养与体能方案", "线下活动优先席位"], featured: false, btn: "了解详情" },
          ].map((plan) => (
            <div key={plan.name} className={`rounded-xl p-8 relative border ${plan.featured ? "border-[#2d6a2d] bg-[#0e1a0e]" : "border-white/10 bg-white/5"}`}>
              {plan.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2d6a2d] text-white text-xs px-4 py-1 rounded-full">最受欢迎</div>}
              <div className="text-[#8fce6a] text-xs tracking-widest uppercase mb-4">{plan.name}</div>
              <div className="text-white font-serif text-5xl font-light mb-1">{plan.price}</div>
              <div className="text-white/40 text-xs mb-8">{plan.period}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="w-1 h-1 bg-[#2d6a2d] rotate-45 inline-block flex-shrink-0"></span>{f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 text-sm rounded-sm transition-colors ${plan.featured ? "bg-[#2d6a2d] text-white hover:bg-[#245524]" : "border border-white/20 text-white hover:border-[#2d6a2d]"}`}>{plan.btn}</button>
            </div>
          ))}
        </div>
      </div>

      {/* 用户评价 */}
      <div className="px-8 py-24 border-t border-white/10">
        <div className="text-center mb-16">
          <div className="text-[#8fce6a] text-xs tracking-widest uppercase mb-3">用户评价</div>
          <h2 className="text-white font-serif text-4xl font-light">他们都在用 Sportime</h2>
          <p className="text-white/40 text-sm mt-3">来自全国各地学员的真实反馈</p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "刘晓雨", role: "北京 · 上班族", text: "三个月前我完全不会打球，现在已经能和朋友打双打了。Sportime 帮我找到了完全适合零基础的教练。", stars: 5 },
            { name: "赵建国", role: "上海 · 企业家", text: "预约系统太方便了，看教练空档、付款、确认，全程五分钟搞定。上课体验远超我的预期。", stars: 5 },
            { name: "林妈妈", role: "广州 · 家长", text: "给孩子找到了专业的青少年教练，半年比赛成绩从全市第40提升到前8，感谢 Sportime！", stars: 5 },
          ].map((review) => (
            <div key={review.name} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="text-[#c09a53] text-sm tracking-widest mb-3">{"★".repeat(review.stars)}</div>
              <div className="text-[#2d6a2d] font-serif text-4xl leading-none mb-2 opacity-50">"</div>
              <p className="text-white/80 text-sm font-serif italic leading-relaxed mb-6">{review.text}</p>
              <div className="text-[#8fce6a] text-xs tracking-widest uppercase">— {review.name} · {review.role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 px-8 py-8 flex items-center justify-between">
        <div className="text-white font-serif text-lg">Spor<span className="text-[#8fce6a]">time</span></div>
        <div className="text-white/30 text-xs">© 2024 Sportime · 网球教练匹配平台</div>
        <div className="flex gap-4 text-white/30 text-xs">
          <span className="cursor-pointer hover:text-white">隐私政策</span>
          <span className="cursor-pointer hover:text-white">服务条款</span>
          <span className="cursor-pointer hover:text-white">联系我们</span>
        </div>
      </div>

    </main>
  )
}