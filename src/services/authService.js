import axios from 'axios';

const authService = {
  async getAccessToken(clientId, clientSecret, authUrl) {
    try {
      const response = await axios.post(authUrl, {
        grant_type: 'client_credentials',
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`
        }
      });

      if (response.status === 200 && response.data.access_token) {
        return response.data.access_token;
      } else {
        throw new Error('Failed to obtain access token');
      }
    } catch (error) {
      console.error('Error fetching access token:', error);
      throw error;
    }
  }
};

export default authService;