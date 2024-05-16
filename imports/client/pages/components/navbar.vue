<template>
  <div>
    <div class="header header-shadow">
      <div class="text-center" :class="{'mobile-header': !mobileOnlyView}">
        <v-btn icon @click="drawer = true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </v-btn>
      </div>
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M512 503.5H381.7a48 48 0 01-45.3-32.1L265 268.1l-9-25.5 2.7-124.6L338.2 8.5l23.5 67.1L512 503.5z"
            fill="#0473ff"
            data-original="#28b446"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill="#0473ff"
            data-original="#219b38"
            d="M361.7 75.6L265 268.1l-9-25.5 2.7-124.6L338.2 8.5z"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M338.2 8.5l-82.2 234-80.4 228.9a48 48 0 01-45.3 32.1H0l173.8-495h164.4z"
            fill="#0473ff"
            data-original="#518ef8"
          />
        </svg>
        {{ title }}
      </div>
      <div class="header-menu" v-if="!mobileOnlyView">
        <a
          v-for="(route, index) in routes"
          :key="index"
          @click="goTo(route.path)"
          :class="{active: $route.name === route.name}"
        >
          {{ route.title }}
        </a>
      </div>
      <div class="user-settings user-profile-bg" v-if="!mobileOnlyView">
        <img
          class="user-profile"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
          alt=""
        />
        <div class="user-name">Suhayel Nasim</div>
      </div>
    </div>
    <v-navigation-drawer v-model="drawer" absolute temporary width="300px">
      <div class="job">
        <div class="wrapper details-page">
          <div class="main-container no-padding-top">
            <v-btn icon absolute class="close-button" @click="drawer = false">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </v-btn>
            <div class="searched-jobs">
              <div class="job-overview">
                <div class="job-overview-cards whole-height nav-drawer-side-area">
                  <div class="job-logos sidebar-image">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="background-color: #f76754">
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M0 .5h4.2v23H0z"
                        fill="#042b48"
                        data-original="#212121"
                      ></path>
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z"
                        fill="#fefefe"
                        data-original="#f4511e"
                      ></path>
                    </svg>
                    <div class="job-card-title">UI /UX Designer</div>
                  </div>
                  <div
                    class="job-overview-card"
                    v-for="(route, index) in routes"
                    :key="index"
                    @click="goTo(route.path)"
                  >
                    <div class="job-card overview-card" :class="{'active-card': $route.name === route.name}">
                      <div class="overview-wrapper">
                        <div v-html="icons[index]"></div>
                        <div class="overview-detail">
                          <div class="job-card-title">{{ route.title }}</div>
                          <div class="job-card-subtitle">{{ route.subtitle }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
      },
      mobileOnlyView: {
        type: Boolean,
        default: false,
      },
    },
    data: () => ({
      routes: [
        {title: 'Home', path: '/', name: 'home', subtitle: 'Search and view more consultants'},
        {title: 'Chat', path: '/chat', name: 'chat', subtitle: 'Chat with your consultants or clients'},
        {title: 'Account', path: '/account', name: 'account', subtitle: 'Manage your account'},
      ],
      icons: [
        `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
        </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
          <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
          <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
        </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
        </svg>`,
      ],
      drawer: false,
    }),
    methods: {
      goTo(path) {
        this.$router.push(path);
      },
    },
  };
</script>
<style scoped>
  .no-padding-top {
    padding-top: 0px;
  }
  .whole-height {
    height: 90vh;
    overflow-y: auto;
  }
  .sidebar-image {
    margin-top: 0px;
    position: block;
    margin-bottom: 20px;
    padding: 0px;
    text-align: center;
  }
  .overview-card:hover {
    background-color: #0162ff;
    color: #fff;
  }

  .active-card {
    background-color: #0162ff;
    color: #fff;
  }
  .active-card .job-card-subtitle {
    color: #fff;
  }
  .job-card {
    padding: 0px;
  }
  .nav-drawer-side-area {
    width: 100%;
  }
  .close-button {
    z-index: 2;
    right: 10px;
  }
  .extra-element {
    display: none;
  }

  @media screen and (max-width: 760px) {
    .extra-element {
      display: block;
    }
  }
</style>
