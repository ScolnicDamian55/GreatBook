import api from "../api";

// Регистрация
export const registerUser = async (data) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw error;
  }
};

// Логин
export const loginUser = async (data) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};
