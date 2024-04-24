var Node = function(data){
    this.data = data;
    this.next = null; 
    this.prev = null;
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.currPage = new Node(homepage);

};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    let newPage = new Node(url);
    this.currPage.next = newPage;
    newPage.prev = this.currPage;
    this.currPage = newPage;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(steps){
        if(this.currPage.prev != null){
            this.currPage = this.currPage.prev;
        }else{
            break;
        }
        steps--;
    }
    return this.currPage.data;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(steps){
        if(this.currPage.next != null){
            this.currPage = this.currPage.next;
        }else{
            break;
        }
        steps--;
    }
    return this.currPage.data;
};

/*
Time Complexity:  The overall time complexity of the BrowserHistory implementation cannot be summarized by a single measure 
                  across all operations because it varies significantly depending 
                  on the specific method being called and the context in which it's used.
                  
        Constructor: O(1)

        visit(url): O(1)

        back(steps): O(steps)

        forward(steps): O(steps)

Space Complexity: O(n), where n is the number of pages visited.
*/

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

