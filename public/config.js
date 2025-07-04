// Configuration object for API URLs based on the environment
const config = {
    // apiUrl: The URL for the main API, checking if the current environment is 'localhost' or production.
    // If it's 'localhost', it uses the local development URL (localhost); otherwise, it uses the production URL.
    apiUrl: window.location.hostname === 'localhost' ? 'http://localhost:5001' : 'http://50.19.4.172/auth',

    // sessionApiUrl: The URL for the session-related API, again checking for 'localhost' or production.
    // If it's 'localhost', it points to a different port for local development; otherwise, it uses the production server.
    sessionApiUrl: window.location.hostname === 'localhost' ? 'http://localhost:5004' : 'http://50.19.4.172/session',

    // catalogApiUrl: Similar to the other URLs, this is for accessing the catalog API, adjusting based on the environment.
    catalogApiUrl: window.location.hostname === 'localhost' ? 'http://localhost:5003' : 'http://50.19.4.172/catalog',

    // catalogApiUrl: Similar to the other URLs, this is for accessing the catalog API, adjusting based on the environment.
    catalogDelApiUrl: window.location.hostname === 'localhost' ? 'http://localhost:5011' : 'http://50.19.4.172/catalog-del',

    imageApiUrl: window.location.hostname === 'localhost' ? 'http://localhost:5009' : 'http://50.19.4.172/image'
};

// Expose the config object globally so it can be accessed anywhere in the client-side code
window.config = config;