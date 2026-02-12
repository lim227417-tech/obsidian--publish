---
publish: true
title: Zen Mind , Generative Core.
created: 2026-01-02T11:16:13.869+08:00
modified: 2026-01-25T16:36:23.067+08:00
cssclasses: home
---

<div id="goatcounter-views" style="text-align: right; margin-bottom: 0.8rem;">
  <span id="gc-badge" style="display: inline-flex; align-items: center; border-radius: 999px; overflow: hidden; font-size: 0.78rem; line-height: 1; box-shadow: 0 1px 3px rgba(0,0,0,0.08); opacity: 0; transition: opacity 0.3s ease;">
    <span style="background: var(--darkgray); color: var(--light); padding: 0.3em 0.6em 0.3em 0.7em; font-weight: 600; letter-spacing: 0.02em;">Visitors</span>
    <span id="gc-count" style="background: var(--secondary); color: var(--light); padding: 0.3em 0.7em 0.3em 0.6em; font-weight: 700; letter-spacing: 0.03em;">···</span>
  </span>
</div>

<script>
(function() {
  function fetchViews() {
    var badge = document.getElementById('gc-badge');
    var el = document.getElementById('gc-count');
    if (!el || !badge) return;
    fetch('https://zengen.goatcounter.com/counter/' + encodeURIComponent('/') + '.json')
      .then(function(r) { return r.json(); })
      .then(function(data) {
        el.textContent = data.count;
        badge.style.opacity = '1';
      })
      .catch(function() {
        badge.style.opacity = '0';
      });
  }
  fetchViews();
  document.addEventListener('nav', function() {
    if (document.body.dataset.slug === 'index' || document.body.dataset.slug === '') {
      fetchViews();
    }
  });
})();
</script>

**这里是一个持续打磨的学习现场。**

我在这里记录 **CPA备考笔记**，并整理关于 **高效能** 学习与知识管理的实践方法。

<div class="home-section-title">开始阅读</div>

<div class="home-cards">
  <a class="home-card" href="#" id="random-note" data-router-ignore>
    <span class="home-card-icon" aria-hidden="true">🎲</span>
    <span class="home-card-title">随机笔记</span>
    <span class="home-card-desc">随机跳转到一篇笔记</span>
  </a>
  <a class="home-card" href="/Z-方法与思考">
    <span class="home-card-icon" aria-hidden="true">🧭</span>
    <span class="home-card-title">方法与思考</span>
    <span class="home-card-desc">方法论与学习体系的沉淀</span>
  </a>
  <a class="home-card" href="/评论反馈">
    <span class="home-card-icon" aria-hidden="true">✉️</span>
    <span class="home-card-title">评论与反馈</span>
    <span class="home-card-desc">勘误与交流建议的入口</span>
  </a>
</div>

<script>
(function() {
  function setupRandomNote() {
    var link = document.getElementById('random-note');
    if (!link) return;
    link.onclick = function(e) {
      e.preventDefault();
      fetchData.then(function(data) {
        var slugs = Object.keys(data).filter(function(slug) {
          if (slug === 'index') return false;
          if (slug === '评论反馈') return false;
          if (slug.endsWith('/index')) return false;
          return true;
        });
        if (slugs.length === 0) return;
        var randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
        window.spaNavigate(new URL('/' + randomSlug, window.location.origin));
      });
    };
  }
  setupRandomNote();
  document.addEventListener('nav', function() {
    if (document.body.dataset.slug === 'index' || document.body.dataset.slug === '') {
      setupRandomNote();
    }
  });
})();
</script>

<div class="home-section-title">会计</div>

<div class="home-cards">
  <a class="home-card" href="/A1-会计笔记">
    <span class="home-card-icon" aria-hidden="true">📘</span>
    <span class="home-card-title">会计章节笔记</span>
    <span class="home-card-desc">体系化章节笔记与重点整理</span>
  </a>
  <a class="home-card" href="/A2-会计100关">
    <span class="home-card-icon" aria-hidden="true">🧠</span>
    <span class="home-card-title">会计 100 关</span>
    <span class="home-card-desc">逐关突破的核心考点与练习</span>
  </a>
  <a class="home-card" href="/A3-会计习题">
    <span class="home-card-icon" aria-hidden="true">🧩</span>
    <span class="home-card-title">会计习题</span>
    <span class="home-card-desc">题目训练与解题路径整理</span>
  </a>
</div>

<div class="home-section-title">最近笔记</div>
