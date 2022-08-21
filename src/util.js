import truncate from "lodash/truncate";

export function excerpt(string, length = 200) {
  return truncate(string, {
    length, // maximum 400 characters
    separator: /,?\.* +/, // separate by spaces, including preceding commas and periods
  });
}
