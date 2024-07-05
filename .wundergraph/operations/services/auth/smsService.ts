import { sendSMS } from "./twilioClient";

export const smsService = async (input: any) => {
  const body = `Dear ${input.first_name}, OTP for your account verification is: ${input.otp}.This otp is valid for 2 minutes`;
  const twilioStatus = process.env.ENABLE_TWILIO;

  if (twilioStatus) {
    await sendSMS(input.mobile, body);
  }
};
