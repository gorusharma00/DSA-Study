/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //base case
    if(list1 == null) return list2;
    if(list2 == null) return list1;

    let result;

    if(list1.val < list2.val){
        result = list1;
        result.next = mergeTwoLists(list1.next, list2);
    }else{
        result = list2;
        result.next = mergeTwoLists(list1, list2.next);
    }

    return result;
};

// time => O(n + m) This is because, in the worst-case scenario, 
// the algorithm will visit each node in both lists exactly once. 

// space => o(1) (ignoring recursive stack space)