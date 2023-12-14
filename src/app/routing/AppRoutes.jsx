import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import App from "../App";
import { ErrorsPage } from "../modules/errors/ErrorsPage";

const AppRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<App />} path="/" />
        <Route path="error/*" element={<ErrorsPage />} />
        <Route path="*" element={<Navigate to='/error' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
