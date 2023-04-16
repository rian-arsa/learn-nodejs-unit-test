test("truthiness", ()=> {
    let value = null
    expect(value).toBeNull()
    expect(value).toBeFalsy()
    expect(value).toBeDefined()
    expect(value).not.toBeUndefined()

    value = undefined
    expect(value).toBeUndefined()
    expect(value).toBeFalsy()

    value = "Rian"
    expect(value).toBeTruthy()
    expect(value).toBe("Rian")
})