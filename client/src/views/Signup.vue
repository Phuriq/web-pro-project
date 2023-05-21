<template>
  <Layout>
    <Nav />
    <div class="container mx-auto px-4 flex flex-col items-center">
      <h1 class="text-3xl font-bold mb-5 mt-16">Welcome to Admin Page</h1>
      <div class="flex mb-4">
        <input
          type="text"
          v-model="tagName"
          placeholder="Enter tag name"
          class="mr-2 px-4 py-2 border border-gray-300 rounded-md"
        />
        <button @click="addTag" class="px-4 py-2 bg-blue-500 text-white rounded-md">Add Tag</button>
      </div>
      <div>
        <h2 class="text-2xl font-bold mb-2">Tags:</h2>
        <ul class="tag-list">
          <li v-for="tag in tags" :key="tag.id" class="flex items-center mb-2">
            <span class="mr-2">{{ tag.name }}</span>
            <button @click="deleteTag(tag.id)" class="px-2 py-1 bg-red-500 text-white rounded-md">Delete</button>
          </li>
        </ul>
      </div>


      <div v-if="selectedPost">
        <h2 class="text-2xl font-bold mt-4">Post Details:</h2>
        <p><strong>Title:</strong> {{ selectedPost.title }}</p>
        <p><strong>Status:</strong> {{ selectedPost.status }}</p>
        <p><strong>Detail:</strong> {{ selectedPost.detail }}</p>
      </div>


      <div>
<h2 class="text-2xl font-bold mb-2">Posts:</h2>
<ul class="post-list">
  <li v-for="post in posts" :key="post.id" class="flex items-center mb-2">
    <span class="mr-2">{{ post.title }} - <span :class="getStatusClass(post.status)">{{ post.status }}</span></span>
    <template v-if="post.status === 'pending'">
      <button @click="approvePost(post.id)" class="px-2 py-1 bg-green-500 text-white rounded-md">Approve</button>
      <button @click="noneApprovePost(post.id)" class="px-2 py-1 bg-red-500 text-white rounded-md">None Approve</button>
    </template>
    <template v-else-if="post.status === 'approve'">
      <button @click="noneApprovePost(post.id)" class="px-2 py-1 bg-red-500 text-white rounded-md">None Approve</button>
    </template>
    <template v-else>
      <button @click="approvePost(post.id)" class="px-2 py-1 bg-green-500 text-white rounded-md">Approve</button>
    </template>
    <button @click="showPostDetails(post.id)" class="px-2 py-1 bg-blue-500 text-white rounded-md ml-2">Details</button>
  </li>
</ul>
</div>




    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import axios from "axios";
import Swal from "sweetalert2";
import Nav from "../components/Nav.vue";

export default {
  components: {
    Layout,
    Nav,
  },
  data() {
    return {
      tagName: "",
      tags: [],
      posts: [],
      selectedPost: null, // Track the selected post
    };
  },
  mounted() {
    this.checkAdmin();
    this.getTags();
    this.getPosts();
  },
  methods: {
    async addTag() {
      try {
        const response = await axios.post("http://localhost:8080/api/tags/", {
          name: this.tagName,
        });

        const newTag = response.data;
        console.log("New tag created:", newTag);

        this.tagName = ""; // Reset the input field

        this.showAlertWithSwal("success", "Tag added successfully");
        this.getTags(); // Refresh the tag list
      } catch (error) {
        console.error("Error adding tag:", error);

        this.showAlertWithSwal("error", "Failed to add tag");
      }
    },
    async deleteTag(tagId) {
      try {
        await axios.delete(`http://localhost:8080/api/tags/${tagId}`);
        this.tags = this.tags.filter((tag) => tag.id !== tagId);

        this.showAlertWithSwal("success", "Tag deleted successfully");
      } catch (error) {
        console.error("Error deleting tag:", error);

        this.showAlertWithSwal("error", "Failed to delete tag");
      }
    },
    showAlertWithSwal(type, text) {
      Swal.fire({
        icon: type,
        text: text,
        timer: 3000,
        showConfirmButton: false,
      });
    },
    checkAdmin() {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user || user.role !== "admin") {
        // Redirect to home page if user is not an admin
        this.$router.push("/");
      }
    },
    async getTags() {
      try {
        const response = await axios.get("http://localhost:8080/api/tags");
        this.tags = response.data;
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    },
    async getPosts() {
      try {
        const response = await axios.get("http://localhost:8080/api/posts");
        this.posts = response.data;
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    async approvePost(postId) {
      try {
        await axios.put(`http://localhost:8080/api/posts/${postId}`, { status: "approve" });
        const index = this.posts.findIndex((post) => post.id === postId);
        if (index !== -1) {
          this.posts[index].status = "approve";
        }
        this.showAlertWithSwal("success", "Post approved successfully");
      } catch (error) {
        console.error("Error approving post:", error);
        this.showAlertWithSwal("error", "Failed to approve post");
      }
    },
    async noneApprovePost(postId) {
      try {
        await axios.put(`http://localhost:8080/api/posts/${postId}`, { status: "noneApprove" });
        const index = this.posts.findIndex((post) => post.id === postId);
        if (index !== -1) {
          this.posts[index].status = "noneApprove";
        }
        this.showAlertWithSwal("success", "Post none approved successfully");
      } catch (error) {
        console.error("Error none approving post:", error);
        this.showAlertWithSwal("error", "Failed to none approve post");
      }
    },
    showPostDetails(postId) {
      // Find the selected post by ID
      this.selectedPost = this.posts.find((post) => post.id === postId);
    },


    getStatusClass(status) {
  if (status === 'approve') {
    return 'text-green-500';
  } else if (status === 'noneApprove') {
    return 'text-red-500';
  } else {
    return '';
  }
},



  },
};
</script>

<style scoped>
/* General */
.container {
  font-family: Arial, sans-serif;
  max-width: 800px;
}

h1,
h2 {
  color: #1E4F79; /* Change to your desired color */
}

button {
  transition: background 0.3s ease-in-out;
}

button:hover {
  cursor: pointer;
}

input {
  transition: border 0.3s ease-in-out;
}

input:focus {
  border-color: #1E4F79; /* Change to your desired color */
  outline: none;
}

/* Add Tag section */
.flex.mb-4 {
  justify-content: center;
  align-items: center;
}

input[type="text"] {
  width: 200px;
}

button.bg-blue-500 {
  background: #1E4F79; /* Change to your desired color */
}

button.bg-blue-500:hover {
  background: #325d92; /* Change to your desired color */
}

/* Tags and Posts list */
ul.tag-list,
ul.post-list {
  padding: 0;
  margin: 0;
}

ul.tag-list {
  display: flex;
  flex-wrap: wrap;
}

ul.post-list {
  display: block;
}

li.flex.items-center.mb-2 {
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

button.bg-red-500 {
  background: #FF5A5A; /* Change to your desired color */
}

button.bg-red-500:hover {
  background: #FF7878; /* Change to your desired color */
}

/* Posts section */
button.bg-green-500 {
  background: #47D49D; /* Change to your desired color */
}

button.bg-green-500:hover {
  background: #5ED6A9; /* Change to your desired color */
}
</style>
