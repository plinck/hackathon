import * as functions from 'firebase-functions';

const FUNCTIONS_CONFIG = functions.config().env;

const APP_CONFIG = {
    ORG : functions.config().env.app.org,
    ENV : functions.config().env.app.env,
}

const GOOGLE_API_KEY = functions.config().env.googleApiKey;
const REACT_APP_RAPIDYAHAOO_API_KEY = functions.config().env.rapidyahooApiKey;
// Set env vars

export { FUNCTIONS_CONFIG, APP_CONFIG, GOOGLE_API_KEY, REACT_APP_RAPIDYAHAOO_API_KEY };
