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
                display.innerText = '';
                break;
            case 'Delete':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
                break;
            case '√':
                try {
                    display.innerText = Math.sqrt(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
                break;
            case '²':
                try {
                    display.innerText = Math.pow(display.innerText, 2);
                } catch {
                    display.innerText = 'Error';
                }
                break;
            case '³':
            try {
                display.innerText = Math.pow(display.innerText, 3);
            } catch {
                display.innerText = 'Error';
            }
            break;
            case 'x^y':
            try {
                display.innerText = display.innerText.concat('**');
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