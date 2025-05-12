// backend/lib/cors.js
import Cors from 'cors';

// Initialize the CORS middleware
const cors = Cors({
  origin: 'http://localhost:3000', // allow frontend
  methods: ['POST', 'GET', 'OPTIONS'],
});

export function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default cors;
