import { createClient } from "redis";
const client = createClient();

async function processSubmittion(submission: string) {
  const { problemId, code, language, userId } = JSON.parse(submission);

  console.log(`Processing submission for problem id: ${problemId}`);
  console.log(`Code: ${code}`);
  console.log(`language: ${language}`);
  console.log(`userId: ${userId}`);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Finished processing submission for problem id: ${problemId}`);
}

async function startWorker() {
  try {
    await client.connect();
    console.log("Worker connected to redis!");

    while (true) {
      try {
        const submission = await client.brPop("problems", 0);
        // @ts-ignore
        // await processSubmittion(submission);
        console.log(submission)
      } catch (e) {
        console.error("Error processing submission:", e);
        
      }
    }
  } catch (e) {
    console.error("Error processing submission:", e);
  }
}


startWorker()