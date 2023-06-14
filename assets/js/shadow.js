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

      

      <form style="margin-top: 20px;"action="" class="contact-form">

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

              <a href="mailto:hello@luaz.com" class="card-link">Prophetmaranatashimelis@gmail.com</a>
              <a href="mailto:info@luaz.com" class="card-link">info@ChristLoveTv.com</a>

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
              አዲስ አበባ ከአያት አደባባይ ወደፀበል በሚወስደው መንገድ <br>
              አዲስ መንደር ቤቶች ፊትለፊት ንግድ ባንክ ጎን ሾቤ አያት ቅርንጫፍ
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

              <a href="tel:+1234567890" class="card-link">+251 911 803799</a>
              <a href="tel:+2414524526" class="card-link">+251 901 901010</a>

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

<section style="margin-top: 30px;"  class="section about" id="about" aria-label="about">
  <div class="container">

    <div class="about-banner img-holder" style="--width: 720; --height: 700;">
      <img src="./assets/images/mainser.jpg" width="720" height="960" loading="lazy" alt="about banner"
        class="img-cover">

      
    </div>

    <div class="about-content">

      

      <p style="font-size: 2.0rem;" class="section-text">
      የእግዚአብሔር ታላቅነት መገለጫ ቤተክርስቲያን በኢትዮጵያና ከኢትዮጵያ ውጭ የሚደረጉ የወንጌል አገልግሎቶችን እንድትደግፉ በጌታ ፍቅር ጥሪ ታቀርባለች።
      </p>

      <!--<h3 class="h3">Who We Are</h3>-->

      <p style="font-size: 2.0rem;" class="section-text">
      በጌታ የተወደዳችሁ የክርስቶስ ቤተሰቦች: ባለፉት ጥቂት አመታት በዚህ ወንጌል አገልግሎት ከቤተ ክርስቲያን ጋር አብራችሁ በገንዘባችሁ፣ 
      በምክራችሁ ፣በፀሎታችሁ ፣በጉልበታችሁ ከጎናችን የቆማችሁ ሁላችሁንም እግዚአብሄር አምላክ አብዝቶ ይባርካችሁ።
      </p>

      <!--<h3 class="h3">Our Success</h3>-->

      <ul class="about-list">

        <li class="about-item">
          <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

          <p style="font-size: 2.0rem;" class="section-text">
          "...አሁን ሥራችሁን እንዲሁም በፊትም ሆነ አሁን ቅዱሳንን በመርዳት ስለ ስሙ ያሳያችሁትን ፍቅር አይረስም።"

          
          
          
          
          </p>
        </li>

        <li class="about-item">
          <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

          <p style="font-size: 2.0rem;" class="section-text">
          በተጨማሪም ይህን መልእክት ለሌሎች በማህበራዊ ድህረ ገጾች በማጋራት አብረውን ይተባበሩ። 
          </p>
        </li>

        <li class="about-item">
          <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

          <p style="font-size: 2.0rem;" class="section-text">
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
customElements.define('bank-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/support.css"/>
  </head>
  <!-- 
  - #CATEGORY
-->

<section  class="section category" aria-label="category">
  <div class="container">

    <!--<p class="section-subtitle">Course Categories</p>-->

    

    <ul class="grid-list">

      <li>
        <div class="category-card">

          <div class="card-icon">
          <img style="max-width:50px;" src="./assets/images/cbe.jpg">
          </div>

          <div>
            <h3 class="h3 card-title">
              <a href="#">1000347718959 (ንግድ ባንክ)</a>
            </h3>

            <span class="card-meta">Maranata Shimelis</span>
          </div>

        </div>
      </li>

      <li>
        <div class="category-card">

          <div class="card-icon">
            <img style="min-width: 200px;" src="./assets/images/awash.svg">
          </div>

          <div>
            <h3 class="h3 card-title">
              <a href="#">01320076893600 (አዋሽ) </a>
            </h3>

            <span class="card-meta">Maranata Shimelis</span>
          </div>

        </div>
      </li>

      <li>
        <div class="category-card">

          <div  class="card-icon">
            <img style="max-width: 150px;"  src="./assets/images/Coopbank.svg">
          </div>

          <div>
            <h3 class="h3 card-title">
              <a href="#">1070000012191(Copretiv oromiya)</a>
            </h3>

            <span class="card-meta">Yegziabher talakinet megelecha betechrstian</span>
          </div>

        </div>
      </li>

      <li>
        <div class="category-card">

          <div class="card-icon">
          <img  src="./assets/images/abyssinia.png">
          </div>

          <div>
            <h3 class="h3 card-title">
              <a href="#">42852333 (አቢሲንያ)</a>
            </h3>

            <span class="card-meta">Maranata Shimelis</span>
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
customElements.define('zoom-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/service.css"/>
  </head>
  <main>
  <article>
  <section class="section partnership" aria-label="partnership">
        <div class="container">

          <h2 class="h2 section-title" data-reveal>Want to Join Partnership?</h2>

          <ul class="grid-list">

            <li data-reveal="left">
              <div class="partnership-card">

                <figure class="card-banner img-holder" style="--width: 640; --height: 402;">
                  <img src="./assets/images/Zoom1.jpg" width="640" height="402" loading="lazy" alt="Join Courier"
                    class="img-cover">
                </figure>

                <div class="card-content">
                  <h3 class="h5 card-title">Join Courier</h3>

                  <a href="#" class="btn btn-primary has-after">
                    <span class="span">Learn More</span>

                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>
                </div>

              </div>
            </li>

            <li data-reveal="right">
              <div class="partnership-card">

                <figure class="card-banner img-holder" style="--width: 640; --height: 402;">
                  <img src="./assets/images/Zoom2.jpg" width="640" height="402" loading="lazy" alt=""
                    class="img-cover">
                </figure>

                <div class="card-content">
                  <h3 class="h5 card-title">Join Merchant</h3>

                  <a href="#" class="btn btn-primary has-after">
                    <span class="span">Learn More</span>

                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
      
      
    </article>
    </main>
</body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
}
});
customElements.define('package-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/package.css"/>
  </head>
  <!-- 
        - #PACKAGE
      -->

      <section style="margin-top: 90px;" class="package" id="package">
        <div class="container">

          <p class="section-subtitle"></p>

          <h2 class="h2 section-title">Join Our Zoom Meetings.</h2>

          

          <ul class="package-list">

            <li>
              <div class="package-card">

                <figure class="card-banner">
                  <img src="./assets/images/zoom1.jpg" alt="Experience The Great Holiday On Beach" loading="lazy">
                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">Come and join our zoom service.</h3>

                  <p class="card-text">
                  ''Prophet Maranata is inviting you to a scheduled Zoom meeting
                  Preaching,deliverance and prophecy time. Come and be part of Gods blessing.''
                  </p>

                  <ul class="card-meta-list">

                    <li class="card-meta-item">
                      <div class="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p class="text"> 3:00 PM</p>
                      </div>
                    </li>

                    

                    <li class="card-meta-item">
                      <div class="meta-box">
                        <ion-icon name="location"></ion-icon>

                        <p class="text">Washington DC</p>
                      </div>
                    </li>

                  </ul>
                  <ul class="card-meta-list">

                  <li class="card-meta-item">
                    <div class="meta-box">
                      <ion-icon name="time"></ion-icon>

                      <p class="text">3:00 AM</p>
                    </div>
                  </li>

                  

                  <li class="card-meta-item">
                    <div class="meta-box">
                      <ion-icon name="location"></ion-icon>

                      <p class="text">Toronto</p>
                    </div>
                  </li>

                </ul>
                <ul class="card-meta-list">

                <li class="card-meta-item">
                  <div class="meta-box">
                    <ion-icon name="time"></ion-icon>

                    <p class="text">4:00 ማታ local time</p>
                  </div>
                </li>

               

                <li class="card-meta-item">
                  <div class="meta-box">
                    <ion-icon name="location"></ion-icon>

                    <p class="text">Ethiopia</p>
                  </div>
                </li>

              </ul>

                </div>

                <div class="card-price">

                  <div class="wrapper">

                    

                  </div>

                  <p class="price">
                  ID 6206841297
                  
                    <span>Passcode PMS</span>
                  </p>

                  <a href="https://us02web.zoom.us/j/6206841297?pwd=b3FZT2ZhN3pVNXNpc3ZOUXVHUmRHUT09" class="btn btn-secondary">Join Meeting</a>

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