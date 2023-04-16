export class Exception extends Error {
  constructor(message) {
    super(message);
  }
}

export const callMe = (name) => {
    if (name === "Rian") {
        throw new Exception("Hello Rian");
    }
    return `Hello ${name}`;
}