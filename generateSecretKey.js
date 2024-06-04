const crypto = require('crypto');

// Function to generate a random secret key
function generateSecretKey() {
  return crypto.randomBytes(32).toString('base64');
}

// Generate the secret key
const secretKey = generateSecretKey();

// Output the secret key
process.stdout.write(secretKey + '\n');
