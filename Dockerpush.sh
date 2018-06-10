echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push jsboilerplates/micro-websocket
docker push jsboilerplates/micro-websocket:0.0.0
