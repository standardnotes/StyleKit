import { nanoid } from 'nanoid';
import { dispatch, ReducerActionType } from './toastStore';
import type { Toast, ToastOptions } from './types';

export const addToast = (options: ToastOptions) => {
  const id = options.id ?? nanoid();
  dispatch({
    type: ReducerActionType.AddOrUpdate,
    payload: {
      ...options,
      id,
    },
  });
  return id;
};

export const updateToast = (
  id: Toast['id'],
  options: Partial<ToastOptions>
) => {
  dispatch({
    type: ReducerActionType.Update,
    payload: {
      id,
      options,
    },
  });
  return id;
};

export const removeToast = (id: Toast['id']) => {
  dispatch({
    type: ReducerActionType.Remove,
    payload: id,
  });
  return id;
};
