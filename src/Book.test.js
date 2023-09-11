import { render, screen } from "@testing-library/react";
import Book from "./Book";
import { BookingProvider } from "./context/booking";

test("Renders Booking form correctly", () => {
  render(
    <BookingProvider>
      <Book />
    </BookingProvider>
  );
  const inputLabel = screen.getByText(/Choose date/i);
  expect(inputLabel).toBeInTheDocument();
});
