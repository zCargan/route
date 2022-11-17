import { checkIfHigherThan0 } from "./Profil";

test("Vérifie si un nombre est un plus grand ou égal à 0", ()=>{
    let test1 = checkIfHigherThan0(0)
    expect(test1).toBe(true)
    let test2 = checkIfHigherThan0(1)
    expect(test2).toBe(true)
    let test3 = checkIfHigherThan0(-1)
    expect(test3).toBe(false)
    let test4 = checkIfHigherThan0("0")
    expect(test4).toBe("Ce n'est pas un nombre")
    let test5 = checkIfHigherThan0("a")
    expect(test5).toBe("Ce n'est pas un nombre")
})