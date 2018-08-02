# Reviews Module

Reviews Module of AirCnB mocksite

## Getting Started


Open Up Database
````
mongod
mongo --host 127.0.0.1:27017
`````

## Seeding the DataBase

cd into 'seed' directory

Install dependencies
````
npm install
````

(optional step)
Create mock Data (Do this step only if there is SampleData.text file or in order to generate new random Data)
````
npm run makeData
````

Seed Reviews Database
```
npm run seed
````

## Run the Server

cd into reviewsComponent directory

install dependencies
````
npm install
`````

run webpack to create bundle.js
`````
Npm run dev-react
`````

Start Reviews Server
`````
npm run start
`````
Server will be served on port 3003
To see display in chrome browser, go to : localhost:3003/listings/<<id>>
mock data is generated for listings id 0 to 99


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [React]() - The web framework used
* [Webpack]() - Dependency Management

## Author

* **Diane Huang**

## Acknowledgments

* Inspiration from AirBnB
