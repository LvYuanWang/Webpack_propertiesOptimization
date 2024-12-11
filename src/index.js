import $ from "jquery";

$(".btn").on("click", async () => {
  const { join } = await import("lodash-es");
  console.log(join(["Hello", "webpack"], " "));
})