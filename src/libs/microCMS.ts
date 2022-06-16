// const { createClient } = require("microcms-js-sdk"); // CommonJS
import { createClient } from 'microcms-js-sdk'; //ES6

// Initialize Client SDK.
export const microcmsClient = createClient({
  serviceDomain: `${process.env.NEXT_PUBLIC_MICROCMS_DOMAIN}`,
  apiKey: `${process.env.NEXT_PUBLIC_MICROCMS_API_KEY}`,
});
