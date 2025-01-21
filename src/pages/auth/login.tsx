import './login.scss';
import FormBg from '@/components/form/FormBg';
import SocialMediaLogin from '@/components/form/SocialMediaLogin';
import FormBottomNav from '@/components/form/FormBottomNav';
import FormSlogan from '@/components/form/FormSlogan.tsx';

export default function Login() {
  return (
    <>
      <FormBg />
      <FormSlogan type={'login'} />

      <div className="form-bg login">
        <h2 className="form-title">登入</h2>
        <form className="mb-10">
          <input className="form-input" type="text" placeholder="帳號" />
          <input className="form-input" type="text" placeholder="密碼 (英數混合且不少於六位數)" />
          <div className="flex justify-between">
            <span className="text-[#6F6D55]">忘記密碼</span>
            <button className="form-submit-btn">登入</button>
          </div>
        </form>
        <SocialMediaLogin />
        <FormBottomNav type={'login'} />
      </div>
    </>
  );
}
