interface ColumnPropsTypes {
  name: string;
  cardData: Array<any>; // Adjust type based on what cardData contains
  droppableId: string;
}

interface CardItemTypes {
  id: number;
  title: string;
  html_url: string;
  number: number;
  created_at: string;
  user: {
    avatar_url: string;
    html_url: string;
    login: string;
  };
  comments: number;
}

interface ItemProps {
  cardData: CardItemTypes[]; // cardData is an array of CardItemTypes
}

export type { ColumnPropsTypes, CardItemTypes, ItemProps };
