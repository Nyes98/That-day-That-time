import axios from "axios";
import { LoginFormInputs } from "@/features/auth/login-form/model/types";

export const userAPI = {
  getAllUsers: async () => {
    try {
      const { data } = await axios.get("/api/users");
      return data;
    } catch (error) {
      console.error(error);
      return { success: false, error: "Failed to fetch users" };
    }
  },

  createUser: async (data: LoginFormInputs) => {
    try {
      const { data: result } = await axios.post("/api/users", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return result;
    } catch (error) {
      console.error(error);
      return { success: false, error: "Failed to create user" };
    }
  },
};
