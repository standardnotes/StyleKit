import * as React from 'react';
import { FunctionComponent } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import type { Toast as ToastPropType } from './types';
import {
  CheckCircleFilledIcon,
  ClearCircleFilledIcon,
} from '../../assets/icons';
import { dismissToast } from '.';
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
    case ToastType.Loading:
      return <div className="sk-spinner w-4 h-4 spinner-info" />;
    default:
      return null;
  }
};

const getToastPosition = (
  boundingRect: DOMRect,
  index: number
): React.CSSProperties => {
  const positionFromBottom = index > 0 ? boundingRect.height * index : 0;
  const margin = index > 0 ? index * 0.45 : 0;

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
  const hasActions = toast?.actions?.length > 0;

  const [position, setPosition] = useState<React.CSSProperties>();

  useEffect(() => {
    if (toastElementRef.current) {
      setTimeout(() => {
        const boundingRect = toastElementRef.current.getBoundingClientRect();
        setPosition(getToastPosition(boundingRect, index));
      });
    }
  }, [toastElementRef.current, index]);

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
      role="status"
      className={`absolute bottom-0 right-0 inline-flex items-center bg-grey-5 rounded opacity-0 animation-fill-forwards select-none min-w-max ${
        position ? currentAnimation : ''
      } ${hasActions ? 'p-2 pl-3' : 'p-3'}`}
      style={{
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.16)',
        transition: shouldReduceMotion ? undefined : 'all 0.2s ease',
        willChange: 'bottom',
        ...position,
      }}
      onClick={() => {
        if (!hasActions && toast.type !== ToastType.Loading) {
          dismissToast(toast.id);
        }
      }}
      ref={toastElementRef}
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
  );
};
