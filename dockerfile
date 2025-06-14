# Dockerfile

# Gunakan base image yang ringan
FROM alpine:latest

# Set direktori kerja di dalam container
WORKDIR /pb

# Salin file binary pocketbase dan folder migrasi ke dalam container
COPY ./pocketbase /pb/pocketbase
COPY ./pb_migrations /pb/pb_migrations

# Berikan izin eksekusi pada file binary pocketbase
RUN chmod +x /pb/pocketbase

# Port yang akan digunakan oleh PocketBase di dalam container
EXPOSE 8090

# Perintah untuk menjalankan server saat container dimulai
# Railway akan secara otomatis memetakan port publiknya ke port 8090 ini.
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8090"]