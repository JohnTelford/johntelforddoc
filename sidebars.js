/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  mySidebar: {
  'Iterative Development': [
    'overview',
  ],
  
'Define' : [
  'define',
],

'Design': [
  'design',
],

'Develop' : [
  'develop', 
  'programming',
  'webcomp',
  'workstations',
],

'Deploy': [
  'deploy',
],

'Maintain': [
  'maintain',
],

'Company': [
  'company',
],

'Experimental': [
  'experimental/JSX/examples',
  'experimental/JSX/math',
],

'Tech Talk John': [
  {
    type: 'link',
    label: 'TechTalkJohn',
    href: 'https://techtalkjohn.com',
  },
],

},

};

module.exports = sidebars;
