import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import { instance } from "./orpc";

export const api = createTanstackQueryUtils(instance);
