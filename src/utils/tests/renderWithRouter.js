import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { store } from '@/redux/store';
// import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
// import mockRouter from 'next-router-mock';

//This route is available for now and maybe can change in future!! Pay attention to the changes in documentation!
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context';

export const createMockRouter = (router) => {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    back: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocalDomain: false,
    isReady: true,
    defaultLocale: 'en',
    domainLocales: [],
    isPreview: false,
    ...router,
  };
};

export const defaultRouter = createMockRouter({});

const WrapperWithNextRouter = ({ children, router }) => {
  return (
    <AppRouterContext.Provider value={router || defaultRouter}>
      {children}
    </AppRouterContext.Provider>
  );
};

// const WrapperWithStore = ({ children }) => {
//   return <Provider store={store}>{children}</Provider>;
// };

const Wrapper = ({ children }) => {
  return (
    // <WrapperWithStore>
    <WrapperWithNextRouter>{children}</WrapperWithNextRouter>
    // </WrapperWithStore>
  );
};

const RenderWithRouter = (ui, options) => {
  return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
export { RenderWithRouter as render };
