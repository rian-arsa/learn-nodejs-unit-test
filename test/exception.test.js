import { callMe, myException } from "../src/exception.js";

 test("echo", () => {
    expect(() => callMe("Rian")).toThrow()
    expect(() => callMe("Rian")).toThrow(Error)
    expect(() => callMe("Rian")).toThrow(myException)
    expect(() => callMe("Rian")).toThrow("Hello Rian")

 })