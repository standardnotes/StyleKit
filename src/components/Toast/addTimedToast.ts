import { addToast, dismissToast, updateToast } from './toastStore';
import { Toast, ToastOptions } from './types';

type InitialToastOptions = Omit<ToastOptions, 'message'> & {
  message: (timeRemainingInSeconds: number) => string;
};

export const addTimedToast = (
  initialOptions: InitialToastOptions,
  callback: () => void,
  timeInSeconds: number,
): [Toast['id'], NodeJS.Timeout] => {
  let timeRemainingInSeconds = timeInSeconds;

  const intervalId = setInterval(() => {
    if (timeRemainingInSeconds > 0) {
      timeRemainingInSeconds--;
      updateToast(toastId, {
        message: initialOptions.message(timeRemainingInSeconds),
      });
    } else {
      dismissToast(toastId);
      clearInterval(intervalId);
      callback();
    }
  }, 1000);

  const toastId = addToast({
    ...initialOptions,
    message: initialOptions.message(timeRemainingInSeconds),
  });

  return [toastId, intervalId];
};
