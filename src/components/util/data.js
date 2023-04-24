import { format } from "timeago.js";

export function formateAgo(data, lang = "en_US") {
  return format(data, lang);
}
