# Reviews Module

Reviews Module of AirCnB mocksite

Searched through Reviews
![image](https://user-images.githubusercontent.com/32206840/46114491-bda1d900-c1a7-11e8-835f-93583d6da405.png)
Pop Up Flag Form
![image](https://user-images.githubusercontent.com/32206840/46114479-b5499e00-c1a7-11e8-9558-8ed4f69eab8c.png)

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
Server is hosted on port 3003
open up `localhost:3003/listings/<<id>>` for house listings id 0 to 99

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
