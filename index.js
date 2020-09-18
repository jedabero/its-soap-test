const soap = require('soap');

async function itsClient() {
  try {
    console.log('Creating soap client!');
    
    const url = '[wsdl]';
    
    const options = {
      timeout: 120,
      overrideRootElement: {
        namespace: 'v11',
        xmlnsAttributes: [
          {
            name: 'xmlns:v11',
            value: 'http://webservices.truckstop.com/v11',
          },
        ],
      },
    };
    
    const client = await soap.createClientAsync(url, options);
    
    console.log('Created client!');

    return client;
  } catch (error) {
    console.warn('ITS has failed to initialize');
    console.log(error.message);
    console.log(error.stack);
    return null;
  }
}

(async function () {
  const client = await itsClient();
  console.log(client);
}());
