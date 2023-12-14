import { Route, Routes } from "react-router-dom";

import { Error404 } from "./components/Error404";
import { ErrorsLayout } from "./ErrorsLayout";

const ErrorsPage = () => {
  return (
    <Routes>
      <Route element={<ErrorsLayout />}>
        <Route path="404" element={<Error404 />} />
        <Route path="500" element={<h2>500</h2>} />
        <Route index element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export { ErrorsPage };
