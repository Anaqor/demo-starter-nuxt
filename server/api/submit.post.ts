import {PlanqkServiceClient} from "@anaqor/planqk-service-sdk"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const serviceEndpoint = process.env.SERVICE_ENDPOINT || 'https://gateway.platform.planqk.de/anaqor/quantum-random-number-generator/1.0.0'
  const consumerKey = process.env.CONSUMER_KEY || ''
  const consumerSecret = process.env.CONSUMER_SECRET || ''

  const client = new PlanqkServiceClient(serviceEndpoint, consumerKey, consumerSecret)

  // prepare your input data and parameters
  const data = {"n_numbers": parseInt(body.count)}
  const params = {"n_bits": 4, "backend": "qasm_simulator"}

  // start the execution
  let job = await client.startExecution({ data, params })

  // wait for the result
  const result = await client.getResult(job.id!)
  return result
})