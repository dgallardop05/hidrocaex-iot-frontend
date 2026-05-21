import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout'
import DashboardPage from '@/pages/DashboardPage'
import AlertsPage from '@/pages/AlertsPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<DashboardPage />}
          />
          <Route
            path="/alerts"
            element={<AlertsPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter