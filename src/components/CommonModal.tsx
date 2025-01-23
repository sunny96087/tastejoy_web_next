import { useMemo } from 'react';

interface CommonModalProps {
  name: string;
  message?: string;
  afterClose?: () => void;
}
export default function CommonModal({ name, message, afterClose }: CommonModalProps) {
  const defaultMessage = useMemo(() => {
    if (message) return message;
    return 'this is a simple dialog';
  }, [message]);

  const closeDialog = () => {
    const dialog = document.getElementById(name);
    dialog && dialog.close();
    afterClose && afterClose();
  };

  return (
    <dialog id={name} className=''>
      <p>{defaultMessage}</p>
      {afterClose ? (
        <div><button onClick={closeDialog}>關閉</button></div>
      ) : (
        <form method="dialog">
          <button>關閉</button>
        </form>
      )}
    </dialog>
  );
}
