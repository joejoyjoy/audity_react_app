import { TrackProvider } from "./context/currentTrack/TrackContext";
import { RouterProvider } from "react-router-dom";
import router from './router/router';

const App = () => {
  return (
    <TrackProvider>
      <RouterProvider
        router={router}
        fallbackElement={<></>}
      />
    </TrackProvider>
  );
}

export default App;