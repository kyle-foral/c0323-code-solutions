// import {useState} from 'react'

// const topics = [
//   {
//     id: 1,
//     title: 'HTML',
//     content:
//       'Hypertext Markup Language (HTML) is the standard markup Language for creating web pages and web applications. With Cascasing Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.',
//   },
//   {
//     id: 2,
//     title: 'CSS',
//     content:
//       'Cascading Style Sheets (CSS) is a style sheet Language used for describing the presentation of a document written in markup Language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.',
//   },
//   {
//     id: 3,
//     title: 'JavaScript',
//     content:
//       'JavaScript, often abbreviated as JS is a high-level, interpreted programming Language that confroms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation and first-class functions.',
//   },
// ];

// export default function Accordion([{topics}]){
// const [activeIndex, setActiveIndex] = useState(0)
//   return (
//     <div>
//       <Panel
//         title="Hypertext Markup Language"
//         id={activeIndex === 0}
//         onClick={() => setActiveIndex(0)}
//       >
//       </Panel>
//       <Panel
//         title="Cascading Style Sheets"
//         id={activeIndex === 1}
//         onClick={() => setActiveIndex(1)}
//       >
//       </Panel>
//       <Panel
//         title="JavaScript"
//         id={activeIndex === 2}
//         onClick={() => setActiveIndex(2)}
//       >
//       </Panel>
//     </div>
//   );
// }

// function Panel ({topics}){
//   return
//   <section className="panel">
//     <h3>{title}</h3>
//     <p> {content} </p>
//   </section>;
// }
