from spotipy.oauth2 import SpotifyClientCredentials
import spotipy

client_id = "YOUR_CLIENT_ID"
client_secret = "YOUR_CLIENT_SECRET_ID"

# BTS
lz_uri = 'spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX'

client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

results = sp.artist_top_tracks(lz_uri)