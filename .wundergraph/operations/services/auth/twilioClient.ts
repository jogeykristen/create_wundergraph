import { Twilio } from "twilio";

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const fromPhoneNumber = process.env.TWILIO_FROM_NUMBER;

const client = new Twilio(accountSid, authToken);

export const sendSMS = async (to: string, body: string) => {
  try {
    const message = await client.messages.create({
      body,
      from: fromPhoneNumber,
      to: "+91" + to,
    });
  } catch (error) {
    throw error;
  }
};
