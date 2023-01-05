// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None"){
    return ""
  } else if(license === 'Apache'){ 
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if(license === 'Boost'){ 
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if(license === 'GNUGPLv3'){ 
      return'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if(license === 'ISC'){ 
      return'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if(license === 'MIT'){ 
      return'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if(license === 'Mozilla'){ 
      return'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if(license === 'Unlicense'){ 
      return'[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None"){
    return "" 
  } else if(license === 'Apache'){
      return '(https://www.apache.org/licenses/LICENSE-2.0)'
  } else if(license === 'Boost'){
      return '(https://www.boost.org/users/license.html)'
  }  else if(license === 'GNUGPLv3'){
      return '(https://www.gnu.org/licenses/gpl-3.0.en.html)'
  }  else if(license === 'ISC'){
      return '(https://www.isc.org/licenses/)'
  }  else if(license === 'MIT'){
      return '(https://choosealicense.com/licenses/mit/)'
  }  else if(license === 'Mozilla'){
      return '(https://www.mozilla.org/en-US/MPL/2.0/)'
  } else if(license === 'Unlicense'){
      return '(https://unlicense.org/)'
  }  
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  } 
    else {
      return [`This project is covered under the ${license} license.`] +
    [`${renderLicenseLink(license)}`]
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation Instructions](#Installation)
  - [Usage Information](#Usage)
  - [Contribution Guidelines](#Contribution)
  - [Test Instructions](#Test)
  - [Questions](#Questions)
  - [License](#License)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ![alt text](Assets/images/2023-01-05 (2).png)
  ![alt text](Assets/images/2023-01-05 (5).png)

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions?
  - Github link: https://github.com/${data.github}
  - Email link: ${data.email}

  ## License
    ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
