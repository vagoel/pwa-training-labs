self.addEventListener('install', () => {
    console.log("Installing service worker");
    self.skipWaiting();
})


self.addEventListener('activate', () => {
    console.log("Attaching service worker");
})
// I'm a new service worker


self.addEventListener('fetch', event => {
    console.group("Fetching Url", event.request.url);
})
