import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProvider from "./Providers/AuthProvider";
import PrivateRoute from "./Providers/PrivateRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrivateRoute>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </PrivateRoute>
  </React.StrictMode>
);
