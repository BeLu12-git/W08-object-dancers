# AI Agent Instructions for Object Dancers Project

## Project Overview
This is a p5.js-based creative coding project focused on creating animated dancers using object-oriented programming. Each dancer is implemented as a class and will be part of a larger collective animation.

## Core Architecture
- Main entry points: `sketch.js` contains the p5.js setup and draw loop
- Dancer implementation: Each dancer class encapsulated in `sketch.js`
- Dependencies: p5.js library (`lib/p5.js`, `lib/p5.sound.js`)

## Key Conventions & Patterns

### Dancer Class Structure
```javascript
class DancerName {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // Add dancer-specific properties here
  }
  
  update() {
    // Update animation state
  }
  
  display() {
    // Render the dancer using p5.js drawing functions
  }
}
```

### Critical Rules
1. Size constraint: Dancers must fit within 200x200 pixel bounding box
2. Constructor parameters: Only `startX` and `startY` allowed
3. Required methods: Must implement `update()` and `display()`
4. Encapsulation: No dependencies on global state or external functions
5. Animation: Use internal properties and p5.js transformations for movement

### Drawing Guidelines
- Use `push()` and `pop()` for transformation isolation 
- Use `translate(this.x, this.y)` to position the dancer
- Coordinates (0,0) represent dancer's center point
- Use instance properties (e.g., `this.t`) for animation values

## Integration Points
- p5.js canvas creation: `createCanvas()` in setup
- Parent container: Canvas appends to "p5-canvas-container"
- Draw loop: Calls `update()` and `display()` on dancer instance

## Example Implementation Pattern
```javascript
class ExampleDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.t = 0; // Animation timer
  }
  
  update() {
    this.t += 0.05; // Update animation state
  }
  
  display() {
    push();
    translate(this.x, this.y);
    // Drawing code here
    pop();
  }
}
```

## Common Workflows
1. Create new dancer class
2. Initialize properties in constructor
3. Implement animation logic in update()
4. Add drawing code in display()
5. Test with reference shapes enabled
6. Remove reference shapes when complete

## Debugging
- Red cross indicates dancer center point
- Gray rectangle shows 200x200 bounding box
- Use `this.drawReferenceShapes()` during development