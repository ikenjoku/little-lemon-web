import * as React from "react";
import { submitAPI, fetchAPI } from "../utils/api";

export const BookingContext = React.createContext();

const DEFAULT_FREE_TIME = {
  Morning: [],
  Afternoon: [],
  Evening: [],
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "SUBMIT":
          return {
            ...prevState,
            availableTimes: DEFAULT_FREE_TIME,
            booked: action.payload,
          };
        case "INITIALIZE_TIMES":
          return {
            ...prevState,
            availableTimes: action.payload,
          };
        default:
          return state;
      }
    },
    {
      availableTimes: DEFAULT_FREE_TIME,
      isLoading: false,
      booked: {
        time: "",
        date: "",
      },
    }
  );

  const fetchAvailableTimes = async (dateString) => {
    const availableSlots = await fetchAPI(dateString);
    dispatch({
      type: "INITIALIZE_TIMES",
      payload: availableSlots,
    });
    return availableSlots;
  };

  const submitForm = async (formData) => {
    const isSubmitted = await submitAPI(formData);
    if (isSubmitted) {
      dispatch({
        type: "SUBMIT",
        payload: {
          date: formData.resDate,
          time: formData.resTime,
        },
      });
    }
  };

  const values = React.useMemo(
    () => ({
      updateTimes: async (formData) => {
        await submitForm(formData);
      },
      initializeTimes: async (dateString) => {
        await fetchAvailableTimes(dateString);
      },
      appData: state,
    }),
    [state]
  );

  if (state.isLoading) {
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Please wait...</h2>
    </div>;
  }

  return (
    <BookingContext.Provider value={values}>{children}</BookingContext.Provider>
  );
};

export const useBooking = () => {
  const booking = React.useContext(BookingContext);
  if (!booking) {
    throw new Error("Please use useBooking inside BookingProvider");
  }
  return booking;
};
