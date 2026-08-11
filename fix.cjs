const fs = require('fs');
let c = fs.readFileSync('src/components/About.jsx', 'utf8');

// Find the start of the bad string
const badStartStr = "  import PHOTO from '../assets/profile.jpg';base64,";
const startIdx = c.indexOf(badStartStr);
if (startIdx !== -1) {
  // Find the end of the line (";\n") after startIdx
  const endIdx = c.indexOf('\n', startIdx);
  if (endIdx !== -1) {
    const badText = c.substring(startIdx, endIdx);
    c = c.replace(badText, "  import PHOTO from '../assets/profile.jpg';");
    fs.writeFileSync('src/components/About.jsx', c);
    console.log("Fixed!");
  } else {
    console.log("Newline not found");
  }
} else {
  console.log("Bad string not found");
}
