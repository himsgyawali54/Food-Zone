import { ClassValue } from "class-variance-authority/dist/types";
// Conditonal class
export const classNames = (...classes: ClassValue[]): string =>
  classes.filter(Boolean).join(" ");
