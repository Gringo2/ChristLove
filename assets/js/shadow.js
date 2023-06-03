// Use custom elements API v1 to register a new HTML tag and define its JS behavior
// using an ES6 class. Every instance of <fancy-tab> will have this same prototype.
customElements.define('contactus-component', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the constructor.
  
          // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <body class="one">
    <head>
    <link rel="stylesheet" href="./assets/css/shadow.css"/>
    </head>
  <section style="margin-top: 100px;" part="box" class="section contact" id="contact" aria-label="contact">
    <div class="container">

      <h2 class="h2 section-title">Let's Contact With Us</h2>

      <p class="section-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna
        aliqua.
      </p>

      <form action="" class="contact-form">

        <div class="input-wrapper">
          <input type="text" name="name" aria-label="name" placeholder="Your name*" required class="input-field">

          <input type="email" name="email_address" aria-label="email" placeholder="Email address*" required
            class="input-field">
        </div>

        <div class="input-wrapper">
          <input type="text" name="subject" aria-label="subject" placeholder="Subject" class="input-field">

          <input type="number" name="phone" aria-label="phone" placeholder="Phone number" class="input-field">
        </div>

        <textarea name="message" aria-label="message" placeholder="Your message...*" required
          class="input-field"></textarea>

        <div class="checkbox-wrapper">
          <input type="checkbox" name="terms_and_policy" id="terms" required class="checkbox">

          <label for="terms" class="label">
            Accept <a href="#" class="label-link">Terms of Services</a> and <a href="#" class="label-link">Privacy
              Policy</a>
          </label>
        </div>

        <button type="submit" class="btn btn-primary">Send Message</button>

      </form>

      <ul class="contact-list">

        <li class="contact-item">
          <div class="contact-card">

            <div class="card-icon">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </div>

            <div class="card-content">

              <h3 class="h3 card-title">Mail Here</h3>

              <a href="mailto:hello@luaz.com" class="card-link">hello@luaz.com</a>
              <a href="mailto:info@luaz.com" class="card-link">info@luaz.com</a>

            </div>

          </div>
        </li>

        <li class="contact-item">
          <div class="contact-card">

            <div class="card-icon">
              <ion-icon name="map-outline" aria-hidden="true"></ion-icon>
            </div>

            <div class="card-content">

              <h3 class="h3 card-title">Visit Here</h3>

              <address class="card-address">
                27 Division St, New York,<br>
                NY 10002, USA
              </address>

            </div>

          </div>
        </li>

        <li class="contact-item">
          <div class="contact-card">

            <div class="card-icon">
              <ion-icon name="headset-outline" aria-hidden="true"></ion-icon>
            </div>

            <div class="card-content">

              <h3 class="h3 card-title">Call Here</h3>

              <a href="tel:+1234567890" class="card-link">+123 456 7890</a>
              <a href="tel:+2414524526" class="card-link">+241 452 4526</a>

            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>
  </body>
    `;
  }
  connectedCallback() {
    while (this.childNodes.length > 0) {
        this.shadowRoot.appendChild(this.childNodes[0]);
    }
  }
});

customElements.define('aboutus-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/shadow.css"/>
  </head>
  <!-- 
  - #ABOUT
-->

<section  class="section about" id="about" aria-label="about">
  <div class="container">

    <div class="about-banner img-holder" style="--width: 720; --height: 960;">
      <img src="./assets/images/about-banner.jpg" width="720" height="960" loading="lazy" alt="about banner"
        class="img-cover">

      <button class="play-btn" aria-label="Play video">
        <ion-icon name="play" aria-hidden="true"></ion-icon>
      </button>
    </div>

    <div class="about-content">

      <h2 class="h2 section-title">About Us</h2>

      <p class="section-text">
        Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc
        tinci dunt nec
        elei fend et tiram.
      </p>

      <h3 class="h3">Who We Are</h3>

      <p class="section-text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>

      <h3 class="h3">Our Success</h3>

      <ul class="about-list">

        <li class="about-item">
          <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

          <p class="section-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </li>

        <li class="about-item">
          <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

          <p class="section-text">
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its
            layout.
          </p>
        </li>

        <li class="about-item">
          <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

          <p class="section-text">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin
            literature.
          </p>
        </li>

      </ul>

      <h3 class="h3">Our Mission</h3>

      <p class="section-text">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
        atque corrupti
        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.
      </p>

    </div>

  </div>
</section>
</body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
}
});

customElements.define('activity-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/shadow.css"/>
  </head>
  <!-- 
        - #BLOG
      -->

      <section class="section blog" id="blog" aria-label="blog">
        <div class="container">

          <h2 class="h2 section-title">Latest Articles Updated Weekly</h2>

          <p class="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna
            aliqua.
          </p>

          <ul class="grid-list">

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 860; --height: 646;">
                  <img src="./assets/images/blog-1.jpg" width="860" height="646" loading="lazy"
                    alt="How to Become a Successful Entry Level UX Designer" class="img-cover">
                </figure>

                <div class="card-content">

                  <time class="time" datetime="2022-06-16">June 16, 2022</time>

                  <h3 class="h3">
                    <a href="#" class="card-title">How to Become a Successful Entry Level UX Designer</a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card grid">

                <figure class="card-banner img-holder" style="--width: 860; --height: 646;">
                  <img src="./assets/images/blog-2.jpg" width="860" height="646" loading="lazy"
                    alt="2022 Local SEO Success: The Year of Everywhere" class="img-cover">
                </figure>

                <div class="card-content">

                  <time class="time" datetime="2022-06-16">June 16, 2022</time>

                  <h3 class="h3">
                    <a href="#" class="card-title">2022 Local SEO Success: The Year of Everywhere</a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card grid">

                <figure class="card-banner img-holder" style="--width: 860; --height: 646;">
                  <img src="./assets/images/blog-3.jpg" width="860" height="646" loading="lazy"
                    alt="The Guide to Running a Client Discovery Process" class="img-cover">
                </figure>

                <div class="card-content">

                  <time class="time" datetime="2022-06-16">June 16, 2022</time>

                  <h3 class="h3">
                    <a href="#" class="card-title">The Guide to Running a Client Discovery Process</a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card grid">

                <figure class="card-banner img-holder" style="--width: 860; --height: 646;">
                  <img src="./assets/images/blog-4.jpg" width="860" height="646" loading="lazy"
                    alt="3 Ways to Get Client Approval for Scope Changes" class="img-cover">
                </figure>

                <div class="card-content">

                  <time class="time" datetime="2022-06-16">June 16, 2022</time>

                  <h3 class="h3">
                    <a href="#" class="card-title">3 Ways to Get Client Approval for Scope Changes</a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card grid">

                <figure class="card-banner img-holder" style="--width: 860; --height: 646;">
                  <img src="./assets/images/blog-5.jpg" width="860" height="646" loading="lazy"
                    alt="Top 21 Must-Read Blogs For Creative Agencies" class="img-cover">
                </figure>

                <div class="card-content">

                  <time class="time" datetime="2022-06-16">June 16, 2022</time>

                  <h3 class="h3">
                    <a href="#" class="card-title">Top 21 Must-Read Blogs For Creative Agencies</a>
                  </h3>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

</body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
}
});