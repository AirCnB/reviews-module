# Reviews Module

Reviews Module of AirCnB mocksite

## Getting Started

Open Up Database

## Serving the Reviews Module locally

IMPORTANT! In order to run locally, change line 3 of database/index.js from 
````
mongoose.connect('mongodb://database/review');
`````
to 
``````
mongoose.connect('mongodb://localhost/review');
```````

Open and Run Mongoose Database
``````
mongod
mongo --host 127.0.0.1:27017
`````

Install dependencies
````
npm install
````

(Optional step)
Create Mock Data 
(Do this step in order to generate new random reviews data)
````
npm run makeData
````
Otherwise, use the uploaded SampleData.text
Seeding the DataBase
```` 
npm run seed
```````

Run webpack to create bundle.js
`````
Npm run dev-react
`````

Start Reviews Server
`````
npm run start
`````
Server will be served on port 3003
To see display in chrome browser, go to : 
    localhost:3003/listings/<<id>>
Mock data is generated for listings id 0 to 99

## Accessing Dockerized Reviews Module Component

Required: Docker
Start Docker and type in terminal:
`````
  docker-compose up
`````
go to localhost:3003/listings/<<id>> to see reviews component
sample data created for listings 0 to 99

## Deployment

`````

`````

Add additional notes about how to deploy this on a live system

## Built With

* [React]() - The web framework used
* [Webpack]() - Dependency Management

## Author

* **Diane Huang**

## Acknowledgments

* Inspiration from AirBnB
