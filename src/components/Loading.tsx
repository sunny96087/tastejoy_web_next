import { useState, forwardRef, useImperativeHandle } from 'react';

const Loading = forwardRef((_, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  // 通过 useImperativeHandle 暴露方法给父组件
  useImperativeHandle(ref, () => ({
    show: () => setIsLoading(true), // 显示加载动画
    hide: () => setIsLoading(false), // 隐藏加载动画
  }));

  if (!isLoading) {
    return null;
  }
  return (
    <section className="w-full h-full fixed inset-0 center z-10 bg-[#00000085]">
      <div className="loading loading05">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </section>
  );
});

export default Loading;
