# DOM: Manipulating and Traversing

git-repo: https://github.com/thomas-hofmann-dci/d02-1-dom-manipulation-traversal.git

## Theory
- HTML as a Tree
- Selectors to address elements in that tree

## Terminology
- Tree
- Sibling
- Child
- Parent

##  Side Goals
- Reading Documentation

## Manipulating: Changing the DOM tree
- Manipulating classes: `Element.classList` methods
- Changing the text inside an element: The `HTMLElement.innerText` property
- Changing the HTML content: The `Element.innerHTML` property
- Security risks: `document.write()` and script injection
- Creating Elements: `document.createElement(<tag name>)`
- Adding elements to the page: `Element.appendChild(<Element object>)`

## Traversing: Jumping from one element to its relative
- Node vs. Element:
  Comparing `Node.previousSibling` and `Element.previousElementSibling`
- Getting an element's closest parent: `Element.closest(<selector string>)`
- Testing an element against a selector: `Element.matches(<selector string>)`
- Getting all children of an element: `ParentNode.children`
- Selecting specific children: `ParentNode.querySelector(<selector string>)`
- Finding more traversal techniques: MDN
