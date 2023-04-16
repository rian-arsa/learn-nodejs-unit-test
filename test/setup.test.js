
beforeAll(()=> { // dipanggil sekali sebelum semua test dijalankan
    console.log('Before all tests')
})

afterAll(()=> { // dipanggil sekali setelah semua test dijalankan
    console.log('After all tests')
})

beforeEach(()=> { // dipanggil sebelum setiap test dijalankan
    console.log('Before each test')
})

afterEach(()=> { // dipanggil setelah setiap test dijalankan
    console.log('After each test')
})

test("test 1", ()=> {
    const name = "Rian"
    expect(name).toBe("Rian")
})

test("test 2", ()=> {
    const name = "Rian"
    expect(name).toBe("Rian")
})