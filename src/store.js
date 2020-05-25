import { readable } from 'svelte/store';

const MS_IN_MINUTE = 60 * 1000;
const INTERVAL = 4; // minutes
const urls = {
  current: 'https://ilnwn6h04c.execute-api.us-east-1.amazonaws.com/dev/fetchCurrent',
  days: 'https://ilnwn6h04c.execute-api.us-east-1.amazonaws.com/dev/fetchDays',
  hourly: 'https://ilnwn6h04c.execute-api.us-east-1.amazonaws.com/dev/fetchHourly'
};

const store = {};
export default store;

export function initializeStore() {
  Object.entries(urls).forEach(([prop, url]) => {
    store[prop] = readable(null, async function fetchInterval(set) {
      const response = await fetch(url);
      const json = await response.json();
      
      set(json);
      
      const to = setTimeout(() => fetchInterval(set), MS_IN_MINUTE * INTERVAL);

      return () => clearTimeout(to);
    });
  });
}
