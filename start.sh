#!/bin/bash
chmod +x ./pocketbase
./pocketbase serve --http=0.0.0.0:${PORT:-8090}