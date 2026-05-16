import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  AppBar,
  Toolbar
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { fetchNotifications } from "./services/api";
import { getTopNotifications } from "./utils/sortNotifications";
import { log } from "./logging_middleware/logger";
import NotificationList from "./components/NotificationList";

function App() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        log("frontend", "info", "api", "Fetching notifications");

        const data = await fetchNotifications();
        const sorted = getTopNotifications(data);

        setNotifications(sorted);
        log("frontend", "info", "state", "Notifications loaded");
      } catch {
        log("frontend", "error", "api", "Fetch failed");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <AppBar position="static" elevation={2}>
        <Toolbar>
          <NotificationsIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Campus Notifications</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Stay Updated 🚀
        </Typography>

        {loading ? (
          <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    gap: 2,
    mb: 4,
    flexWrap: "wrap"
  }}
></Box>
        ) : (
          <NotificationList data={notifications} />
        )}
      </Container>
    </>
  );
}

export default App;