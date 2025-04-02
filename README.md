# Movie Gallery Application - Frontend (React + TypeScript + Vite)

## Overview

This is a Movie List application built using Vite, React, and TypeScript. The application allows users to manage a list of movies, including viewing, creating, updating, and paginating through movies. It also supports authentication and localization (i18n).

## Requirement met description:
1. Deployed through `AWS S3`. ✅
2. Strictly following Figma design, totally `responsive` for `all screen sizes`. ✅
3. `Form validation` implemented, including `image size limitation`. ✅
4. Movie list `pagination`. ✅
5. `State management`, both local and global with `@reduxjs/toolkit` and `React query`. ✅
6. `l10n` for EN and FR. ✅


## Bonus done:
7. `Global theme` configured for long-term maintenance such as `Palette`, `Typography`, etc. ✅
8. `Reusable components` created, such as `MyInput`, `MyButton`, `MyCheckbot` for future reuse. ✅
9. UI refined with `Friendly Alert`,  `Animations`, `file Drag n Drop`, `Back Button`, `Skeleton` `Loading indicator`, etc. ✅
10. Performance optimized such as `Performace hooks usage`, `Dynamic import`, `memo()`, `Cache data`,etc to improve UX. ✅
11. Use `React Query` to handle api calls. ✅
12. `Snack bar`, `404 Not Found Page` added for better UX. ✅
13. `Protected routes` implemented. ✅

## Installation
1. Clone the repository:
```shell
git clone https://github.com/MaxBay2020/movie_app_FE
cd movie_app_FE
```

2. Install dependencies:
```shell
npm install 
# or 
yarn
```

3. Set up environment variables:
Create a `.env` file in the root directory and configure it based on `.env.example` file.


4. Start the development server:
```shell
npm run dev
# or
yarn dev 
```

## Build and Deployment
1. To create a production build:
```shell
npm run build
# or
yarn build 
```

2. To preview the production build locally:
```shell
npm run preview
# or
# yarn preview 
```

## Usage
1. Log in to access the movie list.
2. Browse through the paginated movie list.
3. Click on a movie to view its details.
4. Create a new movie using the "Add Movie" feature.
5. Edit or update an existing movie.
6. Use the logout feature to sign out securely.
7. Change the language using the localization feature.





