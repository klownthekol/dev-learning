const readline = require('readline');

async function getProjectData(input) {
  
  const lowerText = input.toLowerCase();
  
  const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${lowerText}&vs_currencies=usd&include_market_cap=true&x_cg_demo_api_key=CG-nTsVxM6TkPAK6ETNyfB2vW71`);

  const returnedData = await response.json();

  return returnedData;

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

    rl.question('Enter name of crypto: ', async (input) => {

      if (input.toLowerCase() === 'exit') {

        console.log('\nGoodbye!');
        rl.close();
        return;

      }

      if (!input.trim()) {

        console.log('Please enter some text to analyze.\n');
        askForCoin();
        return;

      }
      
      const result = await getProjectData(input);
      const coinKey = Object.keys(result)[0];


      console.log(`Retrieved data: Price - ${result[coinKey].usd} Marketcap - ${result[coinKey].usd_market_cap}`);

      askForCoin();
    });
  };

  askForCoin();
}

main();