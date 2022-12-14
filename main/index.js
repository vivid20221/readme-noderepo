const inquirer = require('inquirer');
const fs = require('fs');


const generateREADME = ({ title, Description, Installation,  Links, }) =>
  `
  ## <a href="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /></a>
  ---
  # ${title}
  
  
  
  
  ## About this Project 
  ${Description}
  
  

  
  ## Installation 
  ${Installation}
  
 
  
  ## How to 
  
  

  
 
  
      
  

  
  
  
  ---
  
  
  

  
  
  
  ## link to GitHub Project ${Links}

  ## MIT License

  Copyright (c) [2022] [Julian Jaurgeui]
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.`;

  
  
  

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: ' What is the name of your project?',
    },
   
    {
      type: 'input',
      name: 'Description',
      message: 'Provide a short description explaining the what, why, and how of your project.',
    },
   
    {
      type: 'input',
      name: 'Installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    
    
    {
      type: 'input',
      name: 'Links',
      message: 'Provide a link to your project on GitHub',
    }
  ])
  .then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
