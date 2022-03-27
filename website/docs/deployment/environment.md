---
sidebar_position: 2
title: 环境变量
---

## 前端编译环境变量

| 变量名 | 默认值 | 描述 |
| ----- | ------ | --- |
| SERVICE_URL | http://127.0.0.1:11000 | 后端服务地址 |

## 后端环境变量

| 变量名 | 默认值 | 描述 |
| ----- | ------ | --- |
| PORT | 11000 | 网关服务端口号 |
| JWT_SECRET | tailchat | JWT加密秘钥 |
| API_URL | http://127.0.0.1:11000 | 对外可访问的url地址，用于文件服务访问 |
| MONGO_URL | - | 数据库服务地址 |
| REDIS_URL | - | Redis服务地址 |
| MINIO_URL | - | 文件服务地址(minio) |
| MINIO_USER | - | 文件服务用户名 |
| MINIO_PASS | - | 文件服务密码 |
| SMTP_SENDER | - | 邮件服务发件人(示例: `"Tailchat" example@163.com`) |
| SMTP_URI | - | 邮件服务连接地址(示例: `smtp://username:password@smtp.example.com/?pool=true`) |

> 示例可见: https://github.com/msgbyte/tailchat-server/blob/master/.env.example

### 使用文件进行配置环境变量

如果是本地方式启动，请复制 `.env.example` 到 `.env` 然后进行编辑
```bash
mv .env.example .env
vi .env
```

如果是 `docker-compose` 启动，可以直接编辑 `docker-compose.env`, 改动后直接使用 `docker-compose up -d` 即可生效
