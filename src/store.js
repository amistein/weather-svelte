import { readable } from 'svelte/store';

const MS_IN_MINUTE = 60 * 1000;
const INTERVAL = 4; // minutes
const urls = {
  details: 'https://ilnwn6h04c.execute-api.us-east-1.amazonaws.com/dev/fetchCurrent',
  days: 'https://delicate-truth-433b.amistein001.workers.dev/get-daily',
  hourly: 'https://delicate-truth-433b.amistein001.workers.dev/get-hourly'
};

const store = {};
export default store;

export function initializeStore() {
  Object.entries(urls).forEach(([prop, url]) => {
    store[prop] = readable(null, async function fetchInterval(set) {
      const response = await fetch(url, {method: 'GET'});
      const json = await response.json();

      set(json);

      const to = setTimeout(() => fetchInterval(set), MS_IN_MINUTE * INTERVAL);

      return () => clearTimeout(to);
    });
  });
}
