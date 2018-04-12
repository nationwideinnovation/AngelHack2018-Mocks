# Nationwide APIs

We have provided sample APIs with test data that you can access.

The APIs are documented using Swagger which provides a visualization of the API and provides a test client to try them out.

Swagger: https://app.swaggerhub.com/apis/NationwideInsurance/Hackathon-May-2018

> **Note** The base url for the provide APIs is http://nw-angelhack-2018-mocks.us-east-1.elasticbeanstalk.com/

You can also export a client bundle in your preferred language to get started.

![Swagger Export](swagger-export.png)


## Advanced

If you'd like to extend our APIs you can run them locally or on your own server. 

### Running Mocks

We are using a Node package called json-server to easily serve a JSON file as an API, which can be found at: https://github.com/typicode/json-server.

Install by running `npm i -g json-server`

Then run by running `json-server --watch demo.json`

### Generating Additional Test Data

You can update the demo.json file directly to add your variations using the json-server defined pattern.

We have also provided a generarator that can be used to programatically add additional data to the file.
(The generator is defined using typescript).

The recommended way to run typescript files is to install ts-node: `npm i -g ts-node`.  
You can then run the generator by running `ts-node generateMocks.ts`
