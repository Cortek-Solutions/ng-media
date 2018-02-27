export interface IRectangle {
  w: number;
  h: number;
  x: number;
  y: number;
}

export interface IImage {
  $meta?: {
    selected: boolean;
    editing?: boolean;
  };
  id: string;
  name: string;
  src: string;
  type?: string;
  size?: number;
  width?: number;
  height?: number;
  title?: string;
  alt?: string;
  description?: string;
  caption?: string;
  createdDate?: string;
  updatedDate?: string;
  uploadedBy?: string;
}

export interface AppState {
  mediaItems: Array<any>;
  searchMediaItems: Array<IImage>;
}

export interface IEvent {
  type: 'SEARCH_START' | 'SEARCH_END' | 'SEARCH_CLEAR';
}

export interface ImageScale {
  width: number;
  height: number;
}
