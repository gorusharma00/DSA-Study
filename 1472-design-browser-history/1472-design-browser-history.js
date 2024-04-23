var Node = function(data){
    this.data = data;
    this.next = null; 
    this.prev = null;
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.head = new Node(homepage);
    this.curr = this.head;

};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    let newPage = new Node(url);
    this.curr.next = newPage;
    newPage.prev = this.curr;
    this.curr = newPage;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    let i = 0;
    let temp = this.curr;
    while(i < steps &&  temp.prev != null){
        i++;
        temp = temp.prev;
    }
    this.curr = temp;
    return temp.data;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    let i = 0;
    let temp = this.curr;
    while(i < steps && temp.next != null){
        i++;
        temp = temp.next;
    }
    this.curr = temp;
    return temp.data;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */