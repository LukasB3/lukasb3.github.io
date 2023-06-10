const projects = [
    {
        title: "Crypto Dashboard",
        image: "images/Project_CryptoDashboard.jpg",
        description: `I created a Crypto Information Dashboard for the year 2023. The dashboard displays information about 
        10 cryptocurrencies. Current information about each crypto currency is displayed (e.g. current price, market cap, 
        percentage change from all-time high, etc).<br>Historical data is also displayed in the form of graphs or bar charts,
        e.g. the historical price on the respective date, the number of trades per day, as well as the trend for the year 2023.
        The data is retrieved from the Binance API and the coingecko API.<br><br>In addition, the 5 most recent tweets for each 
        cryptocurrency are displayed, as well as a sentiment of the last 50 tweets for each cryptocurrency. The data for this 
        comes from the Twitter Developer API.<br><br>Everything was visualized with the help of Dash Plotly. Libraries used are:
        requests (to handle the API requests), pandas (to process the data), textblob (for natural language processing and 
        sentiment analysis).`,
        link: "https://lukasb4.eu.pythonanywhere.com/"
    },
    {
        title: "Car Price Prediction",
        image: "images/Project_CarPricePrediction.jpg",
        description:`I have developed an application that allows you to predict the price of a used car. The data for this comes 
        from a dataset from Autoscout24.<br> The website asks the user for some input variables (make, model, fuel, mileage, year)
        and then predicts the probable price. Additionally, another page can be displayed to visualize the dataset.<br><br>For this,
        the dataset had to be preprocessed. Then, a GridSearch was used to determine the most optimal model possible. To evaluate 
        the model, the mse and the r2-score were then used. The model was then saved using the pickle library. <br><br> The user 
        interface and web deployment was done using Streamlit. Libraries used are: pandas, numpy, matplotlib and scikit-learn.`,
        link: "https://lukasb4-carpriceprediction.streamlit.app"
    },
    {
        title: "Chatroom",
        image: "images/Project_Chatroom.png",
        description: `Created a simple chat room for writing. When a user clicks on the website, he is first asked for his username 
        and a PIN. After that, a specific chat room related to the PIN opens and users can communicate with each other in real time.
        <br> In addition, the chat is stored in a mongoDB database and can be accessed at a later time using the same PIN. <br><br>
        To implement this I used the Flask framework. With the help of the Flask-SocketIO extension I realized the real-time, 
        bidirectional communication between web clients and server. Flask-PyMongo was used to link the Flask application to the mongoDB
        database and work with it.<br><br>The user interface was implemented in 2 html files, deployment was done with Heroku. 
        Libraries used are: flask, flask_pymongo, flask_socketio, waitress, pytz. `,
        link: "https://thawing-cliffs-57399.herokuapp.com/"
    },
    {
        title: "24h Weather Prediction",
        image: "images/Project_WeatherPrediction.png",
        description: `Currently I am working on this project. I want to create a website that forecasts weather data for Ulm hourly for 
        the next 24 hours. The data for this comes from the openweather API and the Solcast API. In addition, solar radiation should also
        be predicted, so that homeowners with solar systems can better plan their energy consumption. <br><br>
        The basic architecture is shown in the diagram on the left and is already partly in place. Since it is a multi-output time-series
        forecasting problem and that is still complex for me, I am currently still trying out which machine learning model makes the most 
        sense here.<br><br> Libraries used so far are: pandas, numpy, pymongo, scikit-learn, pytorch.` ,
    }
    // Add more projects as needed
];

