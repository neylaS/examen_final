class User {
  constructor(nom, age, email, photo) {
    this.nom = nom;
    this.age = age;
    this.email = email;
    this.photo = photo;
    this.present = false;
    this.element = this.generateUser();
  }

  generateUser() {
    const user = document.createElement("div");
    user.classList.add("user");

    const enfant = `<img src="https://randomuser.me/api/portraits/women/37.jpg">
    <div class="user--info">
            <h1>Miss Mareike Bottenberg</h1>
            <p>76 years old</p>
            <p>Baak, Netherlands</p>
    </div>
    <a href="mailto:mareike.bottenberg@example.com">
            <span class="mail">✉️</span>
    </a>`;
    const main = document.querySelector("main");
    main.insertAdjacentHTML("afterbegin", enfant);
  }
}
