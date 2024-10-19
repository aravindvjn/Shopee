import { authURL } from "./Links";

export const fetchUserData = (token) => {
  return fetch(authURL + "user-data", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to fetch user data");
      }
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching user data:", error.message);
      throw error;
    });
};
