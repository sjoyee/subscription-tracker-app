import api from "./api";

export const getActiveSubscriptionsViaApi = () => {
  const response = api.get("/api/subscription/active");
  return response;
};

export const createActiveSubscriptionViaApi = (data) => {
  const response = api.post("/api/subscription/active", data);
  return response;
};

export const updateActiveSubscriptionViaApi = (id, data) => {
  const response = api.put(`/api/subscription/active/${id}`, data);
  return response;
};

export const deleteActiveSubscriptionViaApi = (id, data) => {
  const response = api.delete(`/api/subscription/active/${id}`, data);
  return response;
};
