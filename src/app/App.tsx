import { RouterProvider } from 'react-router';
import { router } from './routes';
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  return <RouterProvider router={router} />;
}
