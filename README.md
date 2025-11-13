# money-flow-web

Portale per la visualizzazione delle spese familiari

---

# Deploy con minikube

### Attivazione servizio frontend

```sh
# creo docker image
docker build -t my-react:1 .

# creo un docker container eseguibile dall'host
docker run -p 80:80 my-react:1

docker login
docker tag my-react:1 <username>/my-react:1
docker push <username>/my-react:1

kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml

# Espongo il servizio
minikube service frontend-service
```
