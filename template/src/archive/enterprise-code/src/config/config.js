const CONFIG = {
  APP_NAME: 'Demo',
  BACKEND_URL: 'http://192.168.2.34:8080/api/v1',
  GOOGLE_WEBCLIENT_ID:
    '954318340696-5que3b0ff3s9pmses0ac6606vdod8ted.apps.googleusercontent.com',
  ENVIRONMENT: process.env.ENVIRONMENT || '',
  REQUEST_BODY_ENCRYPTION_KEY: process.env.REQUEST_BODY_ENCRYPTION_KEY || '',
  RESPONSE_BODY_ENCRYPTION_KEY: process.env.RESPONSE_BODY_ENCRYPTION_KEY || '',
  SOCKET_URL: process.env.SOCKET_URL || '',
  DEBUG: false,
};

export default CONFIG;
