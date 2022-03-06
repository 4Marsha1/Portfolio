import edvora from '../static/edvora.jpg'
import budget from '../static/budgets.jpg'
import textToSpeech from '../static/text-to-speech.jpg'
import sorting from '../static/sorting.jpg'
import wiki from '../static/wiki-search.jpg'
import tracker from '../static/tracker.jpg'
import githubWeekly from '../static/github-weekly.jpg'
import vaidya from '../static/vaidya.jpg'
import cuvette from '../static/cuvette.jpg'

const projects = [
    {
        id: 1,
        name: 'Edvora',
        img: edvora,
        tech: ['ReactJS', 'Redux', 'CSS', 'REST API'],
        desc: [
            '01. To implement React and Redux',
            '02. Data is fetched from an API, the data is then sorted category wise and displayed',
            '03. User can view various products and prices.The filter option enables user to filter by brand name, state, city.Once a product is selected, one can filter the states for that product specifically, and once a state is selected, one can filter by cities of that state too.'
        ],
        sourceCode: 'https://github.com/4Marsha1/Edvora',
        live: 'https://edvora-abhishekbharadwaz.netlify.app/'
    },
    {
        id: 8,
        name: 'Vaidya',
        img: vaidya,
        tech: ['NodeJS', 'Express', 'EJS', 'MongoDB', 'Mongoose'],
        desc: [
            '01. A medical-help center web application that will help connecting local hospitals to people.',
            '02. It acts as an information center that will provide a user with all the details they need about the medical outlets nearby.',
            '03. Users can also enter there through the forms and changes will be reflected in the website'
        ],
        sourceCode: 'https://github.com/SRV1030/Vaidya',
        live: 'https://murmuring-ravine-06450.herokuapp.com/'
    },
    {
        id: 4,
        name: 'Sorting Visualizer',
        img: sorting,
        tech: ['ReactJS', 'CSS'],
        desc: [
            '01. To help visualize the various sorting Algorithms',
            '02. Applied the sorting algorithms with extra parameters to help animate the sorting process.',
            '03. A random array can be generated, that is displayed as bar graph. 6 Buttons are available for 6 sorting algorithms: insertion, bubble, selection, merge, quick and count.Each button applies the sorting algorithm and animated the bar graph from unsorted to sorted arrangement'
        ],
        sourceCode: 'https://github.com/4Marsha1/SortingVisualizer',
        live: 'https://sorting-vis-react.netlify.app/sortvisually/homescreen'
    },
    {
        id: 2,
        name: 'Budget Planner',
        img: budget,
        tech: ['ReactJS', 'Redux', 'CSS', 'REST API', 'CRUD'],
        desc: [
            '01. To provide ease of making budget, adding expenses and keeping track.',
            '02. The app demonstrates CRUD operations.The data is store in the local storage.The data is collected using basic forms.',
            '03. One can make budgets with a name and max amount.One can add expenses with name, amount and category(either one of the budgets or uncategorized).'
        ],
        sourceCode: 'https://github.com/4Marsha1/BudgetApp',
        live: 'https://budget-app-crud.netlify.app/'
    },
    {
        id: 9,
        name: 'ToDo App',
        img: cuvette,
        tech: ['ReactJS', 'Redux', 'CSS', 'NodeJS', 'MongoDB', 'Mongoose', 'REST API', 'CRUD'],
        desc: [
            '01. To provide ease of making todo and plans.',
            '02. The app demonstrates CRUD operations.The data is stored in mongoDB through the nodeJS server.',
            '03. One can signup, make todos, and plan accordingly.'
        ],
        sourceCode: 'https://github.com/4Marsha1/CuvetteCodoctober',
        live: 'https://team-hackoverflowit.netlify.app/codoctober/home'
    },
    {
        id: 3,
        name: 'Text-To-Speech',
        img: textToSpeech,
        tech: ['HTML', 'CSS', 'JavaScript', 'SpeechSynthesis'],
        desc: [
            '01. Convert text to speech in multiple accents',
            '02. Input the text in a textarea, and select the accent, we want to hear in.The app makes use of the SpeechSynthesis class',
            '03. We can set a rate, pitch and accent of the voice, On hitting enter, we recieve the audio output of the text input in our desired way.'
        ],
        sourceCode: 'https://github.com/4Marsha1/VanillaJs/tree/main/Apps/TextToSpeech',
        live: 'https://sqweakit.netlify.app/'
    },
    {
        id: 5,
        name: 'Wikipedia Blog Search',
        img: wiki,
        tech: ['ReactJS', 'Redux', 'CSS', 'REST API'],
        desc: [
            '01. Read any article at your fingertip.',
            '02. Type in the Keyword(s) and number of artilces you want to fetch',
            '03. Uses the Wikipedia API to fetch articles based on keywords and number of articles requested'
        ],
        sourceCode: 'https://github.com/4Marsha1/WikiSearch',
        live: 'https://wiki-search-api.netlify.app/'
    },
    {
        id: 6,
        name: 'Exercise Tracker',
        img: tracker,
        tech: ['NodeJS', 'Express', 'EJS', 'MongoDB', 'Mongoose'],
        desc: [
            '01. To track exercise',
            '02. One can keep track of exercise per user. One can create User and add exercise completed.',
            '03. Basic CRUD app made with NodeJS for server-side, EJS for templating, and mongoDB & Mongoose for database purposes.'
        ],
        sourceCode: 'https://github.com/4Marsha1/MERN-Projects/tree/main/exercise-tracker',
        live: '#'
    },
    {
        id: 7,
        name: 'Github Weekly Newsletter',
        img: githubWeekly,
        tech: ['ReactJS', 'CSS', 'REST API'],
        desc: [
            '01. Provide sorted resources as per Language and popularity.',
            '02. The filter bar takes an input(name of language), and makes a REST API call with the passed parameter, and returns a list of popular repositories of that language',
            '03. Contains a filter bar to sort the popular repositories'
        ],
        sourceCode: 'https://github.com/4Marsha1/GithubWeekly',
        live: 'https://github-weekly-newsletter.netlify.app/'
    },
]

export default projects;