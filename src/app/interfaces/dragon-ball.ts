export interface Character {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt: string | null;
  }
  
  export interface Meta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  }
  
  export interface Links {
    first: string;
    previous: string;
    next: string;
    last: string;
  }
  
  export interface CharacterResponse {
    items: Character[];
    meta: Meta;
    links: Links;
  }
  