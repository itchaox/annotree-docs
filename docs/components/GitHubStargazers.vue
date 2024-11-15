<!-- GitHubStargazers.vue -->
<template>
  <div class="stargazers">
    <h3>GitHub Star Supporters ⭐️</h3>
    <div class="avatars">
      <div
        v-for="user in users"
        :key="user.id"
        class="avatar"
      >
        <a
          :href="user.html_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :src="user.avatar_url"
            :alt="user.login"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  const users = ref([]);

  onMounted(async () => {
    try {
      let allUsers = [];
      let currentPage = 1;
      const perPage = 100;
      const maxPages = 3; // 因为每页最多 100 条，最多获取 300 条

      while (currentPage <= maxPages) {
        const response = await axios.get('https://api.github.com/repos/itchaox/annotree/stargazers', {
          headers: { Accept: 'application/vnd.github.v3+json' },
          params: { per_page: perPage, page: currentPage },
        });
        allUsers = [...allUsers, ...response.data]; // 将新获取的数据合并到 allUsers 数组中
        currentPage++; // 增加页码，获取下一页的数据
      }

      users.value = allUsers; // 设置获取到的所有用户
    } catch (error) {
      console.error('Error fetching stargazers:', error);
    }
  });
</script>

<style scoped>
  .stargazers {
    text-align: center;
  }
  .avatars {
    display: flex;
    margin-top: 30px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  .avatar img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }
</style>
