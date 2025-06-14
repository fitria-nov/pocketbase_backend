FROM alpine:latest

# Instal dependencies
RUN apk add --no-cache bash

# Buat direktori kerja
WORKDIR /app

# Copy semua file ke dalam container
COPY . .

# Set permission start.sh
RUN chmod +x start.sh

# Jalankan PocketBase
CMD ["./start.sh"]
