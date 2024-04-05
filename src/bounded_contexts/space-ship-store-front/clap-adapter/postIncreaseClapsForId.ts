import { incClaps } from "../domain/incClaps";

export const postIncreaseClapsForId: incClaps = async (id) =>
  Object(
    await fetch(
      new Request("http://127.0.0.1:8080/api/incClapsForId", {
        method: "POST",
        body: JSON.stringify({ id }),
      })
    )
  ).json();
