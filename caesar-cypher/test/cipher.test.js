import cipher from "../js/cipher";

// write your unit tests here
describe('encode', ()=> {
    it('returns an encoded message using the caesar-cypher for my custom mapping of characters', ()=>{
        expect(cipher.encode('FEMISIRE',10)).toBe("POWScSbO")
    })

    it('returns an an error message when it encounters a character out of bounds of the specified mapping boundary range', ()=>{
        expect(cipher.encode('This* is me',1)).toBe('The character * is not supported')
    })

    it('returns an encoded message with camelCase words', ()=>{
        expect(cipher.encode('camelCase',5)).toBe("hfrjqHfxj")
    })

    it('returns an errorMessage when you include a negative offset', ()=>{
        expect(cipher.encode('camelCase',-1)).toBe('Please select a positive offset number')
    })
})

describe('decode',()=>{
    it('returns a decoded message using the caesar-cypher for my custom mapping of characters', ()=>{
        expect(cipher.decode('POWScSbO',10)).toBe("FEMISIRE")
    })

    it('returns an an error message when it encounters a character out of bounds of the specified mapping boundary range', ()=>{
        expect(cipher.decode('This* is me',1)).toBe('The character * is not supported')
    })

    it('returns a decoded message lowercase and uppercase encoded text', ()=>{
        expect(cipher.decode('hfrjqHfxj',5)).toBe("camelCase")
    })

    it('returns an errorMessage when you include a negative offset', ()=>{
        expect(cipher.decode('hfrjqHfxj',-1)).toBe('Please select a positive offset number')
    })
    
})