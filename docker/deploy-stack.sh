#!/bin/bash

set -a
source docker/.env
docker stack rm powa-ui
docker stack deploy -c docker/powa-ui-compose.yml powa-ui