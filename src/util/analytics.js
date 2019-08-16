import Analytics from "analytics";
import simpleAnalyticsPlugin from "analytics-plugin-simple-analytics";
import { history } from "./router.js";

// Initialize analytics and plugins
// Documentation: https://getanalytics.io
const analytics = Analytics({
  debug: process.env.NODE_ENV !== "production",
  plugins: [
    // 1) Create a Simple Analytics account: https://bit.ly/2OV8gEb
    // 2) Set your website domain to current domain (localhost, production domain, etc)
    // 3) Uncomment the following code to start tracking
    //simpleAnalyticsPlugin()
  ]
});

// Track initial pageview
if (typeof window !== "undefined") {
  analytics.page();
}

// Track pageview on route change
history.listen(() => {
  analytics.page();
});

export default analytics;
