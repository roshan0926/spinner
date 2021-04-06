let spaced = 100;

const spinner = ["\r|   ", "\r/   ","\r-   ","\r\\   ","\r|   ","\r/   ","\r-   ","\r\\   ","\r|   \n"];

for (const i of spinner) {
  setTimeout(() => {
    process.stdout.write(i);
  }, spaced)
  spaced += 200;
}