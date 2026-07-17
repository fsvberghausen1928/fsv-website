export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}



export function calculateCountdown(
  targetDate: string | Date
): CountdownResult {

  const difference =
    new Date(targetDate).getTime() -
    new Date().getTime();



  if (difference <= 0) {

    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

  }



  return {

    days: Math.floor(
      difference /
        (1000 * 60 * 60 * 24)
    ),


    hours: Math.floor(
      (difference /
        (1000 * 60 * 60)) %
        24
    ),


    minutes: Math.floor(
      (difference /
        (1000 * 60)) %
        60
    ),


    seconds: Math.floor(
      (difference / 1000) %
        60
    ),

  };

}





export function formatCountdownValue(
  value: number
): string {

  return value
    .toString()
    .padStart(2, "0");

}