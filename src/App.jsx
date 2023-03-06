import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//To prevent import components when its are not in use; import them in lazy mode like this:
const CounterForTest = lazy(() => import('./components/CounterForTest'));
const PrivateRoute = lazy(() => import('./routes/PrivateRoute'));

function App() {
  return (
    <Suspense fallback={<div>Loading . . .</div>}>
      <Router basename='/'>
        <Routes path="/">
          <Route path="/" element={<CounterForTest />} />
          <Route element={<PrivateRoute />}>
            <Route
              path="/private"
              element={
                <div className='flex flex-col gap-4 justify-center items-center'>
                  <p>This is a Private Route</p>
                  <Link
                    to={'/'}
                    className="px-4 py-2 rounded-md border-2 border-orange"
                  >
                    Navigate to Home
                  </Link>
                </div>
              }
            />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
