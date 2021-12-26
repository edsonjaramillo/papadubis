import { toast } from 'react-toastify';

interface Toast {
  type: string;
}

type ToastType = 'success' | 'error' | 'info' | 'warning';

export const toastNotification = (type: ToastType, message: string, time: number = 3000) => {
  switch (type) {
    case 'info':
      toast.info(message, {
        position: 'top-right',
        autoClose: time,
      });
      break;
    case 'success':
      toast.success(message, {
        position: 'top-right',
        autoClose: time,
      });
      break;
    case 'error':
      toast.error(message, {
        position: 'top-right',
        autoClose: time,
      });
      break;
    case 'warning':
      toast.warn(message, {
        position: 'top-right',
        autoClose: time,
      });
      break;
    default:
      break;
  }
};
