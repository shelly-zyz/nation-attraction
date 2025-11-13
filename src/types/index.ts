export interface Country {
  id: string;
  name: string;
  flag: string;
  description: string;
  image: string;
  color: string;
  attractions: Attraction[];
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  image: string;
  countryId: string;
  bestTimeToVisit: string;
  highlights: string[];
}