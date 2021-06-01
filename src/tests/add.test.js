const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${ name }!`

test("should add 2 numbers", () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test("should display greetings for name", () => {
    const greetings = generateGreeting("Wise");
    expect(greetings).toBe("Hello Wise!");
});

test("should display greeting for no name", () => {
   expect(generateGreeting()).toBe("Hello Anonymous!");
});

