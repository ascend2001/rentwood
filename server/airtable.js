// airtable configuration
import Airtable from 'airtable';
import path from 'path';
import { fileURLToPath } from 'url';
// import findConfig from 'find-config';
import dotEnv from 'dotenv';
import serverRoutes from './routes/requests.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// dotEnv.config({ path: findConfig('.env') });
dotEnv.config();

const airtableConfig = {
  apiKey: process.env.AIRTABLE_USER_KEY,
  baseKey: process.env.AIRTABLE_BASE_KEY,
  endpointUrl: process.env.AIRTABLE_ENDPOINT_URL,
};

Airtable.configure({
  endpointUrl: airtableConfig.endpointUrl,
  apiKey: airtableConfig.apiKey
})
const base = new Airtable.base(airtableConfig.baseKey);

export default base;
