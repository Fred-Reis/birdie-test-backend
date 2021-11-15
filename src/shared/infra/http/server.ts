import { app } from "./app";

const port = process.env.PORT || 8000;
const APP_URL = process.env.APP_URL || `http://localhost:${port}`;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 🚀 Server started at ${APP_URL}`);
});
