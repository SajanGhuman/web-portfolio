const header = {
  homepage: 'sajanghuman.com',
  title: 'SS',
}

const about = {
  name: 'Sajan',
  role: 'Full Stack Developer',
  description: 'Just another guy who loves to make stuff.',
  social: {
    linkedin: 'https://www.linkedin.com/in/sajanghuman',
    github: 'https://github.com/SajanGhuman',
  },
}

const projects = [
  {
    name: 'Checkmate',
    description: 'Monitor your servers with confidence',
    stack: [
      'React',
      'Typescript',
      'Material UI',
      'Docker',
      'MongoDB',
      'NodeJS',
      'Recharts',
    ],
    sourceCode: 'https://github.com/bluewave-labs/Checkmate',
    blog: '',
    docs: 'https://docs.checkmate.so/checkmate-2.1/users-guide/quickstart',
    livePreview: 'https://checkmate.so/',
  },
  {
    name: 'Blog',
    description: 'Educational site where I teach web dev concepts with ease.',
    stack: ['React', 'Typescript', 'NextJs', 'CodeSandbox'],
    sourceCode: 'https://github.com/SajanGhuman/blog',
    blog: '',
    livePreview: 'https://blog.sajanghuman.com/',
  },
  {
    name: 'Datahall',
    description: 'An open source DocSend alternative.',
    stack: [
      'React',
      'NextJS',
      'Typescript',
      'Tailwind',
      'Docker',
      'Supabase',
      'PrismaORM',
    ],
    sourceCode: 'https://github.com/SajanGhuman/Minecraft-3JS',
    blog: 'https://www.linkedin.com/posts/sajanghuman_bluewavedatahall-mvplaunch-datamanagement-activity-7287899878557458432-Xn4X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZACZgBKhkysouDqbrDUPe0VCxiN7m78io',
    livePreview:
      'https://www.figma.com/design/GLFfhwOQeHmbcflgCTuMKA/DataRoom--Secure-File-Server-?node-id=0-1&p=f&t=BurBDQBvIwFRW01U-0',
  },
  {
    name: 'Khalsa Financial',
    description: 'Landing page for a Winnipeg based financial firm',
    stack: ['React', 'Typescript', 'Postgres', 'NodeJS'],
    sourceCode: 'https://github.com/SajanGhuman/Khalsa_Financial.git',
    blog: '',
    docs: 'https://docs.checkmate.so/checkmate-2.1/users-guide/quickstart',
    livePreview: 'https://khalsafinancial.ca/',
  },
  {
    name: 'Padraig',
    description:
      'Learning Management System for scheduling online meetings and delivering training courses to company employees',
    stack: ['React', 'Tailwind', 'PostgresSQL', 'Express', 'NodeJS'],
    sourceCode: '',
    livePreview: 'https://www.padraig.ca',
  },
  {
    name: 'Minecraft Clone',
    description: 'Minecraft clone made in pure Typescript and WebGL.',
    stack: ['WebGL', 'TypeScript'],
    sourceCode: 'https://github.com/SajanGhuman/Minecraft-3JS',
    livePreview: 'https://minecraft.sajanghuman.com/',
    blog: 'https://www.linkedin.com/posts/sajanghuman_typescript-threejs-gamedevelopment-activity-7228171617271496704-l0-s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZACZgBKhkysouDqbrDUPe0VCxiN7m78io',
  },
]

