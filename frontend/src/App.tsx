import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from '@config/queryClient';
import urls from '@constants/urls';

// Components
import Layout from "@layouts/mainLayout/Layout"
import Login from '@pages/login/Login'
import Workout from '@pages/workout';

// Styles
import './App.css'


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path={urls.LOGIN} element={<Login />} />
        </Routes>
        <Routes>
          <Route path={urls.APP} element={<Layout />}>
            <Route index={true} element={<Navigate to={urls.WORKOUTS} replace />} />
            <Route path={urls.WORKOUTS} element={<Workout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
