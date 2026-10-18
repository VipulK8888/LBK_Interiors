const fs = require('fs');
const readline = require('readline');

async function run() {
  const filePath = 'C:/Users/Vipul_kumawat/.gemini/antigravity-ide/brain/8ac78208-4dad-483f-87dc-4b6f2cef554e/.system_generated/logs/transcript_full.jsonl';
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  for await (const line of rl) {
    if (line.includes('"step_index":3486')) {
      const obj = JSON.parse(line);
      console.log('Found step 3486!');
      console.log('Keys:', Object.keys(obj));
      if (Array.isArray(obj.content)) {
        console.log('content length:', obj.content.length);
        for (let i = 0; i < obj.content.length; i++) {
          const item = obj.content[i];
          console.log(`Item ${i} keys:`, Object.keys(item));
          if (item.type) console.log(`Item ${i} type:`, item.type);
          if (item.media_type) console.log(`Item ${i} media_type:`, item.media_type);
          if (item.source) console.log(`Item ${i} source keys:`, Object.keys(item.source));
          if (item.data) console.log(`Item ${i} data length:`, item.data.length);
          if (item.path) console.log(`Item ${i} path:`, item.path);
          if (item.url) console.log(`Item ${i} url:`, item.url);
          if (item.text) console.log(`Item ${i} text:`, item.text.slice(0, 100));
        }
      } else {
        console.log('Content is string, length:', obj.content.length);
      }
      break;
    }
  }
}

run().catch(console.error);
