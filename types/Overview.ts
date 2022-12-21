export interface Detail {
  emoji: string;
  header: string;
  info: string;
}

export interface Overview {
  title: string;
  quote: string;
  description: string;
  details: Detail[];
}
