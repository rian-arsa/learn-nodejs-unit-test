test("string", () => {
    let name = "Rian Ari Sasono"

    expect(name).toBe("Rian Ari Sasono")
    expect(name).toMatch(/Rian/)

})