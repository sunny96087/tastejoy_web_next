# 食享 TasteJoy

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 專案架構

```
TASTEJOY_WEB_NEXT/
├── .next/                     # Next.js 的內部建構檔案（自動生成，請勿手動修改）
├── .vscode/
│   └── settings.json          # VSCode 的專案設定檔案
├── node_modules/              # 依賴的 Node.js 套件（由 npm 安裝，請勿手動修改）
├── public/
│   ├── file.svg               # 通用圖示
│   ├── globe.svg              # 地球圖示
│   ├── logo.svg               # 專案 Logo
│   ├── next.svg               # Next.js 圖示
│   ├── vercel.svg             # Vercel 圖示
│   └── window.svg             # 窗口圖示
├── src/
│   ├── app/                   # Next.js App 目錄，存放應用邏輯
│   ├── components/            # 通用元件目錄
│   │   └── Navbar.tsx         # 導覽列元件
│   ├── pages/                 # Next.js 頁面目錄
│   │   ├── article/           # 美食文章
│   │   │   └── index.tsx      # 美食文章列表頁面
│   │   ├── auth/              # 認證
│   │   │   ├── forgot-password.tsx # 忘記密碼頁面
│   │   │   ├── login.tsx      # 登入頁面
│   │   │   └── register.tsx   # 註冊頁面
│   │   ├── food-record/       # 食物紀錄
│   │   │   └── index.tsx      # 食物紀錄主頁
│   │   ├── friend/            # 好友
│   │   │   └── index.tsx      # 好友主頁
│   │   ├── profile/           # 個人資料
│   │   │   └── index.tsx      # 個人資料主頁
│   │   ├── random-food/       # 今天吃什麼
│   │   │   └── index.tsx      # 今天吃什麼主頁
│   │   ├── receive-share/     # 分享接收
│   │   │   └── index.tsx      # 分享接收主頁 (通知)
│   │   ├── _app.tsx           # Next.js 全局應用設定
│   │   ├── _document.tsx      # 自訂 HTML 結構
│   │   └── index.tsx          # 首頁
│   └── styles/
│       └── globals.css        # 全局樣式設定
├── .gitignore                 # Git 忽略設定檔
├── .prettierrc                # Prettier 格式化設定
├── eslint.config.mjs          # ESLint 設定檔
├── next-env.d.ts              # Next.js 自動生成的類型定義檔案
├── next.config.ts             # Next.js 設定檔
├── package-lock.json          # 鎖定 Node.js 套件版本
├── package.json               # 專案描述及依賴
├── postcss.config.mjs         # PostCSS 設定檔
├── README.md                  # 專案說明文件
├── tailwind.config.ts         # Tailwind CSS 設定檔
└── tsconfig.json              # TypeScript 設定檔
```
