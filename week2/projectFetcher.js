const readline = require('readline');

// const getProjectData = async () => {

//     const response = await fetch('https://api.coingecko.com/api/CG-nTsVxM6TkPAK6ETNyfB2vW71/simple/price?ids=solana&vs_currencies=usd&include_market_cap=true')


// }

function getProjectData(input) {
  
  
    const lowerText = input.toLowerCase();

    const returnedData = async (lowerText) => {

        const response = await fetch('https://api.coingecko.com/api/CG-nTsVxM6TkPAK6ETNyfB2vW71/simple/price?ids=solana&vs_currencies=usd&include_market_cap=true')
    }
  

}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('\n🔍 TEST - Crypto Data Retriever CLI');
  console.log('=====================================');
  console.log('What cryptocurrency would you like data for?.');
  console.log('Type "exit" to quit.\n');

  const askForCoin = () => {
    rl.question('Enter name of crypto: ', (input) => {
      if (input.toLowerCase() === 'exit') {
        console.log('\nGoodbye!');
        rl.close();
        return;
      }

      if (!input.trim()) {
        console.log('Please enter some text to analyze.\n');
        askForTweet();
        return;
      }

      const result = getProjectData(input);

      console.log('\n--- Data Result ---');
      
      console.log('-----------------------\n');

      askForCoin();
    });
  };

  askForCoin();
}

main();