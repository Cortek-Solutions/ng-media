export interface IRectangle {
  w: number;
  h: number;
  x: number;
  y: number;
}

export interface IImage {
  $meta?: {
    selected: boolean;
  };
  id: string;
  name: string;
  src: string;
  title?: string;
  alt?: string;
  description?: string;
  date?: Date;
}

export interface AppState {
  mediaItems: Array<any>;
  searchMediaItems: Array<IImage>;
}

export interface IEvent {
  type: 'SEARCH_START' | 'SEARCH_END' | 'SEARCH_CLEAR';
}
