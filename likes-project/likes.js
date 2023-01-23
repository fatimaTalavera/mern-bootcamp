function likePost(button){
    let postId = button.getAttribute('post-id');
    let likeCoutnElement = document.querySelector(`#${postId} .likes-count`);
    let count = parseInt(likeCoutnElement.textContent)
    likeCoutnElement.textContent = count + 1;
}