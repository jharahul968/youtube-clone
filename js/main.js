var create_modal = document.getElementById("create_modal");
var create_btn = document.getElementById("youtube_create_btn");

var notif_modal = document.getElementById("notifications_modal");
var notif_btn = document.getElementById("youtube_notifications_btn");

create_btn.onclick = function () {

    notif_modal.style.display='';

    if (create_modal.style.display == "block") {
        create_modal.style.display = '';
    }
    else if (create_modal.style.display == '') {
        create_modal.style.display = "block";
    }

}

notif_btn.onclick = function () {

    create_modal.style.display='';

    if (notif_modal.style.display == "block") {
        notif_modal.style.display = '';
    }
    else if (notif_modal.style.display == '') {
        notif_modal.style.display = "block";
    }
    
}

// window.onclick = function (event) {

//     if (event.target == modal) {
//         modal.style.display = '';
//     }
// }