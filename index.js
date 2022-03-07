// sets the output of the display class from index.html to the display variable in index.jss
let display = document.getElementById('display');

// does the same for all the buttons and then convs it to an arr
let buttons = Array.from(document.getElementsByClassName('button'));

// iterates through that arr and adds an event listener to every button
buttons.map ( button => {
    button.addEventListener('click', (e) => {
        // a switch statement finds the first case that matches the case parameters and then executes its code
        switch(e.target.innerText){
            case 'Clear All':
                // when 'clear all button' is pushed, an empty str is pushed to display
                display.innerText = '';
                // the break statements stops the operation, ensuring the default case is not executed
                break;
            case 'Delete':
                // uses the slice method to remove the last clicked button only if display is populated
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                // tries to evaluate the input equation and displays error upon failure
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
                break;
            default:
                // creates a default of pushing the value of the clicked button to the display
                display.innerText += e.target.innerText;
        }
    });
});