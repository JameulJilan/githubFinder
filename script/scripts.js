let searchBtn = document.querySelector('#searchButton');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();
searchBtn.addEventListener('click', eventFunction);
searchUser.addEventListener("keypress", event => {
    if (event.keyCode === 13) {
        event.preventDefault();
        eventFunction();
    }
});

function eventFunction() {
    let userText = searchUser.value;

    if (userText != '') {
        // fetch Api 
        fetch(`https://api.github.com/users/${userText}`)
            .then(result => result.json())
            .then(data => {
                if (data.message == 'Not Found') {
                    ui.clearProfile();
                    ui.removeAlert();
                    ui.showAlert('User Not Found', 'alert alert-danger mt-2 text-center');
                } else {
                    ui.removeAlert();
                    ui.showProfile(data);
                }
            })
    }
    else {
        ui.removeAlert();
        ui.clearProfile();
    }
}

