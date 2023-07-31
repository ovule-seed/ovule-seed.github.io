---
layout: page
title: About
description: 中国容积党中央委员会
keywords: 中国容积党中央委员会,the Central Committee of the Capacity Party of China
comments: true
menu: 关于
permalink: /about/
---

## 核心人物介绍

总书记、中央常委：中国容积党的主要创始人 ，联邦的主要缔造者，国土容积化体系思想的创始人，全世界相信国土容积化体系思想人的导师，全党享有崇高威望的卓越领导人，伟大的无产阶级思想家、思想家、思想家 ovuleseed。  

中央常委：中国容积党的主要创始人，卓越的外交家、思想家 thr333

中央常委：国土容积化体系思想的忠实崇尚者，党的利益的坚定捍卫者 monster

中央常委：Tashan Middle School Class Uphold-truth 元老级成员，久经考验的无产阶级战士 Mr.Huang

中央常委：中国容积党的主要创始人，国土容积化体系思想的忠实崇尚者 Mr. Luo

中央常委：以黄健博同志为核心的党的第一代中央领导集体的重要成员，伟大的国土容积化主义者 Mr.Liu

前中央常委：中国容积党的元老级党员，伟大的国土容积化体系思想擎旗人 WC√^O^×WC

党外援助：伟大的国土面积化主义者，中国容积党的核心领导人Ms.Ying





## 联系

<ul>
{% for website in site.data.social %}
<li>{{website.sitename }}：<a href="{{ website.url }}" target="_blank">@{{ website.name }}</a></li>
{% endfor %}
{% if site.url contains 'mazhuang.org' %}
<li>
</li>
{% endif %}
</ul>

<b> QQ邮箱：[2447920685@qq.com](2447920685@qq.com)</b>

## Keywords

{% for skill in site.data.skills %}
### {{ skill.name }}
<div class="btn-inline">
{% for keyword in skill.keywords %}
<button class="btn btn-outline" type="button">{{ keyword }}</button>
{% endfor %}
</div>
{% endfor %}
