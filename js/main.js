var create_modal = document.getElementById("create_modal");
var create_btn = document.getElementById("youtube_create_btn");

var notif_modal = document.getElementById("notifications_modal");
var notif_btn = document.getElementById("youtube_notifications_btn");

create_btn.onclick = function () {

    notif_modal.style.display = '';

    if (create_modal.style.display == "block") {
        create_modal.style.display = '';
    }
    else if (create_modal.style.display == '') {
        create_modal.style.display = "block";
    }

}

notif_btn.onclick = function () {

    create_modal.style.display = '';

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

if (!localStorage.likes_count) {
    localStorage.setItem('likes_count', '0');
}
likes_count=Number(localStorage.getItem('likes_count'));
like_btn = document.getElementById('like_btn')
like_btn.onclick = function () {
    likes_count += 1;
    localStorage.setItem('likes_count', likes_count);
    location.reload(true);
}

function putTexts() {
    document.getElementById('likes_count').innerHTML = likes_count;
}

