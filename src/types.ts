interface ColumnPropsTypes {
  name: string;
  cardData: Array<CardItemTypes>;
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
  cardData: CardItemTypes[];
}

interface RepoData {
  stargazers_count: number;
  organization: {
    html_url: string;
    login: string;
  };
  html_url: string;
  name: string;
}

export type { ColumnPropsTypes, CardItemTypes, ItemProps, RepoData };
