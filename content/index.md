---
publish: true
title: Zen Mind , Generative Core.
created: 2026-01-02T11:16:13.869+08:00
modified: 2026-01-25T16:36:23.067+08:00
cssclasses: home
---


<div id="goatcounter-views" style="text-align: center; margin-bottom: 0.8rem;">
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

**这里不是终点，而是过程。**

我在这里记录关于 **CPA备考笔记**，以及关于构建 **高效能** 的知识管理系统的思考。

<div class="home-section-title">开始阅读</div>

<div class="home-cards">
  <a class="home-card" href="/A1-会计笔记">
    <span class="home-card-icon" aria-hidden="true">📘</span>
    <span class="home-card-title">会计章节笔记</span>
    <span class="home-card-desc">体系化章节笔记与重点整理</span>
  </a>
  <a class="home-card" href="/A2-会计归纳">
    <span class="home-card-icon" aria-hidden="true">🧠</span>
    <span class="home-card-title">会计归纳卡片</span>
    <span class="home-card-desc">高频考点与方法论精炼卡片</span>
  </a>
  <a class="home-card" href="/评论反馈">
    <span class="home-card-icon" aria-hidden="true">✉️</span>
    <span class="home-card-title">评论反馈</span>
    <span class="home-card-desc">勘误与交流建议的入口</span>
  </a>
</div>

<div class="home-section-title">你能在这里找到什么</div>

- 体系化的会计章节笔记（持续更新）
- 真题与例题的拆解与总结
- 学习方法、复盘思路与工具流程

![[99-system/附件/index-1769330070677.webp|640]]




