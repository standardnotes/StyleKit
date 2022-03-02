import * as React from 'react';
import { h, FunctionComponent } from 'preact';
import { useStore } from '@nanostores/preact';
import { toastStore } from './toastStore';
import { Toast } from './Toast';

const DEFAULT_OFFSET = '1.5rem';

export const ToastContainer: FunctionComponent = () => {
  const toasts = useStore(toastStore);

  return (
    <div
      className="flex flex-col items-end fixed"
      style={{
        zIndex: 9999,
        bottom: DEFAULT_OFFSET,
        right: DEFAULT_OFFSET,
      }}
    >
      {toasts.map((toast, index) => (
        <Toast toast={toast} index={index} key={toast.id} />
      ))}
    </div>
  );
};
