# Incubator Hacks Website

Welcome to the official website for Incubator Hacks!

Incubator Hacks is a dynamic 2-day tech conference designed for newcomers to dive into cutting-edge technologies, craft innovative project pitches, and compete for post-event mentorship. Participants collaborate to develop solutions using niche tools, with winning teams securing hands-on guidance from industry-experienced mentors to bring their ideas to life after the event.

## Features
- Modern React + TypeScript + Vite stack
- Responsive landing page and about section
- Sponsor and team sections
- Custom SVG logo and branding
- Tailwind CSS for rapid styling

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or yarn

### Installation
1. Clone this repository:
   ```sh
   git clone <your-repo-url>
   cd Incubator-Hacks-II-Website
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Development
To start the development server with hot reloading:
```sh
npm run dev
# or
yarn dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
To build the site for production:
```sh
npm run build
# or
yarn build
```
The output will be in the `dist/` folder.

### Linting
To check for lint errors:
```sh
npm run lint
# or
yarn lint
```

## Project Structure
- `src/` — Main source code
  - `App.tsx` — Main application file
  - `components/` — Reusable React components
  - `assets/` — Images and SVGs
  - `index.css` — Global and Tailwind styles
- `public/` — Static files (if used)
- `index.html` — Main HTML template

## Customization
- Update event details, images, and sponsor logos in the `src/assets/` folder.
- Edit content in `App.tsx` and components as needed.

## License
This project is open source and available under the MIT License.

---

Made with ❤️ from Incubator Hacks Organizer Team