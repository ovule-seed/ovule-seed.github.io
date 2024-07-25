---
layout: page
title: About
description: 中国容积党中央委员会
keywords: 中国容积党中央委员会,the Central Committee of the Capacity Party of China
comments: true
menu: 关于
permalink: /about/
---

![image](https://pic.imgdb.cn/item/66a22f43d9c307b7e95eb226.png){: width="15%" } ![image](https://pic.imgdb.cn/item/66a22f43d9c307b7e95eb1ee.png){: width="15%" } ![image](https://pic.imgdb.cn/item/66a23130d9c307b7e961a817.png){: width="20%" }![image](https://pic.imgdb.cn/item/66a22f43d9c307b7e95eb1fb.png){: width="15%" } ![image](https://pic.imgdb.cn/item/66a22f43d9c307b7e95eb20f.png){: width="15%" } 

## 核心人物介绍
### 现任核心领导集体
现任总书记、中央常委：中国容积党的主要创始人，联邦的主要缔造者，国土容积化体系思想的创始人，新联社会主义提出者，全世界相信国土容积化体系思想人的导师，全党享有崇高威望的卓越领导人，伟大的无产阶级思想家、思想家、思想家 黄健博。（左三）  

中央常委：现任联邦政府总理，中国容积党早期党员，伟大的思想家蔡烁（左二）

中央常委：国土容积化体系思想的忠实崇尚者，党的利益的坚定捍卫者冯奕滔（右二）

中央常委：中国容积党的主要创始人，国土容积化体系思想的忠实崇尚者罗义恒（左一）

中央常委：早期党员，久经考验的国土容积化体系战士黄一修（右一）

### 第二届党的中央领导集体（2023年11月28日至今）
现任总书记、中央常委：中国容积党的主要创始人 ，联邦的主要缔造者，国土容积化体系思想的创始人，新联社会主义提出者，全世界相信国土容积化体系思想人的导师，全党享有崇高威望的卓越领导人，伟大的无产阶级思想家、思想家、思想家 黄健博。  

中央常委：中国容积党早期党员，现任联邦政府总理，伟大的思想家蔡烁

中央常委：国土容积化体系思想的忠实崇尚者，党的利益的坚定捍卫者冯奕滔

中央常委：伊姝羽，曾担任重要工作，做出一定贡献，后悍然叛党，被勒令离党（任内停职）

中央常委：中国容积党的主要创始人，国土容积化体系思想的忠实崇尚者罗义恒

中央常委：早期党员，久经考验的国土容积化体系战士黄一修
### 第一届党的中央领导集体（2022年11月20日-2023年11月28日）
总书记、中央常委：中国容积党的主要创始人 ，联邦的主要缔造者，国土容积化体系思想的创始人，新联社会主义提出者，全世界相信国土容积化体系思想人的导师，全党享有崇高威望的卓越领导人，伟大的无产阶级思想家、思想家、思想家黄健博。  

中央常委：国土容积化体系思想的忠实崇尚者，党的利益的坚定捍卫者冯奕滔

中央常委：早期党员，久经考验的国土容积化体系战士黄一修

中央常委：中国容积党的主要创始人，国土容积化体系思想的忠实崇尚者罗义恒

中央常委：以黄健博同志为核心的党的第一代中央领导集体的重要成员，伟大的国土容积化主义者刘尚池

中央常委：中国容积党的元老级党员，伟大的国土容积化体系思想擎旗人 赵喆霖（任内离职）

中央常委：中国容积党的重要党员，外交家、思想家 唐浩然，曾对党和人民做出有利贡献，在2023年秋冬之交时犯下严重错误。（任内停职）

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

<b>邮箱： <a href="mailto:2447920685@qq.com">2447920685@qq.com</a></b>

## Keywords

{% for skill in site.data.skills %}
### {{ skill.name }}
<div class="btn-inline">
{% for keyword in skill.keywords %}
<button class="btn btn-outline" type="button">{{ keyword }}</button>
{% endfor %}
</div>
{% endfor %}
