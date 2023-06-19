#!/bin/bash

# Copiar el archivo index.html al volumen compartido
cp /app/index.html /usr/share/nginx/html/index.html

# Iniciar el servidor
exec "$@"
