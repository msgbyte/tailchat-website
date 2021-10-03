---
sidebar_position: 1
---

# 开始开发插件

## 认识 MiniStar

`MiniStar` 是一套完整的微内核架构开发工具链，`tailchat`的插件架构就是基于 `MiniStar` 进行开发。

关于更多的 MiniStar 相关问题可以查看 MiniStar 的官方文档: [https://ministar.moonrailgun.com/](https://ministar.moonrailgun.com/)

## 创建一个基础项目

首先创建一个基本的 npm 项目, 并全局安装 `MiniStar`

```bash
npm install --global mini-star
```

在项目中执行: `ministar createPlugin` 来创建一个基本的插件
