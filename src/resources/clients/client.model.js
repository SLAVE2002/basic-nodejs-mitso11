import { v4 as uuidv4 } from 'uuid';

class client {
  constructor({ id = uuidv4(), name = 'CLIENT', adress = 'client', bonucecard = '5@35 5@34 4@97 @245',numberphone = 'number' } = {}) {
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

export default client;
