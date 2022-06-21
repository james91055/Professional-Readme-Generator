// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== null) {
    return `![![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== null) {
    return `\n* [License] (license)\n`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== null) {
    return `## License
  
    The content of this site is licensed under the ${license}
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Badges

  ## Description
  
  ${data.description}
  
  ## Table of Contents 

  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Credit] (#credit)
  - [License] (#license)
  - [Tests] (#test)
 

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credit

  ${data.contributing}

  ## License

  ${data.license}

  

  



  


  ## Tests

  ${data.test}


  ## Questions

  Feel free to reach out to me if you find any bugs or need help using my app!
  My Github is ${data.github} (https://github.com/${data.github})
  Email me with any question (${data.email})
  
  

;
`;
}

module.exports = generateMarkdown;
