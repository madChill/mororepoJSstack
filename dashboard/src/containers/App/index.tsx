import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';

import MainLayout from '../../components/Layouts';

const SubmitScan = lazy(() => import('../SubmitScan'));
const ScansDashboard = lazy(() => import('../ScansDashboard'));
const FindingDashboard = lazy(() => import('../FindingDashboard'));

const Routes = () => {
  // const path = props?.location?.pathname
  return (
    <RecoilRoot>
      <ToastContainer />
      <BrowserRouter>
        <MainLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route
                component={ScansDashboard}
                exact
                // layout={MainLayout}
                path="/"
              />
              <Route
                component={FindingDashboard}
                exact
                // layout={MainLayout}
                path="/finding"
              />
              <Route
                component={SubmitScan}
                exact
                // layout={MainLayout}
                path="/new"
              />
            </Switch>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Routes;
