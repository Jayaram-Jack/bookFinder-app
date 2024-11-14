import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/books/HomePage";
import { ThemeProvider } from "./context/ThemeProvider";
import { Provider } from "react-redux";
import BookDetailsPage from "./pages/books/BookDetailsPage";
import NotFound from "./pages/NotFoundPage";
import { store } from "./store/features/books";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "works/:bookId",
          element: <BookDetailsPage />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    future: {
      v7_partialHydration: true, // Enable the future flag for startTransition
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

function App() {
  return (
    <>
      <ThemeProvider>
        <Provider store={store}>
          <RouterProvider
            router={router}
            future={{ v7_startTransition: true }}
          />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
