import { v4 as uuidv4 } from 'uuid';

class User {
  constructor({ id = uuidv4(), name = 'CLIENT', adress = 'client', bonucecard = '5@35 5@34 4@97 @245',numberphone = 'number' } = {}) {
    this.id = id;
    this.name = name;
    this.adress = adress;
    this.bonucecard = bonucecard;
    this.numberphone = numberphone;
  }

  static toResponse(user) {
    const { id, name, adress, bonucecard, numberphone} = user;
    return { id, name, adress, bonucecard, numberphone};
  }
}

export default User;
