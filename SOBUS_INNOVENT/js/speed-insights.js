/**
 * Vercel Speed Insights Integration
 * This file initializes Vercel Speed Insights for the application.
 * 
 * Documentation: https://vercel.com/docs/speed-insights/quickstart
 */

import { injectSpeedInsights } from '../node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights
// The script will automatically track web vitals and performance metrics
injectSpeedInsights({
  debug: false, // Set to true for development debugging
});
