import Accordion from './Accordion';
import './App.css';

const topics = [
  {
    id: 0,
    title: 'HTML',
    content:
      'Hypertext Markup Language (HTML) is the standard markup Language for creating web pages and web applications. With Cascasing Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.',
  },
  {
    id: 1,
    title: 'CSS',
    content:
      'Cascading Style Sheets (CSS) is a style sheet Language used for describing the presentation of a document written in markup Language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.',
  },
  {
    id: 2,
    title: 'JavaScript',
    content:
      'JavaScript, often abbreviated as JS is a high-level, interpreted programming Language that confroms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation and first-class functions.',
  },
];

function App() {
  return (
    <div>
      <Accordion topics={topics} />
    </div>
  );
}

export default App;
