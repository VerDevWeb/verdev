function show_chat(){
    document.getElementById('chat').style.display = 'flex';
    document.getElementById('home').style.display = 'none';
    document.getElementById('search').style.display = 'none';
    document.getElementById('admin').style.display = 'none';
    animate1('chat');
}

function show_search(){
    document.getElementById('chat').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('search').style.display = 'flex';
    document.getElementById('admin').style.display = 'none';
    animate1('search');
}


function show_home(){
  document.getElementById('chat').style.display = 'none';
  document.getElementById('home').style.display = 'flex';
  document.getElementById('search').style.display = 'none';
  document.getElementById('admin').style.display = 'none';
  animate1('home');
}

function show_admin(){
  document.getElementById('chat').style.display = 'none';
  document.getElementById('home').style.display = 'none';
  document.getElementById('search').style.display = 'none';
  document.getElementById('admin').style.display = 'flex';
  animate1('admin');
}


const clientID = '79b718cb91084843b5b4a9f3578244d4';
const clientSecret = 'e7e5a6bccd' + 'b741678d' + 'a5ab5c59c0ac1c';


async function ottieniAccessToken() {
  const tokenEndpoint = 'https://accounts.spotify.com/api/token';
  const authString = btoa(`${clientID}:${clientSecret}`);
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${authString}`
  };
  const requestBody = 'grant_type=client_credentials';

  try {
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: headers,
      body: requestBody
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {;
    console.error('Errore nell\'ottenere l\'access token:', error);
    return null;
  }
}

async function cercaSuSpotify() {
  const songTitle = document.getElementById('songTitle').value;
  const formattedTitle = encodeURIComponent(songTitle);
  const accessToken = await ottieniAccessToken();

  const searchUrl = `https://api.spotify.com/v1/search?q=${formattedTitle}&type=track`;
  
  try {
    const response = await fetch(searchUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    const data = await response.json();
    mostraRisultati(data);
  } catch (error) {
    console.error('Errore nella ricerca:', error);
  }
}

function mostraRisultati(data) {
    const risultatiDiv = document.getElementById('risultati');
    risultatiDiv.innerHTML = '';
  
    const tracks = data.tracks.items;
    if (tracks.length === 0) {
      risultatiDiv.innerHTML = 'Nessun risultato trovato.';
      return;
    }
  
    const containerDiv = document.createElement('div'); 
  
    tracks.forEach(track => {
      const nomeArtista = track.artists.map(artist => artist.name).join(', ');
      const nomeCanzone = track.name;
      const linkSpotify = track.external_urls.spotify;
  
      const divRisultato = document.createElement('div'); 
      divRisultato.classList.add('card1'); 
  
      const link = document.createElement('a');
      link.href = linkSpotify;
      link.target = '_blank';
      link.textContent = `${nomeCanzone} - ${nomeArtista}`;
      link.className = 'a1';
      var song_name = `${nomeCanzone} - ${nomeArtista}`;
  
      const div = document.createElement('div');
      div.style.display = 'flex';
      div.style.flexDirection = 'column';

      const button = document.createElement('button');
      const p = document.createElement('p');
      p.textContent = 'Aggiungi';
      p.style.marginTop = '0rem'
      p.style.marginBottom = '0rem'
      button.textContent = 'add_circle';
      button.className = 'material-symbols-outlined notranslate button1';
      div.addEventListener('click', function() {
        sendMessage(linkSpotify, song_name);
      });
  
      divRisultato.appendChild(link);
      divRisultato.appendChild(div)
      div.appendChild(button);
      div.appendChild(p);
      containerDiv.id = 'risultati';
      containerDiv.appendChild(divRisultato); 
    });

    risultatiDiv.appendChild(containerDiv);
  }
  

