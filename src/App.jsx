import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//To prevent import components when its are not in use; import them in lazy mode like this:
const CounterForTest = lazy(() => import('./components/CounterForTest'));
const PrivateRoute = lazy(() => import('./routes/PrivateRoute'));
const Navbar = lazy(() => import('./components/Navbar'));

function App() {
  return (
    <div className="relative flex flex-col-reverse md:flex-row overflow-hidden w-screen h-screen">
      <Navbar />
      <Suspense fallback={<div>Loading . . .</div>}>
        <main className="grid items-center w-screen h-screen">
          <Router basename="/">
            <Routes path="/">
              <Route path="/" element={<CounterForTest />} />
              <Route element={<PrivateRoute />}>
                <Route
                  path="/private"
                  element={
                    <>
                      <div className="w-screen h-screen grid place-items-center">
                        <p>This is a Private Route</p>
                        <Link
                          to={'/'}
                          className="px-4 py-2 rounded-md border-2 border-orange-700"
                        >
                          Navigate to Home
                        </Link>
                      </div>
                    </>
                  }
                />
              </Route>
            </Routes>
          </Router>
        </main>
      </Suspense>
    </div>
  );
}

export default App;
