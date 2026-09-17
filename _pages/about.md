---
layout: academic-home
permalink: /
title: "Jiayi Shen"
description: "Jiayi Shen is a Ph.D. student in Data Science and Analytics at HKUST (Guangzhou), interested in statistical inference, online learning, and sequential decision-making."
redirect_from:
  - /about/
  - /about.html
---

<section class="page-section introduction" id="profile" aria-labelledby="profile-heading" markdown="1">
<header class="section-heading">
  <p class="eyebrow">Jiayi Shen · Academic Homepage</p>
  <h1 id="profile-heading">Profile</h1>
  <p class="section-summary">My background.</p>
</header>

I am a Ph.D. student in the Data Science and Analytics Thrust at the Hong Kong University of Science and Technology (Guangzhou), advised by Prof. [Tianyuan Jin](https://tianyuanjin.github.io/).

I received my bachelor's degree in Finance from the School of Management at the University of Science and Technology of China (USTC) in July 2026. During my undergraduate studies, I was advised by Prof. [Weiwei Zhuang](https://bs.ustc.edu.cn/chinese/profile.php?id=85), and my research focused on e-values, multiple testing, and sequential inference.

<a class="text-link" href="#contact">Get in touch</a>
</section>

<section class="page-section" id="research" aria-labelledby="research-heading">
  <header class="section-heading">
    <h2 id="research-heading">Research Interests</h2>
    <p class="section-summary">Statistical inference, learning, and decision-making.</p>
  </header>
  <div class="research-list">
    <article class="research-item"><span class="item-number" aria-hidden="true">01</span><div><h3>Statistical Inference</h3><p>E-values, sequential statistical inference, and high-dimensional statistical inference.</p></div></article>
    <article class="research-item"><span class="item-number" aria-hidden="true">02</span><div><h3>Online Learning &amp; Adaptive Algorithms</h3><p>Online learning and adaptive algorithms.</p></div></article>
    <article class="research-item"><span class="item-number" aria-hidden="true">03</span><div><h3>Sequential Decision-Making</h3><p>Multi-armed bandits and reinforcement learning.</p></div></article>
  </div>
</section>

<section class="page-section" id="education" aria-labelledby="education-heading">
  <header class="section-heading"><h2 id="education-heading">Education</h2></header>
  <div class="timeline">
    <article class="timeline-item"><p class="period">2026 — Present</p><div><h3>Hong Kong University of Science and Technology (Guangzhou)</h3><p>Ph.D. Student · Data Science and Analytics Thrust</p><p class="detail">Advisor: Prof. <a href="https://tianyuanjin.github.io/">Tianyuan Jin</a></p></div></article>
    <article class="timeline-item"><p class="period">2021 — 2026</p><div><h3>University of Science and Technology of China</h3><p>Bachelor's Degree in Finance · School of Management</p><p class="detail">Advisor: Prof. <a href="https://bs.ustc.edu.cn/chinese/profile.php?id=85">Weiwei Zhuang</a></p></div></article>
  </div>
</section>

<section class="page-section" id="teaching" aria-labelledby="teaching-heading">
  <header class="section-heading"><h2 id="teaching-heading">Teaching</h2><p class="section-summary">Teaching assistant at the University of Science and Technology of China.</p></header>
  <div class="teaching-list">
    {% assign courses = site.teaching | sort: 'date' | reverse %}
    {% for course in courses %}
    <article class="teaching-item"><p class="period">{{ course.date | date: '%b %Y' }}</p><div><h3>{{ course.title | remove: 'Teaching Assistant of ' | escape }}</h3><p>Teaching Assistant · Undergraduate course</p></div></article>
    {% endfor %}
  </div>
</section>

<section class="page-section contact-section" id="contact" aria-labelledby="contact-heading">
  <header class="section-heading"><h2 id="contact-heading">Get in Touch</h2><p class="section-summary">Feel free to contact me.</p></header>
  <div class="contact-links">
    <a href="mailto:plusoneshen@gmail.com"><span class="contact-label">Personal email</span><span>plusoneshen@gmail.com</span></a>
    <a href="mailto:jshen698@connect.hkust-gz.edu.cn"><span class="contact-label">University email</span><span>jshen698@connect.hkust-gz.edu.cn</span></a>
  </div>
  <a class="cv-link" href="{{ '/files/CV_Shen_Jiayi.pdf' | relative_url }}">View / Download CV <span>PDF</span></a>
</section>
