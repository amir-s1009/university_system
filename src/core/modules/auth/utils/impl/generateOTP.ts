import { GenerateOTP } from "../interface/generateOTP.js";

export const generateOTP: GenerateOTP = () => {
  const otp = Math.floor(10000 + Math.random() * 90000);
  const exp = new Date();
  exp.setMinutes(exp.getMinutes() + 4);
  return { otp, exp };
};
