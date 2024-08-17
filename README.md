# Club Name example application

## Приложение-презентация функционала клиентского интерфейса

### Требования к установке:

- Пакетный менеджер: npm / yarn / bun / pnpm
- Docker
- Node.JS (LTS)
- Makefile tools

### 1. Знакомство с приложением

#### 1.1 Склонируйте приложение из репозитория

```bash
git clone https://github.com/hrustalq/cc_crm.git
```

#### 1.2 Установите зависимости

##### npm

```bash
npm install
```

##### yarn

```bash
yarn install
```

##### pnpm

```bash
pnpm install
```

##### bun

```bash
bun install
```

#### 1.3 Скопируйте переменные окружения

```bash
cp .env.example .env
```

### 1.4 Сборка приложения

```
make build
```

### 1.5 Запуск приложения

```
make up
```