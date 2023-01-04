// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge= {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    GNUGPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',  
    Unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
  }
    if (license=>{licenseBadge(license)});
      else {''}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink= {
    Apache: '(https://www.apache.org/licenses/LICENSE-2.0)',
    Boost: '(https://www.boost.org/users/license.html)',
    GNUGPLv3: '(https://www.gnu.org/licenses/gpl-3.0.en.html)',
    ISC: '(https://www.isc.org/licenses/)',
    MIT: '(https://choosealicense.com/licenses/mit/)',
    Mozilla: '(https://www.mozilla.org/en-US/MPL/2.0/)',
    Unlicense: '(https://unlicense.org/)',
  }
    if (license=>{licenseLink(license)});
      else {''}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection= ''
    if (license=>{licenseSection(data.license[0])});
      else {''}
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  
  ![alt text](assets/images/screenshot.png)

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions?
  - Github link: ${data.Github}
  - Email link: ${data.email}
`;
}

module.exports = generateMarkdown;
