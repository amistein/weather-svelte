import { readable } from 'svelte/store';

const MS_IN_MINUTE = 60 * 1000;
const INTERVAL = 4; // minutes
const urls = {
  current: 'https://ilnwn6h04c.execute-api.us-east-1.amazonaws.com/dev/fetchCurrent',
  days: 'https://sfgjecyrgnbjetmyxqnw.supabase.co/functions/v1/get-daily',
  hourly: 'https://sfgjecyrgnbjetmyxqnw.supabase.co/functions/v1/get-hourly'
};

const store = {};
export default store;

export function initializeStore() {
  Object.entries(urls).forEach(([prop, url]) => {
    store[prop] = readable(null, async function fetchInterval(set) {
      const response = await fetch(url, {method: prop === 'current' ? 'GET' : 'POST'});
      const json = await response.json();

      set(json);

      const to = setTimeout(() => fetchInterval(set), MS_IN_MINUTE * INTERVAL);

      return () => clearTimeout(to);
    });
  });
}
