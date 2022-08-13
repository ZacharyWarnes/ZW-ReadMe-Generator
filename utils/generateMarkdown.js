// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license == 'None') {
    return '';
  } else {
    return`![license badge](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license == 'None') {
  return '';
} else {
  return `* [License](#license)`
}


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return '';
  } else {
    return `## License
    This application is protected under a ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {



  return `# ${data.title} - ${renderLicenseBadge(data.license)}

  ## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contribution Guidelines](#contribution)
* [Test](#test)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contribution Guidelines

${data.contribution}

## Test

${data.test}

## Questions

Please submit questions via email or Github:

* [Github](https://www.github.com/${data.github})
* [Email](mailto:${data.email})

`; 


}

module.exports = generateMarkdown;
