import * as React from 'react';
import { h, FunctionComponent } from 'preact';
import { useStore } from '@nanostores/preact';
import { toastStore } from './toastStore';
import { Toast } from './Toast';

export const ToastContainer: FunctionComponent = () => {
  const toasts = useStore(toastStore);

  return (
    <div
      className="flex flex-col items-end fixed"
      style={{
        zIndex: 9999,
        bottom: '1.5rem',
        right: '1.5rem',
      }}
    >
      {toasts.map((toast, index) => (
        <Toast toast={toast} index={index} key={toast.id} />
      ))}
    </div>
  );
};
