export interface IBeatSheet {
  id: string;
  title: string;
  acts: IAct[];
}

export interface IAct {
  id: string;
  description: string;
  timestamp: string;
  beats: IBeat[];
}

export interface IBeat {
  id: string;
  description: string;
  timestamp: string;
  duration: number;
  cameraAngle: string;
}
