    1. getElementById finds one element by ID, getElementsByClassName finds a list of elements by class, and querySelector finds the first element matching any CSS selector while querySelectorAll finds all of them.

    2. You create an element with document.createElement() and insert it using methods like appendChild() or append().

    3. Event bubbling is when an event on an element triggers the same event on its parent elements all the way up the DOM tree.

    4. Event delegation is putting one event listener on a parent to handle events for all its children, which is useful because it works for future elements and uses less memory.

    5. preventDefault() stops the browser's default action for an element, while stopPropagation() stops the event from bubbling up to parent elements.
