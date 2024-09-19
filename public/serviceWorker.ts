// Nome della cache corrente
const CACHE_NAME = "version-1";

// Risorse da mettere in cache
const urlsToCache: string[] = ["index.html", "offline.html"];

// Evento 'install' - viene attivato quando il Service Worker viene installato
self.addEventListener("install", (event: any) => {
  event.waitUntil(
    // Apri (o crea) una cache con il nome specificato
    caches.open(CACHE_NAME).then((cache: Cache) => {
      console.log(cache);
      // Aggiungi le risorse specificate nell'array urlsToCache alla cache
      return cache.addAll(urlsToCache);
    })
  );
});

// Evento 'fetch' - intercetta tutte le richieste di rete
self.addEventListener("fetch", (event: any) => {
  event.respondWith(
    // Controlla se la richiesta corrisponde a qualcosa di già presente nella cache
    caches.match(event.request).then((res: Response | undefined) => {
      // Se la risorsa è nella cache, restituiscila. Altrimenti fai la richiesta alla rete
      return (
        res ||
        fetch(event.request).catch(() => {
          // Se la richiesta alla rete fallisce (es. utente offline), restituisci la pagina 'offline.html'
          return caches.match("offline.html");
        })
      );
    })
  );
});

// Evento 'activate' - viene attivato quando il Service Worker viene attivato (di solito dopo l'installazione)
self.addEventListener("activate", (event: any) => {
  // Lista delle cache da conservare (in questo caso solo la versione corrente)
  const cacheWhiteList: string[] = [CACHE_NAME];

  event.waitUntil(
    // Recupera tutti i nomi delle cache attualmente salvate
    caches.keys().then((cacheNames: string[]) => {
      return Promise.all(
        // Itera su tutte le cache e rimuovi quelle che non sono nella whitelist
        cacheNames.map((cacheName: string) => {
          if (!cacheWhiteList.includes(cacheName)) {
            // Se la cache non è nella whitelist, cancellala
            return caches.delete(cacheName);
          }
          return Promise.resolve(); // Aggiungi un ritorno per evitare il warning "Promise not returned"
        })
      );
    })
  );
});
