import { Last20Likes } from "../components/displays/last20likesDisplay";
import { UserPlaylists } from "../components/displays/playlistDisplay";
import "./Favorites.css";
import { ConnTest } from "../components/displays/connectionDisplay";

export interface FavoritesProps {
  username: string;
}

const Favorites: React.FC<FavoritesProps> = ({ username }) => {
  return (
    <>
      <div className="library-insights">
        <h1>{username}'s Library Insights</h1>
        <Last20Likes username={username} />
        <UserPlaylists username={username} />
        <ConnTest />
      </div>
    </>
  );
};

export default Favorites;
