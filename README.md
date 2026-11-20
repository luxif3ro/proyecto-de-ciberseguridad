Cada que se vaya a ejecutar se deber realizar lo siguiente:

- conocer el ip de la computadora
- actualizar este ip en el DNS y certificados

codigo para los certificados:

```bash
mkcert `
  -cert-file nginx\certs\SantaImelda.local.pem `
  -key-file nginx\certs\SantaImelda.local-key.pem `
  SantaImelda.local 10.13.55.94
```

despues ejecutar los siguientes comandos:

```bash
docker compose down
docker compose up -d --build
```

comprobacion:

```bash
docker exec citas-nginx nginx -t
```
