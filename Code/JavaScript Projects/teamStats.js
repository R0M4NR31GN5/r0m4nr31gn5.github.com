const team = {
    _players: [
      {
        firstName: 'Jon',
        lastName: 'Doe',
        age: 25
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 24
      },
      {
        firstName: 'Ana',
        lastName: 'Brooks',
        age: 16
      }
    ],
    _games: [
      {
        opponent: 'Tigers',
        teamPoints: 7,
        opponentPoints: 15
      },
      {
        opponent: 'Sharks',
        teamPoints: 17,
        opponentPoints: 13
      },
      {
        opponent: 'Bears',
        teamPoints: 25,
        opponentPoints: 31
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      const player = {
          firstName: newFirstName,
          lastName: newLastName,
          age: newAge
      };
      this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game);
    }
  };
  
  team.addGame('Titans', 100, 98);
  console.log(team.games);