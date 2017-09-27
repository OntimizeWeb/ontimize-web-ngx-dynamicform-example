import { Config } from 'ontimize-web-ngx';
// import { SERVICE_CONFIG } from './shared/app.services.config';

import { CustomOntimizeService } from './shared/custom-ontimize.service';

export const CONFIG: Config = {
  // The base path of the URL used by app services.
  // apiEndpoint: 'http://imatia211:8150/dynamic-web-form-wsrest',
  // apiEndpoint: 'https://trial.imatia.com/demosontimize/dynamic-web-form-wsrest',
  apiEndpoint: 'http://IMATIA14079:9080/dynamic-web-form-wsrest',
  uuid: 'com.ontimize.web.ngx.dynamicwebform',

  // Title of the app
  title: 'Dynamic web form',


  //  Language of the application.
  locale: 'en',


  // The service type used (Ontimize REST standart, Ontimize REST JEE or custom implementation)
  // in the whole application.
  serviceType: CustomOntimizeService,

  // Configuration parameters of application services.
  // servicesConfiguration: SERVICE_CONFIG
};
