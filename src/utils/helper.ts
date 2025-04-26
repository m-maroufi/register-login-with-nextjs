export const sleep = (ms: number = 700) =>
  new Promise((resolve) => setTimeout(resolve, ms));
