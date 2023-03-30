import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
// import mockRouter from 'next-router-mock';

const WrapperWithNextRouter = ({ children }) => {
  return <MemoryRouterProvider>{children}</MemoryRouterProvider>;
};

const WrapperWithStore = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const Wrapper = ({ children }) => {
  return (
    <WrapperWithStore>
      <WrapperWithNextRouter>{children}</WrapperWithNextRouter>
    </WrapperWithStore>
  );
};

const RenderWithRouter = (ui, options) => {
  return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
export { RenderWithRouter as render };
