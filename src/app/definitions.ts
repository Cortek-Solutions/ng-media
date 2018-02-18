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
}

export interface AppState {
  mediaItems: Array<any>;
}
