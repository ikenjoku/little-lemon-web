import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import Book from "./Book";
import Home from "./Home";
import Root from "./routes/root";
import { BookingProvider } from "./context/booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "book-a-table",
        element: <Book />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <BookingProvider>
      <RouterProvider router={router} />;
    </BookingProvider>
  );
}

export default App;
