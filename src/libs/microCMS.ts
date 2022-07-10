// const { createClient } = require("microcms-js-sdk"); // CommonJS
import { createClient } from 'microcms-js-sdk'; //ES6

console.log('debug用 domain', process.env.NEXT_PUBLIC_MICROCMS_DOMAIN);
console.log('debug用 key', process.env.NEXT_PUBLIC_MICROCMS_API_KEY);

// Initialize Client SDK.
export const microcmsClient = createClient({
  serviceDomain: `${process.env.NEXT_PUBLIC_MICROCMS_DOMAIN}`,
  apiKey: `${process.env.NEXT_PUBLIC_MICROCMS_API_KEY}`,
});
