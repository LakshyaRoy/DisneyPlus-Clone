# Disney+ Hotstar Clone README

## Introduction

This repository, created by Lakshya Roy, is a web application that mimics the features of the well-known streaming platform, Disney+ Hotstar. It enables users to browse and view movies and series, construct watchlists, and access in-depth information about their preferred content.

## Table of Contents

Features

- Technologies Used
- Setup
- Usage
- Firebase Configuration
- API Integration
- Redux Toolkit
- Styling
- Routing
- Data Loading
- Authentication
- Deployment

# Features

## Home Page

Description: The Home Page serves as the initial landing page, creating a captivating first impression for users.

- Featured Content: It showcases a curated selection of movies and series fetched from the database.
- Interactive Interface: Users can click on the featured content to access more detail.
- Demo Mode: Since this is a demo page, actual streaming functionality may not be available. However, it simulates the experience of browsing content.

## Search Page

Description: The Search Page is the gateway to a vast library of content, making it easy for users to find what they're looking for.

- Real-Time Updates: It displays a constantly updated list of popular movies.
- Search Functionality: Users can enter keywords or titles in the search bar to find specific content.
- Navigation: Clicking on a search result takes users to the Details Page for in-depth information.

## Watchlist Page

Description: The Watchlist Page empowers users to personalize their streaming experience by curating a list of content they intend to watch.

- Add to Watchlist: Users can easily add movies or series to their watchlist by clicking an "Add" button.
- Real-Time Updates: The watchlist updates instantly when items are added.
- Convenience: This page serves as a handy reminder of what users plan to watch in the future.

## Series Page

Description: The Series Page caters specifically to users interested in exploring and discovering trending TV series.

- Trending Series: It presents a dynamic list of popular TV series with real-time updates.
- Search Capability: Users can search for series by name or keywords.
- Seamless Navigation: Clicking on a Card will directs users to the Details Page for more information.

## Details Page

Description: The Details Page is where users can delve deep into the specifics of a movie or series, aiding their decision to watch it.

### Includes:

- Genre
- Budget
- Revenue
- Release Date
- Status
- IMDb Rating
- Language
- Synopsis

- Watch Trailers and Discover Similar Content: Users can also watch trailers for specific movies or series and discover similar content based on their preferences. This feature enhances the overall viewing experience, allowing users to make informed choices about what to watch next.

## Technologies Used

- React.js: The core framework for building the user interface and managing components.
- Firebase (Firestore and Authentication): Firestore for real-time database and Firebase Authentication for user login.
- Redux Toolkit: Used for state management within the application.
- Ant Design: Provides pre-designed UI components for a polished look and feel.
- Styled Components: Used for styling components with dynamic CSS.
- Slick Carousel: Enables the creation of responsive and interactive carousels for content display.
- React Router DOM: Handles client-side routing for smooth navigation.
- React Redux: Used to connect React components to the Redux store.
- Millify: Converts numbers into more readable formats, useful for displaying large figures.
- React Loading Skeleton: Creates loading skeleton screens for improved user experience during data fetching.
- TMDB API: Provides real-time movie and series data to populate your application.

## Setup

- Clone the repository.
- Navigate to the project directory.
- Run `npm install` to install dependencies.
- Create a Firebase project and configure it.
- Set up Firestore database rules.
- Obtain TMDB API credentials and configure them.
- Run `npm start` to start the development server.

## Usage

- Open the application on your web browser.
- Sign in using Google Auth.
- Explore the home page for a demo.
- Use the search functionality to find movies and series.
- Add items to your watchlist.
- Visit the series page for popular series.
- Click on a movie or series for detailed information.

## Firebase Configuration

- Firebase: Create a Firebase project and configure it for Firestore database and Authentication.
- Replace Credentials: Replace the Firebase configuration in src/firebase/firebase.js with your own Firebase project credentials.

## API Integration

- TMDB API: To use the TMDB API, obtain an API key from The Movie Database.
- API Key Replacement: Replace the API key in your code where necessary, typically in files responsible for fetching TMDB data

## Redux Toolkit

- State Management: Redux Toolkit is used for efficient state management.
- Actions and Reducers: Explore the src/feature/movies/tmdbApi.js, src/feature/user/userSlice.js directory for actions, reducers.

## Styling

- Custom Styling: The UI is styled using Styled Components.
- Ant Design: Additional styling is done Ant Design components.

## Routing

- React Router DOM: Routing is handled by React Router DOM, ensuring smooth page navigation.
- Routes Configuration: Check the src/App.js directory for page navigation and route configuration.

## Data Loading

- Firestore: Home Page data is sourced from Firestore database.
- TMDB API: Data for other pages is fetched from the TMDB API.

## Authentication

- Firebase Authentication: Firebase Authentication is implemented using Google Auth for user login and logout.

## Deployment

- Deployment: The application has been deployed to Netlify, a cloud platform for hosting web projects.
- Netlify Configuration: Ensure your Netlify configuration is set up correctly for hosting.
- Continuous Deployment: Netlify can automatically deploy updates whenever you push changes to your repository.

## Contributing

Contributions are welcome. Feel free to submit a pull request or open an issue.

## Contact

If you have any questions or suggestions, feel free to contact me at my email lakshyaroy848@gmail.com

## Images

![1](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/c792b24e-c4b9-4bd6-9529-41ba0cef9a81)
![2](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/53778db7-8060-455a-a17a-f6724e2edcb9)
![3](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/eb88f06a-d307-4611-befb-355c4ec463ee)
![4](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/35d7053d-02c3-497b-92f6-fc6d8ccbfc39)
![5](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/13be48fd-0d21-4dfd-86f1-f7bd9def3a16)
![6](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/ea5cd9a6-1fb2-4921-8c13-700cda5ce69b)
![7](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/1ad22740-3d52-4eda-8aba-de471077d22d)
![8](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/ff264825-ba7f-49b9-8ac6-a1149af5d6b1)
![9](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/2f5bb325-6845-4745-a2a6-868972c2ad2b)
![10](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/3b6ced3e-6e2c-4087-b3f0-1bf41af5bd89)
![11](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/37d69fa8-f88c-4e07-bdb8-6cd7b084f19d)
![12](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/df9dc5a9-b425-48c7-a79f-7a14e41c00b7)
![13](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/1a73b172-c85c-4cb8-b686-aa57d6a8e5f5)
![14](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/c73dac26-924c-4a6a-a1cd-c7d56fc1810b)

## Mobile Responsive

![15](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/459d98b2-fcab-4864-b844-7655bfcfed88)
![16](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/366a0d9a-bfbb-4af9-9b6e-185359fd8bc8)
![17](https://github.com/LakshyaRoy/DisneyPlus-Clone/assets/110491845/b422b4aa-3257-41b8-874c-3cdf243b67c5)
