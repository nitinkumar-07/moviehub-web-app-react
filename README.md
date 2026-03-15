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
