# Tic-Tac-Toe

Tic-Tac-Toe for students and learning purposes.

Live demo: **https://einlemming.github.io/tictactoe/**

This project is meant to be played, inspected, and discussed. Students should not only try the game in the browser, but also look at the source code to see how a small React app is structured.

Originating from "React - The Full Course" by Academind on Udemy.

## What Students Can Learn Here

This codebase shows several React fundamentals in a small and understandable example:

- Components and component composition
- Props for passing data and functions between components
- State with `useState`
- Derived state instead of storing unnecessary duplicate state
- Event handling in React
- Conditional rendering
- Rendering lists
- Updating state immutably
- Lifting state up to a parent component
- Splitting UI and game logic into separate pieces

## Project Structure

- `src/App.jsx`: main app logic, state handling, winner detection, and composition of the UI
- `src/components/Player.jsx`: player name editing and active player display
- `src/components/Log.jsx`: move history rendering
- `src/components/GameOver.jsx`: winner / restart overlay
- `src/GameBoard.jsx`: board rendering and square interactions
- `src/winning-combinations.js`: game rules for victory detection

## For Students

Suggested way to study this project:

1. Open the live app and play a few rounds.
2. Read `src/App.jsx` first to understand where the state lives.
3. Then open the smaller components and trace how props are passed down.
4. Look at how the board and move log are rendered from data.
5. Change a small detail and see what happens.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Have fun, Lemming
