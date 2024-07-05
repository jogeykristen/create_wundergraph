import axios from "axios";

const API_TOKEN = process.env.API_TOKEN;
export const customerService = {
  getUserById: async (id: any) => {
    try {
      const response = await axios.get(process.env.URL + `getUser/${id}`, {
        headers: {
          "api-token": `${API_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  },
};
