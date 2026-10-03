const CACHE_NOME = "agenda-v1";
caches.open(CACHE_NOME)
const arquivos = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js"
]

self.addEventListener("install", event => {
    event.waitUntil(
    caches.open(CACHE_NOME)
    .then(cache => {
        return cache.addAll(arquivos);
    })
    );
});

self.addEventListener("activate", event => {
    console.log("Service Worker ativado");
});

self.addEventListener("fetch", event => {
    console.log("Requisição:", event.request.url);
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((resposta) => {
            return resposta || fetch(event.request);
        })
    );
});
