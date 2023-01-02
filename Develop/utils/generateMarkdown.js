// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}
  
  ![alt text](assets/images/screenshot.png)

  ##Contribution
  ${data.contribution}

  ##Test
  ${data.test}

  ##Questions?
  Github link: ${data.Github}
  Email link: ${data.email}
`;
}

module.exports = generateMarkdown;
