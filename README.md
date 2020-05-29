# memory-game
A small memory game with vanilla JS.


# How The Game Works
The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: open two hidden cards at a time to locate the ones that match!

Each turn:

The player opens one card over to reveal its underlying symbol.
The player then opens a second card, trying to find the corresponding card with the same symbol and that will be counted as one move.
If the cards match, both cards stay opened.
If the cards do not match, both cards are closed again.
The stars rating depends on the number of moves:

⭐⭐⭐ If the moves are between 8 and 11.
⭐⭐ If the moves are between 12 and 19.
⭐ If the moves are 20 or more.
The game ends once all cards have been correctly matched. The player could restart the game at any time by clicking on the restart icon.

Resources
[Shuffle function](http://stackoverflow.com/a/2450976) from stackoverflow.
Icons from Font [fontawesome](https://fontawesome.com/v4.7.0/icons/) - cdn.