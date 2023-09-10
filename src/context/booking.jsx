import * as React from "react";

export const BookingContext = React.createContext();

const DEFAULT_FREE_TIMES = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "SELECT_TIME":
          const newSlots = prevState.availableTimes.filter(
            (item) => item !== action.payload
          );
          return {
            ...prevState,
            availableTimes: newSlots,
          };
        case "INITIALIZE_TIMES":
          return {
            ...prevState,
            availableTimes: DEFAULT_FREE_TIMES,
          };
        default:
          return state;
      }
    },
    {
      availableTimes: [],
      isLoading: false,
    }
  );

  React.useEffect(() => {
    dispatch({
      type: "INITIALIZE_TIMES",
    });
  }, []);
  console.log("state", state);
  const values = React.useMemo(
    () => ({
      updateTimes: async (formData) => {
        //maybe call API

        dispatch({
          type: "SELECT_TIME",
          payload: formData.resTime,
        });
      },
      initializeTimes: async () => {
        dispatch({
          type: "INITIALIZE_TIMES",
        });
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
