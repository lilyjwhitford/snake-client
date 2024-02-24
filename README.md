# Snake Client Project

Welcome to my Snake Client Project for the [Lighthouse Labs](https://www.lighthouselabs.ca/) Web Development Bootcamp! This a replica of the classic Snake game designed to be played on the command line in Node.js.

## Description

Snake is a classic video game where the player maneuvers a dot, and grows it by 'eating' pieces of food. This version adds a multiplayer twist to the traditional gameplay.

## How to Get Started

1. Start the server side of the game. (see further instructions below.)
2. Install Snake client. (see futher instructions below.)
3. Enjoy the game and challenge your friends!

## Server Setup

Before running the client, ensure the server side is set up. You can download and install the server from [here](https://github.com/lighthouse-labs/snek-multiplayer) and follow the instructions found in the README.md.

## Client Installation

To install and run the Snake client, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Start the development Snake client using the command `node play.js`.

## Gameplay

- Use the "W", "A", "S", and "D" keys to move the snake up, left, down, and right respectively.
- Press "J" to send the message "woohoo!" to other players.
- Press "K" to send the message "womp womp" to other players.
- Avoid crashing into the walls or into yourself to survive and grow your snake!

## Final Product

![Screenshot 1](https://i.imgur.com/bP0BzDC.png)
![Screenshot 2](https://i.imgur.com/6inqKhK.png)

## Dependencies

- [Node.js](https://nodejs.org/)
- [net](https://www.npmjs.com/package/net)


## Credit

This game's server code is credited to [Tania Rascia's](https://github.com/taniarascia) single-player version of the game, [Snek](https://github.com/taniarascia/snek). This heavily modified mullti-player version was created by [lilyjwhitford] Lily Whitford. You can find the source code on [GitHub](https://github.com/lilyjwhitford/snake-client).

Have fun and Happy Snaking!