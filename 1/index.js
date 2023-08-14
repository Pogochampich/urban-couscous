/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function linkedListToArray(head) {
  let arr = [];
  let current = head;

  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
}

function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

function addArraysRightToLeft(arr1, arr2) {
  const result = [];
  let carry = 0;

  let i = arr1.length - 1;
  let j = arr2.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const num1 = i >= 0 ? arr1[i] : 0;
    const num2 = j >= 0 ? arr2[j] : 0;

    const sum = num1 + num2 + carry;
    result.unshift(sum % 10);
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return result;
}

var addTwoNumbers = function (l1, l2) {
  let l1Array = linkedListToArray(l1).reverse();
  let l2Array = linkedListToArray(l2).reverse();

  let resultArray = addArraysRightToLeft(l1Array, l2Array).reverse();

  let result = arrayToLinkedList(resultArray);

  return result;
};
