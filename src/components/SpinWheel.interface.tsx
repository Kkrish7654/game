export interface ISpinWheelProps {
  segments: ISegments[];
  onFinished: (result: string) => void;
  primaryColor?: string;
  contrastColor?: string;
  buttonText?: string;
  isOnlyOnce?: boolean;
  size?: number;
  upDuration?: number;
  downDuration?: number;
  fontFamily?: string;
  arrowLocation?: "center" | "top";
  showTextOnSpin?: boolean;
  isSpinSound?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any;
}

export interface ISegments {
  segmentText: string;
  segColor?: string;
}
