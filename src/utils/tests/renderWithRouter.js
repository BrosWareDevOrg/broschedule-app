import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const Wrapper = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const RenderWithRouter = (ui, options) => {
  return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
export { RenderWithRouter as render };
