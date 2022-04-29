import * as React from 'react';
import { FunctionComponent } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import type { Toast as ToastPropType } from './types';
import {
  CheckCircleFilledIcon,
  ClearCircleFilledIcon,
} from '../../assets/icons';
import { dismissToast } from './toastStore';
import { ToastType } from './enums';

const prefersReducedMotion = () => {
  const mediaQuery = matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
};

const colorForToastType = (type: ToastType) => {
  switch (type) {
    case ToastType.Success:
      return 'color-success';
    case ToastType.Error:
      return 'color-danger';
    default:
      return 'color-info';
  }
};

const iconForToastType = (type: ToastType) => {
  switch (type) {
    case ToastType.Success:
      return <CheckCircleFilledIcon className={colorForToastType(type)} />;
    case ToastType.Error:
      return <ClearCircleFilledIcon className={colorForToastType(type)} />;
    case ToastType.Progress:
    case ToastType.Loading:
      return <div className="sk-spinner w-4 h-4 spinner-info" />;
    default:
      return null;
  }
};

const ToastMarginMultiplier = 0.45;

const getToastPosition = (
  boundingRect: DOMRect,
  index: number
): React.CSSProperties => {
  const positionFromBottom = index > 0 ? boundingRect.height * index : 0;
  const margin = index > 0 ? index * ToastMarginMultiplier : 0;

  return {
    bottom: `calc(${positionFromBottom}px + ${margin}rem)`,
  };
};

type Props = {
  toast: ToastPropType;
  index: number;
};

export const Toast: FunctionComponent<Props> = ({ toast, index }) => {
  const toastElementRef = useRef<HTMLDivElement>();

  const icon = iconForToastType(toast.type);
  const hasActions = toast.actions?.length > 0;
  const hasProgress = toast.type === ToastType.Progress && toast.progress > -1;

  const [position, setPosition] = useState<React.CSSProperties>();

  useEffect(() => {
    if (toastElementRef.current) {
      setTimeout(() => {
        const boundingRect = toastElementRef.current.getBoundingClientRect();
        setPosition(getToastPosition(boundingRect, index));
      });
    }
  }, [toast, index]);

  const shouldReduceMotion = prefersReducedMotion();
  const enterAnimation = shouldReduceMotion
    ? 'fade-in-animation'
    : 'slide-in-right-animation';
  const exitAnimation = shouldReduceMotion
    ? 'fade-out-animation'
    : 'slide-out-left-animation';
  const currentAnimation = toast.dismissed ? exitAnimation : enterAnimation;

  return (
    <div
      data-index={index}
      role="status"
      className={`absolute bottom-0 right-0 flex flex-col bg-grey-5 rounded opacity-0 animation-fill-forwards select-none min-w-max ${
        position ? currentAnimation : ''
      }`}
      style={{
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.16)',
        transition: shouldReduceMotion ? undefined : 'all 0.2s ease',
        willChange: 'bottom',
        ...position,
      }}
      onClick={() => {
        if (
          !hasActions &&
          toast.type !== ToastType.Loading &&
          toast.type !== ToastType.Progress
        ) {
          dismissToast(toast.id);
        }
      }}
      ref={toastElementRef}
    >
      <div
        className={`flex items-center w-full ${
          hasActions ? 'p-2 pl-3' : hasProgress ? 'px-3 py-2.5' : 'p-3'
        }`}
      >
        {icon ? (
          <div className="flex flex-shrink-0 items-center justify-center sn-icon mr-2">
            {icon}
          </div>
        ) : null}
        <div className="text-sm">{toast.message}</div>
        {hasActions && (
          <div className="ml-4">
            {toast.actions.map((action, index) => (
              <button
                style={{
                  paddingLeft: '0.45rem',
                  paddingRight: '0.45rem',
                }}
                className={`py-1 border-0 bg-transparent cursor-pointer font-semibold text-sm hover:bg-grey-3 rounded ${colorForToastType(
                  toast.type
                )} ${index !== 0 ? 'ml-2' : ''}`}
                onClick={() => {
                  action.handler(toast.id);
                }}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {hasProgress && (
        <div
          className="toast-progress-bar"
          role="progressbar"
          style={{
            width: `${toast.progress}%`,
            ...(toast.progress === 100 ? { borderTopRightRadius: 0 } : {}),
          }}
          aria-valuenow={toast.progress}
        />
      )}
    </div>
  );
};
