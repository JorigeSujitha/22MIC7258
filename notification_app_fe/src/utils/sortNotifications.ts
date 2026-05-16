export const getTopNotifications = (notifications: any[]) => {
  return notifications
    .sort((a, b) => {
      return new Date(b.Timestamp).getTime() - new Date(a.Timestamp).getTime();
    })
    .slice(0, 10);
};