import { BASE_URL, handleError } from "./apiUtils";

/**
 * POST: Create playlist for user.
 * @param { string } username
 * @param { string } playlistName
 * @param { boolean } public
 * @param { boolean } collab
 * @param { string } desc
 * @returns 200 || <Error>
 */
export async function fetchCreatePlaylist(
  username,
  playlistName,
  publicity,
  collab,
  desc
) {
  return fetch(
    `${BASE_URL}/api/favorites/playlists/create_playlist?:${username}?:${playlistName}?:${publicity}?:${collab}?:${desc}`,
    { method: "POST", headers: { "Content-Type": "application/json" } }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(handleError);
}

/**
 * POST: Add song(s) to playlist. Assumes the same username as stored in backend .env.
 * @param { int } playlist_id
 * @param { list } items
 * @returns 200 || <Error>
 */
export async function fetchAddSongToPlaylist(playlist_id, items) {
  return fetch(
    `${BASE_URL}/api/favorites/playlists/add_song?:${playlist_id}?:${items}?:${position}`,
    { method: "POST", headers: { "Content-Type": "application/json" } }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(handleError);
}
