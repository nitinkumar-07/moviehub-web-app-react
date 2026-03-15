# 🎬 FilmyFy – Movie & TV Show Streaming App

FilmyFy is a modern movie discovery and streaming web app built using **React, TypeScript, and TMDB API**.  
Users can explore trending movies, TV shows, search for content, filter by genres, and instantly stream them.

---

## 🚀 Features

✨ Trending Movies & TV Shows  
🔎 Multi Search (Movies + TV Shows)  
🎭 Genre Based Movie Filtering  
🎬 Movie & TV Show Streaming Player  
🌙 Dark / Light Theme Toggle  
📱 Responsive Grid Layout  
⚡ Fast API based data fetching with custom hooks  

---

## 🖥️ Live Demo

*https://moviehub0.netlify.app/*

## 🛠️ Tech Stack

| Technology | Usage |
|------------|------|
| React | Frontend Framework |
| TypeScript | Type Safety |
| React Router | Navigation |
| Context API | Global State |
| TMDB API | Movie & TV data |
| Tailwind CSS | Styling |
| Axios | API requests |

## 📂 Project Structure

```bash
src
│
├── components
│   ├── Genres.tsx
│   ├── MovieCard.tsx
│   ├── MovieList.tsx
│   ├── MoviePlayer.tsx
│   ├── Navbar.tsx
│   ├── SearchList.tsx
│   ├── TvShowCard.tsx
│   ├── TvShowList.tsx
│   ├── TvShowPlayer.tsx
│   └── Trending
│       ├── Trending.tsx
│       ├── TrendingMovie.tsx
│       └── TrendingTv.tsx
│
├── context
│   ├── genres.context.tsx
│   ├── searchResult.context.tsx
│   └── theme.context.tsx
│
├── hooks
│   ├── useMovies.ts
│   ├── useTvShow.ts
│   ├── useTrending.ts
│   └── useMultiSearch.ts
│
├── routes
│   └── AllRoutes.tsx
│
├── services
│   └── api-client.ts
│
└── App.tsx
```

# 📸 Screenshots
## 🏠 Home (Trending) 

<img width="1902" height="971" alt="Image" src="https://github.com/user-attachments/assets/41a68296-b1f6-46af-8e83-1bc296cd2d46" />

## 🎬 Trending TvShows

<img width="1893" height="959" alt="Image" src="https://github.com/user-attachments/assets/09b693d4-e0b0-4c17-b139-fbada378985e" />

## 🎬 Movie List

<img width="1897" height="958" alt="Image" src="https://github.com/user-attachments/assets/969772fe-df6b-4e04-a42b-fae136f1b917" />

## 📺 TV Shows

<img width="1894" height="961" alt="Image" src="https://github.com/user-attachments/assets/3ebd4873-25ce-4c71-8159-6337e6d67c35" />

## ✨ Genre 

<img width="1899" height="967" alt="Image" src="https://github.com/user-attachments/assets/7d88e967-abee-49b7-8827-fd0eb0b036c2" />

## 🔎 Search

<img width="1903" height="961" alt="Image" src="https://github.com/user-attachments/assets/c63248e0-ff93-434a-9adc-189b4e2fe70e" />


## 📡 API Used

This project uses The Movie Database (TMDB) API

Endpoints used:
```bash
/trending/movie/day
/trending/tv/day
/discover/movie
/discover/tv
/search/multi
```

## 🧠 Learnings

• While building this project, I practiced:

• React component architecture

• Custom React Hooks

• API data fetching

• Context API state management

• Dynamic routing with React Router

• UI design using TailwindCSS

## 📌 Future Improvements

• Movie details page

• Watchlist / Favorites

• Pagination

• Skeleton loading

• Trailer integration

## 👨‍💻 Author

## Nitin Kumar

🔗 GitHub

https://github.com/nitinkumar-07


🔗 LinkedIn

https://www.linkedin.com/in/nitin-kumar-491813336/
