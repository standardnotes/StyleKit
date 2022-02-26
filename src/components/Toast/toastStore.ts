import { nanoid } from 'nanoid';
import { useEffect, useState } from 'preact/hooks';
import type { Toast, ToastOptions, ToastState, ToastType } from './types';

let externalState: ToastState = {
  toasts: [],
};

export enum ReducerActionType {
  Add,
  Update,
  AddOrUpdate,
  Remove,
}

type ReducerAction =
  | {
      type: ReducerActionType.Add;
      payload: ToastOptions;
    }
  | {
      type: ReducerActionType.AddOrUpdate;
      payload: ToastOptions;
    }
  | {
      type: ReducerActionType.Update;
      payload: {
        id: Toast['id'];
        options: Partial<ToastOptions>;
      };
    }
  | {
      type: ReducerActionType.Remove;
      payload: Toast['id'];
    };

const storeStateUpdaters: Array<(state: ToastState) => void> = [];

const reducer = (state: ToastState, action: ReducerAction): ToastState => {
  switch (action.type) {
    case ReducerActionType.Add: {
      const id = action.payload.id ?? nanoid();
      const toast: Toast = {
        ...action.payload,
        id,
      };

      return {
        ...state,
        toasts: [toast, ...state.toasts],
      };
    }
    case ReducerActionType.Update: {
      return {
        ...state,
        toasts: state.toasts.map((toast) => {
          if (toast.id === action.payload.id) {
            return {
              ...toast,
              ...action.payload.options,
            };
          } else {
            return toast;
          }
        }),
      };
    }
    case ReducerActionType.AddOrUpdate: {
      return state.toasts.find((toast) => toast.id === action.payload.id)
        ? reducer(state, {
            type: ReducerActionType.Update,
            payload: {
              id: action.payload.id,
              options: action.payload,
            },
          })
        : reducer(state, {
            type: ReducerActionType.Add,
            payload: action.payload,
          });
    }
    case ReducerActionType.Remove: {
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload),
      };
    }
  }
};

export const dispatch = (action: ReducerAction) => {
  externalState = reducer(externalState, action);
  storeStateUpdaters.forEach((updateState) => {
    updateState(externalState);
  });
};

export const useToastStore = (): ToastState => {
  const [state, setState] = useState<ToastState>(externalState);

  useEffect(() => {
    storeStateUpdaters.push(setState);

    return () => {
      const indexOfCurrentStateUpdater = storeStateUpdaters.indexOf(setState);

      if (indexOfCurrentStateUpdater > -1) {
        storeStateUpdaters.splice(indexOfCurrentStateUpdater, 1);
      }
    };
  }, [state]);

  return state;
};
