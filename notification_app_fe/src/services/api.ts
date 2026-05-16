export const fetchNotifications = async () => {
  const res = await fetch(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
      }
    }
  );

  const data = await res.json();
  return data.notifications;
};