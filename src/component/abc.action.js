//here we create an action.and we use export bcoz we want to use them in other files.
// textHandling action for dispatch from here to our first.js file.
export const TEXT = "TEXT"
export const textHandling = (text) => {
    return {
        type: TEXT,
        text: text
    }
}
// now we will dispatch textHandling action to first.js file