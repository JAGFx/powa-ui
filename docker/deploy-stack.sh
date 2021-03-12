#!/bin/bash

docker stack rm powa-ui
docker stack deploy -c docker/powa-ui-compose.yml powa-ui