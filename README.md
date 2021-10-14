# Kantun task

Repository of an interview task for Kantun.

# NEXT STEPS SHOULD BE FOLLOWED IN ORDER:

## 1. PostgreSQL

Install [PostgreSQL](https://www.postgresql.org/download/) and follow the setup for installation.
After you have finished installing it, create a database and remember its password, username and name.

## 2. Backend

If you are missing YARN, install it by using ```npm install -g yarn```.

Locate yourself inside ```backend``` folder using following command:

```sh
cd backend
```

Install necessary packages using ```yarn``` command. 

Inside of it, create ```.env``` file in the ROOT of the backend folder following the ```.env.example``` template.

After you have done that, run the next two commands:

```sh
yarn migrate
yarn seed
```

These two commands will allow you to populate your databse.

Last command, run ```yarn start``` to initialize our connection to the server.

## 3. Frontend

Locate yourself inside the ```frontend``` folder using following command:

```sh
cd ../frontend (or `cd frontend` if you are in the main repo directory)
```

Install necessary packages using ```yarn``` command.

To start your frontend server, run ```yarn start``` command.
