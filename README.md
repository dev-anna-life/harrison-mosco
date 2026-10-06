# Eponix Digital - Business Infrastructure & Operations Platform

The official digital infrastructure, business registration, and growth platform for **Eponix Digital** ([eponixdigital.com](https://eponixdigital.com)).

---

## ⚡ Tech Stack

- **Framework:** Next.js 16 (App Router with TypeScript)
- **Styling:** Tailwind CSS 4, Custom Design Tokens
- **Icons & Motion:** Lucide React, Framer Motion, Canvas Confetti
- **Forms & Validation:** React Hook Form, Zod
- **Database & ORM:** Prisma ORM (SQLite default, PostgreSQL/MySQL ready)
- **Payment Gateway:** Paystack Integration (Initialize, Verify, Webhook)
- **Email Notifications:** Nodemailer (SMTP / Google Workspace / cPanel Webmail) + Resend API support

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Fill in your credentials (Paystack keys, admin notification email, WhatsApp number).

### 3. Initialize Database
```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

To build and start the optimized production server locally:
```bash
npm run build
npm start
```

---

## 🌐 Self-Hosting & Deployment Guide (Non-Vercel)

This application can be hosted on any custom server, VPS, cPanel, or cloud platform:

### Option 1: VPS / Dedicated Server (Ubuntu / Debian) with PM2 & Nginx (Recommended)

1. **Install Node.js 20+ and PM2:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```

2. **Clone / Upload Project Files to Server:**
   ```bash
   cd /var/www/eponix-digital
   npm install
   cp .env.example .env
   # Edit .env with your live keys
   npm run build
   ```

3. **Start with PM2:**
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx Reverse Proxy (`/etc/nginx/sites-available/eponix`):**
   ```nginx
   server {
       server_name eponixdigital.com www.eponixdigital.com;

       location / {
           proxy_pass http://127.0.0.1:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Enable SSL with Let's Encrypt (Certbot):**
   ```bash
   sudo certbot --nginx -d eponixdigital.com -d www.eponixdigital.com
   ```

---

### Option 2: cPanel Hosting (Setup Node.js App)

1. Upload the project files to your cPanel directory (e.g., `public_html` or `/home/username/eponix-digital`).
2. Go to **cPanel $\rightarrow$ Setup Node.js App**.
3. Click **Create Application**:
   - **Node.js version:** Select `20.x` or latest.
   - **Application mode:** `Production`
   - **Application root:** Path to uploaded folder.
   - **Application startup file:** `node_modules/next/dist/bin/next` (or run custom startup script `npm start`).
4. Click **Run NPM Install**.
5. Add your environment variables in the **Environment variables** section or upload `.env`.
6. Run `npm run build` and click **Restart Application**.

---

### Option 3: Cloud PaaS (Render, Railway, DigitalOcean App Platform)

1. Push this repository to your GitHub/GitLab repository.
2. In your cloud provider dashboard:
   - **Build Command:** `npm install && npx prisma generate && npm run build`
   - **Start Command:** `npm start`
   - **Port:** `3000`
3. Add environment variables from `.env.example`.

---

### Option 4: Docker Deployment

1. **Build Docker Image:**
   ```bash
   docker build -t eponix-digital .
   ```

2. **Run Container:**
   ```bash
   docker run -d -p 3000:3000 --env-file .env.local --name eponix-app eponix-digital
   ```

---

## 🔑 Environment Variables Reference

| Variable | Description | Example |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_APP_URL` | Canonical domain of the website | `https://eponixdigital.com` |
| `ADMIN_EMAIL` | Email receiving customer application leads | `eponixlimited@gmail.com` |
| `SUPPORT_EMAIL` | Official contact support email | `hello@eponixdigital.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp hotline in international format | `2348088194093` |
| `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` | Paystack Public Key for checkout | `pk_live_...` |
| `PAYSTACK_SECRET_KEY` | Paystack Secret Key for payment verification | `sk_live_...` |
| `SMTP_HOST` | SMTP server for transactional emails | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port (465 SSL or 587 TLS) | `465` |
| `SMTP_USER` | SMTP username / email address | `eponixlimited@gmail.com` |
| `SMTP_PASS` | SMTP application password | `your_app_password` |
| `DATABASE_URL` | Database connection string | `file:./dev.db` |

---

## 📁 Project Structure

```
├── app/                  # Next.js App Router (Pages, Layouts, API Routes)
│   ├── business-name/    # Business Name registration & tiered form
│   ├── limited/          # Limited Company (LTD) registration & share matrix
│   ├── trustees/         # NGO / Incorporated Trustees registration
│   ├── scuml/            # SCUML AML compliance certificate form
│   ├── tax/              # NRS Tax ID / Rev360 filing setup
│   ├── trademark/        # 45-class Federal Trademark registry search & filing
│   ├── ultimate/         # Signature Ultimate Business Launch Package
│   ├── cac/              # Central CAC pathway hub
│   ├── consult/          # Direct consultation booking form
│   ├── track/            # Real-time application tracker
│   └── api/              # Secure backend endpoints (Leads, Orders, Paystack)
├── components/           # Reusable UI components & layouts
├── lib/                  # State data, validators, PDF generators, Paystack utilities
├── prisma/               # Prisma database schema
├── public/               # Static assets & transparent official branding
└── server/               # Server-side email and business services
```

---

## 🔒 Security & Best Practices

- All file uploads are processed client-side into base64 payloads and verified against allowable MIME types (PDF, JPG, PNG).
- Payment verification is cryptographically confirmed server-side before activating orders.
- Sensitive environment variables are never exposed to the client bundle.
