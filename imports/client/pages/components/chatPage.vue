<template>
  <div class="job-explain profile-area whole-height chat-details-area">
    <div class="chat-header header-area">
      <div class="chat-header-user-area">
        <v-btn icon @click="$router.back()" class="chat-back-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#0162ff"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </v-btn>
        <div class="unseen-messages-number chat-unread-text">2</div>
        <div class="user-settings user-profile-bg chat-area-user">
          <img
            class="user-profile"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
            alt=""
          />
          <div class="user-name">Suhayel Nasim</div>
        </div>
      </div>
      <div>
        <v-btn icon @click="drawer = true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path
              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
            />
          </svg>
        </v-btn>
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-date-area">
        <div class="chat-date">12 Jan 2024</div>
      </div>
      <div class="chat-message-me-area">
        <div class="message-actions-container">
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-arrow-90deg-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
              />
            </svg>
          </v-btn>
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              />
            </svg>
          </v-btn>
          <!-- <div class="chat-message-time">4:32 AM</div> -->
        </div>
        <div class="chat-message-me">Hi there buddy</div>
      </div>
      <div class="chat-message-me-area">
        <div class="message-actions-container">
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-arrow-90deg-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
              />
            </svg>
          </v-btn>
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              />
            </svg>
          </v-btn>
        </div>
        <div class="chat-message-me">
          How are you doing nowadays man? Everything okay dude? where have you been buddy, blah blah blah blah blah blah
        </div>
      </div>
      <div class="chat-date-area">
        <div class="chat-date">12 Jan 2024</div>
      </div>
      <div class="chat-message-you-area">
        <div class="chat-message-you">Hey, I'm good</div>
        <div class="message-actions-container">
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-arrow-90deg-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
              />
            </svg>
          </v-btn>
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              />
            </svg>
          </v-btn>
        </div>
      </div>
      <div class="chat-message-you-area">
        <div class="chat-message-you">How about you?</div>
        <div class="message-actions-container">
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-arrow-90deg-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
              />
            </svg>
          </v-btn>
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              />
            </svg>
          </v-btn>
        </div>
      </div>
      <div class="chat-message-you-area">
        <div class="chat-message-you">
          Heard you've been doing this great business nowadays of this saas webapp! This is going to be awesome
        </div>
        <div class="message-actions-container">
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-arrow-90deg-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
              />
            </svg>
          </v-btn>
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              />
            </svg>
          </v-btn>
        </div>
      </div>
      <div class="chat-date-area">
        <div class="chat-date">12 Jan 2024</div>
      </div>
      <div class="chat-message-me-area">
        <div class="message-actions-container">
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-arrow-90deg-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
              />
            </svg>
          </v-btn>
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              />
            </svg>
          </v-btn>
        </div>
        <div class="chat-message-me">Hi there buddy</div>
      </div>
      <div class="chat-message-me-area">
        <div class="chat-message-me">
          How are you doing nowadays man? Everything okay dude? where have you been buddy, blah blah blah blah blah blah
        </div>
      </div>
      <div class="chat-date-area">
        <div class="chat-date">12 Jan 2024</div>
      </div>
      <div class="chat-message-you-area">
        <div class="chat-message-you">Hey, I'm good</div>
        <div class="message-actions-container">
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-arrow-90deg-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
              />
            </svg>
          </v-btn>
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              />
            </svg>
          </v-btn>
        </div>
      </div>
      <div class="chat-message-you-area">
        <div class="chat-message-you">How about you?</div>
        <div class="message-actions-container">
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-arrow-90deg-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
              />
            </svg>
          </v-btn>
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              />
            </svg>
          </v-btn>
        </div>
      </div>
      <div class="chat-message-you-area">
        <div class="chat-message-you">
          Heard you've been doing this great business nowadays of this saas webapp! This is going to be awesome
        </div>
        <div class="message-actions-container">
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-arrow-90deg-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
              />
            </svg>
          </v-btn>
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              />
            </svg>
          </v-btn>
        </div>
      </div>
      <div class="chat-date-area">
        <div class="chat-date">12 Jan 2024</div>
      </div>
      <div class="chat-message-me-area">
        <div class="message-actions-container">
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-arrow-90deg-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
              />
            </svg>
          </v-btn>
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              />
            </svg>
          </v-btn>
        </div>
        <div class="chat-message-me">Hi there buddy</div>
      </div>
      <div class="chat-message-me-area">
        <div class="message-actions-container">
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-arrow-90deg-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
              />
            </svg>
          </v-btn>
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              />
            </svg>
          </v-btn>
        </div>
        <div class="chat-message-me">
          How are you doing nowadays man? Everything okay dude? where have you been buddy, blah blah blah blah blah blah
        </div>
      </div>
      <div class="chat-date-area">
        <div class="chat-date">12 Jan 2024</div>
      </div>
      <div class="chat-message-you-area">
        <div class="chat-message-you">Hey, I'm good dhcbdfn vn dfhcx vcbdf hxcbhds bxc sdhbx c</div>
        <div class="message-actions-container">
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-arrow-90deg-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
              />
            </svg>
          </v-btn>
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              />
            </svg>
          </v-btn>
        </div>
      </div>
      <div class="chat-message-you-area">
        <div class="chat-message-you">How about you?</div>
        <div class="message-actions-container">
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-arrow-90deg-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
              />
            </svg>
          </v-btn>
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              />
            </svg>
          </v-btn>
        </div>
      </div>
      <div class="chat-message-you-area">
        <div class="chat-message-you">
          Heard you've been doing this great business nowadays of this saas webapp! This is going to be awesome
        </div>
        <div class="message-actions-container">
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-arrow-90deg-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
              />
            </svg>
          </v-btn>
          <v-btn icon x-small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0162ff"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              />
            </svg>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="chat-input-area">
      <v-btn icon class="attach-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#0162ff"
          class="bi bi-paperclip"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"
          />
        </svg>
      </v-btn>
      <div class="search-menu chat-input-container">
        <div class="chat-input-box-area">
          <input type="text" class="search-box chat-input-box" placeholder="Type message here..." />
          <v-btn icon large>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#0162ff"
              class="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"
              />
            </svg>
          </v-btn>
        </div>
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
                  <div class="job-overview-card">
                    <div class="job-card overview-card active-card">
                      <div class="overview-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="96"
                          height="96"
                          fill="currentColor"
                          class="bi bi-person"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                          />
                        </svg>
                        <div class="overview-detail">
                          <div class="job-card-title">Profile</div>
                          <div class="job-card-subtitle">Edit your profile</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job-overview-card">
                    <div class="job-card overview-card">
                      <div class="overview-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="96"
                          height="96"
                          fill="currentColor"
                          class="bi bi-gear"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"
                          />
                          <path
                            d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"
                          />
                        </svg>
                        <div class="overview-detail">
                          <div class="job-card-title">Preferences</div>
                          <div class="job-card-subtitle">Set preferences for your account</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job-overview-card">
                    <div class="job-card overview-card">
                      <div class="overview-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="96"
                          height="96"
                          fill="currentColor"
                          class="bi bi-graph-up-arrow"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                          />
                        </svg>
                        <div class="overview-detail">
                          <div class="job-card-title">Stats</div>
                          <div class="job-card-subtitle">Chech your profile's performance</div>
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
    data() {
      return {
        drawer: false,
        items: [{title: 'Click Me'}, {title: 'Click Me'}, {title: 'Click Me'}, {title: 'Click Me 2'}],
      };
    },
  };
</script>
<style scoped>
  .profile-area {
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
    padding-bottom: 4px;
  }
  .attach-button {
    margin-left: 6px;
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
  .header-area {
    padding: 10px;
  }
  .chat-message-time {
    font-size: 10px;
    font-weight: 300;
  }

  @media screen and (max-width: 760px) {
    .side-area {
      width: 100%;
      max-width: 100%;
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
      height: 100vh;
    }
    .no-whole-page {
      display: none;
    }
    .chat-area-user {
      display: flex;
    }
    .user-name {
      display: unset;
      margin-left: 10px;
    }
  }
  @media screen and (min-width: 760px) {
    .chat-back-btn {
      display: none;
    }
    .chat-unread-text {
      display: none;
    }
  }
</style>
