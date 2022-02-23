import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "this is text 1",
  },
  {
    id: 2,
    rating: 9,
    text: "this is text 2",
  },
  {
    id: 3,
    rating: 8,
    text: "this is text 3",
  },
]);
