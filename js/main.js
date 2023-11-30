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

function likeVideo() {
    if (!localStorage.likes_count) {
        localStorage.setItem('likes_count', '0');
    }

    likes_count = Number(localStorage.getItem('likes_count'));
    likes_count += 1;
    localStorage.setItem('likes_count', likes_count);
    document.getElementById('likes_count').innerHTML = likes_count;
}

function putTexts(){
    if (!localStorage.likes_count) {
        localStorage.setItem('likes_count', '0');
    }
    likes_count = Number(localStorage.getItem('likes_count'));
    document.getElementById('likes_count').innerHTML = likes_count;
}




function postComment() {
    input = document.getElementById("comment_input");
    comment = input.value;
    if (comment.trim() !== '') {
        document.getElementById("comment_input").value = '';
        comments_body = document.getElementById("comments_body");
        new_comment = document.createElement("div");
        new_comment.innerHTML = `
<div class="comments_body--comment">
<img src="assets/images/profile-icon.png" alt="commenter" />
<p class="comments_body--commenter"><b>@commenter</b></p>
<p>time of comment</p>
</div>
<div class="comment">
<p>${comment}</p>
</div>

<div class="comment_actions_wrapper">
<div class="comment_actions">
  <button class="comment_button like_comment">
    <img src="assets/images/video-buttons/like.svg" />
  </button>
  <p>Likes count</p>
  <button class="comment_button dislike_comment">
    <img src="assets/images/video-buttons/dislike.svg" />
  </button>
  <button class="comment_button reply_comment">
    <b>Reply</b>
  </button>
</div>
<div>
  <button class="see_reply_button">
    <img
      src="assets/images/video-buttons/down.svg"
      alt="down"
    />
    15 replies
  </button>
</div>
</div>
`

        comments_body.prepend(new_comment);
    }
}