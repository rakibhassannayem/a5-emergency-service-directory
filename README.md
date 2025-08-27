1. getElementById: it is used to get a single element with their id.
getElementByClassName: it is used to get all the elements with a same class.

querySelector: it is used to get the first element with a id or class.
querySelectorAll: it is used get all the elements with a same id or class.


2. To create a new element i use document.createElement("tagName")

To insert a new element i use append()


3. Event bubbling is a process of going to the root from the last child of the dom tree.

It works branch by branch. for example if i want to get a particular parent element then i have go though its all the correnspondig children. i have to trigger one children to get its parent then another one to get its parent's parent and so on.


4. Event Delegation in JavaScript is a process of getting all the children elements by adding one single event listener to its parent element. It works by event bubbling process.

It is useful because it let us write less code by decreasing the event listner. So it improves the performance as it has less code.


5. preventDefault(): It stops the default behaviour of an event for example form submit button.

stopPropagation():  It stops the event bubbling.