import { longestCommonSubstring } from "./utils";

it("test longestCommonSubstring", () => {
  expect(longestCommonSubstring("xyabcy", "xyzlabc")).toEqual("abc");
  expect(longestCommonSubstring("ABCDGH", "ACDGHR")).toEqual("CDGH");
  expect(longestCommonSubstring("ABC", "AC")).toEqual("A");
  expect(longestCommonSubstring("ABC", "qwe")).toEqual("");
  expect(longestCommonSubstring("", "qwe")).toEqual("");
  expect(longestCommonSubstring("qwe", "")).toEqual("");
  expect(longestCommonSubstring("", "")).toEqual("");
});
