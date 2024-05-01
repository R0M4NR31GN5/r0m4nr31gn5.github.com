// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    };
    return newStrand;
  };
  
  const pAequorFactory = (num, arr) => {
    return {
      specimenNum: num,
      dna: arr,
      mutate() {
        let i = Math.floor(Math.random() * this.dna.length); // Random Loc on DNA
  
        let oldBase = this.dna[i]; // target base's letter
  
        // swapping out (mutating) base on DNA
        let altBases = ['A', 'T', 'C', 'G'];
        altBases.splice(altBases.indexOf(oldBase), 1); // find and remove target base
        let mutatedBase = altBases[Math.floor(Math.random() * 3)]; // take one of 3 altBases
  
        console.log(`Changed ${oldBase} to ${mutatedBase} on number ${i+1}`);
        console.log(this.dna);
  
        this.dna.splice(i, 1, mutatedBase);
        return this.dna;
      },
      compareDNA(otherPAequor) {
        let count = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === otherPAequor[i]) {
            count++;
          };
        };
        console.log(`Specimen #1 and Specimen #2 have ${count * 100/this.dna.length}% DNA in common.`);
      },
      willLikelySurvive() {
        const cAndG = this.dna.filter(letter => letter == 'C' || letter == 'G');
  
        if (cAndG.length/this.dna.length > 0.6) {
          return true;
        } else {
          return false;
        }
      }
    };
  };
  
  console.log(pAequorFactory(1, mockUpStrand()).willLikelySurvive());
  
  let sample = [];
  let i = 0;
  while (sample.length < 30) {
    let temp = pAequorFactory(i, mockUpStrand());
    if (temp.willLikelySurvive() == true) {
      sample.push(temp);
      i++;
    }
  }
  console.log(sample);