# To-Do List: Create a Sketch Pad Webpage

## Basic Features
exemple: https://atrbyg24.github.io/etch-a-sketch/
1. **Create a Webpage**
   - [x] Build a 16x16 grid of square divs.
   - [x] Use JavaScript to dynamically create the grid divs (no manual copying/pasting in HTML).
   - [x] Place the grid squares inside a `container` div (added in the HTML file).

2. **Use Flexbox for Layout**
   - [x] Apply Flexbox to make the divs appear as a grid.
   - [x] Avoid using CSS Grid to focus on practicing Flexbox.
   - [x] Handle borders and margins carefully to ensure grid squares remain consistent in size.

3. **Debugging Tips**
   - [x] Verify the CSS stylesheet is linked correctly.
   - [x] Open the browser’s developer tools to check for errors in the JavaScript console.
   - [x] Inspect the "elements" panel to confirm the grid elements exist and aren’t hidden.
   - [x] Add `console.log` statements to debug JavaScript issues.

4. **Hover Effect**
   - [x] Set up a hover effect where grid divs change color when the mouse passes over them, creating a pixelated trail.
   - [x] Implement hover effects by listening for `mouseenter` or `mouseover` events.

## Advanced Features

1. **Change Grid Size**
   - [x] Add a button to prompt the user for a new grid size (e.g., squares per side).
   - [ ] Limit user input to a maximum of **100 squares per side** to avoid performance issues.
   - [x] Remove the existing grid and generate a new grid based on the user's input, maintaining the same total width (e.g., 960px).

2. **Research Requirements**
   - [x] Learn about HTML `<button>` tags.
   - [x] Explore using JavaScript functions to handle button clicks.
   - [x] Utilize `prompt()` to gather user input for the grid size.

3. **Responsive Grid**
   - [x] Ensure a 64x64 grid (or other user-specified size) can be generated while maintaining the total sketch pad size.

4. **Push to GitHub**
   - [ ] Commit and push the final project to a GitHub repository for version control and sharing.

## Extra Credit

1. **Dynamic Square Colors**
   - [ ] Randomize the RGB values of a square whenever it is interacted with by the mouse.

2. **Progressive Darkening Effect**
   - [ ] Gradually darken each square by **10% opacity** with each interaction.
   - [ ] Ensure the square becomes fully black (or fully colored) after 10 interactions.
   - [ ] Use the `opacity` CSS property and refer to [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) for guidance.

