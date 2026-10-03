// I had to enclose the content in table rows just to try to make the content look more organized and structured. I also added images for each project to make it visually appealing and provide a better understanding of the projects. The images are placed in the "src/assets" folder.
export default function Project() {
    return (
        <div>
            <table>
            <tr>
            <h1>Select Academic Projects:</h1>
            <img src="src/assets/project1.png" className="img-projects" alt="A website for pet owners to book rooms for pets in a pet hotel" />
            <h2>Web Interface Design</h2>
            <emphasis>CSS, HTML</emphasis>
            <ul>
                <li>Designed a responsive website for pet owners to book rooms for pets using CSS and HTML</li>
                <li>Created a scrolling image gallery and contact form; applied responsive design for web and mobile</li>
            </ul>
            <br></br>
            </tr>
            <tr>
            <img src="src/assets/project2.png" className="img-projects" alt="A page of the Software Requirements Specification Document for Drop In At Cent" />
            <h2>Software Requirements Specification Document </h2>
            <emphasis>Drop In At Cent - Microsoft Word</emphasis>
            <ul>
                <li>Collaborated with a group of colleagues to write a comprehensive Software Requirements Specification for an interactive activity drop-in application</li>
                <li>Defined functional and non-functional requirements, use case diagrams, use case formal descriptions, swim lane diagrams, and other analysis models</li>
            </ul>
            </tr>
            <tr>
            <img src="src/assets/project3.png" className="img-projects" alt="A database design for an online grocery shop" />
            <h2>Online Grocery Shop Database </h2>
            <emphasis>SQL</emphasis>
            <ul>
                <li>Engineered a normalized relational database schema to support e-commerce grocery operations</li>
                <li>Developed and executed complex Oracle SQL queries, data constraints, and relational mappings</li>
            </ul>
            </tr>
            </table>
        </div>
    );
}
