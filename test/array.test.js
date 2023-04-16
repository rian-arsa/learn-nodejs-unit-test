test("array", () => {
    const names = ["Rian", "Ari", "Sasono"]
    expect(names).toContain("Rian")
    expect(names).toEqual(["Rian", "Ari", "Sasono"])
    expect(names).toEqual(expect.arrayContaining(["Rian", "Ari", "Sasono"]))
    expect(names).toHaveLength(3)

})

test("array object", ()=> {
    const users = [
        {id: 1, name: "Rian"},
        {id: 2, name: "Ari"},
        {id: 3, name: "Sasono"},
    ]
    expect(users).toContainEqual({id: 1, name: "Rian"})
    expect(users).toEqual(expect.arrayContaining([{id: 1, name: "Rian"}]))
    expect(users).toHaveLength(3)
})