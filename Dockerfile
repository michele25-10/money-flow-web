# ========================
# STAGE 1: Build React app
# ========================
FROM node:20-alpine AS build

# Imposta la directory di lavoro
WORKDIR /app

# Copia solo i file necessari per installare le dipendenze
COPY package*.json ./

# Installa le dipendenze
RUN npm ci

# Copia il resto dei file del progetto
COPY . .

# Costruisce l’app per la produzione
RUN npm run build

# =========================
# STAGE 2: Serve con Nginx
# =========================
FROM nginx:stable-alpine

# Rimuove la configurazione default di Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia la build del frontend dal primo stage
COPY --from=build /app/build /usr/share/nginx/html

# Copia una configurazione personalizzata di Nginx (opzionale)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Espone la porta 80
EXPOSE 80

# Comando di default
CMD ["nginx", "-g", "daemon off;"]
