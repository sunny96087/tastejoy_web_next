import { useRouter } from 'next/router';

interface FormBottomNavProps {
  type: 'login' | 'register';
}

export default function FormBottomNav({ type }: FormBottomNavProps) {
  const router = useRouter();

  const handleClick = () => {
    if (type === 'login') {
      router.push('/auth/register');
    } else {
      router.push('/auth/login');
    }
  };
  return (
    <div className="text-[#6F6D55] center">
      <div>
        <span>{type === 'login' ? '還沒有帳號嗎?' : '已經有帳號了!'}</span>
        <span onClick={handleClick} className="underline pl-1 cursor-pointer">
          {type === 'login' ? '點擊註冊?' : '我要登入'}
        </span>
      </div>
    </div>
  );
}
