import { PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import appReducer from '../store/reducers/appSlice';
import offerReducer from '../store/reducers/offerSlice';
import userReducer from '../store/reducers/userSlice';
import { RootState } from '../store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
}

function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState,
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  const store = configureStore({
    reducer: {
      app: appReducer,
      offer: offerReducer,
      user: userReducer,
    },
    preloadedState: preloadedState as RootState | undefined,
  });

  function Wrapper({ children }: PropsWithChildren) {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export { renderWithProviders };
