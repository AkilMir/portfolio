import React from "react";
import '../App.css';

const Projects = () => {
    return (
        <section className = "projects">
            <h1 className = "projects-title">Projects</h1>
            <div className = "projects-container">
                <div className = "projects-card">
                    <div className = "projects-card-title-container">
                        <a href = "https://github.com/AkilMirUGA/MediaFind" target="_blank" rel="noopener noreferrer">
                            <img className = "projects-github-button" src = "https://seeklogo.com/images/G/github-colored-logo-FDDF6EB1F0-seeklogo.com.png" alt = "github-icon"></img>
                        </a>
                        <h1 className = "projects-card-title">MediaFind</h1>
                        <div className="projects-skills-icons">
                            <img className = "projects-skills-icon" src = "https://static-00.iconduck.com/assets.00/unix-icon-420x512-xl8rmuhf.png" alt = "unix-icon"></img>
                            <img className = "projects-skills-icon" src = "https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png" alt = "java-icon"></img>
                            <img className = "projects-skills-icon" src = "https://www.qfs.de/fileadmin/Webdata/logos-icons/JavaFX.png" alt = "jfx-icon"></img>
                        </div>
                    </div>
                    
                    <ul className = "projects-card-list">
                        <li className = "projects-card-bullet">Developed a software application utilizing the JavaFX library, which receives a book's title as input and generates a comprehensive list of media related to the author of the book, encompassing various forms of media, including movies, video games, and additional novels authored by the same writer.</li>
                        <br></br>
                        <li className = "projects-card-bullet">The application harmoniously integrates two RESTful JSON APIs, first querying user input into the Open Library API to retrieve author information and then using the Open Library output to query the IMDb API, thereby generating a comprehensive list of media and pertinent details such as release dates and posters related to the respective media.</li>
                        <br></br>
                        <li className = "projects-card-bullet">Incorporated threading within the program to decrease application runtime, enhancing the user experience with improved efficiency.</li>
                    </ul>
                </div>

                <div className = "projects-card">
                    <div className = "projects-card-title-container">
                        <a href = "https://github.com/AkilMir/Disease-Prediction-Model" target="_blank" rel="noopener noreferrer">
                            <img className = "projects-github-button" src = "https://seeklogo.com/images/G/github-colored-logo-FDDF6EB1F0-seeklogo.com.png" alt = "github-icon"></img>
                        </a>
                        <h1 className = "projects-card-title">Disease Prediction Model</h1>
                        <div className="projects-skills-icons">
                            <img className = "projects-skills-icon" src = "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png" alt = "vs-icon"></img>
                            <img className = "projects-skills-icon" src = "https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" alt = "python-icon"></img>
                            <img className = "projects-skills-icon" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/640px-Scikit_learn_logo_small.svg.png" alt = "sklearn-icon"></img>
                            <img className = "projects-skills-icon" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1024px-Matplotlib_icon.svg.png" alt = "matplotlib-icon"></img>
                            <img className = "projects-skills-icon" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/1200px-Pandas_mark.svg.png" alt = "pandas-icon"></img>
                        </div>
                    </div>

                    <ul className = "projects-card-list">
                        <li className = "projects-card-bullet">Created a Python program leveraging the Scikit-Learn library to implement diverse classification algorithms, facilitating accurate diagnosis predictions based on numerical data extracted from blood tests.</li>
                        <br></br>
                        <li className = "projects-card-bullet">Processed a ‘Multiple Disease’ dataset from Kaggle containing features like Cholesterol, Blood Pressure etc. and labels such as Heart Disease, Diabetes and many more using Pandas. Used the Matplotlib and Seaborn libraries to visualize the data in order to  accurately choose the appropriate algorithms.</li>
                        <br></br>
                        <li className = "projects-card-bullet">Generated Machine learning models for the K Nearest Neighbors, Support Vector Machine, Logistic Regression, Random Forest and Gaussian Naive Bayes algorithms and displayed the model’s accuracy score.</li>
                    </ul>
                </div>

                <div className = "projects-card">
                    <div className = "projects-card-title-container">
                        <a href = "https://github.com/AkilMir/Anime-Library" target="_blank" rel="noopener noreferrer">
                            <img className = "projects-github-button" src = "https://seeklogo.com/images/G/github-colored-logo-FDDF6EB1F0-seeklogo.com.png" alt = "github-icon"></img>
                        </a>
                        <h1 className = "projects-card-title">Anime Library</h1>
                        <div className="projects-skills-icons">
                        <img className = "projects-skills-icon" src = "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png" alt = "vs-icon"></img>
                            <img className = "projects-skills-icon" src = "https://static-00.iconduck.com/assets.00/html-5-icon-726x1024-evem6gg5.png" alt = "html-icon"></img>
                            <img className = "projects-skills-icon" src = "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png" alt = "css-icon"></img>
                            <img className = "projects-skills-icon" src = "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt = "js-icon"></img>
                            <img className = "projects-skills-icon" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt = "react-icon"></img>
                        </div>
                    </div>
                    <ul className = "projects-card-list">
                        <li className = "projects-card-bullet">Crafted a responsive ReactJS application allowing users to input a show title, generating a comprehensive display of matching results. This includes essential details like show title, poster image, release year, and category, ensuring a seamless browsing experience.</li>
                        <br></br>
                        <li className = "projects-card-bullet">Utilized the MyAnimeList API to dynamically retrieve and generate results by querying the input received from the search bar.</li>
                        <br></br>
                        <li className = "projects-card-bullet">Collaborated with another developer using a Git integrated environment through Visual Studio Code to manage our source control.</li>
                    </ul>
                </div>

            </div>
        </section>

    );
}

export default Projects