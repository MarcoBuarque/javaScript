const atv1 = () => {
  const songDecoder = song => {
    for (let i = 0; i < song.length; i++) {
      if (song.slice(i, i + 3) === 'WUB') {
        if (song[i - 1] === ' ') {
          song = song.slice(0, i) + song.slice(i+ 3)
          i -= 1
        } else {
          song = song.replace('WUB', ' ')
          i -= 1
        }
      }
    }

    return song.trim()
  }
  console.log(songDecoder('AWUBBWUBC'))
  console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC'))
  console.log(songDecoder('WUBAWUBBWUBCWUBWUBWUB'))
  console.log(songDecoder('WUBWUBOWUBWUBWUBIPVCQAFWYWUBWUBWUBQWUBWUBWUBXHDKCPYKCTWWYWUBWUBWUBVWUBWUBWUBFZWUBWUB'))
  console.log('  abc  '.trim().length)
}

const atv2 = () => {

}

const atv3 = () => {

}

atv1()