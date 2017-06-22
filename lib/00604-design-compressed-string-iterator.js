// https://leetcode.com/problems/design-compressed-string-iterator

class StringIterator {
    constructor(compressedString) {
        this.str = compressedString;
        this.re = /(\D)(\d*)/g;
        this.find();
    }
    
    find() {
        const match = this.re.exec(this.str);
        this.curr = (match || [])[1];
        this.i = 0;
        this.len = parseInt((match || [])[2] || 1);
    }

    next() {
        if (!this.hasNext()) return ' ';
        const res = this.curr;
        if (++this.i === this.len) this.find();
        return res;
    }

    hasNext() {
        return !!this.curr && this.i < this.len;
    }
}