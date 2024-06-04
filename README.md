<div align="center">
  <a href="https://www.LangUI.dev">
    <img src="./public/logo.png" alt="LangUI Logo">
  </a>
</div>

<h3 align="center">The perfect UI for your AI — Build & Deploy your own ChatGPT</h3>

<p align="center">
  <a href="https://github.com/LangbaseInc/LangUI/stargazers">
    <img src="https://img.shields.io/github/stars/LangbaseInc/langui?style=for-the-badge&label=%E2%98%85%20STAR%20US&color=%23000000" alt="GitHub Stars">
  </a>
  <a aria-label="License" href="https://github.com/LangbaseInc/langui/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&color=%23000000" alt="License">
  </a>
  <a aria-label="Langbase logo" href="https://beta.langbase.com/">
    <img src="https://img.shields.io/badge/DEPLOY%20ON-%E2%8C%98%20Langbase-000000.svg?style=for-the-badge&logo=%E2%8C%98%20Langbase&logoColor=000000">
  </a>
</p>
<hr/>

Trusted by some of the world's largest companies, developers, and investors, [LangUI](https://www.LangUI.dev) is a set of beautifully designed components that you can copy and paste to build your own ChatGPT. Free. Customizable. Open Source. 

[LangUI](https://www.LangUI.dev) is powered by Tailwind CSS with free components tailored for your AI and GPT projects. It offers a collection of beautiful, ready-to-use components to enhance the user interface of your AI applications, allowing you to focus on building the next best project while leaving the UI to LangUI.

> ⭐️ LangUI is Open Source and its 60+ components are completely free. Please star it to show your support!

![LangUI](./screenshots/1.png)

## Documentation

For documentation and components, visit [LangUI.dev](https://www.langui.dev/).

## Get Started

- LangUI components are ready-to-use, meaning you don't need to install or configure anything.

- Browse [LangUI.dev](https://www.langui.dev/) and select a comopnent.

- Copy the desired component's code in HTML or JSX from the LangUI documentation.

- Paste the code into your project's HTML or React/Vue/Angular components. Done.

- **⌘ Deploy**: You can [deploy](https://beta.langbase.com/) your own ChatGPT built with LangUI on [Langbase.com by creating a chat pipe](https://langbase.com/docs/pipe/quickstart).

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

![Components](./screenshots/2.png)

![Preview Component](./screenshots/3.png)

## Request a component

Have an idea for a new component? We'd love to hear from you! Simply head over to our [GitHub repository](https://github.com/ahmadbilaldev/LangUI) and submit your component request. Let's collaborate and cook up something spicy together!

## Contributing

Contributions to LangUI are highly welcome! Whether it's bug fixes, new components, or improvements, we appreciate your support in making this library better for the AI community. Please read our [contribution guidelines](CONTRIBUTING.md) to get started.

## License

LangUI is licensed under the [MIT License](LICENSE).

## Uses

- [Shades of Purple Theme](https://shadesofpurple.pro/) by [Ahmad Awais](https://ahmadawais.com/) for syntax highlighting

- [Tabler Icons](https://tabler-icons.io/)

## Authored By

Originally authored by [Ahmad Bilal](https://github.com/ahmadbilaldev) – Founding Engineer at Langbase.

For questions, integrations, and other discussions, feel free to reach out. 

<a href="https://github.com/ahmadbilaldev" target="_blank">
<img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://linkedin.com/in/ahmadbilaldev" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>

---

Enjoy using LangUI to build stunning UIs for your AI and GPT projects.

🌟 If you find it helpful, don't forget to give it a star on GitHub! Stars are like little virtual hugs that keep us going! We appreciate every single one we receive.

For any queries or issues, feel free to open an [issue](https://github.com/ahmadbilaldev/LangUI/issues) on the repository.

Happy coding! 😊
