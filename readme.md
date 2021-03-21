# Nova Editor
A text-based editor for novices that enables the transition from block-based to text-based programming environments.

## Features
Features of a scratch-like editor and its custom Abstract Syntax Tree (AST):
1. Holes (empty values or identifiers):
   - Expression holes (that have a type: string, number, boolean, ...)
   - Name holes: function/variable 
   - Empty lines (for initializing statements that have a body: if, for, while, def, class, …)

2. Selecting tokens:
   - Keywords select the whole block:
   - `def` (the whole function)
   - `for` and `while` (the whole loop)
   - conditional statements (`if`, `elif`, `else` are selected separately):

3. Editing (modifying, deleting) types:	
   - Strings (with double quotes “sample text”)
   - Numbers
   - Booleans
   - More advanced types: `list`, `dict`, `iterable`
   - Editing a function/variable name
   - Editing an empty expression (which takes a particular data type)
   - Deleting things should convert them back to specific types of holes

4. Focusing the cursor:
   - When adding new statements, the cursor should jump to the next editable item

5. Building start (left) and end (right) cursor positions: 
   - Each statement has two editable places for adding statements before and after it: 
   - Start: for adding a new statement before the current line
   - End: for adding a statement after the current line
   - Or a plus button between statements (when its selected)

6. Locating: when moving the cursor, or clicking
   - Every token, expression, and statement should have its left and right boundaries
   - Every statement and expression should have a line number
   - Should always know where we are in the code, and where we are in the AST.

7. Scope Management: 
   - Should maintain a reference table for user defined variables and functions

8. Cursor Navigator: listening to arrow-key presses and click positions in the editor
   - Based on the “editability” of each token, expression, and statement, the cursor manager navigates the user to the next editable (or removable) item in the text (not just the next character).

9. Balanced parenthesis:
   - All binary operators should have parenthesis
