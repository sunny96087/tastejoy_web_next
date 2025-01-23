import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

import { auth } from '../../apis/auth';
import { getDomElement } from '../../utils/handleDom';

import FormBg from '@/components/form/FormBg';
import SocialMediaLogin from '@/components/form/SocialMediaLogin';
import FormBottomNav from '@/components/form/FormBottomNav';
import FormSlogan from '@/components/form/FormSlogan.tsx';
import CommonModal from '@/components/CommonModal';


import './login.scss';

import { isValidPassword, isValidEmail } from '../../utils/formReg';

export default function Register() {
  const router = useRouter();

  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [passwordPass, setPasswordPass] = useState(true);
  const [secondPassword, setSecondPassword] = useState('');
  const [samePassword, setSamePassword] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [canSubmit, setCanSubmit] = useState(false);
  const [registerResponse, setRegisterResponse] = useState({});
  const [registerMessage, setRegisterMessage] = useState('');

  useEffect(() => {
    if (account && password && samePassword) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [account, password, secondPassword, samePassword]);

  const handleEmail = (e: any) => {
    const { value } = e.target;
    if (isValidEmail(value)) {
      setValidEmail(true);
      setAccount(value);
    } else {
      setValidEmail(false);
    }
  };

  const handlePassword = (e: any) => {
    const { value } = e.target;
    if (value.length < 8) {
      return setPasswordPass(false);
    }
    if (isValidPassword(value)) {
      setPasswordPass(true);
      setPassword(value);
    }
    setSamePassword(value === secondPassword);
  };

  const checkPassword = (e: any) => {
    const { value } = e.target;
    value !== password ? setSamePassword(false) : setSamePassword(true);
    samePassword && setSecondPassword(value);
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    if (!canSubmit) return;
    const params = {
      account,
      password,
      confirmPassword: password,
    };
    // startLoading();
    const response = await auth.register(params);
    // stopLoading();
    console.log(response, '12121223');
    setRegisterResponse(response);
    setRegisterMessage(response.message);
    getDomElement('#registerModal').showModal();
    // if (response.status === 'success') {
    // } else {
    // }
  };




  const goHomePage = () => {
    console.log('fuck login');
    router.push('/');
  };

  return (
    <>
      <FormBg />
      <FormSlogan type={'register'} />
      <CommonModal name={'registerModal'} message={registerMessage} afterClose={goHomePage} />


      <div className="form-bg register">
        <h2 className="form-title">註冊</h2>
        <form className="mb-10" onSubmit={handleRegister}>
          <input className="form-input" type="text" placeholder="帳號" onChange={handleEmail} />
          {!validEmail && <span className="text-[#f00] block mb-2">Email格式無效</span>}
          <input
            className="form-input"
            type="text"
            placeholder="密碼 (英數混合且不少於八位數)"
            onInput={handlePassword}
          />
          {!passwordPass && (
            <span className="text-[#f00] block mb-2">密碼不能少於八位數且必須英數字混和</span>
          )}
          <input
            className="form-input"
            type="text"
            placeholder="再次確認密碼"
            onInput={checkPassword}
          />
          {!samePassword && <span className="text-[#f00]">兩次密碼不一樣，請重新輸入</span>}
          <div className="flex justify-end">
            <button
              type="submit"
              className={`form-submit-btn ${canSubmit ? '' : 'cursor-not-allowed'}`}
            >
              註冊
            </button>
          </div>
        </form>
        <SocialMediaLogin />
        <FormBottomNav type={'register'} />
      </div>
    </>
  );
}
