export default class Entity {
    static id = 0;
    #components = Object;
    constructor(){
        this.id = Entity.id++
        this.components = this.#components
    }
    addComponent(title,component){
        this.components[title] = component;
        return this;
    }
    listComponents(){
        return Object.keys(this.components);
    }
    removeComponent(title){
        delete this.components[title];
        return this;
    }
    getId(){
        return this.id;
    }
}