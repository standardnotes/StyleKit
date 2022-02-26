import * as React from 'react';
import { h, FunctionComponent } from 'preact';
import type { ToastType } from './types';
import {
  CheckCircleFilledIcon,
  ClearCircleFilledIcon,
} from '../../assets/icons';
import { useStore } from '@nanostores/preact';
import { toastStore } from './toastStore';

const colorForToastType = (type: ToastType) => {
  switch (type) {
    case 'success':
      return 'color-success';
    case 'error':
      return 'color-danger';
    default:
      return 'color-info';
  }
};

const iconForToastType = (type: ToastType) => {
  switch (type) {
    case 'success':
      return <CheckCircleFilledIcon className={colorForToastType(type)} />;
    case 'error':
      return <ClearCircleFilledIcon className={colorForToastType(type)} />;
    case 'loading':
      return <div className="sk-spinner w-4 h-4 spinner-info" />;
    default:
      return null;
  }
};

export const ToastContainer: FunctionComponent = () => {
  const toasts = useStore(toastStore);

  return (
    <div
      className="flex flex-col items-end"
      style={{
        position: 'fixed',
        zIndex: 9999,
        bottom: '1.5rem',
        right: '1.5rem',
      }}
    >
      {toasts.map((toast) => {
        const icon = iconForToastType(toast.type);
        const hasActions = toast?.actions?.length > 0;

        return (
          <div
            key={toast.id}
            className={`inline-flex items-center bg-grey-5 mt-2 ${
              hasActions ? 'p-2 pl-3' : 'p-3'
            }`}
            style={{
              transition: 'all 230ms cubic-bezier(.21,1.02,.73,1)',
              borderRadius: '0.25rem',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.16)',
            }}
          >
            {icon ? (
              <div className="flex items-center justify-center sn-icon mr-2">
                {icon}
              </div>
            ) : null}
            <div className="select-none text-sm">{toast.message}</div>
            {hasActions && (
              <div className="ml-4">
                {toast.actions.map((action, index) => (
                  <button
                    style={{
                      paddingLeft: '0.45rem',
                      paddingRight: '0.45rem',
                      borderRadius: '0.25rem',
                    }}
                    className={`py-1 border-0 bg-transparent cursor-pointer font-semibold text-sm select-none hover:bg-grey-3 ${colorForToastType(
                      toast.type
                    )} ${index !== 0 ? 'ml-2' : ''}`}
                    onClick={() => {
                      action.callback(toast.id);
                    }}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
