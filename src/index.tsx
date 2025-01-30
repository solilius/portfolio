import ReactDOM from 'react-dom/client';
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import App from './App';
import MetaTags from './MetaTags';
import { aboutMe } from './data';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <HelmetProvider>
    <Analytics />
    <MetaTags info={aboutMe} />
    <App />
  </HelmetProvider>
);