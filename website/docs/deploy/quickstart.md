---
sidebar_position: 1
---

# 快速开始

## 前端代码

拉取前端源码:

```bash
git clone https://github.com/msgbyte/tailchat

cd tailchat
```

### 编译代码

```bash
pnpm install
cd web
SERVICE_URL=http://127.0.0.1:11000 pnpm build
```

环境变量: 
- `SERVICE_URL`: 后端服务的地址

使用任意方式代理 `web/dist` 目录即可。

## 后端服务

拉取后端源码:

```bash
git clone https://github.com/msgbyte/tailchat-server

cd tailchat-server
```

### 单节点部署

#### docker-compose 一键部署(建议)

请确保已经安装了:
- docker
- docker-compose

修改 `docker-compose.env` 中的 `API_URL` 配置，将其改为服务端可访问的url

在项目根目录下执行
```bash
docker-compose build # 需要编译
docker-compose up -d
```

### k8s集群部署

TODO

### 开发环境部署

强烈建议使用 `Docker` 初始化第三方开发环境, 隔离性更加好 并且无需复杂的安装配置。

mongodb
```bash
docker run -d --name mongo -p 127.0.0.1:27017:27017 mongo:4
```

redis
```bash
docker run -d --name redis -p 127.0.0.1:6379:6379 redis
```

minio
```bash
docker run -d \
  -p 127.0.0.1:19000:9000 \
  -p 127.0.0.1:19001:9001 \
  --name minio \
  -e "MINIO_ROOT_USER=tailchat" \
  -e "MINIO_ROOT_PASSWORD=com.msgbyte.tailchat" \
  minio/minio server /data --console-address ":9001"
```

### 服务端插件安装方式

安装所有插件
```
pnpm plugin:install all
```

安装单个插件
```
pnpm plugin:install com.msgbyte.tasks
```
