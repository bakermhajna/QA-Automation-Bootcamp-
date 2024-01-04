//EX 1
function printStarSeries(rows, repeat) {
    for (let k = 0; k < repeat; k++) {
        for (let i = 1; i <= rows; i++) {
            let pattern = '';
            for (let j = 1; j <= i; j++) {
                pattern += '*';
            }
            console.log(pattern);
        }
        for (let i = rows - 1; i >= 1; i--) {
            let pattern = '';
            for (let j = 1; j <= i; j++) {
                pattern += '*';
            }
            console.log(pattern);
        }
    }
}


printStarSeries(5, 3);
//-----------------------------------------------------------------
//EX 2
const reverse = function(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  console.log(reverse("dog"));        // should return "god"
  console.log(reverse("race car")); 
//-------------------------------------------------------
//EX 3
function firstNonRepeatingCharacter(str) {
    const charCount = {};
  
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  

    return null;
  }
  
  console.log(firstNonRepeatingCharacter("aabbccdee")); // should return "d"
  console.log(firstNonRepeatingCharacter("abca"));       // should return "b"
//-------------------------------------------------------------------------------------
//EX 4
function encrypt(str) {
    let encrypted = '';
  
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
  
      if (str[i].match(/[a-z]/i)) {

        if (str[i] === str[i].toLowerCase()) {
          charCode = ((charCode - 97 + 1) % 26) + 97; // Uppercase letter
        } else {
          charCode = ((charCode - 65 + 1) % 26) + 65; // Lowercase letter
        }
      }
  
      encrypted += String.fromCharCode(charCode);
    }
  
    return encrypted;
  }
  
  console.log(encrypt("cat")); // should return "dbu"
//-----------------------------------------------------------------------------------------------  
//EX 5
const jumble = function (arr1, arr2) {
    const uniqueSet = new Set([...arr1, ...arr2]);
    const jumbledArr = Array.from(uniqueSet);
    return jumbledArr;
  };
  
  const colors = ["red", "indigo", "white", "teal", "yellow"];
  const foods = ["bread", "cheese", "cucumber"];
  
  console.log(jumble(colors, foods));
//-------------------------------------------------------------------------------------------------- 
//EX 6 
const rawDist = {
    A: 60,
    B: 10,
    C: 10,
    D: 20
  };
  
  function getLetter() {
    const totalPercentage = 100;
  
    let randomNum = Math.random() * totalPercentage;
    let cumulativePercentage = 0;
  
    for (let letter in rawDist) {
      cumulativePercentage += rawDist[letter];
  
      if (randomNum < cumulativePercentage) {
        return letter;
      }
    }
  }
  
  console.log(getLetter());
//----------------------------------------------------------------------
//EX 7

class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      const newNode = new ListNode(value);
  
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  
    display() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  
    removeDuplicates() {
      let current = this.head;
  
      while (current) {
        let runner = current;
  
        while (runner.next) {
          if (runner.next.value === current.value) {
            runner.next = runner.next.next;
          } else {
            runner = runner.next;
          }
        }
  
        current = current.next;
      }
    }
  }
  
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(2);
  linkedList.append(4);
  linkedList.append(1);
  
  console.log("Original Linked List:");
  linkedList.display();
  
  linkedList.removeDuplicates();
  
  console.log("\nLinked List after Removing Duplicates:");
  linkedList.display();
  
