import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

class MockApi {
  constructor(axiosInstance) {
    this.mock = new MockAdapter(axiosInstance);
    this.setupMocks();
  }

  setupMocks() {
    // Dynamically load all mock modules from the '/mock' directory
    const contexts = require.context('@/mock/', true, /\.js$/);
    contexts.keys().forEach((file) => {
      const configs = contexts(file).default;
      configs.forEach(({ method, url, status = 200, response }) => {
        switch (method) {
          case 'get':
            this.mock.onGet(url).reply(status, response);
            break;
          case 'post':
            this.mock.onPost(url).reply(status, response);
            break;
          case 'put':
            this.mock.onPut(url).reply(status, response);
            break;
          case 'delete':
            this.mock.onDelete(url).reply(status, response);
            break;
          default:
            console.warn(`Unknown method ${method} for mock setup`);
            break;
        }
      });
    });
  }
}

function setupMock(axiosInstance = axios) {
  return new MockApi(axiosInstance);
}

export { setupMock };
