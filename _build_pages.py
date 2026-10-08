from pathlib import Path

ROOT = Path(__file__).resolve().parent
HEAD = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  <meta name="description" content="{desc}">
  <link rel="canonical" href="https://www.symbionspace.com/{path}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="zh_CN">
  <meta property="og:site_name" content="Symbion">
  <meta property="og:url" content="https://www.symbionspace.com/{path}">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{desc}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600&family=Noto+Serif+SC:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/site.css">
</head>
<body data-root=".." data-page="{slug}">
  <header class="nav" id="site-nav"></header>
  <main class="page wrap">
"""
TAIL = """
  </main>
  <footer class="site-foot" id="site-foot"></footer>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js"></script>
  <script src="../js/site.js"></script>
</body>
</html>
"""

pages = {
  "product/citta.html": {
    "title": "Citta｜属于你的 AI — Symbion 中国区",
    "desc": "Citta 是属于你的 AI。理解上下文，调用工具、知识与 Cosmos，把想法做成工作。",
    "slug": "citta",
    "body": """
    <h1>你的 AI，真正开始为你工作。</h1>
    <p class="lead">Citta 是属于你的 AI。它不只是回答，而是行动。</p>
    <div class="prose">
      <p>Citta 理解你的上下文与工作方式；调用工具、知识、其他功能型 AI，以及你订阅的 Cosmos；帮助完成复杂任务；进入群聊参与协作；在需要时起草回复——人确认后才发出。</p>
      <h2>从一句话到完成</h2>
      <p>用户说：帮我做一份中国 AI Agent 市场分析。Citta 理解任务、搜索资料、调用 Research AI、调用 Expert Cosmo、分析、生成报告、创建 Document、分享到 Space。</p>
      <p><a href="../index.html#citta">回到首页演示</a></p>
    </div>
    """
  },
  "product/cosmo.html": {
    "title": "Cosmo｜你的智能载体 — Symbion 中国区",
    "desc": "Cosmo 是你的 AI representation，承载身份、知识、经验与能力。",
    "slug": "cosmo",
    "body": """
    <h1>每个人，都可以拥有自己的 Cosmo。</h1>
    <p class="lead">Cosmo 不是头像。它是可以承载、表达和提供个人智能的 AI representation。</p>
    <div class="prose">
      <p>Identity · Knowledge · Capability。我是谁，我知道什么，我能做什么。</p>
      <h2>它可以代表谁</h2>
      <p><b>Professor</b>：讲课、答疑、辅导、分享研究。<br>
      <b>Creator</b>：粉丝互动、内容、推荐。<br>
      <b>Professional</b>：展示专业、咨询、帮助他人完成工作。</p>
      <p><a href="../explore/cosmos.html">探索 Cosmos</a></p>
    </div>
    """
  },
  "product/spaces.html": {
    "title": "Spaces｜人与 AI 的协作 — Symbion 中国区",
    "desc": "Spaces 是人与人、人与 AI、AI 与 AI 的协作空间。",
    "slug": "spaces",
    "body": """
    <h1>当 AI 进入人与人的协作。</h1>
    <p class="lead">Designer、PM、Engineer、Citta、Expert Cosmo 可以在同一个空间里工作。</p>
    <div class="prose">
      <p>Citta 在群聊中理解上下文、帮你起草回复、总结讨论、执行任务、调用其他 AI 与 Cosmos、协助决策。没有发出去的消息，除非你点了发送。</p>
      <p>Human ↔ Human · Human ↔ AI · AI ↔ AI</p>
      <p><a href="../index.html#spaces">看首页里的一段真实讨论</a></p>
    </div>
    """
  },
  "product/workspace.html": {
    "title": "Workspace｜AI-native 工作空间 — Symbion 中国区",
    "desc": "在 Symbion 内完成日常工作：搜索、研究、创建、协作、完成。",
    "slug": "workspace",
    "body": """
    <h1>从一个想法，到真正完成。</h1>
    <p class="lead">工作不必再在十几个工具之间切换。</p>
    <div class="prose">
      <p>Search → Research → Create → Collaborate → Complete。同一张桌上：Documents、Tasks、Projects、Research、Email、Files、Citta、Spaces。</p>
      <p>Symbion 不是 AI 社交，也不是又一个聊天框。它是 AI-native 工作空间。</p>
    </div>
    """
  },
  "explore/cosmos.html": {
    "title": "探索 Cosmos — Symbion 中国区",
    "desc": "发现、订阅、询问、连接、调用别人的 Cosmo。",
    "slug": "cosmos",
    "body": """
    <h1>你的 AI，可以连接别人的 AI。</h1>
    <p class="lead">Explore · Subscribe · Ask · Connect · Invoke</p>
    <div class="prose">
      <p>当一个人的知识成为 Cosmo，智能就不再只属于一个人。产品研究时，Citta 可以调用你订阅的专家 Cosmo，把判断接回你正在写的文档。</p>
      <div class="roles" style="margin-top:28px">
        <article class="role"><h3>产业研究</h3><p>订阅学者与分析师的 Cosmo，让 Citta 在报告里引用他们的判断。</p></article>
        <article class="role alt"><h3>创作与知识</h3><p>创作者 Cosmo 回答粉丝常问，知识仍归本人定义。</p></article>
        <article class="role alt2"><h3>专业咨询</h3><p>在许可范围内调用顾问能力，而不是复制一个假人。</p></article>
      </div>
    </div>
    """
  },
  "explore/use-cases.html": {
    "title": "场景 — Symbion 中国区",
    "desc": "个人、创作者、专业人士与团队如何与 Citta、Cosmo 一起工作。",
    "slug": "use-cases",
    "body": """
    <h1>AI，可以成为任何人的工作伙伴。</h1>
    <p class="lead">按角色，不按功能清单。</p>
    <div class="cases">
      <article class="case"><h3>Individuals</h3><p>研究、写作、学习、个人效率。Citta 记住长期上下文。</p></article>
      <article class="case"><h3>Creators</h3><p>粉丝互动、内容、知识分享、个人品牌。</p></article>
      <article class="case"><h3>Professionals</h3><p>咨询、专业输出、客户沟通、知识被调用。</p></article>
      <article class="case"><h3>Teams</h3><p>协作、项目、研究、AI 协助沟通。</p></article>
    </div>
    """
  },
  "explore/stories.html": {
    "title": "故事 — Symbion 中国区",
    "desc": "人如何用 Citta 与 Cosmo 把工作做完。",
    "slug": "stories",
    "body": """
    <h1>先把一件真事做完。</h1>
    <p class="lead">中国区官网第一则故事，来自大纲里的同一句话。</p>
    <div class="prose">
      <h2>中国 AI Agent 市场分析</h2>
      <p>课题组要一份能给合作方看的判断。Citta 读 Space 里的讨论，调用订阅的产业 Cosmo，起草文档，标出未决问题。没有自动发出的邮件。</p>
      <p>这不是功能演示。是「从想法到完成」在真实协作里的样子。</p>
    </div>
    """
  },
  "resources/docs.html": {
    "title": "文档 — Symbion 中国区",
    "desc": "Symbion 产品概念与使用说明。",
    "slug": "docs",
    "body": """
    <h1>先理解概念，再打开产品。</h1>
    <div class="prose">
      <p>Citta：属于你的 AI。<br>Cosmo：你的智能载体。<br>Spaces：协作。<br>Workspace：把工作做完。</p>
      <p>详细 API 与操作手册将随中国区开放同步更新。现在请从<a href="../index.html">品牌叙事</a>开始。</p>
    </div>
    """
  },
  "resources/help.html": {
    "title": "帮助中心 — Symbion 中国区",
    "desc": "使用 Citta、Cosmo、Spaces 的常见问题。",
    "slug": "help",
    "body": """
    <h1>Citta 不会擅自替你发出去。</h1>
    <div class="prose">
      <p>草稿需要人确认。Cosmo 不是替身头像，是可被调用的个人智能。Spaces 里的 AI 是参与者，仍由人决定公开范围。</p>
      <p>更多问题请<a href="../company/contact.html">联系我们</a>。</p>
    </div>
    """
  },
  "resources/blog.html": {
    "title": "Blog — Symbion 中国区",
    "desc": "关于共生智能的写作。",
    "slug": "blog",
    "body": """
    <h1>人定义智慧。</h1>
    <div class="prose">
      <p>第一篇文章会写：为什么 AI 不应该只是一个聊天框。在此之前，请读首页的品牌哲学。</p>
    </div>
    """
  },
  "company/about.html": {
    "title": "关于 — Symbion 中国区",
    "desc": "Symbion：AI-native 工作与智能平台。人与 AI，共生智能。",
    "slug": "about",
    "body": """
    <h1>人与 AI，共生智能。</h1>
    <p class="lead">Symbion 是 AI-native 工作与智能平台。人定义智慧，Cosmo 承载智慧，Citta 让智慧行动。</p>
    <div class="prose">
      <p>我们相信智能首先属于人。AI 的工作是理解、连接、完成——不是替代你成为谁。</p>
      <p>中国区官网是 <a href="https://www.symbionspace.com">www.symbionspace.com</a>。讲述同一套产品：Citta、Cosmo、Spaces、Workspace。</p>
    </div>
    """
  },
  "company/careers.html": {
    "title": "加入我们 — Symbion 中国区",
    "desc": "与 Symbion 一起构建人与智能的网络。",
    "slug": "careers",
    "body": """
    <h1>一起构建共生智能。</h1>
    <div class="prose">
      <p>中国区团队正在形成。我们寻找能把研究、产品与品牌写成同一件事的人。</p>
      <p>把你做过的工作与想做的角色写信到联系页。不设假岗位列表。</p>
      <p><a href="contact.html">联系</a></p>
    </div>
    """
  },
  "company/contact.html": {
    "title": "联系 — Symbion 中国区",
    "desc": "开始构建你的 Symbion。",
    "slug": "contact",
    "body": """
    <h1>你的 AI，可以从这里开始。</h1>
    <p class="lead">留下工作邮箱，或写信到 <a href="mailto:hello@symbionspace.com">hello@symbionspace.com</a>。我们会联系中国区开放与 Cosmo 探索。</p>
    <form class="form" id="start-form">
      <label for="name">姓名</label>
      <input id="name" name="name" required autocomplete="name">
      <label for="email">工作邮箱</label>
      <input id="email" name="email" type="email" required autocomplete="email">
      <label for="role">你更接近</label>
      <select id="role" name="role">
        <option>个人研究者 / 创作者</option>
        <option>专业人士</option>
        <option>团队</option>
        <option>合作与媒体</option>
      </select>
      <label for="note">你希望 Citta 先帮你完成什么</label>
      <textarea id="note" name="note" placeholder="例如：中国 AI Agent 市场分析"></textarea>
      <button class="btn btn-blue" type="submit">立即开始</button>
    </form>
    <p class="ok" id="form-ok" hidden>已记下。没有自动发送任何内容到外部——这是站点演示回执。</p>
    """
  },
  "legal/privacy.html": {
    "title": "隐私 — Symbion 中国区",
    "desc": "Symbion 中国区隐私说明。",
    "slug": "privacy",
    "body": """
    <h1>你的上下文属于你。</h1>
    <div class="prose">
      <p>Citta 使用你的工作上下文，是为了完成你确认的任务。Cosmo 对外提供的智能范围由你定义。本页为官网草案，正式条款将在产品对中国区用户开放时发布。</p>
    </div>
    """
  },
  "legal/terms.html": {
    "title": "条款 — Symbion 中国区",
    "desc": "Symbion 中国区使用条款草案。",
    "slug": "terms",
    "body": """
    <h1>人确认，才算完成。</h1>
    <div class="prose">
      <p>使用 Citta、Cosmo、Spaces 与 Workspace，即表示你理解：AI 起草不等于已发送、已发布或已代表你承诺。正式条款将随中国区服务上线更新。</p>
    </div>
    """
  },
}

for rel, meta in pages.items():
    path = ROOT / rel
    path.parent.mkdir(parents=True, exist_ok=True)
    html = HEAD.format(**meta, path=rel.replace("\\", "/")) + meta["body"] + TAIL
    path.write_text(html, encoding="utf-8")
    print("wrote", path)
