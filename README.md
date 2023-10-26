<div align="center">
  <a href="https://www.LangUI.dev">
    <img src="./public/logo.png" alt="LangUI Logo">
  </a>
</div>

<h3 align="center">The perfect UI for your AI</h3>

<p align="center">
  <a href="https://github.com/ahmadbilaldev/LangUI/stargazers">
    <img src="https://img.shields.io/github/stars/ahmadbilaldev/LangUI.svg" alt="GitHub Stars">
  </a>
  <a href="https://www.LangUI.dev">
  <img src="https://vercelbadge.vercel.app/api/ahmadbilaldev/langui" alt="Vercel Deployment">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  </a>
</p>
<hr/>

[LangUI](https://www.LangUI.dev) is an Open Source Tailwind library with free components tailored for your AI and GPT projects. It offers a collection of beautiful, ready-to-use components to enhance the user interface of your AI applications, allowing you to focus on building the next best project while leaving the UI to LangUI.

⭐️ LangUI is Open Source and its 60+ components are completely free. Please star it to show your support!

## Documentation

For documentation and components, visit [LangUI.dev](https://www.langui.dev/).

## Get Started

- LangUI components are ready-to-use, meaning you don't need to install or configure anything.

- Browse [LangUI.dev](https://www.langui.dev/) and select a comopnent.

- Copy the desired component's code in HTML or JSX from the LangUI documentation.

- Paste the code into your project's HTML or React/Vue/Angular components. Done.

## Docker deploy

You can directly run using the image I have already built.
```sh
docker run -d -t -p 3000:3000 --name langui --restart=always docker.io/wenyang0/langui:latest
```

Or, you can manually compile it yourself if you prefer.

```sh
#clone the code 
git clone https://github.com/ahmadbilaldev/langui.git

#docker build 
cd langui/
docker build -t langui:v1 .

#start server 
docker run -d -t -p 3000:3000 --name langui --restart=always langui:v1
```
Finally, open your browser and access the service's address at http://serverIP:3000

## Features

- **Copy & Paste Integration**: Zero installations or dependencies! Simply choose your desired component, copy, and paste it into your project.

- **Open Source & Free**: LangUI is MIT licensed, making it suitable for both personal and commercial projects. Feel free to contribute and support us by starring LangUI on GitHub.

- **Dark & Light Modes**: All LangUI components support light & dark modes and are carefully designed to look the best across both modes.

- **Fully Responsive**: LangUI components are responsive, ensuring they look fantastic on any screen size or device.

- **Easy Customization**: LangUI uses a two-color-only pallete. The two color pallete - slate and blue - allows for effortless customization into your brand's colors.

## Screenshots

![LangUI](./screenshots/1.png)

![Components](./screenshots/2.png)

![Preview Component](./screenshots/3.png)

## Request a Component

Have an idea for a new component? We'd love to hear from you! Simply head over to our [GitHub repository](https://github.com/ahmadbilaldev/LangUI) and submit your component request. Let's collaborate and cook up something spicy together!

## Contributing

Contributions to LangUI are highly welcome! Whether it's bug fixes, new components, or improvements, we appreciate your support in making this library better for the AI community. Please read our [contribution guidelines](CONTRIBUTING.md) to get started.

## License

LangUI is licensed under the [MIT License](LICENSE).

## Uses

- [Shades of Purple Theme](https://shadesofpurple.pro/) by [Ahmad Awais](https://ahmadawais.com/) for syntax highlighting

- [Tabler Icons](https://tabler-icons.io/)

---

Enjoy using LangUI to build stunning UIs for your AI and GPT projects.

🌟 If you find it helpful, don't forget to give it a star on GitHub! Stars are like little virtual hugs that keep us going! We appreciate every single one we receive.

For any queries or issues, feel free to open an [issue](https://github.com/ahmadbilaldev/LangUI/issues) on the repository.

Happy coding! 😊
