export interface CardImage {
    svg: string;
    png: string;
  }
  
  export interface Card {
    code: string;
    image: string;
    images: CardImage;
    value: string;
    suit: string;
    numericValue:number;
  }
  
  export interface DeckResponse {
    success: boolean;
    deck_id: string;
    cards: Card[];
    remaining: number;
  }
  