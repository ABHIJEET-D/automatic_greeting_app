import React from 'react';

function Greeting() {
    let currDate = new Date();
    let C_date = currDate.getHours();
    let greeting = '';
    const greeting_css = {}
    const greeting_background = {
        height : '700px',
    }

    if (C_date >= 1 && C_date <= 12) {
        greeting = 'Good Morning';
        greeting_css.color = 'green';
        greeting_background.background = '#8BC8BD';

    } else if (C_date >= 12 && C_date <= 17) {
        greeting = 'Good Afternoon';
        greeting_css.color = 'yellow';
        greeting_background.background = '#C1C852';
    } else {
        greeting = 'Good Evening';
        greeting_css.color = 'brown';
        greeting_background.background = '#43473D';
    }
    return (
        <div style={greeting_background}>
            <h1 style={{textAlign: "center"}}>Hello, <span style={greeting_css}>{greeting}</span></h1>
        </div>
  );
}

export default Greeting;
