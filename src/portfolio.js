const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'EWM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'EllanWambugu',
  role: 'Software engineer',
  description:
    'Hey there! I’m a Solutions architect , the digital dreamweaver, weaving complex technology into seamless solutions. I decode business needs, creating blueprints that foresee the future while juggling scalability, security, and performance.',
  resume: 'https://www.linkedin.com/in/ellan-wambugu-93b32a187/',
  social: {
    linkedin: 'https://www.linkedin.com/in/ellan-wambugu-93b32a187/',
    github: 'https://github.com',
  },


const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'merchants.ebiashara.com',
    description:
      'Setup the infrastructure of our payment gateway end to end on AWS based on the 5 pillars, Intergrated DevSecOps practices into the system using scripts for securing the VMs, Cloud Finops scripts for cost management,System Administration and Troubleshooting',
    stack: ['Skills: AWS Lambda · React.js · DevSecOps · Python (Programming Language) · Continuous Integration and Continuous Delivery (CI/CD) · AWS Security'],
  },
  {
    name: 'smartnyumba.org',
    description:
      'An automated Apartment management solution for commercial and private residencies. Did the Infrastructure and security setup, Upon scaling working on migrating the code to a serverless setup using aws lambda and graphql',
    stack: ['Skills: Django REST Framework · AWS SageMaker · AWS Lambda · AWS IoT · AWS Security · AWS CodePipeline'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'supplychain.ebiashara.com',
    description:
      'System Administration and cloud support engineering on our supply chain Finance platform',
    stack: ['Skills: Azure DevOps Services · Gitlab · Windows Server · AWS Identity and Access Management (AWS IAM) · AWS Lambda'],
  },
]

const skilled In = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  
  'Golang',
  'Python',
  'Scala'
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rhavid18@gmail.com',
}
const Blogs = [
  // Blogs
  // if there are no skills, Skills section won't show up
  
  Find my blogs: 'https://www.linkedin.com/in/ellan-wambugu-93b32a187/recent-activity/all/',
]
const Certifications = [
  Contributor-Azure Identity and Access Management 2022 Q2: 'https://www.credly.com/badges/428a20d4-bb7d-4c36-adaa-a7f41bf1fa49?source=linked_in_profile',
  stack ['Skills:  Cloud Security · Continuous Integration and Continuous Delivery (CI/CD)'],
  Amazon Web Services Solutions Architect - Associate,
  stack['Skills: Site Reliability Engineering'],
 Google Cybersecurity Specialization : 'https://www.coursera.org/account/accomplishments/specialization/certificate/UJFZEZ2PDFHT',
  stack['Skills: Cybersecurity Incident Response · Security Information and Event Management (SIEM)'],
]

export { header, about, projects, skilled In, contact, Blogs, Certifications }
