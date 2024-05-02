export type SVGType = {
  className?: string;
  fillg?: string;
  fillp?: string;
  width?: number;
  height?: number;
};

export interface Colleague {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  office?: string | null;
  manager?: string | null;
  orgUnit?: string | null;
  mainText?: string | null;
  gitHub?: string | null;
  twitter?: string | null;
  stackOverflow?: string | null;
  linkedIn?: string | null;
  imagePortraitUrl?: string | null;
  imageWallOfLeetUrl?: string | null;
  highlighted?: true | false;
  published?: true | false;
  primaryRole?: string | null;
  secondaryRole?: string | null;
  area?: string | null;
}

export interface ColleagueFilters {
  name: string;
  office: string;
}
