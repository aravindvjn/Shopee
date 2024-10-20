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
        return null;
      }
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
};
