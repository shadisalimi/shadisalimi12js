//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:
function actionFunction(){
    const action="action"
    function potentialFunction(){
        const potential="potential"
        console.log(action);
        function signalsfunction(){
            const signals="signals"
            console.log(potential);
            console.log(signals);
        }
      signalsfunction()  
    }
  potentialFunction()  
}
actionFunction()
