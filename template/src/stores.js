import { ResourceStore } from '@reststate/mobx';
import api from './api';

const widgetStore = new ResourceStore({
  name: 'widgets',
  httpClient: api,
});

export { widgetStore };
