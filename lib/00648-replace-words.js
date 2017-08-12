// https://leetcode.com/problems/replace-words

class SpecialTrie {
    constructor() {
        this.root = {}
    }
    
    insert(word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            node = node[word[i]] = node[word[i]] || {}
            if (i === word.length - 1) node.isTerminal = true
        }
    }
    
    getShortestPrefix(word) {
        let prefix = ''
        let node = this.root
        for (const c of word) {
            if (!node[c]) return ''
            prefix += c
            node = node[c]
            if (node.isTerminal) return prefix
        }
    }
}

const replaceWords = (dict, sentence) => {
    const trie = new SpecialTrie()
    for (const word of dict) {
        trie.insert(word)
    }
    return sentence.split(' ').map(word => trie.getShortestPrefix(word) || word).join(' ')
};