# Lab: Arbiter- State in Real-Time!

### Deliverables

1. Clone down this repo
2. cd into the repository, then install dependencies using `npm install`
3. Open the repository in your code editor
4. Start the project by running `npm start`
5. Open `src/App.js` and `src/models/Pet.js` in your code editor
	* Notice that these files contain the same code we've been writing in FormativeEducation
6. Open the developer console in your browser
7. All models are made globally available in the developer console. Retrieve Tess from your Api by running `let pet = await Pet.getPet()`
	* We're using `await` in place of `yield`. The console doesn't support using `yield`, and for the sake of this exercise, we don't care about updates to the resource.
8. Run `pet.name = 'Tess!!!' in the developer console. 
	* Notice that the page updated- that's because we're `yield`ing within the `PetDetails` component, so it automatically re-renders when pet object changes!
9. Duplicate your browser tab and split your screen, so that you're seeing the same page side by side, with the developer console still open in one
10. Run `pet.name = 'Annie' in the developer console.
	* Notice that the page updated in **both** browser tabs. That's because, in the background, TriFrame is using websocket connections to keep state synchronized between all browsers connected!

### Bonus
`@triframe/designer` exports a `TextInput` component that can be used to get input from the user.
1. Import `TextInput` from `@triframe/designer`
2. Render `TextInput` below your `h1` tag (remember to wrap both in a contianing element, a fragment (<></>) or div)
3. Pass `TextInput` a `value` prop of `pet.name`. 
	* At this point, you should see the pet's name inside of a `TextInput`
4. Pass `TextInput` an `onChange` prop. The prop should be a callback function, which will be called with the updated user input. Use this variable to update the pet's name, like so:
```js
	<TextInput value={pet.name} onChange={newName => pet.name = newName}>
```
5. Now you should be able to change the pet's name, and watch it update in `h1` tag, and even other browsers, in real-time!