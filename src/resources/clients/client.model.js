const { v4: uuid } = require('uuid');

class Client {
  constructor({ id = uuid(), 
    name = 'CLIENT', 
    adress = 'client',
    bonucecard = '5@35',
    numberphone = 'number' 
  } = {}) {
    this.id = id;
    this.name = name;
    this.adress = adress;
    this.bonucecard = bonucecard;
    this.numberphone = numberphone;
  }

  static toResponse(client) {
    const { id, name, adress, bonucecard, numberphone} = client;
    return { id, name, adress, bonucecard, numberphone};
  }
}


module.exports = Client;
