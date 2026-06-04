import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import MainLayout
from '@/layouts/MainLayout'

import DashboardPage
from '@/pages/DashboardPage'

import AlertsPage
from '@/pages/AlertsPage'

import DepositDetailPage
from '@/pages/DepositDetailPage'

import LoginPage
from '@/pages/LoginPage'

import ProtectedRoute
from '@/router/ProtectedRoute'

const AppRouter = () => {

  const token =
    localStorage.getItem(
      'token',
    )

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/login"
          element={
            token
              ? (
                <Navigate
                  to="/"
                  replace
                />
              )
              : (
                <LoginPage />
              )
          }
        />

        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/"
            element={
              <DashboardPage />
            }
          />

          <Route
            path="/alerts"
            element={
              <AlertsPage />
            }
          />

          <Route
            path="/deposit/:id"
            element={
              <DepositDetailPage />
            }
          />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter