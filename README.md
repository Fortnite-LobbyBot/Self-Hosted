# FNLB Self-Hosted Deployment Guide

Easily self-host your own **FNLB** cluster using this minimal setup. FNLB is a powerful and scalable system for managing Fortnite bots at scale.

---

## 🚀 Prerequisites

Before you begin, make sure you have the following installed and ready:

- **Node.js** (version 18 or newer) – [Download Node.js](https://nodejs.org/)
- A valid **[FNLB API Token](https://app.fnlb.net/account)** – required to authenticate with FNLB services
- *(Optional)* **[Bun](https://bun.sh)** – A fast JavaScript runtime that can be used as an alternative to Node.js

---

## 📦 Installation Steps

Follow these steps to get your FNLB cluster up and running:

### 1. Clone the Repository

Download or clone the FNLB self-hosting project to your local machine:

```bash
git clone https://github.com/Fortnite-LobbyBot/Self-Hosted.git
cd Self-Hosted
```

> 💡 **Alternatively**, you can manually copy the files into a folder or download the source code as a ZIP.

---

### 2. Install Dependencies

Install required packages with your preferred runtime:

- Using **Node.js**:

  ```bash
  npm install
  ```

- Using **Bun**:

  ```bash
  bun i
  ```

---

### 3. Configure Environment Variables

Rename the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Edit the `.env` file with your actual values:

```ini
API_TOKEN=your_token_here
CATEGORIES=12345678,98765432
NUMBER_OF_SHARDS=2
BOTS_PER_SHARD=32
RESTART_INTERVAL=3600
```

> 💡 **API Token:** Obtain this from your [FNLB Account](https://app.fnlb.net/account) under “API Tokens”.  
> 💡 **Category IDs:** Visit the [FNLB Bots Page](https://app.fnlb.net/bots), select a bot, and locate the **“Category ID”** in the **“About this bot”** section.

---

## ▶️ Running the FNLB Cluster

Once configured, start your FNLB instance:

- With **Node.js**:

  ```bash
  npm start
  ```

- With **Bun**:

  ```bash
  bun start:bun
  ```

The cluster will initialize using your configuration and automatically restart on the interval you defined, ensuring long-term stability and uptime.

---

## 🌐 Environment Variable Reference

Below is a breakdown of each environment variable used in the setup:

| Variable            | Description                                                                 | Default  |
|---------------------|-----------------------------------------------------------------------------|----------|
| `API_TOKEN`         | Your personal FNLB API token                                                | *Required* |
| `CATEGORIES`        | Comma-separated list of bot category IDs                                    | *Required* |
| `NUMBER_OF_SHARDS`  | Number of individual shards (instances) to spawn                            | `2`      |
| `BOTS_PER_SHARD`    | Maximum number of bots assigned to each shard                               | `32`     |
| `RESTART_INTERVAL`  | Cluster restart interval in seconds (for stability/maintenance)             | `3600`   |

---

## 🔄 Keeping FNLB Up to Date

Ensure you're always using the latest and most stable version of FNLB:

1. **Pull the latest changes** from the Git repository:

   ```bash
   git pull origin main
   ```

2. **Update dependencies**:

   ```bash
   npm update fnlb
   ```

3. **If using Bun**, reinstall dependencies:

   ```bash
   bun install
   ```

4. **Restart the cluster** to apply changes:

   ```bash
   npm start
   # or
   bun start:bun
   ```

> ✅ Regular updates provide access to new features, performance boosts, and essential bug fixes.

---

## ⚙️ What the Script Does Behind the Scenes

Once started, the script performs the following:

- Initializes FNLB using your API credentials and environment settings
- Configures:
  - Number of **shards** (isolated bot processes)
  - Maximum **bots per shard**
  - Allowed **category IDs**
- Implements automatic restarts for resilience, using the configured time interval

Example of restart logic:

```js
// Restart interval logic (in milliseconds)
setInterval(restartFNLB, RESTART_INTERVAL * 1000);
```

---

## 📎 Additional Resources

- [FNLB Official Site](https://fnlb.net)
- [FNLB Dashboard](https://app.fnlb.net)
- [FNLB Documentation ](https://docs.fnlb.net)
