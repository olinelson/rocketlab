docker stop roecketlab
docker rm rocketlab
docker run  -p 5432:5432 --name rocketlab -e POSTGRES_PASSWORD=password -e POSTGRES_USER=postgres -e POSTGRES_DB=rocketlab -d postgres