function openModal(image) {
    const id = image.dataset.id;
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");

    
    const closeButton = '<span class="modal-close-btn" onclick="closeModal()">&times;</span>';

    
    switch (id) {
        case "1":
            modalContent.innerHTML = `<h1>Java${closeButton}</h1><p>- I know how to use the object-oriented programming language Java<br>
            - The IDE I used until now was Eclipse<br>- Besides the basic concepts I know other programming concepts like generics, 
            different collections and when to use a specific one, polymorphism, functional interfaces & lambdas, etc.</p>`;
            break;
        case "2":
            modalContent.innerHTML = `<h1>Python${closeButton}</h1><p>- Python is my favorite programming language so far<br>
            - The most used libraries are pandas and numpy<br> - I have already developed some applications in Python<br>
            - Know how to retrieve data from APIs / Excel tables and process / clean them<br>- I can also visualize data using dashboards<br>
            - Currently I'm diving deeper into the topic of machine learning and I'm working with libraries like scikit-learn and Pytorch</p>`;
            break;
        case "3":
            modalContent.innerHTML = `<h1>R${closeButton}</h1><p>- I am familiar with R Studio<br>- I have done basic statistical analysis 
            using R<br>- Likewise, I have already visualized data using R Studio. The library used for this was ggplot2 </p>`;
            break;
        case "4":
            modalContent.innerHTML = `<h1>Databases${closeButton}</h1><p>- I have experience using sql / nosql databases<br>
            - Until now I have worked with mongoDB and the database from deta.sh<br>- Data from the database was transmitted 
            to a front end team using fastAPI (a web framework for building APIs with Python)</p>`;
            break;
        case "5":
            modalContent.innerHTML = `<h1>Teamwork${closeButton}</h1><p>- I really enjoy working in teams and learning / recieving 
            input from others<br>- During my studies, my fellow students and I have already implemented some software projects 
            (e.g. a project where the current and predicted gas storage levels are displayed on a map of Germany)<br> - We worked 
            with the help of Scrum, GitHub and Jira</p>`;
            break;
        case "6":
            modalContent.innerHTML = `<h1>Tools${closeButton}</h1><p>- IDEs so far used are Eclipse, PyCharm and RStudio. Code 
            Editor used is VS-Code<br> - Know how to use GitHub and Jira<br> - I speak English at a business fluent level<br>
            - Familiar with all MS Office products<br> - I can easily get used to new technologies and also know how to use them 
            (e.g GPT-4)</p>`;
            break;
        case "7":
            modalContent.innerHTML = `<h1>UML / BPMN${closeButton}</h1><p>- I can model software systems using UML<br>
            - I can also model business processes using BPMN / EPK</p>`;
            break;
        case "8":
            modalContent.innerHTML = `<h1>Hobbies${closeButton}</h1><p>- In my free time I like to play board games, go hiking or 
            eat out with friends<br>- I also like to do sports, like tennis, squash, bouldering, spikeball or volleyball<br> 
            - And the deeper I get into the subject, the more I enjoy developing software in my spare time. Currently, I am 
            particularly interested in the topic of machine learning and the generation of information from large amounts of data</p>`;
            break;

        default:
            break;
    }
    modal.style.display = "block";
}

// ...

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}


function loadContent(section) {
    const content = document.getElementById("content");
    const logo = document.querySelector(".logo img");


    switch (section) {
        case "home":
            logo.src = "images/Logo_Home.png";
            content.innerHTML = `
                <section id="home" class="centered">
                    <h1>Hello <span role="img" aria-label="waving hand">👋</span></h1>
                    <p>I'm Lukas, a student currently studying Data Science<br>Management at HNU Neu-Ulm.<br>
                    In the 'About' section you can get an overview of my skills / interests.<br>
                    In the 'Projects' section you can take a look at some of my projects.<br>
                    You can find my contact information in the 'Contact' section. </p>
                </section>
            `;
            break;
        case "about":
            logo.src = "images/Logo_About.png";
            content.innerHTML = `
            <section id="about">
            <h2>Click on the images to find out more:</h2>
            <div class="picture-row">
                <img src="images/About_Java.png" alt="Picture 1" data-id="1" onclick="openModal(this)">
                <img src="images/About_Python.png" data-id="2" onclick="openModal(this)">
                <img src="images/About_R.png" data-id="3" onclick="openModal(this)">
                <img src="images/About_Database.png" data-id="4" onclick="openModal(this)">
            </div>
            <div class="picture-row">
                <img src="images/About_Team.png" alt="Picture 5" data-id="5" onclick="openModal(this)">
                <img src="images/About_Tools.png" alt="Picture 6" data-id="6" onclick="openModal(this)">
                <img src="images/uml.png" data-id="7" onclick="openModal(this)">
                <img src="images/About_Hobbies.png" data-id="8" onclick="openModal(this)">
        </div>
            <!-- Add more picture rows as needed -->
        </section>
    `;
            break;

        case "projects":
            logo.src = "images/Logo_Project.png";
            content.innerHTML = `
                    <section id="projects">
                        <h2>Take a look at a few of my projects. Click on the images to be redirected:</h2>
                        ${projects.map(project => `
                            <div class="project">
                                <a href="${project.link}" target="_blank" rel="noopener noreferrer">
                                    <img src="${project.image}" alt="${project.title}">
                                </a>
                                <div>
                                    <h3>${project.title}</h3>
                                    <p>${project.description}</p>
                                </div>
                            </div>
                            <hr>
                        `).join("")}
                    </section>
                `;
            break;
        case "contact":
            logo.src = "images/Logo_Contact.png"
            content.innerHTML = `
                <section id="contact">
                    <h2 class="contact-title">Please feel free to contact me:</h2>
                    <div class="contact-images">
                        <div class="contact-image">
                            <img src="images/Contact_Email.png" alt="Your Image Description 1">
                            <p>Write me an E-Mail:<br>lukas.bossert@student.hnu.de</p>
                        </div>
                        <div class="contact-image">
                            <a href="https://www.linkedin.com/in/lukas-bossert-818538237/" target="_blank" rel="noopener noreferrer">
                                <img src="images/Contact_LinkedIn.png" alt="Your Image Description 2" class="hover-enlarge">
                            </a>
                            <p>Visit my LinkedIn Profile</p>
                        </div>
                    </div>
                </section>
            `;
            break;
        default:
            break;
    }
}

loadContent("home");
