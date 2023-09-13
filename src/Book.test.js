import { render, screen, fireEvent } from "@testing-library/react";
import Book from "./Book";
import { BookingProvider } from "./context/booking";
import { MemoryRouter } from "react-router-dom";

test("Renders Booking form correctly", () => {
  render(
    <BookingProvider>
      <MemoryRouter>
        <Book />
      </MemoryRouter>
    </BookingProvider>
  );
  const inputLabel = screen.getByText(/Choose date/i);
  expect(inputLabel).toBeInTheDocument();
});

test("Submit button is disabled for an invalid form", async () => {
  render(
    <BookingProvider>
      <MemoryRouter>
        <Book />
      </MemoryRouter>
    </BookingProvider>
  );
  const button = screen.getByText("Make Your reservation");
  fireEvent.click(button);
  expect(button).toBeDisabled();
});
