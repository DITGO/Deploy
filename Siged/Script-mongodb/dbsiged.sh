#!/bin/bash

#docker cp features.js db_clients:/home
#docker cp lotacoes.js db_clients:/home
#docker cp category.js db_demands:/home
#docker cp cargos.js db_roles:/home
#docker cp sectors.js db_sector:/home
#docker cp users.js db_users:/home
#docker cp featurespcd.js db_clients:/home
#docker cp listagemlotacoes.js db_clients:/home
#docker cp listagemcargos.js db_roles:/home
docker cp clients.js db_clients:/home

#docker exec -u 0 -i db_clients /bin/bash < features.sh
#docker exec -u 0 -i db_clients /bin/bash < lotacoes.sh
#docker exec -u 0 -i db_demands /bin/bash < category.sh
#docker exec -u 0 -i db_roles /bin/bash < cargos.sh
#docker exec -u 0 -i db_sector /bin/bash < sectors.sh
#docker exec -u 0 -i db_users /bin/bash < users.sh
#docker exec -u 0 -i db_clients /bin/bash < featurespcd.sh
#docker exec -u 0 -i db_clients /bin/bash < listagemlotacoes.sh
#docker exec -u 0 -i db_roles /bin/bash < listagemcargos.sh
docker exec -u 0 -i db_clients /bin/bash < clients.sh
