const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

/**
 *
 * @param  date
 * @returns fetchAPI function to return array of random available dates
 */
const fetchAPI = function (date) {
  let result = { Morning: [], Afternoon: [], Evening: [] };
  let random = seededRandom(date.getDate());

  // Morning Timings
  for (let i = 9; i < 12; i++) {
    if (random() < 0.5) {
      result.Morning.push((parseInt(i) % 12 || 12) + ":00");
    }
    if (random() < 0.5) {
      result.Morning.push((parseInt(i) % 12 || 12) + ":30");
    }
  }

  // Afternoon Timings
  for (let i = 12; i < 16; i++) {
    if (random() < 0.5) {
      result.Afternoon.push((parseInt(i) % 12 || 12) + ":00");
    }
    if (random() < 0.5) {
      result.Afternoon.push((parseInt(i) % 12 || 12) + ":30");
    }
  }

  // Evening Timings
  for (let i = 16; i < 21; i++) {
    if (random() < 0.5) {
      result.Evening.push((parseInt(i) % 12 || 12) + ":00");
    }
    if (random() < 0.5) {
      result.Evening.push((parseInt(i) % 12 || 12) + ":30");
    }
  }

  return result;
};

/**
 *
 * @param  formData
 * @returns fetchAPI function to return array of random available dates
 */

const submitAPI = function (formData) {
  return true;
};

export { fetchAPI, submitAPI };
