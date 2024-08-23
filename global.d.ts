import type en from "./src/lib/dictionaries/dynamic/en.json";
type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
}
