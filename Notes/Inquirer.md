# Inquirer NPM
<div>
    <ul>
        <li>This is an NPM package</li>
        <li>Used for getting user inputs </li>
        <li>This is just a documentation on already used cases based on experience. For the whole documentation of the inquirer package, refer to: <a href="https://github.com/SBoudrias/Inquirer.js/tree/main/packages/inquirer">https://github.com/SBoudrias/Inquirer.js/tree/main/packages/inquirer</a></li>
    </ul>
</div>

### Installation
On terminal:
```shell
npm install inquirer
```

### Sample Implementation:
```javascript
import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
```

## Use Cases
### 