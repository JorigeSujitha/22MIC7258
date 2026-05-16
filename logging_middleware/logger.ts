const LOG_API_URL = "http://4.224.186.213/evaluation-service/logs";

export const log = async (
  stack: string,
  level: string,
  pkg: string,
  message: string
) => {
  try {
    const token = import.meta.env.VITE_ACCESS_TOKEN;

    if (!token) {
      console.error("❌ Missing access token");
      return;
    }

    const response = await fetch(LOG_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        stack: stack.toLowerCase(),
        level: level.toLowerCase(),
        package: pkg.toLowerCase(),
        message
      })
    });

    const data = await response.json();
    console.log("Log:", data);
  } catch (error) {
    console.error("Logging failed:", error);
  }
};