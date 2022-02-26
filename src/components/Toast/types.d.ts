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

export type Toast = {
  type: ToastType;
  message: string;
  id: string;
  actions?: ToastAction[];
};

export type ToastOptions = Omit<Toast, 'id'> & {
  id?: string;
};

export type ToastState = {
  toasts: Toast[];
};
