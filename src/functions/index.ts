export const convertUnixToReadble = (time: number): string => {
  let date = new Date(time * 1000); //CONVERT UNIX FROM SECONDS TO MILLISECONDS
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let formattedTime = hours + ":" + minutes.substr(-2);
  return formattedTime;
};

export const kelvinToCelsius = (k: number): number => {
  let celsius = k - 273.15;
  return celsius;
};
