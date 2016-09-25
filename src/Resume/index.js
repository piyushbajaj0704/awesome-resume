import React, { Component } from 'react';
import Container from '../ui/Container';
import Sidebar from './Sidebar';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class Resume extends Component {
  render() {
    return (
      <Container>
        <Header {...DATA.main} />
        <div style={{ display: 'flex' }}>
          <Main {...DATA.main} />
          <Sidebar data={DATA.sidebar} />
        </div>
        <Footer links={DATA.footerLinks} />
      </Container>
    );
  }
}

const DATA = {
  sidebar: {
    education: {
      university: 'University of Waterloo',
      duration: 'Sept 2013 - now',
      degree: 'Bachelor of Software Engineering'
    },
    languages: [{
      name: 'JavaScript',
      proficiency: 0.8,
    }, {
      name: 'HTML/CSS',
      proficiency: 0.4,
    }, {
      name: 'Scala',
      proficiency: 0.6,
    }, {
      name: 'Python',
      proficiency: 0.6,
    }, {
      name: 'Java',
      proficiency: 0.6,
    }, {
      name: 'C++',
      proficiency: 0.6,
    }, {
      name: 'BASH',
      proficiency: 0.3,
    }],
    databases: [
      'MongoDB',
      'PostgreSQL',
      'MySQL'
    ],
    libraries: [
      'React',
      'React Native',
      'Redux',
      'Immutable',
      'Node.js',
      'Express',
      'Koa',
      'Django',
      'Angular',
      'Mocha',
      'jQuery',
      'Meteor',
      'Sass',
      'Android SDK'
    ],
    tools: [
      'Unix',
      'Git',
      'Webpack',
      'Gulp',
      'Grunt',
      'Browserify',
      'AWS',
      'Docker'
    ],
    interests: [
      'I <b>learn</b> about web, data science, and, algorithms.',
      'I <b>dominate</b> in badminton, ping pong, League of Legends, and Tetris.',
      'I <b>love</b> tacos, anime, bubble tea, fitness, tourism, and team players.',
      'I <b>hate</b> doing planks.'
    ],
    links: [{
      name: 'Phone',
      faClass: 'fa fa-phone',
      display: '647 571 9781',
      link: 'tel:+16475719781',
    }, {
      name: 'Email',
      faClass: 'fa fa-envelope',
      display: 'c8hoang@uwaterloo.ca',
      link: 'mailto:c8hoang@uwaterloo.ca',
    }, {
      name: 'GitHub',
      faClass: 'fa fa-github',
      display: 'github.com/clemmy',
      link: 'https://github.com/clemmy',
    }],
  },
  footerLinks: [{
    name: 'Website',
    faClass: 'fa fa-fire',
    display: 'clemmy.ninja',
    link: 'http://clemmy.ninja',
  }, {
    name: 'Blog',
    faClass: 'fa fa-book',
    display: 'blog.clementhoang.net',
    link: 'http://blog.clementhoang.net',
  }, {
    name: 'Linkedin',
    faClass: 'fa fa-linkedin',
    display: 'linkedin.com/in/clementhoang',
    link: 'https://www.linkedin.com/in/clementhoang',
  }],
  main: {
    firstName: 'Clement',
    lastName: 'Hoang',
    program: {
      term: '3B',
      nickname: 'Software Engineering',
      name: 'Software Engineering',
    },
    website: {
      name: 'clemmy.ninja',
      link: 'http://clemmy.ninja'
    },
    companies: [{
      name: 'Zenreach',
      title: 'Front-end Developer',
      color: 'rgb(77, 100, 141)',
      date: 'Spring 2016',
      location: 'San Francisco',
      achievements: [
        'Worked on customer dashboard with drag & drop email composer, hotspot landing page customization, and customer management using <b>React</b> with a <b>Django</b> backend',
        'Improved the stability of <b><a href="https://github.com/quilljs/quill/releases/tag/v1.0.0-beta.8">Quill</a></b>, an open-sourced WYSIWG editor written in <b>ES6</b>, with over <b>10k</b> stars on Github',
        'Built interactive visualization tool for customer email client data, made insights, and improved product browser coverage to over <b>99%</b>',
        'Added event tracking infrastructure throughout the customer dashboard and performed behavioural analytics with <b>Amplitude</b>'
      ],
    }, {
      name: 'Datera',
      color: 'rgb(77, 100, 141)',
      title: 'Full Stack JavaScript Developer',
      date: 'Fall 2015',
      location: 'Mountain View',
      achievements: [
        'Successfully led a development team into building an interactive API explorer with autogenerated documentation, similar to POSTMAN, using <b>Angular</b>',
        'Worked with the team to implement features and fix faults for an administrative application that allows users to view and configure distributed storage systems through iSCSI LUNS with <b>Node.js</b>',
        'Added core features to an in-house <b>Javascript</b> SPA framework including duplex streams for model access and <b>React</b> support',
        // 'Collaborated with client engineers to implement a CLI for interacting with the distributed system',
        'Reduced JS bundle size by over <b>50%</b> by de-duplicating the dependency tree'
      ],
    }, {
      name: 'Ten Thousand Coffees',
      title: 'Software Engineering Intern',
      color: 'rgb(77, 100, 141)',
      date: 'Winter 2015',
      location: 'Toronto',
      achievements: [
        'Re-architected the entire messaging system to support multiple participants and an user-friendly scheduling system using the <b>MEAN</b> stack',
        'Improved user retention on platform by <b>20%</b> using Mandrill for transactional and digest emails by running A/B tests with KissMetrics',
        'Added internationalization support for the entire application with angular-translate',
      ]
    }],
    projects: [{
      name: 'Vio',
      tools: ['React', 'Redux', 'ES6', 'Go', 'PostgreSQL', 'Google Cloud'],
      link: 'https://github.com/jasonf7/memories-of-harambe',
      achievements: [
        'Built a mobile-friendly web application that allows users to film location-based video diaries with sentimental analysis.'
      ]
    }, {
      name: 'Coastline Market',
      tools: ['MongoDB', 'Angular', 'Node.js', 'ES7', 'Express', 'AWS'],
      link: 'http://www.coastlinemarket.com',
      achievements: [
        'Worked with a small team to build a startup that solves a lot of the fishing industry\'s pain points. The product includes e-commerce for fishing as well as inventory management software as a service.'
      ],
    }, {
      name: 'Query',
      tools: ['Socket.io', 'Express', 'Angular', 'Clusterpoint', 'Pebble'],
      link: 'http://queryhacks.herokuapp.com',
      achievements: [
        'Built a pebble and web application that lets users ask questions anonymously during lectures in a classroom environment in real time that won HackingEDU 2015\'s best Clusterpoint Hack award',
      ],
    }],
  },
};

export default Resume;
