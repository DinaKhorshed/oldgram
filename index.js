const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const oldgramPosts = document.getElementsByClassName("posts")[0];

posts.forEach((oldgramPost, id) => {
    const {name, avatar, comment,likes, location, post, username } = oldgramPost;
    const postMarkup = `
            <div class="post" ondblclick="likePost(event)">
                <div class="user-details">
                    <img src="${avatar}"/>
                    <div>
                        <div class="name">${name}</div>
                        <div class="location">${location}</div>
                    </div>
                </div>  
                <img class="post-image" src="${post}" />
                <div class="actions">
                    <button class="like" onclick="likePost(event)">
                        <img alt="like post" src="images/icon-heart.png"/>
                    </button>
                    <button class="comment">
                        <img alt="comment on post" src="images/icon-comment.png"/>
                    </button>
                    <button class="share">
                        <img alt="share post" src="images/icon-dm.png"/>
                    </button>
                </div> 
                <div class="likes-counter">
                    <span class="likes-counts">${likes}</span>
                    <span>Likes</span>
                </div>  
                <div class="user-caption">
                    <strong class="username">${username}</strong>
                    <span class="user-comment">${comment}</span>
                </div>   
            </div>
    `;
    oldgramPosts.insertAdjacentHTML("beforeend",postMarkup)
});

function likePost(event) {
  const postElement = event.target.closest(".post");
  const likesCounter = postElement.querySelector(".likes-counts");

  const index = Array.from(document.querySelectorAll(".post")).indexOf(postElement);

  posts[index].likes++;
  likesCounter.textContent = posts[index].likes;
}
