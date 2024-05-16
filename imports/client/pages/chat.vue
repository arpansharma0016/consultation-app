<template>
  <div class="job">
    <Navbar :class="{'no-whole-page': $route.name !== 'chat'}"></Navbar>
    <div class="wrapper details-page">
      <div class="main-container no-padding-top">
        <div class="searched-jobs">
          <div class="job-overview">
            <div class="job-overview-cards whole-height side-area" :class="{'no-whole-page': $route.name !== 'chat'}">
              <div class="search-menu">
                <div class="search-bar">
                  <input type="text" class="search-box" />
                </div>
              </div>
              <div class="chat-card active-chat-card" @click="$router.push('/chat/1')">
                <div class="chat-card-user-details">
                  <div class="chat-card-user">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
                      class="chat-card-image"
                    />
                    <div class="chat-card-user-name">Arpan Sharma</div>
                  </div>
                  <div class="chat-card-user-message">Hey there, how are you doing bro its great to see you</div>
                </div>
              </div>
              <div class="chat-card" @click="$router.push('/chat/2')">
                <div class="chat-card-user-details">
                  <div class="chat-card-user">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
                      class="chat-card-image"
                    />
                    <div class="chat-card-user-name">Arpan Sharma</div>
                  </div>
                  <div class="chat-card-user-message">Hey there, how are you doing bro its great to see you</div>
                </div>
              </div>
              <div class="chat-card">
                <div class="chat-card-user-details">
                  <div class="chat-card-user">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
                      class="chat-card-image"
                    />
                    <div class="chat-card-user-name">Arpan Sharma</div>
                  </div>
                  <div class="chat-card-user-message">Hey there, how are you doing bro its great to see you</div>
                </div>
              </div>
              <div class="chat-card">
                <div class="chat-card-user-details">
                  <div class="chat-card-user">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
                      class="chat-card-image"
                    />
                    <div class="chat-card-user-name">Arpan Sharma</div>
                  </div>
                  <div class="chat-card-user-message">Hey there, how are you doing bro its great to see you</div>
                </div>
              </div>
            </div>
            <div class="chat-page-container" :class="{'no-whole-page': $route.name !== 'chatDetails'}">
              <div class="chat-area-placeholder" v-if="$route.name === 'chat'">
                <img src="/assets/chat-placeholder.png" class="chat-placeholder" />
              </div>
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Navbar from './components/navbar.vue';

  export default {
    components: {Navbar},

    data() {
      return {
        dialog: true,
      };
    },
  };
</script>
<style scoped>
  .profile-area {
    margin-left: 20px;
    width: 100%;
  }
  .settings-ham {
    display: none;
  }
  .whole-height {
    height: 90vh;
    overflow-y: auto;
  }
  .no-padding-top {
    padding-top: 0px;
  }
  .side-area {
    width: 100%;
    max-width: 300px;
  }
  .nav-drawer-side-area {
    width: 100%;
  }

  .active-card {
    background-color: #0162ff;
    color: white;
  }
  .job-card {
    padding: 20px;
  }
  .job-card:hover {
    color: white;
  }
  .cursor-pointer {
    cursor: pointer;
    margin-bottom: 2px;
  }
  .sidebar-image {
    margin-top: 0px;
    position: block;
    margin-bottom: 20px;
    padding: 0px;
    text-align: center;
  }
  .close-button {
    z-index: 2;
    right: 10px;
  }

  .search-bar input {
    padding: 0 25px 0 25px;
  }
  .search-menu {
    margin-bottom: 10px;
    border: 1px solid #d4d4d4;
  }

  .chat-header {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    justify-content: space-between;
    border-bottom: 1px solid #e7e7e7;
  }
  .chat-header-user-area {
    display: flex;
  }
  .unseen-messages-number {
    color: #0162ff;
    margin: 6px 8px 0px 4px;
  }
  .chat-user-img {
    width: 40px;
    height: 40px;
  }
  .user-chat-area-message {
    margin-left: 50px;
    font-size: 12px;
    margin-top: -16px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .chat-user-name {
    margin-top: -16px;
    display: block;
  }
  .chat-area-user {
    cursor: pointer;
    margin-left: 10px;
  }
  .chat-card {
    margin-top: 10px !important;
    padding: 20px;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: white;
    border-radius: 20px;
    cursor: pointer;
  }
  .chat-card:hover {
    background: #0162ff;
    color: white;
  }
  .active-chat-card {
    background: #0162ff;
    color: white;
  }
  .chat-card-user {
    display: flex;
  }
  .chat-card-user-details {
    width: 100%;
  }
  .chat-card-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .chat-card-user-name {
    font-size: 16px;
    font-weight: 500;
    margin-left: 8px;
  }
  .chat-card-user-message {
    font-size: 12px;
    font-weight: 400;
    padding-left: 5px;
    margin-left: 45px;
    margin-top: -16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .chat-area-main {
    height: calc(100% - 120px);
    width: 100%;
    overflow-y: auto;
  }
  .chat-date-area {
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
  }
  .chat-date {
    font-size: 12px;
    color: #595959;
  }

  .chat-message-me-area {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 6px;
    margin-right: 10px;
    padding-left: 40px;
  }
  .chat-message-me {
    background-color: #f2f2f2;
    border-radius: 22px;
    padding: 10px 20px;
    color: #353535;
    max-width: 40rem;
  }
  .chat-message-you-area {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 6px;
    margin-left: 10px;
    padding-right: 40px;
  }
  .chat-message-you {
    background-color: #0162ff;
    border-radius: 22px;
    padding: 10px 20px;
    color: white;
    max-width: 40rem;
  }
  .message-actions-container {
    display: flex;
    margin: 0px 2px;
    visibility: hidden;
  }

  .chat-message-me-area:hover .message-actions-container {
    visibility: visible;
  }
  .chat-message-you-area:hover .message-actions-container {
    visibility: visible;
  }
  .chat-input-area {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 4px;
  }
  .attach-button {
    margin-left: 10px;
  }

  .chat-input-container {
    padding-left: 6px;
    margin-bottom: 0px;
    margin-top: 0px;
    width: calc(100% - 90px);
  }

  .chat-input-box-area {
    width: 100% !important;
  }
  .chat-input-box {
    background-color: #f2f2f2;
    width: 100%;
    padding: 16px;
    border-radius: 16px;
  }
  .chat-page-container {
    width: 100%;
    margin-right: 20px;
  }
  .chat-area-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }
  .chat-placeholder {
    height: 300px;
    width: 400px;
  }

  @media screen and (max-width: 760px) {
    .side-area {
      width: 100%;
      max-width: 100%;
      padding: 10px;
    }
    .nav-drawer-side-area {
      width: 100%;
    }
    .profile-area {
      margin-left: 0px;
    }
    .profile-area {
      height: 100vh;
    }
    .settings-ham {
      display: block;
    }
    .chat-details-area {
      width: 100%;
    }
    .no-whole-page {
      display: none;
    }
    .details-page {
      padding: 0px;
    }
    .searched-jobs {
      margin: 0px;
    }
    .chat-page-container {
      margin-right: 0px;
    }
  }
</style>
