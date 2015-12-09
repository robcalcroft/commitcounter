# commitcounter
Add this to your project to view your contributors commit counts

# Install
```bash
npm install commitcounter
```

# Usage
```javascript
require("commitcounter")(function(err, commit) {
  if(err) {
    throw new Error(err);
  }
  
  // {
  //   "Rob Calcroft": 41,
  //   "Joe Bloggs": 30,
  //   "Tim Tom": 5
  // }
  console.log(commit);
});
```
