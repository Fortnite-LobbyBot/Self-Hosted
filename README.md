﻿# FNLB Self-Hosted

Easily self-host your own **FNLB** (Fortnite Lobby Bot) cluster using this minimal setup. FNLB is a powerful and scalable system for managing Fortnite bots at scale.

## 🚀 Requirements

- **Node.js** v18 or newer
- A valid [FNLB API Token](https://app.fnlb.net/account)
- (Optional) [Bun](https://bun.sh) if you prefer Bun over Node.js

## 📦 Installation

1. **Clone the project** or copy the provided files into your own setup.

2. **Install dependencies**:

```bash
npm install
```

3. **Set up your environment variables**:

Rename the example file:

```bash
cp .env.example .env
```

Then edit `.env` with your values:

```ini
API_TOKEN=your_token_here
CATEGORIES=12345678,98765432
NUMBER_OF_SHARDS=2
BOTS_PER_SHARD=32
RESTART_INTERVAL=3600
```

> 💡 You can find your category IDs at [FNLB Bots](https://app.fnlb.net/bots) → select your bot → “About this bot” → Category ID.

## ▶️ Usage

### Start with Node.js

```bash
npm start
```

### Start with Bun (optional)

```bash
bun start:bun
```

This script will initialize the FNLB cluster with your configuration and automatically restart it periodically to ensure stability.

## ⚙️ What This Script Does

- Initializes FNLB with your API token and configuration
- Sets up:
  - Custom number of shards
  - Max bots per shard
  - Allowed categories
- Automatically **restarts the cluster** based on the configured interval

```js
// Restart interval logic (in milliseconds)
setInterval(restartFNLB, RESTART_INTERVAL * 1000);
```

## 🌐 Environment Variables

| Variable            | Description                                                                  | Default  |
|---------------------|------------------------------------------------------------------------------|----------|
| `API_TOKEN`         | Your personal FNLB API token                                                 | Required |
| `CATEGORIES`        | Comma-separated list of category IDs                                         | Required |
| `NUMBER_OF_SHARDS`  | Number of shards to run                                                      | `2`      |
| `BOTS_PER_SHARD`    | Max number of bots per shard                                                 | `32`     |
| `RESTART_INTERVAL`  | Time in **seconds** before the cluster restarts automatically                | `3600`   |

## 🔄 Updating FNLB

To make sure you're running the latest version of FNLB, follow these steps:

1. **Pull the latest changes** from the repository:

```bash
git pull origin main
```

2. **Reinstall dependencies** in case any were updated:

```bash
npm update fnlb
```

3. **(Optional)** If you're using Bun:

```bash
bun install
```

4. **Restart your FNLB cluster** to apply updates:

```bash
npm start
# or
bun start:bun
```

> ✅ Keeping FNLB up to date ensures you have the latest features, bug fixes, and performance improvements.


© [FNLB](https://fnlb.net)
