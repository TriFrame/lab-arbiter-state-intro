# Modifying TriFrame Resources

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