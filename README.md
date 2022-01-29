# Collabor Apps
Realtime collaboration Web Based Application built with Laravel & Vue. Communicate with message & voice realtime.

### Video Preview
https://user-images.githubusercontent.com/53980548/151654262-99e983c0-6cd4-4c0b-8018-3a2ab0387462.mp4

### Image Preview
![Laravel Social](https://user-images.githubusercontent.com/53980548/151654321-fbb177d1-16ac-41a9-abce-b23d13d266a5.png)

## Instalation
### Backend instalation
- Clone BE repo [ssh or https]
```
git clone git@github.com:WailanTirajoh/CollaborApps-Backend.git
```
- Change directory to folder
```
cd collaborapps-backend
```
- Copy .env.example to .env
```
cp .env.example .env
```
- Create database [mysql or pgsql]
```
mysql -u <username> -p
create database 2021_collaborapps;
```
- Fresh Migrate DB
```
php artisan migrate:fresh --seed
```
- serve server & websocket server
```
// open 2 terminal on backend directory and run
// on terminal 1
php artisan serv

// on terminal 2
php artisan websockets: serv
```

### Frontend instalation
- Clone FE repo [ssh or https]
```
git clone git@github.com:WailanTirajoh/CollaborApps.git
```
- Change directory to folder
```
cd collaborapps
```
- Install dependency / package
```
npm i
```
- Serv app
```
npm run dev
```

### Login
- user 1:
```
email: examplea@example.com
password: password
```
- user 2:
```
email: exampleb@example.com
password: password
```
