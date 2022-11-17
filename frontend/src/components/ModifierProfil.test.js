import {checkEmail, checkVoid} from "./ModifierProfil"

test("Vérifie qu'un string est un email", ()=>{
    let test1 = checkEmail("a")
    expect(test1).toBe(false)
    let test2 = checkEmail(1) 
    expect(test2).toBe(false)
    let test3 = checkEmail("a@a")
    expect(test3).toBe(false)
    let test4 = checkEmail("a.com")
    expect(test4).toBe(false)
    let test5 = checkEmail("a.com@")
    expect(test5).toBe(false)
    let test6 = checkEmail("a@a.com")
    expect(test6).toBe(true)
})

test("Vérifie si un string est vide", ()=>{
    let test1 = checkVoid("")
    expect(test1).toBe(true)
    let test2 = checkVoid("a")
    expect(test2).toBe(false)
    let test3 = checkVoid(1)
    expect(test3).toBe("Ce n'est pas un string")
    let test4 = checkVoid("2")
    expect(test4).toBe(false)
})