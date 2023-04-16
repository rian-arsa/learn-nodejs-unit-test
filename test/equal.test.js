test("test toBe", () => {
    const name = "Rian"
    const hello = `Hello ${name}`

    expect(hello).toBe("Hello Rian") // toBe cocok untuk string, number 
})

test("test toEqual", () => {
    let person = {id: "rian"}
    Object.assign(person, {name: "Rian"})

    expect(person).toEqual({id: "rian", name: "Rian"}) // toEqual untuk array, object 
})