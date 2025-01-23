import { useEffect, useState } from 'react';

import { isValidPassword, isValidEmail } from '../../utils/formReg';
import { auth } from '../../apis/auth';
import { getDomElement } from '../../utils/handleDom';

import './login.scss';
import FormBg from '@/components/form/FormBg';
import SocialMediaLogin from '@/components/form/SocialMediaLogin';
import FormBottomNav from '@/components/form/FormBottomNav';
import FormSlogan from '@/components/form/FormSlogan.tsx';
import CommonModal from '@/components/CommonModal';

export default function Login() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [loginResponse, setLoginResponse] = useState({});
  const [loginMessage, setLoginMessage] = useState('');
  const [showErrorTip, setShowErrorTip] = useState(false);

  useEffect(() => {
    if (isValidPassword(password) && isValidEmail(account)) setShowErrorTip(false);
  }, [account, password]);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (!isValidPassword(password) || !isValidEmail(account)) return setShowErrorTip(true);
    const params = {
      account,
      password,
    };
    const response = await auth.login(params);
    console.log(response);
    setLoginResponse(response);
    setLoginMessage(response.message);
    getDomElement('#loginModal').showModal();
  };

  return (
    <>
      <FormBg />
      <FormSlogan type={'login'} />
      <CommonModal name={'loginModal'} message={loginMessage} afterClose={() => {}} />

      <div className="form-bg login">
        <h2 className="form-title">登入</h2>
        <form className="mb-10" onSubmit={handleLogin}>
          <input
            className="form-input"
            type="text"
            placeholder="帳號"
            onChange={(e) => setAccount(e.target.value)}
          />
          <input
            className="form-input"
            type="text"
            placeholder="密碼 (英數混合且不少於六位數)"
            onChange={(e) => setPassword(e.target.value)}
          />
          {showErrorTip && <p className="text-red-600 mb-3">帳號或密碼不符合格式</p>}
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
