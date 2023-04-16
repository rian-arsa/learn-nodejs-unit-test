import {sayHelloAsync} from "../src/async.js";

test.concurrent("concurrent 1", async () => {
    await expect(sayHelloAsync("Rian")).resolves.toBe("Hello Rian");
});

test.concurrent("concurrent 2", async () => {
    await expect(sayHelloAsync("Rian")).resolves.toBe("Hello Rian");
});

test.concurrent("concurrent 3", async () => {
    await expect(sayHelloAsync("Rian")).resolves.toBe("Hello Rian");
});