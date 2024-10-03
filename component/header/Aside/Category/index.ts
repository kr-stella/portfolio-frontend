export { default } from "./Category";

export interface HeaderAsideCategoryMajorType {key:string; str:string; icon:string; minor?:HeaderAsideCategoryMinorType[];};
export interface HeaderAsideCategoryMinorType {key:string; str:string; icon:string;};