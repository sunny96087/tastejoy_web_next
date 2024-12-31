import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const linkClasses = (path: string) => (router.pathname === path ? 'font-semibold ' : '');

  return (
    <nav className="bg-[#fffcf5]/40 h-[48px] flex justify-between px-10 items-center backdrop-blur-sm border-b border-primary-2">
      <Link href="/" className="w-[53px] h-[22px] ">
        <img src="/logo.svg" className="cus-pic-auto" alt="" />
      </Link>

      <ul className="flex gap-[28px] text-primary-4">
        <li>
          <Link href="/" className={linkClasses('/')}>
            平台介紹
          </Link>
        </li>
        <li>
          <Link href="/food-record" className={linkClasses('/food-record')}>
            我的紀錄
          </Link>
        </li>
        <li>
          <Link href="/random-food" className={linkClasses('/random-food')}>
            今天吃什麼
          </Link>
        </li>
        <li>
          <Link href="/article" className={linkClasses('/article')}>
            美食文章
          </Link>
        </li>
        <li>
          <Link href="/auth/login" className={linkClasses('/auth/login')}>
            登入/註冊
          </Link>
        </li>
        <li>
          <button className="text-[#6f6d55]">登出</button>
        </li>
        <li>
          <Link href="/friend" className={linkClasses('/friend')}>
            朋友
          </Link>
        </li>
        <li>
          <Link href="/profile" className={linkClasses('/profile')}>
            個人資料
          </Link>
        </li>
        <li>
          <Link href="/receive-share" className={linkClasses('/receive-share')}>
            通知
          </Link>
        </li>
      </ul>

      <style jsx>{`
        // nav {
        //   background: #333;
        //   padding: 1rem;
        // }
        // ul {
        //   list-style: none;
        //   display: flex;
        //   justify-content: space-around;
        // }
        // li {
        //   margin: 0 1rem;
        // }
        // a {
        //   color: white;
        //   text-decoration: none;
        // }
      `}</style>
    </nav>
  );
}

/* *
 * (未登入) 平台介紹
 * 我的紀錄
 * (未登入) 今天吃什麼
 * (未登入) 美食文章
 * (未登入) 登入/註冊
 * 登出
 * 朋友
 * 個人資料
 * (有通知時) 通知
 */
