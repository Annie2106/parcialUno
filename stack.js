class Stack{
    constructor(){
        this.stack = []
    }

    push(element) {
        this.stack.push(element)
        return this.stack
    }

    pop(){
        return this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length -1]
    }

    size(){
        return this.stack.length
    }

    print(){
        console.log(this.stack)
    }
}
const stack = new Stack()

console.log(stack.push('Vivi'))
console.log(stack.push('Ana'))
console.log(stack.push('Tut'))
console.log(stack.push('Coco'))

console.log(stack.pop())
//console.log(stack.pop())


console.log(stack.print())
