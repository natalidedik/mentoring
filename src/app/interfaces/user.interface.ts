export interface User {
  id: number;
  name: string;
  phone: string;
  username: string;
  email: string;
  website: string;
  address: Address;
  company: Company;
}

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type Geo = {
  lat: string;
  lng: string;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
