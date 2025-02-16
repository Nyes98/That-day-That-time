import { userAPI } from "@/entities/user/api";
import { useState } from "react";
import { LoginFormInputs } from "../login-form/model/types";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (data: LoginFormInputs) => {
    try {
      setIsLoading(true);
      const result = await userAPI.getAllUsers();
      // const result = await userAPI.createUser(data);
      return result;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleLogin };
};
