import { sayHelloAsync } from "../src/async.js";

test("test async function", async () => {
    const result = await sayHelloAsync("Rian");
    expect(result).toBe("Hello Rian");
})

test("test async matcher", async () => {
    await expect(sayHelloAsync("Rian")).resolves.toBe("Hello Rian")
    await expect(sayHelloAsync()).rejects.toBe("Name is required")
})