import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { BookingProvider } from "./context/booking";

test("Renders Home page correctly", () => {
  render(
    <BookingProvider>
        <App />
    </BookingProvider>
  );
  const inputLabel = screen.getByText(/Welcome/i);
  expect(inputLabel).toBeInTheDocument();
});

test("Can navigate to booking page", () => {
  render(
    <BookingProvider>
        <App />
    </BookingProvider>
  );
  expect(screen.getByText(/Book a table/i)).toBeInTheDocument()

  fireEvent.click(screen.getByText('Book a table'))

  expect(screen.getByText('Choose date')).toBeInTheDocument()
});
