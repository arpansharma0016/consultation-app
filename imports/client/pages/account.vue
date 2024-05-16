<template>
  <div class="job">
    <Navbar></Navbar>
    <div class="wrapper details-page">
      <div class="main-container no-padding-top">
        <div class="searched-jobs">
          <v-btn icon class="settings-ham" @click="drawer = true">
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
          <div class="job-overview">
            <div class="job-overview-cards whole-height side-area">
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
            <div class="job-explain profile-area whole-height">
              <img class="job-bg" alt="" src="https://unsplash.it/640/425?image=6" />
              <div class="job-logos">
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
              </div>
              <div class="job-explain-content">
                <div class="job-title-wrapper">
                  <div class="job-card-title">
                    Arpan Sharma
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#0162ff"
                      class="bi bi-pencil-square cursor-pointer"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                      />
                    </svg>
                  </div>
                  <div class="job-action">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-share-2"
                    >
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
                    </svg>
                  </div>
                </div>
                <div class="job-subtitle-wrapper">
                  <div class="company-name">
                    Software Development Engineer
                    <span class="comp-location">
                      Londontowne, MD.
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="#0162ff"
                        class="bi bi-pencil-square cursor-pointer"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="posted">
                    Posted 8 days ago
                    <span class="app-number">98 Application</span>
                  </div>
                </div>
                <div class="explain-bar">
                  <div class="explain-contents">
                    <div class="explain-title">
                      Current Company
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="#0162ff"
                        class="bi bi-pencil-square cursor-pointer"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                        />
                      </svg>
                    </div>
                    <div class="explain-subtitle">Google</div>
                  </div>
                  <div class="explain-contents">
                    <div class="explain-title">
                      Work Level
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="#0162ff"
                        class="bi bi-pencil-square cursor-pointer"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                        />
                      </svg>
                    </div>
                    <div class="explain-subtitle">Senior level</div>
                  </div>
                  <div class="explain-contents">
                    <div class="explain-title">
                      Experience
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="#0162ff"
                        class="bi bi-pencil-square cursor-pointer"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                        />
                      </svg>
                    </div>
                    <div class="explain-subtitle">8 years</div>
                  </div>
                  <div class="explain-contents">
                    <div class="explain-title">
                      Package price
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="#0162ff"
                        class="bi bi-pencil-square cursor-pointer"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                        />
                      </svg>
                    </div>
                    <div class="explain-subtitle">$2150.0 / Month</div>
                  </div>
                </div>
                <div class="overview-text">
                  <div class="overview-text-header">
                    Overview
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#0162ff"
                      class="bi bi-pencil-square cursor-pointer"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                      />
                    </svg>
                  </div>
                  <div class="overview-text-subheader">
                    We believe that design (and you) will be critical to the company's success. You will work with our
                    founders and our early customers to help define and build our product functionality, while
                    maintaining the quality bar that customers have come to expect from modern SaaS applications. You
                    have a strong background in product design with a quantitavely anf qualitatively analytical mindset.
                    You will also have the opportunity to craft our overall product and visual identity and should be
                    comfortable to flex into working.
                  </div>
                </div>

                <div class="overview-text">
                  <div class="overview-text-header">
                    Skills
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#0162ff"
                      class="bi bi-pencil-square cursor-pointer"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                      />
                    </svg>
                  </div>
                  <div class="overview-text-item">3+ years working as a product designer.</div>
                  <div class="overview-text-item">
                    A portfolio that highlights your approach to problem solving, as well as you skills in UI.
                  </div>
                  <div class="overview-text-item">Experience conducting research and building out smooth flows.</div>
                  <div class="overview-text-item">
                    Excellent communication skills with a well-defined design process.
                  </div>
                  <div class="overview-text-item">Familiarity with design tools like Sketch and Figma</div>
                  <div class="overview-text-item">
                    Up-level our overall design and bring consistency to end-user facing properties
                  </div>
                </div>
                <div class="overview-text">
                  <div class="overview-text-header">Experience</div>
                  <v-timeline dense>
                    <v-timeline-item v-for="n in 2" :key="n">
                      <v-card class="elevation-2">
                        <v-card-title class="text-h5">
                          <div class="job-card-title" style="margin-top: 0px">Google</div>
                          &nbsp; - &nbsp;
                          <span style="font-size: 12px; margin-top: 0px">Jan 2019 - Mar 2023</span>
                          <v-spacer></v-spacer>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#0162ff"
                            class="bi bi-pencil-square cursor-pointer"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                            />
                          </svg>
                        </v-card-title>
                        <v-card-text>
                          <div class="job-card-title" style="margin-top: 0px">Software Development Engineer</div>
                          Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed
                          euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
                          voluptatibus, vix an salutandi sententiae.
                        </v-card-text>
                      </v-card>
                    </v-timeline-item>
                  </v-timeline>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="text-h5 lighten-2">Welcome to consultancy</v-card-title>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false" class="mt-0">Continue</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div> -->
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
  import Navbar from './components/navbar.vue';

  export default {
    components: {Navbar},

    data() {
      return {
        dialog: true,
        drawer: false,
      };
    },
  };
</script>
<style scoped>
  .profile-area {
    margin-left: 20px;
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
    width: 30vw;
    max-width: 300px;
  }
  @media screen and (max-width: 760px) {
    .side-area {
      display: none;
    }
    .nav-drawer-side-area {
      width: 100%;
    }
    .profile-area {
      margin-left: 0px;
    }
    .profile-area {
      height: calc(90vh - 36px);
    }
    .settings-ham {
      display: block;
    }
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
</style>
