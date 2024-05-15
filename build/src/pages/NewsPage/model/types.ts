export interface IComment {
    id: number;
    text: string;
    level: number;
    replies: IComment[]; 
  }