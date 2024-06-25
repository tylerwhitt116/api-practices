//Example fetch using pokemonapi.co


  fetch('https://api.waifu.pics/sfw/wave')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.url
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
