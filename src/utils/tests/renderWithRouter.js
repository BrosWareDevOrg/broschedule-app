import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const Wrapper = ({ children }) => {
  return <BrowserRouter basename="/">{children}</BrowserRouter>;
};

const RenderWithRouter = (ui, options) => {
  return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
export { RenderWithRouter as render };
