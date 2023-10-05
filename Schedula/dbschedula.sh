#!/bin/bash

#docker cp city.js schedula_location_db:/home
#docker cp workstation-regionais.js schedula_location_db:/home
docker cp workstation.js schedula_location_db:/home

#docker exec -u 0 -i schedula_location_db /bin/bash < city.sh
#docker exec -u 0 -i schedula_location_db /bin/bash < workstation-regionais.sh
docker exec -u 0 -i schedula_location_db /bin/bash < workstation.sh

