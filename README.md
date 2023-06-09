# Project Name: News-Feed

This is a React Native project built with Expo that fetches and displays articles from a news API. It includes a search bar and various filters to customize your search based on your interests. The app also supports a dark theme and multiple language options for enhanced user experience.

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- npm or yarn
- Expo CLI

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   git clone https://github.com/Sushmit-Bhalothia/News-feed

2. Navigate to the project directory:
   cd News-feed

3. Install dependencies:

npm install/yarn install

4. Set up API key:

Obtain an API key from the [News API](https://newsapi.org/) website. Replace `<YOUR_API_KEY>` in the `fetchUrl` variable inside `Articles.tsx` with your API key.
here i am providing the api key in .env.example file you can directly rename that file to .env to use my api key

5. Run the project:

expo start

6. Expo Dev Tools will open in your default browser. From there, you can choose to run the app on a connected device/emulator or in a web browser .
   OR u can use expo go app to run on your local handset

7. Follow the on-screen instructions to launch the app on your desired platform.

## Customization

- Localization: The project uses the `react-i18next` library for localization. You can customize the translations by modifying the translation files in the `locales` directory.

- Theming: The project uses the `@rneui/themed` library for theming. You can customize the theme colors and styles by modifying the `styles` object in the respective components.
