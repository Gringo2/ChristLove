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

    <div class="about-banner img-holder" style="--width: 720; --height: 700;">
      <img src="./assets/images/mainser.jpg" width="720" height="960" loading="lazy" alt="about banner"
        class="img-cover">

      <button class="play-btn" aria-label="Play video">
        <ion-icon name="play" aria-hidden="true"></ion-icon>
      </button>
    </div>

    <div class="about-content">

      <h2 class="h2 section-title">About Us</h2>

      <p class="section-text">
      የእግዚአብሔር ታላቅነት መገለጫ ቤተክርስቲያን በኢትዮጵያና ከኢትዮጵያ ውጭ የሚደረጉ የወንጌል አገልግሎቶችን እንድትደግፉ በጌታ ፍቅር ጥሪ ታቀርባለች።
      </p>

      <!--<h3 class="h3">Who We Are</h3>-->

      <p class="section-text">
      በጌታ የተወደዳችሁ የክርስቶስ ቤተሰቦች: ባለፉት ጥቂት አመታት በዚህ ወንጌል አገልግሎት ከቤተ ክርስቲያን ጋር አብራችሁ በገንዘባችሁ፣ 
      በምክራችሁ ፣በፀሎታችሁ ፣በጉልበታችሁ ከጎናችን የቆማችሁ ሁላችሁንም እግዚአብሄር አምላክ አብዝቶ ይባርካችሁ።
      </p>

      <!--<h3 class="h3">Our Success</h3>-->

      <ul class="about-list">

        <li class="about-item">
          <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

          <p class="section-text">
          "...አሁን ሥራችሁን እንዲሁም በፊትም ሆነ አሁን ቅዱሳንን በመርዳት ስለ ስሙ ያሳያችሁትን ፍቅር አይረስም።"

          
          
          
          
          </p>
        </li>

        <li class="about-item">
          <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

          <p class="section-text">
          በተጨማሪም ይህን መልእክት ለሌሎች በማህበራዊ ድህረ ገጾች በማጋራት አብረውን ይተባበሩ። 
          </p>
        </li>

        <li class="about-item">
          <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

          <p class="section-text">
          እግዚአብሄር ዘመናችሁን፣ ህይወታችሁን፣ ሥራችሁን፣ አገልግሎታችሁን፣ ቤተሰባችሁን እና ሁለንተናችሁን ይባርክ።
          </p>
        </li>

      </ul>

      

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
customElements.define('gallery-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/gallery.css"/>
  </head>
  <!-- 
  - #BANNER
-->

<section style="margin-top: 50px;" class="section section-divider gray banner">
  <div class="container">

    <ul class="banner-list">

      <li class="banner-item banner-lg">
        <div class="banner-card">

          <img src="./assets/images/birthday1.jpg" width="550" height="450" loading="lazy"
             class="banner-img">

          
        </div>
      </li>

      <li class="banner-item banner-sm">
        <div class="banner-card">

          <img src="./assets/images/birthday2.jpg" width="550" height="465" loading="lazy" 
            class="banner-img">

          

        </div>
      </li>

      <li class="banner-item banner-sm">
        <div class="banner-card">

          <img src="./assets/images/birthday3.jpg" width="550" height="465" loading="lazy" 
            class="banner-img">

          

        </div>
      </li>

      <li class="banner-item banner-md">
        <div class="banner-card">

          <img src="./assets/images/birthday4.jpg" width="550" height="220" loading="lazy" 
            class="banner-img">

          
        </div>
      </li>

    </ul>

  </div>
</section>

<section class="section  gray banner">
<div class="container">

    <ul class="banner-list">
    <li class="banner-item banner-sm">
        <div class="banner-card">

          <img src="./assets/images/charity1.jpg" width="550" height="465" loading="lazy" alt="charity"
            class="banner-img">

          

        </div>
      </li>
      <li class="banner-item banner-sm">
        <div class="banner-card">

          <img src="./assets/images/charity2.jpg" width="550" height="465" loading="lazy" alt="charity"
            class="banner-img">

         

        </div>
      </li>
      <li class="banner-item banner-sm">
        <div class="banner-card">

          <img src="./assets/images/charity3.jpg" width="550" height="465" loading="lazy" alt="charity"
            class="banner-img">

          

        </div>
      </li>
      <li class="banner-item banner-sm">
        <div class="banner-card">

          <img src="./assets/images/charity4.jpg" width="550" height="465" loading="lazy" alt="charity"
            class="banner-img">

          

        </div>
      </li>
    </ul>
    <ul style="margin-top: 10px;"class="banner-list">
    <li class="banner-item banner-sm">
        <div class="banner-card">

          <img src="./assets/images/charity5.jpg" width="550" height="465" loading="lazy" alt="charity"
            class="banner-img">

          

        </div>
      </li>
      <li class="banner-item banner-sm">
        <div class="banner-card">

          <img src="./assets/images/charity6.jpg" width="550" height="465" loading="lazy" alt="charity"
            class="banner-img">

         

        </div>
      </li>
      <li class="banner-item banner-sm">
        <div class="banner-card">

          <img src="./assets/images/charity7.jpg" width="550" height="465" loading="lazy" alt="charity"
            class="banner-img">

          

        </div>
      </li>
      <li class="banner-item banner-sm">
        <div class="banner-card">

          <img src="./assets/images/charity8.jpg" width="550" height="465" loading="lazy" alt="charity"
            class="banner-img">

          

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