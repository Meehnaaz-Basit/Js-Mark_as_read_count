let clickCount = 0;
// fetch all post

const allPost = async () => {
  const request = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await request.json();
  const posts = data.posts;
  //   console.log(post);
  const postContainer = document.getElementById("post-container");
  posts.forEach((post) => {
    // console.log(post);
    const postDiv = document.createElement("div");
    postDiv.classList = "bg-[#F3F3F5] p-12 rounded-3xl my-4";
    postDiv.innerHTML = `
     <div class="flex gap-5">
                  <!-- left  -->
                  <div class="w-24 h-20 rounded-lg relative">
                  <img class="rounded-lg" src="${post.image}" alt="" />
                    <div
                      class="w-4 h-4 rounded-full border-white border-2 absolute -top-1 -right-1 ${
                        post.isActive ? "bg-green-600" : "bg-red-600"
                      }"
                    ></div>
                  </div>
                  <!-- right  -->
                  <div class="w-[100%]">
                    <!-- author -->
                    <div
                      class="space-x-6 font-inter text-[#12132DCC] font-semibold"
                    >
                      <span># ${post.category}</span>
                      <span>Author: ${post.author.name}</span>
                    </div>
                    <!-- title -->
                    <div class="space-y-5 mt-3">
                      <h3
                        class="font-mulish font-extrabold text-our-primary text-xl"
                      >
                        ${post.title}
                      </h3>
                      <p class="font-inter text-[#12132D99]">
                        ${post.description}
                      </p>
                    </div>
                    <!-- border -->
                    <div class="border-2 border-dashed my-4"></div>
                    <!-- view -->
                    <div
                      class="flex justify-between font-inter text-[#12132D99]"
                    >
                      <div class="flex gap-12">
                        <div class="flex items-center gap-4">
                          <div><img src="images/read.png" alt="" /></div>
                          <span>${post.comment_count}</span>
                        </div>
                        <div class="flex items-center gap-4">
                          <div><img src="images/view.png" alt="" /></div>
                          <span>${post.view_count}</span>
                        </div>
                        <div class="flex items-center gap-4">
                          <div><img src="images/time.png" alt="" /></div>
                          <span>${post.posted_time} min</span>
                        </div>
                      </div>
                      <div>
                        <button id="markReadBtn">
                          <img src="images/message-btn.png" alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
    `;
    postContainer.appendChild(postDiv);

    const markReadBtn = postDiv.querySelector("#markReadBtn");
    const postClickedList = document.getElementById("clicked-posts-list");
    const count = document.getElementById("count");
    markReadBtn.addEventListener("click", () => {
      //   console.log("clicked");
      const listPost = document.createElement("div");
      listPost.classList =
        "bg-white p-4 rounded-xl flex justify-between gap-5 mt-3";
      listPost.innerHTML = `
                    <p class="w-[85%] font-mulish font-bold text-our-primary">
                      ${post.title}
                    </p>
                    <div class="flex items-center gap-2">
                      <img src="images/view.png" alt="" />
                      <span>${post.view_count}</span>
                    </div>
      `;
      postClickedList.appendChild(listPost);
      clickCount = clickCount + 1;
      count.innerText = clickCount;
    });
  });
};

// Add event listener to the button

allPost();