const blogs = {
  obj1: {
    name: '📄 Datahall — Open Source DocSend Alternative 🚀',
    link: 'https://www.linkedin.com/posts/sajanghuman_bluewavedatahall-mvplaunch-datamanagement-activity-7287899878557458432-Xn4X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZACZgBKhkysouDqbrDUPe0VCxiN7m78io',
  },
  obj2: {
    name: '🌟 4.5k+ GitHub Stars for Checkmate! ♟️🔥',
    link: 'https://www.linkedin.com/posts/bluewave-labs_were-excited-to-announce-the-official-release-activity-7288602926728560640-Brdc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZACZgBKhkysouDqbrDUPe0VCxiN7m78io',
  },
  AoC: {
    name: '💡 Advent of Code',
    link: 'https://www.linkedin.com/posts/sajanghuman_adventofcode-adventofcode-aoc-activity-7401298069738287104--Ze6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZACZgBKhkysouDqbrDUPe0VCxiN7m78io',
  },
  obj3: {
    name: '🏆 Made It to Top 10 in RampUP! 😄💡',
    link: 'https://www.linkedin.com/posts/sajanghuman_pitchprep-rampupcompetition-startupjourney-activity-7317178593581703169-mK8i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZACZgBKhkysouDqbrDUPe0VCxiN7m78io',
  },
  obj4: {
    name: '🎮 Minecraft 3JS Devlog — Part 1: Blocks & Beyond 🧱',
    link: 'https://www.linkedin.com/posts/sajanghuman_gamedevelopment-webgl-typescript-activity-7211476372953653248-ev8Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZACZgBKhkysouDqbrDUPe0VCxiN7m78io',
  },
  obj5: {
    name: '🎮 Minecraft 3JS Devlog — Part 2: Infinite World? 🌍',
    link: 'https://www.linkedin.com/posts/sajanghuman_typescript-threejs-gamedevelopment-activity-7228171617271496704-l0-s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZACZgBKhkysouDqbrDUPe0VCxiN7m78io',
  },
  obj6: {
    name: '🏡 Building a Home Server — Feels Like Cheating 🤓💻',
    link: 'https://www.linkedin.com/posts/sajanghuman_home-server-literally-feels-like-cheating-activity-7282151957148921856-bf8I?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZACZgBKhkysouDqbrDUPe0VCxiN7m78io',
  },
  obj7: {
    name: '🐧 Arch Linux Wipe & Rebuild — Weekend Madness 😤⚙️',
    link: 'https://www.linkedin.com/posts/sajanghuman_i-spent-my-weekend-afternoon-completely-reinstalling-activity-7311903716050116608-eTT8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZACZgBKhkysouDqbrDUPe0VCxiN7m78io',
  },
  obj8: {
    name: '🌀 Naruto AI Chatbot — Believe It! 🤖🍜',
    link: 'https://www.linkedin.com/posts/sajanghuman_threejs-ai-javascript-activity-7229977306688020481-kdgq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZACZgBKhkysouDqbrDUPe0VCxiN7m78io',
  },
  obj9: {
    name: '🐒 MonkeyType GitHub — Test Your Typing Speed! ⌨️',
    link: 'https://github.com/monkeytypegame/monkeytype',
  },
  obj10: {
    name: '🧩 My React Component Library — Published on GitHub 📦',
    link: 'https://github.com/users/SajanGhuman/packages/npm/package/component-library',
  },
  obj11: {
    name: '🔥 Hackathon : Upro Project Contribution',
    link: 'https://github.com/SajanGhuman/upro-web',
  },
  obj12: {
    name: '🖥️ One-Script Linux Dotfiles Setup – Simplify Your Workflow',
    link: 'https://gist.github.com/SajanGhuman/5ab609e107b9a369496488855e026fb6',
  },
  obj13: {
    name: '🐧 My Arch Linux Dotfiles — The Ultimate Setup',
    link: 'https://github.com/SajanGhuman/Dotfiles',
  },
}

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'NextJS',
  'Tailwind',
  'Material UI',
  'SASS',
  'Redux',
  'Zustand',
  'NodeJS',
  'Express',
  'RESTful API',
  'PostgresSQL',
  'MongoDB',
  'MySQL',
  'NoSQL',
  'Git',
  'Git Lab',
  'CI/CD',
  'Docker',
  'Linux',
  'Neo Vim',
  'Scrum/Kanban',
]

const contact = {
  email: 'me@sajanghuman.com',
}

export { header, about, projects, blogs, skills, contact }
