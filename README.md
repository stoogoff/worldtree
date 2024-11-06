
# WorldTree

To run in a terminal cd into `./src` and rename `example.env` to `.env`, then run the following:

```
yarn install
yarn dev
```

In a browser open `http://localhost:3000`

## Things I didn't finish in the time

The components are in place to display guest user rolls but I didn't have time to implement receiving the socket.io broadcast of updates.

Datetime display of dice rolls hasn't been implemented.

## NOTE

This is built using Vue 2 and Nuxt. Vue 2 is at its end of life and shouldn't be used in production. I've used Vue 2 because I'm more familiar with it and didn't want to add the learning curve of Vue 3 to the challenge.
