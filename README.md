# Nationwide APIs

We have provided sample APIs with test data that you can access.

The APIs are documented using Swagger which provides a visualization of the API and provides a test client to try them out.

Swagger: https://app.swaggerhub.com/apis/NationwideInsurance/Hackathon-May-2018

> **Note:** Base url for provided APIs - http://nw-angelhack-2018-mocks.us-east-1.elasticbeanstalk.com/

You can also export a client bundle in your preferred language to get started.

![Swagger Export](swagger-export.png)


## Advanced

You are more than welcome to provide your own APIs.  However, if you'd like to extend the APIs that we have provided for you, you can run them locally or on your own server using the steps listed below.

### Generating Additional Test Data

You can update the demo.json file (located in the root directory of the project) directly to add your variations using the json-server defined pattern.

We have also provided a generator that can be used to programatically add additional data to the file.
(The generator is defined using typescript).
To use the generator:

* Clone this repository.
* Install ts-node: `npm i -g ts-node`.  
* Run the generator: `ts-node generateMocks.ts`

### Running Mocks

We are using a Node package called json-server to easily serve a JSON file as an API, which can be found at: https://github.com/typicode/json-server.

* Make sure you have cloned this repository.
* Install the server: `npm i -g json-server`
* Run the server: `json-server --watch demo.json`
