FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY certs/SantaImelda.local.pem /etc/nginx/certs/SantaImelda.local.pem
COPY certs/SantaImelda.local-key.pem /etc/nginx/certs/SantaImelda.local-key.pem

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]