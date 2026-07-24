class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let min = val;
        if (this.stack.length > 0) {
            let top = this.stack[this.stack.length - 1];
            min = Math.min(min, top[1]);
        }

        this.stack.push([val, min]);
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length === 0) return null;

        let top = this.stack.pop();

        return top[0];
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length === 0) return null;

        let top = this.stack[this.stack.length - 1];

        return top[0];
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.stack.length == 0) return null;

        let top = this.stack[this.stack.length - 1];
        
        return top[1];
    }
}
