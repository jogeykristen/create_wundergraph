export const otpGenerator = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const otpBody = (otp: string) => {
  return `your verification code is ${otp}`;
};

export const alphaNumericGenerator = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 16;
  let result = "";

  const getRandomInt = (max: any) => {
    return Math.floor(Math.random() * max);
  };

  for (let i = 0; i < length; i++) {
    const randomIndex = getRandomInt(characters.length);
    result += characters[randomIndex];
  }

  return result;
};
