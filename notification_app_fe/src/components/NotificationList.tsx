import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Chip
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const getIcon = (type: string) => {
  switch (type) {
    case "Event":
      return <EventIcon fontSize="small" />;
    case "Result":
      return <EmojiEventsIcon fontSize="small" />;
    case "Placement":
      return <WorkIcon fontSize="small" />;
    default:
      return null;
  }
};

const getColor = (type: string) => {
  switch (type) {
    case "Event":
      return "primary";
    case "Result":
      return "success";
    case "Placement":
      return "warning";
    default:
      return "default";
  }
};

const NotificationList = ({ data }: any) => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? data
      : data.filter((n: any) => n.Type === filter);

  return (
    <Box>
      {/* FILTER BUTTONS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mb: 4,
          flexWrap: "wrap"
        }}
      >
        {["All", "Event", "Result", "Placement"].map((f) => (
          <Button
            key={f}
            variant={filter === f ? "contained" : "outlined"}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </Box>

      {/* FLEX GRID (NO ERRORS) */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3
        }}
      >
        {filtered.map((n: any, i: number) => (
          <Box
            key={i}
            sx={{
              width: {
                xs: "100%",
                sm: "45%",
                md: "30%"
              }
            }}
          >
            <Card
              sx={{
                borderRadius: 3,
                p: 1,
                boxShadow: 4,
                transition: "all 0.3s ease",
                height: "100%",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 8
                }
              }}
            >
              <CardContent>
                {/* TYPE + ICON */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1
                  }}
                >
                  {getIcon(n.Type)}
                  <Chip
                    label={n.Type}
                    color={getColor(n.Type)}
                    size="small"
                  />
                </Box>

                {/* MESSAGE */}
                <Typography fontWeight="bold" gutterBottom>
                  {n.Message}
                </Typography>

                {/* TIME */}
                <Typography variant="caption" color="text.secondary">
                  {new Date(n.Timestamp).toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <Typography align="center" mt={3}>
          No notifications found
        </Typography>
      )}
    </Box>
  );
};

export default NotificationList;