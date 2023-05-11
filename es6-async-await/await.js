import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function fetchOnce() {
  const response = await fetch('foo/bar.html');
  console.log(elapsed(), 'fetchOnce:', response);
}

async function fetchSeveral() {
  const newR = await fetch('foo1/bar.html');
  console.log(elapsed(), 'fetchSeveral1:', newR);
  const newR2 = await fetch('foo2/bar.html');
  console.log(elapsed(), 'fetchSeveral2:', newR2);
  const newR3 = await fetch('foo3/bar.html');
  console.log(elapsed(), 'fetchSeveral3:', newR3);
}

async function fetchChained() {
  const msg1 = await fetch('foo-chain/bar.html');
  console.log(elapsed(), 'fetchChained1:', msg1);
  const msg2 = await fetch(msg1);
  console.log(elapsed(), 'fetchChained2:', msg2);
  const msg3 = await fetch(msg2);
  console.log(elapsed(), 'fetchChained3:', msg3);
}

await fetchOnce();
await fetchSeveral();
await fetchChained();
