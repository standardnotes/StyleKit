export enum ToastType {
  Regular = 'regular',
  Success = 'success',
  Error = 'error',
  Loading = 'loading',
}

export type ToastAction = {
  label: string;
  callback: (toastId: Toast['id']) => void;
};

type CommonToastProperties = {
  type: ToastType;
  message: string;
  actions?: ToastAction[];
};

export type Toast = CommonToastProperties & {
  id: string;
  dismissed: boolean;
};

export type ToastOptions = CommonToastProperties & {
  id?: string;
  autoClose?: boolean;
  duration?: number;
};

export type ToastState = {
  toasts: Toast[];
};
