  /**
  * class CustomerObj
  *
  * TypeScript schema for customer object.
  */

export class CustomerObj {
    _id: string;
    name: {
        first: string,
        last: string
    };
    birthday: string;
    gender: string;
    lastContact: string;
    customerLifetimeValue: number;
}
