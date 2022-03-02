import * as React from 'react';
import { h, FunctionComponent } from 'preact';
import { useStore } from '@nanostores/preact';
import { toastStore } from './toastStore';
import { Toast } from './Toast';

export const ToastContainer: FunctionComponent = () => {
  const toasts = useStore(toastStore);

  return (
    <div className="flex flex-col items-end fixed z-index-toast bottom-6 right-6">
      {toasts.map((toast, index) => (
        <Toast toast={toast} index={index} key={toast.id} />
      ))}
    </div>
  );
};
