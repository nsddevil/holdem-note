export interface UserInfo {
  id?: string;
  email: string;
  name?: string;
  image?: string;
}

export interface ColorList {
  id: string;
  color: string;
}

export type ColorType = "purple" | "red" | "blue" | "yellow" | "green" | "gray";
