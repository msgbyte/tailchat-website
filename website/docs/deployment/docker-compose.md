---
sidebar_position: 2
---

# Docker Compose

## 安装环境

### Docker / Docker Compose

首先需要确保有 `Docker / Docker Compose` 环境

安装方式如下:

- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### node 环境

- 从[官网下载](https://nodejs.org/en/download/)
- 或者使用[nvm](https://github.com/nvm-sh/nvm)

#### 安装yarn

`yarn` 是一个`nodejs`的包管理工具, 是`npm`的替代品, 为了确保能有与开发者一样依赖环境，强烈建议你使用yarn作为后续的包管理工具

```bash
npm install -g yarn
```

## Clone 项目

将项目从远程下载到本地:

```bash
mkdir msgbyte && cd msgbyte

git clone https://github.com/msgbyte/tailchat.git # clone 客户端
git clone https://github.com/msgbyte/tailchat-server.git # clone 服务端
```

## 编译项目

#### 前端项目

```bash
cd tailchat/web
yarn install # 安装依赖

export SERVICE_URL=http://127.0.0.1:11000 # 配置服务端地址，这里的127.0.0.1 可以替换为任何网页可以访问到的服务端地址
yarn build # 构建项目
```

构建完毕后会生成一个`tailchat/web/dist`目录，将该目录托管到任意网页托管服务器即可

#### 使用docker-compose构建服务端

```bash
cd tailchat-server
docker-compose up -d
```

*在`docker-compose.env`文件中提供了部分环境变量可供配置。*

`tailchat` 的`docker-compose.yml`配置默认提供了如下配置:

- `mongodb`: 持久化数据库
- `redis`: KV数据库与消息中转服务
- `minio`: 分布式文件服务

其中持久化文件(数据库, 文件存储)通过 `docker volume` 统一管理:

```
docker volume ls | grep "tailchat-server"
```
