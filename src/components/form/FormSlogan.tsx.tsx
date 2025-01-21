interface FormSloganProps {
  type: 'login' | 'register' | 'forget';
}

export default function FormSlogan({ type }: FormSloganProps) {
  const position = () => {
    switch (type) {
      case 'login':
      case 'forget':
        return 'left-[60px]';
      case 'register':
        return 'right-[60px]';
      default:
        break;
    }
  };
  return (
    <div className={`text-[#EBE5BA] text-[64px] font-bold fixed top-[108px] ${position()}`}>
      {type === 'login' && <p>今天想吃?</p>}
      {type === 'register' && (
        <p>
          <span className="block">想不到下一餐吃什麼?</span>
          <span className="pl-10">開啟美食紀錄之旅吧！</span>
        </p>
      )}
      {type === 'forget' && <p>我們幫你找回密碼..</p>}
    </div>
  );
}
