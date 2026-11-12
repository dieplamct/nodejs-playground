// Example 1:
// Input: head = [1,3,4,7,1,2,6]
// Output: [1,3,4,1,2,6]
// Explanation:
// The above figure represents the given linked list. The indices of the nodes are written below.
// Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
// We return the new list after removing this node. 

// Example 2:
// Input: head = [1,2,3,4]
// Output: [1,2,4]
// Explanation:
// The above figure represents the given linked list.
// For n = 4, node 2 with value 3 is the middle node, which is marked in red.

// Example 3:
// Input: head = [2,1]
// Output: [2]
// Explanation:
// The above figure represents the given linked list.
// For n = 2, node 1 with value 1 is the middle node, which is marked in red.
// Node 0 with value 2 is the only node remaining after removing node 1.


// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 1 <= Node.val <= 105

type ListNode = {
    val: number;
    next: ListNode | null;
}

const listNodeDeleted = function deleteMiddle(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null
    }

    if (head.next === null) {
        return null
    }

    // 2 pointer technique
    let slow: ListNode | null = head
    let fast: ListNode | null = head
    let prev: ListNode | null = null

    while (fast !== null && fast.next !== null) {
        prev = slow
        slow = slow!.next
        console.log(fast)
        fast = fast!.next!.next
    }

    if (prev !== null) {
        prev.next = slow!.next
    }

    return head
}

// const listNode: ListNode[];

console.log(listNodeDeleted([1, 3, 4, 7, 1, 2, 6]))
console.log([1])