const coaches = [
  {
    id: "li-mingyuan",
    name: "李明远",
    initial: "李",
    title: "前职业球员 · ITF 认证教练",
    city: "北京",
    experience: "12年",
    price: 380,
    rating: 4.9,
    reviews: 128,
    tags: ["竞技提升", "发球技术", "青少年"],
    bio: "前中国青少年网球联赛冠军，ITF 国际认证教练，专注于竞技提升与发球技术优化。擅长因材施教，已培训超过 300 名学员，其中 12 名晋级省级比赛。",
    slots: ["周二 09:00", "周三 14:00", "周四 10:00", "周五 16:00", "周六 09:00", "周日 11:00"],
    testimonials: [
      { name: "陈同学", text: "李教练的发球训练方法非常系统，三个月我的一发速度提升了 20km/h！", stars: 5 },
      { name: "周先生", text: "耐心细致，针对我的弱点制定专项训练，每次课都有明显进步。", stars: 5 },
      { name: "林女士", text: "专业水准极高，孩子非常喜欢他的教学风格。", stars: 5 },
    ],
  },
  {
    id: "wang-yaqin",
    name: "王雅琴",
    initial: "王",
    title: "体育学院硕士 · USPTA 认证",
    city: "上海",
    experience: "8年",
    price: 280,
    rating: 4.8,
    reviews: 96,
    tags: ["零基础入门", "女子专场", "体能训练"],
    bio: "体育学院运动训练专业硕士，USPTA 国际认证教练。专注零基础学员和女性学员，教学风格温和耐心，善于帮助初学者建立正确的击球习惯和运动意识。",
    slots: ["周一 10:00", "周三 09:00", "周五 14:00", "周六 10:00", "周日 15:00"],
    testimonials: [
      { name: "张女士", text: "从完全零基础到能打完整的一局，王教练功不可没！", stars: 5 },
      { name: "刘同学", text: "教学非常系统，每节课都有清晰的目标和反馈。", stars: 5 },
      { name: "陈女士", text: "女子专场氛围很好，推荐给所有想学网球的女生！", stars: 5 },
    ],
  },
  {
    id: "zhang-feng",
    name: "张峰",
    initial: "张",
    title: "ATP 赛事裁判 · 12年执教经验",
    city: "广州",
    experience: "12年",
    price: 320,
    rating: 4.9,
    reviews: 74,
    tags: ["战术分析", "双打技巧", "成人班"],
    bio: "ATP 国际认证裁判，同时担任专业网球教练12年。对网球规则和战术有深入研究，擅长双打配合训练和比赛心理辅导。",
    slots: ["周二 14:00", "周四 09:00", "周五 10:00", "周六 14:00", "周日 09:00"],
    testimonials: [
      { name: "王先生", text: "张教练的战术课让我对网球有了全新的理解，双打成绩大幅提升！", stars: 5 },
      { name: "李同学", text: "作为裁判出身，对规则的理解非常深刻，受益匪浅。", stars: 5 },
      { name: "赵先生", text: "比赛心理辅导很有帮助，现在打比赛不再紧张了。", stars: 5 },
    ],
  },
]

export default async function CoachPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const coach = coaches.find((c) => c.id === id)

  if (!coach) return (
    <div className="min-h-screen bg-[#0b160b] text-white flex items-center justify-center">找不到该教练</div>
  )

  return (
    <main className="min-h-screen bg-[#0b160b]">
      <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10">
        <a href="/" className="text-white font-serif text-xl">Spor<span className="text-[#8fce6a]">time</span></a>
        <a href="/" className="text-white/60 text-sm hover:text-white">← 返回首页</a>
      </nav>

      <div className="max-w-5xl mx-auto px-8 py-12">
        <div className="bg-gradient-to-br from-[#1a3a1a] to-[#2d5a1a] rounded-xl p-8 mb-8 flex items-end gap-6">
          <div className="w-20 h-20 rounded-full bg-[#2d6a2d] border-4 border-white/20 flex items-center justify-center font-serif text-3xl text-white flex-shrink-0">
            {coach.initial}
          </div>
          <div className="flex-1">
            <div className="text-[#8fce6a] text-xs tracking-widest uppercase mb-1">✓ 认证教练</div>
            <h1 className="text-white font-serif text-3xl mb-1">{coach.name}</h1>
            <div className="text-white/60 text-sm">{coach.title} · {coach.city} · 执教{coach.experience}</div>
          </div>
          <div className="text-right">
            <div className="text-white font-serif text-4xl">¥{coach.price}</div>
            <div className="text-white/40 text-xs">每小时（含场地）</div>
            <div className="text-[#c09a53] text-sm mt-1">★ {coach.rating} ({coach.reviews}条评价)</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
              <div className="text-[#8fce6a] text-xs tracking-widest uppercase mb-3">教练简介</div>
              <p className="text-white/70 text-sm leading-relaxed">{coach.bio}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {coach.tags.map((tag) => (
                  <span key={tag} className="bg-[#eaf3de] text-[#3b6d11] text-xs px-3 py-1 rounded-sm">{tag}</span>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="text-[#8fce6a] text-xs tracking-widest uppercase mb-4">学员评价</div>
              {coach.testimonials.map((t) => (
                <div key={t.name} className="mb-4 pb-4 border-b border-white/10 last:border-0 last:mb-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-white text-sm font-medium">{t.name}</div>
                    <div className="text-[#c09a53] text-xs">{"★".repeat(t.stars)}</div>
                  </div>
                  <div className="text-white/60 text-xs leading-relaxed">{t.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 sticky top-8">
              <div className="text-[#8fce6a] text-xs tracking-widest uppercase mb-4">选择上课时间</div>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {coach.slots.map((slot, i) => (
                  <button key={slot} className={`text-xs p-3 rounded-sm border text-left transition-colors ${i === 0 ? "bg-[#2d6a2d] border-[#2d6a2d] text-white" : "border-white/20 text-white/60 hover:border-[#2d6a2d]"}`}>
                    <div className="font-medium">{slot.split(" ")[0]}</div>
                    <div className="text-xs opacity-70">{slot.split(" ")[1]}</div>
                  </button>
                ))}
              </div>
              <button className="w-full bg-[#2d6a2d] text-white py-3 text-sm rounded-sm hover:bg-[#245524] mb-3">确认预约 · 免费试课</button>
              <button className="w-full border border-white/20 text-white/60 py-3 text-sm rounded-sm hover:border-[#2d6a2d]">发消息给教练</button>
              <div className="text-center text-white/30 text-xs mt-4">预约后24小时内确认 · 免费取消</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}