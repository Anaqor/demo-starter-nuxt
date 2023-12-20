# Demo Starter Nuxt 

This is an example of a PlanQK Demo created with Nuxt. The demo creates a web user interface to demonstrate the Quantum Random Number Generator published on the PlanQK Marketplace. The app has a user interface and a single server route to make requests to the PlanQK service and ensure that credentials are not exposed to the client.

## Requirements

In order to make request to the Random Number Generator Service, you need an Application with an active subscription to the service. 
You need to provide CONSUMER_KEY and CONSUMER_SECRET of your application as environment variables.

## Local Development

For local development, you need to create a `.env` file in the root directory of the project and add CONSUMER_KEY and CONSUMER_SECRET of your application as environment variables.

```bash
npm i
npm run dev
```

## Run Docker

```bash
docker build -t demo-starter-nuxt .
docker run -p 8080:8080 -e CONSUMER_KEY=your_consumer_key -e CONSUMER_SECRET=your_consumer_secret demo-starter-nuxt
```