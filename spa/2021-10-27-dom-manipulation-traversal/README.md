# DOM: Manipulating and Traversing

git-repo: https://github.com/thomas-hofmann-dci/wd21-d02-1.git

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

## Gegebenenfalls Wiederholung
### Traversing: Jumping from one element to its relative
- Node vs. Element:
  Comparing `Node.previousSibling` and `Element.previousElementSibling`
- Getting an element's closest parent: `Element.closest(<selector string>)`
- Testing an element against a selector: `Element.matches(<selector string>)`
- Getting all children of an element: `ParentNode.children`
- Selecting specific children: `ParentNode.querySelector(<selector string>)`
- Finding more traversal techniques: MDN

## Fragen
- Wie erkennt man welche Funktion am geeignetsten ist ein Element auszuwählen?

## Lesestoff
Robert Martin: "Clean Code" 
https://www.amazon.de/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=[%E2%80%A6]hvdvcmdl=&hvlocint=&hvlocphy=9043004&hvtargid=pla-435472505264

## Links
[Baum](https://de.wikipedia.org/wiki/Baum_(Graphentheorie))
[Mengenlehre](https://de.wikipedia.org/wiki/Menge_(Mathematik))
