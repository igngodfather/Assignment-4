1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:  getElementId use for to get unique or specific element from HTML, getElementByClassName use for to get HTML Collection,
       querySelector use for to Returns only the first element that matches the criteria and querySelectorAll Returns a NodeList of all matching elements.
   
2. How do you create and insert a new element into the DOM?
Ans:  const newDiv = document.createElement('div');
      parent.appendChild(newDiv);
   
3. What is Event Bubbling? And how does it work?
Ans:  Event Bubbling is a concept in web development where an event triggered on a child element
      automatically propagates or bubbles up to its parent elements in the DOM tree.
   
4. What is Event Delegation in JavaScript? Why is it useful?
Ans:  Event Delegation is a technique where we do not add event listeners to every child elements,
    instead of that we add one event listener to their parent.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() stops the browsers default action like opening a link or submitting a form.
    stopPropagation() stops the event from bubbling up to parent elements.
