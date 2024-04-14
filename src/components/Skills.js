import React from "react";
import '../App.css';
import SkillCard from './SkillCard.js';

const Skills = () => {
    return (
        <section className = "skills">
            <h1 className = "skills-title">Skills</h1>
            <div className = "skills-container">
                <div className = "skills-languages-tools">
                    <h2 className = "languages-tools-header">Languages</h2>
                    <div className = "languages-tools-container">
                        <SkillCard src = "https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png" text = "Java" alt = "java-icon"/>
                        <SkillCard src = "https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" text = "Python" alt = "python-icon"/>
                        <SkillCard src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png" text = "C" alt = "c-icon"/>
                        <SkillCard src = "https://static-00.iconduck.com/assets.00/unix-icon-420x512-xl8rmuhf.png" text = "Unix" alt = "unix-icon"/>
                        <SkillCard src = "https://static-00.iconduck.com/assets.00/html-5-icon-726x1024-evem6gg5.png" text = "HTML" alt = "html-icon"/>
                        <SkillCard src = "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png" text = "CSS" alt = "css-icon"/>
                        <SkillCard src = "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" text = "Javascript" alt = "js-icon"/>
                    </div>
                </div>
                <div className = "skills-languages-tools">
                    <h2 className = "languages-tools-header">Tools</h2>
                    <div className = "languages-tools-container">
                        <SkillCard src = "https://seeklogo.com/images/G/github-colored-logo-FDDF6EB1F0-seeklogo.com.png" text = "Git/Github" alt = "github-icon"/>
                        <SkillCard src = "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png" text = "VSCode" alt = "vs-icon"/>
                        <SkillCard src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" text = "React" alt = "react-icon"/>
                        <SkillCard src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/640px-Scikit_learn_logo_small.svg.png" text = "Scikit-Learn" alt = "sklearn-icon"/>
                        <SkillCard src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1024px-Matplotlib_icon.svg.png" text = "Matplotlib" alt = "matplotlib-icon"/>
                        <SkillCard src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/1200px-Pandas_mark.svg.png" text = "Pandas" alt = "pandas-icon"/>
                        <SkillCard src = "https://www.qfs.de/fileadmin/Webdata/logos-icons/JavaFX.png" text = "JavaFX" alt = "jfx-icon"/>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Skills