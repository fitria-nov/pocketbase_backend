FROM alpine:latest

WORKDIR /app

# Copy binary PocketBase
COPY pocketbase /app/pocketbase
COPY start.sh /app/start.sh
COPY pb_migrations /app/pb_migrations

RUN chmod +x /app/pocketbase && chmod +x /app/start.sh

EXPOSE 8080

CMD ["/app/start.sh"]
