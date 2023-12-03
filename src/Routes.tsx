import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const WwwaforarcadecombyhtmltodesignFREEversion24Zero = React.lazy(
  () => import("pages/WwwaforarcadecombyhtmltodesignFREEversion24Zero"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={<WwwaforarcadecombyhtmltodesignFREEversion24Zero />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
