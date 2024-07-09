import axios from "axios";
import { smsService } from "./smsService";

const API_TOKEN = process.env.API_TOKEN;

export const customerService = {
  createUser: async (input: any) => {
    try {
      const response = await axios.post(process.env.URL + "register", input, {
        headers: {
          "api-token": `${API_TOKEN}`,
        },
      });
      await smsService(response.data.data);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  },
  refreshToken: async (token: any) => {
    try {
      const response = await axios.post(
        process.env.URL + "refreshrefreshToken",
        token,
        {
          headers: {
            "api-token": `${API_TOKEN}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  verifyOtp: async (otp: any) => {
    try {
      const response = await axios.post(process.env.URL + "verifyOtp", otp, {
        headers: {
          "api-token": `${API_TOKEN}`,
          "x-access-token": "",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
