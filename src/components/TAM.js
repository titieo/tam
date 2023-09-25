import { storage } from "svelte-legos";
import { writable } from "svelte/store";

export const darkTAM = storage(writable(false), "darkTAM");
