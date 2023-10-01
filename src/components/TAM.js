import { storage } from "svelte-legos";
import { writable } from "svelte/store";

export const darkBg = storage(writable(false), "darkBg");
