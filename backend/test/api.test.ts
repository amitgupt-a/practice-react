import { expect, test } from "bun:test";

test("GET /api/time should return 200", async () => {
  const res = await fetch("http://localhost:3001/api/time");
  expect(res.status).toBe(200);
  const json = await res.json();
  expect(json).toHaveProperty("message");
});
