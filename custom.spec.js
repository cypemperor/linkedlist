import { List, Element } from './simple-linked-list';

describe('Additional Tests', () => {
    let list;
    beforeEach(() => {
        list = new List(["A", "B", "C", "D", "E", "F", "G", "H"]);
    });
    test('can find by index', () => {
        expect(list.find(2)).toEqual("F");
    });
    test('removing an element by value decrements size', () => {
        expect(list.removeByValue("D").length).toEqual(7);
    });
    test('can remove element by value', () => {
        expect(list.removeByValue("D").toArray()).toEqual(["H","G","F","E","C","B","A"]);
    });
    test('can remove first element by value', () => {
        expect(list.removeByValue("H").toArray()).toEqual(["G","F","E","D","C","B","A"]);
    });
    test('can remove last element by value', () => {
        expect(list.removeByValue("A").toArray()).toEqual(["H","G","F","E","D","C","B"]);
    });
});