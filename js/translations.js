const translations = {
    "en": {
        // index.html
        // Catch phrase
        "catch-phrase": {
            "CP1": " \"Create opportunities, seize them, ",
            "CP2": "and take the leap forward.",
            "CP3": "The doors are right there\""
        },
        // Guide
        ".projects-section": {
            "index-project-h4": "Projects",
            "index-project-p": "Throughout my academic years, I've gained technical knowledge and skills in programming, analysis, problem-solving, and communication.",
            "index-global-h4": "Global",
            "index-global-p": "In my past years, I've gained valuable experience traveling to various places. I’ve learned about different cultures, the beauty of nature, and the importance of connectivity. Through this portfolio, I hope you can learn more about me and the world."
        },

        // About me
        "about": {
            "my-name": "Hideyuki Nakanishi",
            "description-of-me": "Hide is an ambitious and hardworking Japanese man who recently graduated from the University of Colorado Boulder with a B.S. in Aerospace Engineering. Raised in Japan, he came to the US to pursue his lifelong dream of becoming a global engineer and now aims to save the beauty of Earth through aerospace techniques and engineering expertise. ",
            "description-of-me-2": "He acknowledges that he wouldn't be where he is today without the support of his family, friends, and everyone he has met along the way. This realization has inspired him to share his dreams, experiences, and passions in order to connect with others and encourage those who aspire to follow a similar path in the future.",
        },

        // Index Contact
        "index-contact": {
            "contact-heading": "Contact",
            "contact-name": "Name",
            "contact-email": "Email",
            "contact-subject": "Subject",
            "contact-message": "Message",
            "contact-send": "Send"
        },

        // Projects.html
        ".projects-header": {
            "projects-header-h1":"Projects"
        },

        "portfolio": {
            "portfolio-projects-name": "Personal Web Development",
            "portfolio-projects-position-period": "Web Developer (Jul 2024 - Aug 2024)",
            "portfolio-W-title": "What",
            "portfolio-what": "I decided to create my own website to share what I've done and what I'm capable of. Another purpose of this project was to share my story and dream and connect with others who are on a similar path.",
            "portfolio-H-title": "How",
            "portfolio-how": "I learned web development on my own through many trials and errors, using YouTube and Coursera. I also utilized pre-built frameworks like React and Bootstrap, which saved me a lot of time along the way.",
            "portfolio-R-title": "Results",
            "portfolio-results": "By spending 50 hours a week, I learned how a website works and became proficient in HTML, CSS, and JavaScript. It wasn't easy, but I found out there are no \'impossibles\', when you set your mind to achieving something.",
            "portfolio-behind-scenes-title": "Behind the scences",
            "portfolio-behind-scenes-desc-p1": "This web development technique focused on front-end basics and isn't very dynamic. In my future work, I would love to learn and apply skills in UI and back-end development, such as SQL, Git, and PHP, to my website when I come to a point where I can further evolve it. Stay tuned for the future update!",
        },

        "USLI": {
            "USLI-projects-name": "2024 NASA Student Launch",
            "USLI-projects-position-period": "Payload Design Engineer (Oct 2023 - May 2024)",
            "USLI-W-title": "What",
            "USLI-what": "The mission of this competition is to first reach the target launch altitude of 4000ft (1200m), and second, to descend and deliver the payload and its STEMnauts to the targeted deployment altitude of 650ft (195m), both with high precision. The secondary mission of the launch vehicle is to be recovered and reused. All these objectives are to be achieved while ensuring the safety of all participants and bystanders.",
            "USLI-H-title": "How",
            "USLI-how": "As a payload design engineer, I utilized SolidWorks to design the drone-arm deployment mechanism and landing legs. This design demonstrated that linear motion and mechanical linkages could simultaneously drive the foldable drone-arm and landing legs, fitting within the 6in (15.2cm) diameter launch vehicle. Additionally, I validated the landing leg design using FEM simulation in Femap.",
            "USLI-R-title": "Results",
            "USLI-results": "The drone successfully unfolded and released from the tether at approximately 350ft (105m) above ground level. Due to a loss of GPS signal, which disabled the autonomous flight control, it was manually flown to the ground. Given the lack of visibility and the distance, the drone experienced a hard landing, resulting in damage to the landing legs and two of the drone-arms. However, these components were replaceable, and the system remained fully functional.",
            "USLI-behind-scenes-title": "Behind the scenes",
            "USLI-behind-scenes-desc-p1": "This project was accomplished in a fast-paced environment outside of school, presenting many challenges and issues to tackle as a payload design engineer. During subsystem-level testing, mechanical failures were identified due to the materials used and the structures of the linkages. To address these issues, we redesigned the linkages and replaced the components with machined aluminum and 3D-printed carbon-fiber reinforced PA6 nylon, ensuring they met the required weight and strength specifications. Since our payload was an unique and recoverable design, we received the AIAA Reusable Launch Vehicle Innovative Payload Award from NASA, the Rookie Award for our first-ever entry as CU Boulder, and the Social Media Award. Overall, we proudly placed 8th out of 50.",
            "USLI-behind-scenes-desc-p2": "Due to time constraints for investigating some of the important steps, we encountered mechanical failures that could have been prevented. If I could go back and do it again, I would analyze material selections, conduct structural simulations more carefully and in-depth, and iteratively validate the design based on the failure modes. In addition to the landing leg design, I pitched a concept that could have been more robust. However, because of the significance level, risk uncertainties, and the timeline of the testing process and integration, the idea was not adopted. For future work, I would implement my landing leg design to prevent damage from hard landings and enhance overall reliability."
        },

        "GNSS-IR Remote Water Sensing Device": {
            "GNSS-projects-name": "GNSS-IR Remote Water Sensing Device",
            "GNSS-projects-position-period": "Electrical & Software Engineer (Aug 2023 - May 2024)",
            "GNSS-W-title": "What",
            "GNSS-what": "The scope of this project is to develop a low-cost, open source, near real-time water level monitoring system, using the GNSS-IR signals, with high temporal resolution that can be deployed in remote locations across the world and be operable in varying weather conditions.",
            "GNSS-H-title": "How",
            "GNSS-how": "The embedded software system with Python collected SNR and elevation angles to estimate the relative antenna height above water. This technique required advanced Discrete Fourier Transform, atmospheric impact correction, and robust regression analysis.",
            "GNSS-R-title": "Results",
            "GNSS-results": "The daily average water level accuracy was achieved within 5cm. Data transmission and reception at the ground control station were completed in under one hour. During deployment testing, the system withstood snow, windstorms, and rainstorms. Check out the open-source code on my GitHub account.",
            "GNSS-behind-scenes-title": "Behind the scenes",
            "GNSS-behind-scenes-desc-p1": "As a software engineer, I played a key role in software integration and program optimization through extensive testing and analysis to enhance estimation accuracy. Working with embedded systems like the Raspberry Pi Pico demonstrated the challenges of effectively managing limited memory resources. My team and I tackled these challenges by brainstorming potential error sources and implementing innovative solutions, resulting in the resolution of the memory allocation issue and a 30-40% improvement in computational performance. We spent nearly 12 hours for two weeks including spring break, to figure it out. It was a rewarding when the issue was finally solved.",
            "GNSS-behind-scenes-desc-p2": "During this process, there were two theories about the cause of the error. I had my own theory, which initially wasn’t favored by the software team partially because I struggled to explain my theory clearly at first. However, I trusted my instincts and voiced my idea. Ultimately, this approach resolved the memory allocation issue. This experience taught me the importance of speaking up any ideas. I also learned that persistence in problem-solving, despite obstacles, often leads to valuable breakthroughs. Overall, this project wouldn't have been achieved without the intense efforts and collaboration of my teammates. Thank you for being the wonderful team!"
        },

        "space-hinge-research": {
            "hinge-projects-name": "Deployable Space Hinge Research",
            "hinge-position-period": "Research Assistant & Test Engineer (Jan 2024 - May 2024)",
            "hinge-W-title": "What",
            "hinge-what": "A light and reliable taper-spring-shape hinge made of carbon fiber and resin is needed for a space mission because launch cost is remarkably expensive with increasing weight, and the hinge needs to be deployed perfectly in extreme temperatures and severe environments. This research investigated how the space hinge functions structurally.",
            "hinge-H-title": "How",
            "hinge-how": "To create a taper-spring-shaped hinge, I placed a stack of woven and non-woven carbon fiber and resin in a mold and pressed it by utilizing the expansion of silicon within the mold during a baking process. Afterward, I assembled the components with various weights and performed tapping tests to determine the modal stiffness, collecting data using an accelerometer and Arduino.",
            "hinge-R-title": "Results",
            "hinge-results": "Using the vibration data, I identified the natural frequency of each test and reported the findings to a structural engineer. I observed that a unidirectional (UD) carbon fiber with one ply revealed the lowest natural frequency but had issues with strength. In contrast, the UD with three plies proved to be more stable.",
            "hinge-behind-scenes-title": "Behind the scenes",
            "hinge-behind-scenes-desc-p1": "These experimental results were compared with analytical and simulated results from FEA to better predict the structural behavior of the space hinge. As a research assistant, I learned the testing process and its importance for R&D. Throughout this research project, I was inspired to learn FEA and apply it to real-world problems. Additionally, I was motivated to pursue a career as a structural engineer."
        },

        // global.html 
        "timeline-section": {
            "israel-timeline-country": "Israel",
            "israel-timeline-date": "Aug 2023",
            "israel-timeline-p": "Most dynamic and unique country in terms of history, religion, and culture. From the historic streets of Jerusalem to the bustling innovation of Tel Aviv.",
            "palestine-timeline-country": "Palestine",
            "palestine-timeline-date": "Aug 2023",
            "palestine-timeline-p": "People in Palestine are warm and welcoming, showing their strong faiths and hearts.",
            "jordan-timeline-country": "Jordan",
            "jordan-timeline-date": "July 2023",
            "jordan-timeline-p": "The origion of the Mesopotamian civilization, where ancient craft technology captivates with its remarkable ingenuity and allure.",
            "morocco-timeline-country": "Morocco",
            "morocco-timeline-date": "July 2023",
            "morocco-timeline-p": "A naturally and culturally diverse country, Morocco is one of the most interesting places I've ever visited.",
            "france-timeline-country": "France",
            "france-timeline-date": "Jun 2023",
            "france-timeline-p": "An aesthetic, historic, and vibrant country, France's beauty is something I truly admire and envy.",
            "spain-timeline-country": "Spain",
            "spain-timeline-date": "May 2023",
            "spain-timeline-p": "Welcome to Spain",
            "bolivia-timeline-country": "Bolivia",
            "bolivia-timeline-date": "Jan 2023",
            "bolivia-timeline-p": "Welcome to Bolivia",
            "chile-timeline-country": "Chile",
            "chile-timeline-date": "Dec 2022",
            "chile-timeline-p": "Welcome to Chile",
            "mexico-timeline-country": "Mexico",
            "mexico-timeline-date": "May 2022",
            "mexico-timeline-p": "Welcome to Mexico",
            "us-timeline-country": "United States",
            "us-timeline-date": "Aug 2019 - May 2024",
            "us-timeline-p": "Welcome to the US",
            "netherlands-timeline-country": "Netherlands",
            "netherlands-timeline-date": "Feb 2018",
            "netherlands-timeline-p": "Welcome to Netherlands",
            "switzerland-timeline-country": "Switzerland",
            "switzerland-timeline-date": "Jul 2017 - Jun 2019",
            "switzerland-timeline-p": "Welcome to Switzerland",
            "japan-timeline-country": "Japan",
            "japan-timeline-date": "",
            "japan-timeline-p": "Welcome to Japan"
        },

        "global-content": {
            // Swiss
            "swiss-header": "Welcome to Suisse",
            "swiss-p1": "My high school is located in a peaceful village called Leysin in Switzerland. From July 2016 to May 2019, I spent three years learning English and French, social manners and relationships, and leadership through dorm life. KLAS (Kumon Leysin Academy of Switzerland) provided a Japanese curriculum with a strong emphasis on English learning. KLAS also offered many opportunities to interact with European cultures and people, broadening the possibilities for students' lives.",
            "swiss-p2": "It's not too much to say that my story has begun from KLAS in Switzerland. Why?",
            "swiss-bp-1": "Respect others - gratitude",
            "swiss-bp-2": "Spontaneity - take action",
            "swiss-bp-3": "Persistence - challenge myself",
            "swiss-bp-4": "Flexibility - time management",
            "swiss-bp-5": "Adapotability - different culture",
            "swiss-p3": "These five things are what I learned during school, especially from dorm life. We lived with students from two other grades. It was a unique culture because there were both vertical and horizontal relationships. It wasn't easy to maintain control and comfort across all grades. There had to be compromises, but also core values, the main one being \"respect others.\" In this so-many-men-so-many-minds environment, I learned those five things above.",
            "swiss-p4": "\" If you want to draw an apple, how many faces do you need to observe? \"",

            // Mexico
            "mexico-header": "Welcome to Mexico",
            "mexico-p1": "In May 2022, I traveled to Mexico City, Merida, Toluca, and Chichen Itza. This was my first solo trip abroad, and I still remember the anxiety of traveling in Mexico without knowing any Spanish. I usually have a theme for my trips, and for Mexico, the theme was history and culture.",
            "mexico-subheader-1": "Why Mexico for my first solo trip?",
            "mexico-p2": "I was interested in learning about the history and culture of the Mayan civilization. I felt it was important to understand this to fully appreciate present Mexican culture. Also, I love Mexican food and drinks, and they were wonderful!",
            "mexico-p3": "Travel is always accompanied by troubles. On the bus ride back to my hotel, I passed out without caution, and when I woke up to get off the bus, my bag with a camera was gone. I felt desperate and frustrated about what had happened and my own carelessness.",
            "mexico-p4": "On the other hand, I got to talk to local people. At that time, I knew zero Spanish, maybe \"uno,\" \"dos,\" and \"tres,\" so I tried to learn some basic Spanish to be able to talk and ask questions.",
            "mexico-p5": "There was a moment when a lady came to talk to me, so I used some of the words I had learned, including jokes. We laughed together and it was a wonderful time.",
            "mexico-p6": "Mexico is a very mysterious and spiritual place in a good way. I was amazed by the Mayan civilization and culture. It's hard to understand their perspective on life; sacrificing oneself to celebrate the gods was something people were willing to do. In the modern world, this wouldn't be appreciated, but considering their context and limited knowledge of the world, they relied on the gods' power to pray for a secure and healthy life. I think it's beautiful how the ancients had such a profound mindset, which enabled them to create an extraordinary view of the world, like astronomical pyramids with extreme imagination.",

            // Netherlands
            "netherlands-header": "Welcome to Netherlands",
            "netherlands-p1": "Every year, KLAS, my high school, offers a Model United Nations program for students. I participated in the event held in the Netherlands in February 2018. Model UN demonstrates the principles of the United Nations by following the same processes and debating issues in various committees with thousands of students from all over the world.",
            "netherlands-p2": "My school represented Finland in the Model United Nations, and I was in the General Assembly 4th Committee, known as the Special Political and Decolonization Committee. This committee deals with a diverse set of political issues, including UN peacekeeping and the peaceful uses of outer space (Wikipedia, 2024). For instance, one of the topics I debated was the geopolitical issue over the occupied Golan Heights, situated on the border of Syria and Israel. As the Finnish representative, After lobbying on the first day, I proposed a resolution in the front and debated how it could mitigate the issue. I realized it's hard to make decisions to move forward and it's a demanding task. It was a great experience to see how it all functions.",
            
            // Spain 
            "spain-header": "Welcome to Spain",
            "spain-p1": "I arrived in Barcelona, Spain, at the end of May 2023, returning after six years. The city remained unchanged, with the same vibrant atmosphere that I remembered. From my experience, Barcelona stands out from other cities due to its unique ambiance and views, which make me feel a strong connection to the place.",
            "spain-p2": "This visit wasn't for fun; in fact, there was a different reason why I came visit again. Before the trip, I came across a company that I aspire to join. They are making history in New Space, and I truly beilve so. I was eager to see the great engineers at this company.",
            "spain-p3": "My heart was pounding as I knocked on their door, hoping to ask for a job or internship. Although I didn't end up getting a job opportunity, I was fortunate to have conversations with some of the engineers. If any of you are reading this, I want to express my deepest gratitude. Since that visit, working at that company has become my dream job. (Reflecting back on it, it was impulsive and unprofessional - I visited their office without an appointment, but it was worth it.)",
            "spain-p4": "\"A man can be destroyed but not defeated - Hemingway\"",

            // France 
            "france-header": "Welcome to France",
            "france-p1": "In June and July of 2023, I traveled to Paris and Toulouse with the goals of speaking French, deepening my understanding of French culture, exploring the possibility of living in France, which is one of my dreams, and climbing the Pyrenees as a mountaineer.",
            "france-p2": "I was based in Toulouse in the south of France, known as a historical hub of the aerospace industry. To experience authentic French culture, I decided to stay in a village for one and a half months. Through the cultural exchange program Workaway, I had the opportunity to immerse myself in the local culture, practice my French, and contribute my DIY skills to the community.",
            "france-p3": "\" If you want to know or deepen something, go there and experience it \"",
            "france-p4": "\" \'Yes\' AND \'Maybe\' in your mind mean the green light \"",
            "france-p5": "During my Workaway experience, I was assigned a personal project by the host. She asked me to create a \"Japanese\" style table that would complement the living room, using materials she had available in the house.",
            "france-p6": "I first collected the materials that might be useful from a firewood storage and tried to put the pieces together to solidify my idea. The challenge that I had was how to put them together nicely with limitted machinery access. Cut, cut, cut. Sand , sand, sand. I iterated the process over and over again with causion because this design needed to be precise in mm. It took so much time to shape the pieces exactly as I wanted them to be.",
            "france-p7": "The final challenge was to put the pieces together without any gaps and angles. I used the traditional Japanese method of wood joinery, which involves creating joints without nails or screws. This needed to be done precisely; otherwise, the table could've turned out uglily. It turned out beautifuly done and I felt relived that the host was satisfied. The photos show the process and the compeleted table.",
            "france-p8": "Summiting mountains all over the world is one of my dreams before I die. I've wanted to hike up the Pyrenees since I was in elementary school. Why? There was no specific reason, but there was something I've always felt spiritual.",
            "france-p9": "This photo was taken from the Casco de Marbo at 3011m. It was very silent but windy. It was just me, continuing to walk to the other side, thinking about the awe of nature.",
            "france-p10": "\" The world isn't just it \"",

            // Morocco
            "morocco-header": "Welcome to Morocco",
            "morocco-p1": "\"Do I know Arabic?\"",
            "morocco-p2": "\"Zero. So what? I just need to know Arabic, right?\"",
            "morocco-p3": "\"Do I know the Muslim or the Isramic culture?\"",
            "morocco-p4": "\"Barely. Perceiving through your eyes is worth a million words\"",
            "morocco-p5": "That's the conversation I made in my mind before booking a flight to the country. When you go to a different country in a different culture, it's so important to learn the language (at least \"Hello\" and \"Thank you\") and the culture because people would appreciate you and you could connect with their hearts. That's how I view respect when I get inside a different country. To learn the culture, that's what you need to do first. I believe no one forgets their hearts because the world is beautiful, but brutal.",
            "morocco-p6": "After France, I flew to Morocco in July 2023 and did a solo backbacking trip all over the place for two weeks. The theme of this trip was to see, know, and understand the Isramic life and culture. I started in:",
            "morocco-p7": "Casablanca > Fez > Chefchaouen > Ifrane > Errachidia > Merzouga > Tineghir > Ouarzazato > Agadir > Taghazout > Essaouira > Marrakesh",
            "morocco-map-caption": "Source: Google Maps",
            "morocco-p8": "Morocco was one of the best experiences I've ever had. Since I had to manage my savings for the journey, when I moved from Fez to chefchaouen, I used a local bus, which didn't have the AC system in 47C or 117F deg outside, which I didn't know. Also, I don't like to book everything in advance for my adventure trips, so the only way to get to Chefchaouen at that time was by bus. It was the worst bus ever. I was baked like bacon and the bus stopped everywhere and waited until people filling out the seats. I was sweating and felt like I almost passed out. Then, after a few hours, all of a sudden, the bus pulled out of the road, and people started getting out. It was because the engine's belt was ripped, so we had to fix it in the middle of nowhere. We including me replace the belt and tried to restart the engine with the support of us pusing the bus. And it worked. We were high-touching and laughing each other. It was brutal but hilarious.",
            "morocco-p9": "In the major cities, they were connected by train, but not in the onshore, then I who didn't take any tours had to take grand taxis, which were a car pool used for a longer trip with low cost. Since I was a tourist, drivers always asked me for insanely high pay rate compared to the locals. Then, I had to negociate or knew Arabic as if I was a local. From negociation failure in the first week, I learned the negociation in Arabic like \"Too much, cheaper chaper.\" That's it. It was so fun to mentally battle. I didn't have the Internet service for this trip, so it wasn't easy for me to ask how to get around and survive, but it was so much woth than taking tours. If you have a adventure mind, I'd highly recommend what I did.",
            "morocco-p10": "Sometimes, I used hitch-hike. I wanted to go to Essaouira from Taghazout. There was no bus to get there, so I had to use grand taxi, so I asked around, but no one was going to Essaouira. Then, I asked a regular taxi, but it was insanely expensive for the budget trip. Therfore, I had to change a plan to hitch-hike. It wasn't easy to catch one, but luckily waiting for a few hour in the exremely hot weather, a food driver saw me and picked me up. In the ride, we chatted our own dreams, mixing with Arabic and English. It was a fun and unforgettable time.",

            // US 
            "us-header": "Welcome to the US",
            "us-p1": "I came to the US to study Engineering in August 2019. I attended Wentworth Institute of Technology (WIT) in Boston, majoring in Electromechanical Engineering. The school itself was small but had a great engineering program that offered plenty of hands-on experience. However, I felt the need for inspiration from others and a change in environment for both life and study.",
            "us-p2": "So, I transferred to the University of Colorado Boulder (the photo on the right shows the main campus with a mountain view). I chose this school because of its excellent engineering program, especially in aerospace, and because I'm an outdoor enthusiast who loves mountaineering, skiing, and climbing. It was a significant transition from my previous school, but looking back, it ended up being worth it. I encountered countless opportunities to develop both my technical and personal skills. It's not an exaggeration to say that CU Boulder has changed my life.",
            "us-p3": "I'm honored to be a Forever Buff!",
            "us-p4": "SKO BUFFS",
            "country-us-title-1": "Beauty of America",
            "sneffels": "Mt. Sneffels",
            "sneffels-note": "Mt. Sneffels (4,314m/14,155ft) is one of the peaks in the San Juan Mountains in Ouray, Colorado. It was cloudy and rainy, but that's also the mountain beauty. This photo was taken from the top of the mountain.",
            "crestone-needle": "Crestone Needle",
            "crestone-needle-note": "Crestone Needle (4,327m/14,196ft) is in the Sangre de Cristo range in Colorado. My buddy and I alpine-climbed it, following the right ridge you see in the photo. It was illuminated by the sunrise at 6:30 a.m.",
            "middle-teton": "Middle Teton",
            "middle-teton-note": "Middle Teton (3,904m/12,809ft) is in Grand Teton National Park in Wyoming. Where I was sitting is the peak of Middle Teton, and the mountain behind me is Grand Teton. This mountain, in particular, fills me with awe.",
            "capitol": "Capitol Peak",
            "capitol-note": "Capitol Peak (4,309m/14,138ft) is in the Elk Mountains near Aspen, Colorado. I got caught in the rain at the top, and it was sketchy, but I made it. The stars there were on another level.",
            "maroon": "Maroon Peak",
            "maroon-note": "Maroon Peak (4,317m/14,163ft) is one of the two peaks known as the Maroon Bells in the Elk Mountains in Colorado. I summited only Maroon Peak at that time. How cool these mountains are! * The mountain in the photo is North Maroon Peak, taken from Maroob Peak.",
            "north-maroon": "North Maroon Peak",
            "north-maroon-note": "North Maroon Peak (4,274m/14,022ft) is the other peak of the Maroon Bells. The second time in the Maroon Bells, I traversed from North Maroon to Maroon Peak alone. They are my favorite mountains ever. * The mountain in the photo is Maroon Peak, taken from North Maroon Peak.",
            "longs": "Longs Peak",
            "longs-note": "Longs Peak (4,346m/14,259ft) is in the Front Range of Colorado. My friend and I started at 2 a.m. and summited just in time for sunrise. It was a beautiful morning.",
            "grand-teton": "Grand Teton National Park",
            "grand-teton-note": "At a glance, you can feel the power of nature. A mountain standing so majestically is simply awe-inspiring. I lost my words when I saw it.",
            "yellow-stone": "Yellow Stone National Park",
            "yellow-stone-note": "Yellow Stone is literally the mouth of the Earth, where you can feel the planet come alive. It's simply amazing.",
            "grand-canyon": "Grand Canyon National Park",
            "grand-canyon-note": "The geography is gigantic and overwhelming. It's incredibly silent yet filled with energy. That's how I felt standing on the cliff. Nature is relentless in its creation, but always inspires deep appreciation.",
            "us-quote-1": "\" Powerless, Relentless, Humanless \"",

            // Bolivia 
            "bolivia-header": "Welcome to Bolivia",
            "bolivia-p1": "My first hour when I got in Bolivia was rough. I crossed the border from Chile by bus, and there obviously was a security gate that everybody had to show their passport. An old man came and asked", 
            "bolivia-p2": "\"Where are you from\"",
            "bolivia-p3": "\"Japón\", I answered.",
            "bolivia-p4": "\"Visa?\", he asked.",
            "bolivia-p5": "\'Wait a minute. I don't think I need any visa for tour for my case\', I thought in my head. I definitely checked about the visa requirement when I travel. I asked back",
            "bolivia-p6": "\"Seriously?\", I replied.",
            "bolivia-p7": "\"No jokking\", he said.",
            "bolivia-p8": "My brain got whiteed out. I was thinking I'm dead, but the old man was giggling when he saw my reaction. And he told me",
            "bolivia-p9": "\"You good to go\"",
            "bolivia-p10": "God damn, he played a prank on me. It was so mean. Other than that, the Bolivian trip turned out a wonderful trip. At the end of the trip, I honestly didn't leave the country.",
            "bolivia-p11": "Bolivia has a long history and an interesting culture, from the Inca Empire era and Spanish colonization to the present day. Though the nation's economy relies heavily on natural resources like mining and gas, wealth remains elusive for many.",
            "bolivia-p12": "I spoke one Bolivian I met who spoke English, and I gained the insights of into the country's culture. She explained that while many Bolivians are aware of the economic challenges they face, they place a profound value on family over material wealth. I find the mindset deeply admirable. While money is essential to live, it seems that true happiness in Bolivia is found within the bonds of family.",
            "bolivia-p13": "Salar de Uyuni is one of Bolivia's most famous tourist destinations. The vast white landscape behind me is entirely made of salt. It was truly awe-inspiring to witness its immense flatness and size. It was so expansive that I couldn't see the horizon with eyes. The photo below captures a stunning sunset at Salar de Uyuni. During the rainy season, typically between January and March, water accumulates on the flats, transforming them into a gigantic mirror.",
            "bolivia-p14": "The Tiwanaku Empire existed from 600 to 1100 AD, and the Tiwanaku Village, where it is today, was one of the important bases in the empire. Since there were no records, it remains a wonder, raising questions about why ancient people built the city at an altitude of 3,850m/12,600ft and how it was populated by around 50,000 residents at its peak, despite the difficulty of growing crops at such a height. Moreover, how did they transport the multi-ton stones using ancient technology? Research indicates that the stones originated from somewhere near Lake Tiwanaku, but the method of transportation remains a mystery. Some believe that giant beings existed",
            "bolivia-p15": "I found the ruins in Tiwanaku unique and interesting. For example, the stone statue on the right is holding a man in one hand and something in the other. I imagined the sculpture represents a god of power, but at the same time, it could symbolize loyalty because I used a compass, and it faced exactly east, looking at the gate shown in the second photo. I could imagine the sculpture praying for the rise of the empire as the sun or simply praying to the sun every morning, as the world would have been powerless without it.",
            "bolivia-p16": "According to archaeologists, the stones sculpted like human faces and attached to the wall shown in the bottom right express appreciation for the visitors. Some of them have Asian features, which is overwhelming about the influence back then since Asia is on the opposite side of the Earth.",

            // Chile 
            "chile-header": "Welcome to Chile",
            "chile-p1": "It was unexpected to fly out to Chile. In fact, I was planning to fly to Peru for the first South American country in December 2023, but the government announced a national state of emergency due to Peruvian protests that day. I had to decide whether to cancel the flight within 2 hours. I ended up getting on the plane and flying to Santiago, Chile as my final destination. It was an impulsive idea, but it worked out really well in the end.",
            "chile-p2": "Obviously, I had no idea what I wanted to do in Chile. Also, I'd forgotten Spanish that I'd learned in Mexico. Since it was a rough start, with no plans and no Spanish, my anxiety level was out of capacity, so I immediately contacted my friend who lived 10 hours away from Santiago, and visited his family. They helped me a lot alleviate stress and anxiety. Thanks to my friend, I started enjoying the trip.",
            "chile-p3": "After leaving my friend's house, I flew to Patagonia. I experienced a flight cancellation due to bad weather, but after a few days, I managed to get to Patagonia. It was dangerously windy, but I started the W-trek, the popular hiking route in the park. The photo on the right is Torres del Paine, one of the seven wonders. They were gigantic and beautiful.",
            "chile-p4": "I was planning to summit Mt. Almirante Nieto, shown in the first photo on the left. However, the wind gusts were about 80-90 m/s, which is a deadly weather condition, so I decided to give up. Instead, I secretly sneaked into the Silent Valley, shown in the second photo on the left, which was prohibited to enter without a guide. This area was way different from the others. It was really scary because I think this valley is where the wind escapes. I was almost blown away, but I loved being there, to be honest.",
            "chile-p5": "The rest of the trek was awesome! The photo in the second to last position on the right is the French Valley, and the last one is the glacier. Honestly, I wanted to hike with friends for this one, but I met a lot of cool people from all over the place, so overall it was truly worth it!",
            "chile-p6": "I moved from Patagonia to the Atacama Desert, which is the driest area on Earth. There are some places in the desert where it hasn't rained for 500 years. Additionally, Atacama is well known for its world-class astronomical observations. Ironically, I was unlucky that I couldn't see the stars because of the clouds during my visit, which is usually not the case. Anyway, I couldn't complain about it.",
            "chile-p7": "However, I saw some amazing geographic features of the Earth. The two photos on the right and the bottom left were taken at Moon Valley (because it looks like a moon surface).",

            // Jordan 
            "jordan-header": "Welcome to Jordan",
            "jordan-p1": "This section will be updated soon",

            // Israel 
            "israel-header": "Welcome to Israel",
            "israel-p1": "This section will be updated soon",

            // Palestine 
            "palestine-header": "Welcome to Palestine",
            "palestine-p1": "This section will be updated soon",

            // Japan 
            "japan-header": "Welcome to Japan",
            "japan-p1": "This section will be updated soon",
        },

        // Contact.html
        "contact-p": {
            "contact-subheading-1": "Let's connect! I'd love to hear your stories and dreams. Please feel free to reach out to me.",
            "contact-subheading-2": "Spread the Word, Ignite the Dream.",
        },

        "contact": {
            "contact-heading": "Contact",
            "contact-name": "Name",
            "contact-email": "Email",
            "contact-subject": "Subject",
            "contact-message": "Message",
            "contact-send": "Send"
        }
    },

    "jp": {
        // index.html
        // Catch phrase
        "catch-phrase": {
            "CP1": " \"機会を作れ、機会を掴め、 ",
            "CP2": "そして前に飛び込め。",
            "CP3": "もうドアはそこにある\" "
        },

        //project section
        ".projects-section": {
            "index-project-h4": "プロジェクト",
            "index-project-p": "大学の授業を通して、技術的知識やプログラミング、データ分析、問題解決、コミュニケーション能力を培った集大成、ぜひご覧ください！",
            "index-global-h4": "グローバル",
            "index-global-p": "世界を旅し、多様な文化、自然、繋がりを学び、大切にしてきました。このポートフォリオを通して、少しでも僕のこと、世界のことを知って頂けたら、幸いです。"
        },

        // About me
        "about": {
            "my-name": "中西 秀行",
            "description-of-me": "私はコロラド州立大学で航空宇宙工学を卒業した野望に満ち、努力を厭わない日本人です。日本で育ち、子供の頃からグローバルなエンジニアになるという夢を持ち追いかけ、アメリカに飛び立ちました。そして航空宇宙技術とエンジニアの知識を使って、この地球の美しさを守ることが今の僕の野望です。",
            "description-of-me-2": "家族をはじめ友達、色々な方々との出会いなしでは今いるところにいなかったでしょう。これを機会に、色んな人々と繋がりたい、そして僕と同じ道を辿ろうと努力している方々を応援したいという目的で、このウェブを作り、僕の夢や経験、パッションをシェアできたらなと思っています。",
        },

        //index contact
        "index-contact": {
            "contact-heading": "コンタクト",
            "contact-name": "名前",
            "contact-email": "メール",
            "contact-subject": "件名",
            "contact-message": "メッセージ",
            "contact-send": "送信"
        },

        // Projects.html
        ".projects-header": {
            "projects-header-h1": "プロジェクト"
        },

        "portfolio": {
            "portfolio-projects-name": "個人用Web開発",
            "portfolio-projects-position-period": "Web開発者 (2024年7月 - 2024年8月)",
            "portfolio-W-title": "どんな",
            "portfolio-what": "僕が今まで何をしてきたか、何ができるのかを皆さんに共有しようと思い、自分自身でWebサイトを作ってみました。そしてもう一つのプロジェクトの目的は、自分のストーリーや夢を共有し、同じ道を歩む人と繋がることです。",
            "portfolio-H-title": "どうやって",
            "portfolio-how": "多くのトライ\&エラーを重ねながら、YouTubeやCourseraを活用し、Web開発を学びました。また、ReactやBootstrapのような既成のものを利用し、大幅に時間を節約しました。",
            "portfolio-R-title": "結果",
            "portfolio-results": "週に約50時間を費やし、Webの仕組みを学び、HTML、CSS、JavaScriptを熟達しました。無論簡単なことではありませんが、何か新しいことを成し遂げようと心に決めれば、「不可能」はないことを改めて実感しました。",
            "portfolio-behind-scenes-title": "プロジェクトの裏側",
            "portfolio-behind-scenes-desc-p1": "このWeb開発のテクニックは、フロントエンドの基礎で、あまりダイナミックではありません。将来的には、SQL、Git、PHPなどのUIやバックエンド開発のスキルを身に付け、このWebサイトをさらに進化させていきたいなと思っています。次回の更新をお楽しみに！",
        },

        "USLI": {
            "USLI-projects-name": "2024 NASA ロケット大会",
            "USLI-projects-position-period": "ペイロードデザインエンジニア（2023年10月 - 2024年5月）",
            "USLI-W-title": "どんな",
            "USLI-what": "この大会のミッションは三つのステージに分かれ、まずターゲットである高さ4000ft (1200m)まで打ち上げ、650ft (195m)でロケットからペイロードを安全に切り離し、地面に着地させる。そして発射体及びペイロードはリカバーリー、再利用できる状態にしなくてはいけない。もちろん、全て参加者、傍観者の安全の確保の上行わなければならない。",
            "USLI-H-title": "どうやって",
            "USLI-how": "ペイロードデザインエンジニアとして、SolidWorksを使用しドローンアーム展開機構と着陸脚を設計しました。この設計は、発射体の直径6インチ(15.2cm)以内に収め、ドローンアームと着陸脚を同時に開閉できる仕組みになっています。更に、FemapのFEMシミュレーションとフライトテストで設計、構造の信頼性、安全性の検証も行いました。",
            "USLI-R-title": "結果",
            "USLI-results": "ドローンは地上から高さ約350ft (105m)で展開し、発射体の繋ぎ目から切り離しに成功したけれど、GPS信号の喪失により自動飛行制御が無効になったため、手動で地面まで飛行させました。視界が悪く、距離があったため、着陸脚とドローンアームが破損し、不時着に終わってしまいました。しかし、これらの部品は交換可能だったため、システムは完全に再利用できリカバーリー可能な状態でした。",
            "USLI-behind-scenes-title": "プロジェクトの裏側",
            "USLI-behind-scenes-desc-p1": "このプロジェクトは学校外の時間を使い、早いペースで遂行され、ペイロード設計エンジニアとして取り組むべき課題や問題が多くありました。サブシステムレベルのテスト中に、使用された材料やリンケージの構造に起因する機械的な故障が確認され、これらの問題に対処するため、リンケージを再設計し、部品を機械加工されたアルミニウムと3Dプリントのカーボンファイバー強化PA6ナイロンに置き換え、重さをなるべく変えず、強度の向上を目指しました。ユニークなペイロードデザインが讃えられ、NASAからAIAA再使用型打ち上げ機革新ペイロード賞を受賞し、CU Boulderとして初めてのエントリーでルーキー賞、更にソーシャルメディア賞も受賞しました。全体として、50チーム中8位に入賞することができました。",
            "USLI-behind-scenes-desc-p2": "時間の問題で幾つかの重要なステップを省略せざるを得なかったため、事前に防げた構造の問題が起きてしまいましたが、もし今一度戻り、やり直せるなら、しっかり材料の性質を分析し、構造のシミレーションを徹底し、故障モードを基に繰り返しデザインの確認をするでしょう。そして着陸脚のデザインに加えて、大会まで2週間しかなく、失敗するリスクの不確実性、優先すべきことが他に多くあり、残念ながら僕のデザインは断念されました。しかし将来改善するならば、僕のデザインを採用し、不時着時でもダメージを避け、デザインの信頼性を上げたいです。"
        },

        "GNSS-IR Remote Water Sensing Device": {
            "GNSS-projects-name": "GNSS-IRを活用した遠隔水位測定装置",
            "GNSS-projects-position-period": "電気 & ソフトウェアエンジニア (2023年8月 - 2024年5月)",
            "GNSS-W-title": "どんな",
            "GNSS-what": "このプロジェクトのゴールは、GNSS-IR信号を使用して、オープンソースで低コストの、ほぼリアルタイムの水位監視システムを開発することです。このシステムは世界中どこでもタイムリーに作動し、様々な気象条件下でも運用可能です。",
            "GNSS-H-title": "どうやって",
            "GNSS-how": "Pythonを使用した組み込みソフトウェアシステムでSNRとシグナルの角度を基に、水面からのアンテナの高さを推定します。この技術には、高度な離散フーリエ変換(DFT)、大気影響の補正、そして線形回帰を利用した分析が使われいます。",
            "GNSS-R-title": "結果",
            "GNSS-results": "毎日の平均水位精度は5cm以内と精度を保った、信頼性のあるシステムが完成しました。データの送受信は地上制御ステーションで最低1時間以内。実証試験期間中、雪、時速40mの強風、豪雨に見舞われたが、問題なく作動することができました。僕のGitHubアカウントにてオープンソースコードを確認してください。",
            "GNSS-behind-scenes-title": "プロジェクトの裏側",
            "GNSS-behind-scenes-desc-p1": "ソフトウェアエンジニアとして、実証試験とデータ分析を通して試行錯誤を重ね、ソフトウェアの統合とプログラムの最適化を担当しました。Raspberry Pi Picoのような組み込みシステムを扱う際、限られたメモリリソースを効果的に管理する難しさが浮き彫りになりました。チームと僕はこの問題解決のため、潜在的なエラーの原因を探り、革新的なアプローチを施したことで、メモリーの問題解決に加え、計算性能が30 - 40%も改善されました。春休みを含め2週間毎日12時間かけ、問題の対処をしたため、上手くいった時の達成感は凄まじかったです。",
            "GNSS-behind-scenes-desc-p2": "この問題対処の最中、僕らの中で二つの仮説がありました。そのうちの一つは、僕が考えたものですが、説明が浅かったせいか有効性が認められず、聞き入れてもらえませんでした。しかし自分の直感を信じ、また声をあげ、なんとか僕の仮説を試してもらうよう説得しました。すると、見事に問題が解決しました。この経験は、即時の合意がなくても自分の解決策を信じて発言する重要性を教えてくれました。また、問題解決における粘り強さが貴重な突破口を生むことがあると学びました。しかし全体的に、このプロジェクトはチームメンバーなしでは達成できなかったと思います。素晴らしいチームワークをありがとう！"
        },

        "space-hinge-research": {
            "hinge-projects-name": "展開型宇宙用ヒンジ研究",
            "hinge-position-period": "研究アシスタント & テストエンジニア (2024年1月 - 2024年5月)",
            "hinge-W-title": "どんな",
            "hinge-what": "宇宙ミッションには、軽量で信頼性の高いカーボンファイバーと樹脂で作られたテーパースプリング形状のヒンジが必要です。重量が増えると打ち上げコストが著しく高くなるためです。また、ヒンジは極端な温度や厳しい環境で完璧に展開される必要があります。本研究では、この宇宙用ヒンジが構造的にどのように機能するかを調査しました。",
            "hinge-H-title": "どうやって",
            "hinge-how": "テーパースプリング形状のヒンジを作成するために、織布および不織布のカーボンファイバーと樹脂を積層し、型に入れて、焼成プロセス中に型内でシリコンの膨張を利用して圧縮しました。その後、さまざまな重さの部品を組み合わせ、モード剛性を測定するためにタッピングテストを行い、加速度計とArduinoを使用してデータを収集しました。",
            "hinge-R-title": "結果",
            "hinge-results": "振動データを使用して、各テストの固有振動数を特定し、その結果を構造エンジニアに報告しました。一方向（UD）カーボンファイバーの1プライは最も低い固有振動数を示しましたが、強度に問題がありました。それに対して、3プライのUDはより安定していることが分かりました。",
            "hinge-behind-scenes-title": "プロジェクトの裏側",
            "hinge-behind-scenes-desc-p1": "これらの実験結果は、宇宙用ヒンジの構造挙動をより正確に予測するために、解析結果およびFEAによるシミュレーション結果と比較します。アシスタントとして、テストプロセスとそのR&Dにおける重要性を学びました。この研究プロジェクトを通して、FEAを学び、それを実際の問題に適用することに感銘を受けました。また、構造エンジニアとしてのキャリアを追求する動機にもなりました。"
        },

        // global.html 

        "timeline-section": {
            "israel-timeline-country": "イスラエル",
            "israel-timeline-date": "2023年8月",
            "israel-timeline-p": "イスラエルへようこそ",
            "palestine-timeline-country": "パレスチナ",
            "palestine-timeline-date": "2023年8月",
            "palestine-timeline-p": "パレスチナへようこそ",
            "jordan-timeline-country": "ヨルダン",
            "jordan-timeline-date": "2023年7月",
            "jordan-timeline-p": "ヨルダンへようこそ",
            "morocco-timeline-country": "モロッコ",
            "morocco-timeline-date": "2023年7月",
            "morocco-timeline-p": "モロッコへようこそ",
            "france-timeline-country": "フランス",
            "france-timeline-date": "2023年6月",
            "france-timeline-p": "フランスへようこそ",
            "spain-timeline-country": "スペイン",
            "spain-timeline-date": "2023年5月",
            "spain-timeline-p": "スペインへようこそ",
            "us-timeline-country": "アメリカ",
            "us-timeline-date": "2019年8月 - 2024年5月",
            "bolivia-timeline-country": "ボリビア",
            "bolivia-timeline-date": "2023年1月",
            "bolivia-timeline-p": "ボリビアへようこそ",
            "chile-timeline-country": "チリ",
            "chile-timeline-date": "2022年12月",
            "chile-timeline-p": "チリへようこそ",
            "mexico-timeline-country": "メキシコ",
            "mexico-timeline-date": "2022年5月",
            "mexico-timeline-p": "メキシコへようこそ",
            "netherlands-timeline-country": "オランダ",
            "netherlands-timeline-date": "2018年2月",
            "netherlands-timeline-p": "オランダへようこそ",
            "switzerland-timeline-country": "スイス",
            "switzerland-timeline-date": "2017年7月 - 2019年6月",
            "switzerland-timeline-p": "スイスへようこそ",
            "japan-timeline-country": "日本",
            "japan-timeline-date": "",
            "japan-timeline-p": "日本へようこそ"
        },

        "global-content": {
            // Swiss
            "swiss-header": "スイスへようこそ",
            "swiss-p1": "僕の高校はスイスにあるレザンという平和な村にあります。2016年7月から2019年5月までの3年間、私は英語とフランス語、社会的マナーと人間関係、リーダーシップを寮生活を通じて学びました。KLAS（Kumon Leysin Academy of Switzerland）は、日本のカリキュラムに基づいて、英語学習に力を入れた学校です。また、KLASはヨーロッパの文化や人々との交流など多くの機会を提供し僕らの人生の可能性を広げてくれました。",
            "swiss-p2": "僕のストーリーはKLASからスタートしたと言っても過言ではありません。なぜそう思うか？",
            "swiss-bp-1": "相手・モノを尊重する - 感謝",
            "swiss-bp-2": "自発性 - アクションを起こす",
            "swiss-bp-3": "粘り強さ - チャレンジ精神",
            "swiss-bp-4": "柔軟性 - 時間の管理",
            "swiss-bp-5": "順応性 - 異文化、異環境",
            "swiss-p3": "この５つは、学校生活、特に寮生活を通じて学んだことです。私たちは他の2つの学年の学生と共に生活していました。縦の関係と横の関係が共存する独特の文化があり、すべての学年で秩序と快適さを維持するのは簡単ではありませんでした。いくらか全学年で統制を共足せるためには妥協が必要でしたが、「相手・モノを尊重する」という価値観が最も要でした。この「十人十色」の環境の中で生活した得たものが、この5つ、今でも活きています。",
            "swiss-p4": "\” リンゴを描写する時、あなたはリンゴの何面を観察する必要がありますか？ \"",

            // Mexico
            "mexico-header": "メキシコへようこそ",
            "mexico-p1": "2022年5月にメキシコシティ、メリダ、トルーカ、チチェン・イッツァを旅行しました。これが僕の初めての一人旅で、スペイン語が全くわからない状態でメキシコを旅行する不安を今でも覚えています。旅する時はいつもテーマを設定しているのですが、メキシコのテーマは歴史と文化でした。",
            "mexico-subheader-1": "なぜメキシコを始めての一人旅先に選んだのか？",
            "mexico-p2": "マヤ文明の歴史と文化に興味があり、それを理解することで、現在のメキシコ文化をより深く味わうことができると感じたからです。また、メキシコ料理や飲み物が大好きで、とても美味しかったです！",
            "mexico-p3": "旅にはいつもトラブルが付きものです。ホテルへの帰り道、バスで知らぬ間に爆睡してしまい、目を覚ました時にはカメラの入ったバッグ丸ごと盗まれていました。この自分の不注意に絶望感と苛立ちに自己失望した記憶があります。",
            "mexico-p4": "一方で、現地の人たちと話す機会もありました。その時、スペイン語は全く知らず、「uno」、「dos」、「tres」くらいしか分かりませんでした。なので、現地の人と話したり質問できるように、基本的なスペイン語を自分で学びました。",
            "mexico-p5": "そしたらある時、女性が話しかけてくれて、覚えた単語やジョークを使い、一緒に笑い合いました。あの思い出は自分にとって宝物です。",
            "mexico-p6": "メキシコは良い意味で非常に神秘的でスピリチュアルな場所です。マヤ文明の文化にとても驚かされました。マヤ人は神々を祝うために喜んで自己犠牲をする、という彼らの人生観を理解するのは難しいです。現代では理解し難いことだが、彼らの生活と限られた世界の知識を考えると、神々の力に頼り、自己犠牲によって安全で健康な生活を祈っていたのです。古代の人々が持っていた深い考え方が、また美しいものであり、それが凄まじいイマジネーションで天文学的なピラミッドなどの非凡な世界観を作り上げたのだと思います。",
            
            // Netherlands
            "netherlands-header": "オランダへようこそ",
            "netherlands-p1": "僕の母校であるKLASでは毎年、模擬国連に参加しています。私は2018年2月にオランダで開催されたイベントに参加。模擬国連とは、国連の原則を実演するもので、同じプロセスに従い、世界中から集まった何千人もの学生と共に、様々な委員会で色んな議題について討論します。",
            "netherlands-p2": "その年はフィンランドを代表し、僕は第四委員会（特別政治・非植民地化委員会）に所属しました。この委員会は、国連の平和維持活動や土地・空間の平和的利用など、多岐にわたる政治問題を扱います（Wikipedia, 2024）。例えば、僕が討論した議題の一つは、シリアとイスラエルの国境に位置する占領下のゴラン高原に関する地政学的問題でした。フィンランド代表として、初日にロビー活動を行い、前に出て問題を緩和するための決議案を提案し、それがどのように問題を解決できるかについて討論しました。前進するための決定を下すのは難しく、非常に骨の折れる作業であることを実感しました。このようなプロセスがどのように機能するかを身に染みて体験できたことは貴重な経験でした。",
            
            // Spain
            "spain-header": "スペインへようこそ",
            "spain-p1": "2023年5月の終わりに、6年ぶりにスペインのバルセロナに訪れました。街は相変わらずで、6年前と同じく活気に満ちていました。私の経験から、バルセロナは独特の雰囲気と風景が他の都市とは一線を画しており、僕の想い入れのある場所の一つです。",
            "spain-p2": "今回の訪問はバカンスではなく、実は別の理由で来ました。スペインを２度訪れたきっかけは、私が働きたいと思う会社との出会いです。その会社はNew Space時代におそらく歴史に名を刻むほどの技術を持っています。そして私はその会社がそれを成し遂げると本当に信じています。だからこの会社の働く優秀なエンジニアたちと会いたいと思い訪れました。",
            "spain-p3": "ドキドキしながらオフィスのドアをノックし、ここで働かせてくれとお願いを申し出ましたが、案の定仕事の機会は得られませんでした。しかし幸運にも何人かのエンジニアと話すことができました。もしその中にこれを読んでいる方がいれば、心から感謝の意を表します。この訪問以来、その会社で働くことが僕の夢となりました。（振り返れば、アポなしでオフィスを衝動訪問したことは無礼ではありましたが、それでも訪れた価値は十分にありました。）",
            "spain-p4": "\" 人間は破壊されることがあっても、打ち負かされることはない - Hemingway \"",

            // France 
            "france-header": "フランスへようこそ",
            "france-p1": "2023年の6月から7月にかけて、フランス語を話すため、フランス文化を深く理解するため、夢の一つであるフランスに住む可能性を探るため、登山家としてピレネー山脈に登るため、パリとトゥールーズに飛びました。",
            "france-p2": "僕はフランス南部に位置し、航空宇宙産業の歴史的中心地として知られている都市トゥールーズを拠点に、1ヶ月半の間、ある村に滞在することにしました。文化交流プログラム「Workaway」を通じて、地元の生活に溶け込み、フランス語を練習し、自分が持つDIYのスキルをコミュニティに提供する機会を得ました。",
            "france-p3": "\" もし何かもっと知りたい、掘り下げたいなら、その場に行って、経験せよ \"",
            "france-p4": "\" Yes と Maybe が頭によぎったら、それは青信号だ \"",
            "france-p5": "僕はWorkawayで、ホストから個人的なプロジェクトを任されました。そのプロジェクトはリビングルームに合う「日本」スタイルのテーブルを、家にある材料だけ使って作ってほしいという頼みでした。",
            "france-p6": "まず、薪が置いてある倉庫から使えそうな材料を集め、アイデアを固めるためにそれらのピースを組み合わせてみました。機械のアクセスが限られていたため、上手く組み合わせる方法はかなり困難でしたが、とりあえず切って、切って、切って。削って、削って、削って。この作業を細心の注意を払いながら繰り返していきました。この工程は、ミリ単位の精度が求められるため、一度たりとも気が抜けませんでした。なのでそれぞれのピースを自分が望む形にすることが、本当に骨の折れるタスクでした。",
            "france-p7": "最後の課題は、ピースを隙間や角度なく組み合わせることでした。伝統的な日本の木工技法を使い、釘やネジを使わずに接合部を作り、はめ込みました。これは非常に精密に行う必要があり、一ミリでもずれれば、見栄えの悪い仕上がりになる可能性もありました。しかし最終的に綺麗に仕上がり、ホストが満足してくれたことにホッとしました。下の写真は工程と完成したテーブルを示したものです。",
            "france-p8": "世界中の山々に登頂することは、私の生涯の夢の一つです。そしてピレネー山脈は小学校の頃から登りたいと思っていた山の一つです。なぜかと言うと、特別な理由はありませんが、いつも何かスピリチュアル的なものを感じていたからです。",
            "france-p9": "この写真は標高3011mのカスコ・デ・マルボから撮影されたものです。非常に静かでありながら風が強く吹き飛ばされそうでした。山に登っていたのがただ僕一人だけで、自然の荘厳さを感じながら、反対側へとずっと歩き続けて行きました。",
            "france-p10": "\" 世界はこんなもんじゃない \"",

            // Morocco
            "morocco-header": "モロッコへようこそ",
            "morocco-p1": "\"アラビア語知ってる？\"",
            "morocco-p2": "\"ゼロ。だから？学べばいいでしょ？\"",
            "morocco-p3": "\"イスラム教、イスラム文化は知ってる？\"",
            "morocco-p4": "\"全く。百聞は一見にしかず\"",
            "morocco-p5": "これは、飛行機を予約する前に私の心の中でした会話です。異なる文化の国に行くとき、その言語（少なくとも「こんにちは」と「ありがとう」）と文化を学ぶことは非常に重要です。そうすれば、人はその行為に感謝を示し、深く心と心でつながることができます。これが僕の、異国に足を踏み入れる際の「尊重」の考え方です。そして文化を学ぼうとすること、そしてこれが最初にすべきことだと思います。世界は美しいけれど、残酷な一面もあります。それでも、一人として「心」を忘れていないはずです。",
            "morocco-p6": "フランスの後、2023年7月にモロッコに飛び、2週間の一人旅をしました。この旅行のテーマは、イスラムの生活と文化を見て、知り、理解すること。旅の始まりは：",
            "morocco-p7": "カサブランカ > フェズ > シャウエン > イフレン > エラシディア > メルズーガ > ティネギール > ワルザザート > アガディール > タガズート > エッサウィラ > マラケシュ",
            "morocco-map-caption": "資料：Google Maps",
            "morocco-p8": "モロッコの旅はこれまでに経験した中で最高のものでした。ある経験談は、フェズからシャウエンに移動する時のこと。旅費をなるべく節約するため、エアコンのない地元のバスを利用しました。その日の外気温は47C（117F）で、バスにエアコンがないことを知りませんでした。また、旅では全て事前に予約するのが好きではないため、当時シャウエンに行く唯一の方法がローカルバスだけでした。今まで乗ったバスの中で最悪で、ベーコンのように焼かれ、その中バスはどこでも停まり、席が埋めるまでずっと待ちました。嘘なしで何リットルかの汗をかき、気絶しそうなくらいでした。フェズを出発して数時間後、突然バスが道路から外れ、みんな降り始めました。何かと思ったら、エンジンのベルトが切れていました。ベルトを交換し、僕も含め乗客全員でバスを押しエンジンを再始動。成功した時は、みんなでハイタッチして笑い合いました。最悪だったけれど、とても面白い体験でした。",
            "morocco-p9": "移動手段は主に、主要都市間では列車、田舎ではバスか相乗りタクシー。僕はあえてツアーを予約せず、長距離移動に低コストの相乗りタクシー（グランドタクシー）を利用しました。しかし観光客という理由で、地元の人に比べて異常に高い料金を要求されることがほとんどでした。そのため、交渉したり、現地のようにアラビア語を話す必要がありました。最初の週で交渉に失敗し続けましたが、「Too much, cheaper, cheaper」といったアラビア語の交渉術を学び、なんとか現地の人と変わらない値段で乗ることに成功。タクシードラバーとのあのメンタルゲームはたまらなかったです。そしてこの旅では、SIMカードを購入しなかったため、自分で地図を見ながら、どうやって移動したらいいか考え、人に道を尋ね、なんとか自分が行きたいところに辿り着くことができました。個人的にアドベンチャー感があり、ツアーに参加するよりも遥かに価値はありました。もし冒険がお好きなら、僕がしたことをお勧めします。",
            "morocco-p10": "ちょうどタガズートからエッサウィラに行く際、バスもそっちに行くグランドタクシーもなかったので、ヒッチハイクもしてみました。一応通常のタクシーに聞いたら、とても高い料金だったので、もうヒッチハイクしかないと計画を変更しました。でもやってみるとヒッチハイクはどう簡単ではありませんでした。朝暑い天候の中で数時間待った後、やっと食品運送のドライバーが僕を拾ってくれました。乗車中、アラビア語と英語を混ぜながらお互いの夢について話し、盛り上がりました。あの時の時間は楽しく、忘れられません。",
            
            // US 
            "us-header": "アメリカへようこそ",
            "us-p1": "2019年8月にアメリカでエンジニアを学ぶために来ました。ボストンにあるウェントワース工科大学（WIT）で電気機械工学を専攻。比較的小規模の大学でありながら、豊富な実践的経験ができるとても良いエンジニアプログラムでした。しかし、もっと他の人からの刺激や学びの環境を変える必要性を感じていました。",
            "us-p2": "そこで、僕はコロラド州立大学ボルダー校に転校することに決めました。（右の写真は山の景色を望むメインキャンパスです）。この学校を選んだ理由は、特に航空宇宙工学で優れたエンジニアプログラムがあり、また、登山、スキー、クライミングが好きなので環境的にはベストの場所です。前の学校からの大きな転換ではありましたが、振り返ってみると、後悔のない決断だったと思います。無数の機会にも恵まれ、技術や個人のスキルを身に付けることができました。CUボルダーが僕の人生を変えたと言っても過言ではありません。",
            "us-p3": "Forever Buffであることを僕は誇りに思っています!",
            "us-p4": "SKO BUFFS",
            "country-us-title-1": "Beauty of America",
            "sneffels": "スネッフェルス山",
            "sneffels-note": "スネッフェルス山(4,314m/14,155ft)はコロラド州ウレイにあるサン・ユワン山脈の一つの峰です。雨天候でしたが、それもまた山の美しさの一つです。この写真は山頂から撮影されました。",
            "crestone-needle": "クレストン・ニードル",
            "crestone-needle-note": "クレストン・ニードル(4,327m/14,196ft)はコロラド州のサングレ・デ・クリスト山脈に位置しています。僕の友達と一緒に、写真に見える右の尾根に沿ってクライミングをしました。そしてこのオレンジ色に輝いた山肌は朝6時30の日の出によるものです。",
            "middle-teton": "ミドル・ティトン",
            "middle-teton-note": "ミドル・ティトン(3,904m/12,809ft)はワイオミング州のグランド・ティトン国立公園にあります。僕が座っている所がミドル・ティトンの頂上で、背後にある山はグランド・ティトンです。この山は、圧巻で特に畏敬の念を抱かせます。",
            "capitol": "キャピトル・ピーク",
            "capitol-note": "キャピトル・ピーク(4,309m/14,138ft)はコロラド州アスペン近くのエルク山脈にあります。山頂で雨に降られましたが、なんとか頂上に到達しました。そしてそこから見える星は別次元でした。",
            "maroon": "マルーン・ピーク",
            "maroon-note": "マルーン・ピーク(4,317m/14,163ft)はコロラド州のエルク山脈にある二つの峰（マルーン・ベルズ）の一つです。この時は、マルーン・ピークだけ挑戦しました。本当に本当に素晴らしい山です！* 写真に写っている山はマルーン・ピークで撮った北マルーン・ピークです。",
            "north-maroon": "北マルーン・ピーク",
            "north-maroon-note": "北マルーン・ピーク(4,274m/14,022ft)はマルーン・ベルズのもう一つの峰です。二回目のマルーン・ベルズ、北マルーンからマルーン・ピークまで一人で縦走しました。この山は僕が登ってきた中で一番のお気に入りです。* 写真に写っている山は北マルーンから撮ったマルーン・ピークです。",
            "longs": "ロングス・ピーク",
            "longs-note": "ロングス・ピーク(4,346m/14,259ft)はコロラド州のフロント山脈にあります。友達と午前2時に出発し、日の出の瞬間に登頂しました。やはり山頂から日の出を眺めるのは良いものです。",
            "grand-teton": "グランド・ティトン国立公園",
            "grand-teton-note": "一目で自然の力を感じることができます。こんな感じで雄大に立つ山は、ただただ圧倒的です。言葉を失う程です。",
            "yellow-stone": "イエローストーン国立公園",
            "yellow-stone-note": "イエローストーンはまさに地球の口そのもので、地球が生きていることを感じます。す・ご・いの一言です。",
            "grand-canyon": "グランドキャニオン国立公園",
            "grand-canyon-note": "グランドキャニオンの地形は、名前からも分かるように巨大で圧倒的です。非常に静かでありながらもエネルギーに満ちています。そう、崖に立った時、感じました。自然が作り出すものは厳かだが、そこには感謝の意を忘れてはいけない。",
            "us-quote-1": "\" Powerless, Relentless, Humanless \"",

            // Bolivia 
            "bolivia-header": "ボリビアへようこそ",
            "bolivia-p1": "ボリビアに入ってから１時間、最悪の思いをした。僕はチリからバスで国境を越え、当然ながらセキュリティーゲートでパスポートを見せなければなりません。その時セキュリティーの人が近づいてきて、尋ねました。",
            "bolivia-p2": "\"どこから来たの？\"",
            "bolivia-p3": "\"日本です\"、 と答え",
            "bolivia-p4": "\"ビザは？\"、と彼が尋ねました。",
            "bolivia-p5": "\'ちょっと待って。観光の場合、ビザは必要ないと思うんだけど？\' と頭の中で思いました。旅行する前にビザの要件については確かに確認したはず。",
            "bolivia-p6": "\"本当に？\", と聞き返すと",
            "bolivia-p7": "\"冗談じゃないよ\", と彼が言いました。",
            "bolivia-p8": "頭が真っ白になりました。もう終わりだと思っていたので。でもその人は僕の反応を見てクスクス笑い始めました。そして彼は言いました。",
            "bolivia-p9": "\"大丈夫、行っていいよ\"",
            "bolivia-p10": "ふざけるな、僕を少しばかりおちょくったのです。本当に意地悪なおじさん。それ以外は、ボリビア旅は素晴らしいものでした。旅の終わりには、この国を去りたくないと思う程でした。",
            "bolivia-p11": "ボリビアには、インカ帝国時代やスペイン植民地時代から現在に至るまでの長い歴史と興味深い文化があります。国の経済は鉱業やガスといった天然資源に依存していますが、多くの人々にとって富はまだ遠い存在です。",
            "bolivia-p12": "たまたま英語を話せるボリビア人と話す機会があり、国の文化についての洞察を聞きました。彼女は、ボリビアの多くの人々が経済的な課題を認識している一方で、物質的な富よりも家族を大切にしていることが多いと説明してくれました。その考え方は素晴らしいな感じました。お金は生きるために必要ですが、ボリビアでの真の幸福は家族の絆の中にあるようです。",
            "country-bolivia-title-1": "ウユニ塩湖",
            "bolivia-p13": "ウユニ塩湖はボリビアで最も有名な観光地の一つです。私の背後に広がる広大な白い景色はすべて塩でできています。地平線を見ることができないくらい、真っ平で広大。この壮大な大地にただただ感銘。下の写真は、ウユニ塩湖での捉えた夕日です。通常1月から3月の雨季には、湖面に水がたまり、巨大な鏡に変わります。",
            "country-bolivia-title-2": "ティワナク",
            "bolivia-p14": "ティワナク帝国は600年から1100年まで存在し、現在のティワナク村は帝国の重要な拠点の一つでした。記録が残されていないため、なぜ古代の人々が標高3,850m/12,600ftの地に都市を築き、作物の栽培が難しい高度にも関わらず、最盛期には約5万人が住んでいたのかという疑問が残っています。さらに、どのようにして古代の技術で何トンもある石を運んだのかも謎です。研究によると、石はティワナク湖付近から運ばれたとされていますが、その方法はまだ解明されていません。一部では、巨人がいたのではないかとも言い伝えられています。",
            "bolivia-p15": "僕にとって、ティワナクはとてもユニークで興味深い遺跡です。例えば、右の石像は片手に人間を、もう一方の手には何かを持っています。この席像は力の神を表しているのではないかと想像しましたが、同時に忠誠を象徴しているのかもしれません。私はコンパスを使って確認しましたが、真東に向いており、二枚目の写真に写っている門を見つめていました。石像が太陽のように帝国の隆盛を祈っているのか、単に毎朝太陽に祈りを捧げているのか。この世界は太陽なしには無力だったでしょうから。",
            "bolivia-p16": "考古学者によれば、右下の写真に写っている壁に彫られた人間の顔を模した石は、訪問者に対する感謝の意を表しているそうです。いくつかの顔はアジアの特徴を持っており、古来から地球の反対側から訪問者がいたと思うとその時代の影響力に感嘆します。",

            // Chile 
            "chile-header": "チリへようこそ",
            "chile-p1": "チリに飛行機で行くことになるとは予想していませんでした。実際、2023年12月に最初の南米の国としてペルーに飛ぶ予定でしたが、その日にペルーの抗議活動のために政府が国家非常事態を宣言しました。2時間以内にフライトをキャンセルするかどうかを決めなければなりませんでした。結局、飛行機に乗り、最終目的地としてチリのサンティアゴに飛びました。それは衝動的な決断でしたが、最終的には本当にうまくいきました。",
            "chile-p2": "当然ながら、チリで何をしたいのか全く分かりませんでした。また、メキシコで学んだスペイン語を忘れてしまっていました。計画もスペイン語もない状態でのスタートだったので、不安が限界を超えてしまいました。そのため、すぐにサンティアゴから10時間離れたところに住む友人に連絡し、彼の家族を訪ねました。彼らのおかげでストレスと不安を和らげることができました。友人のおかげで、旅行を楽しみ始めました。",
            "chile-p3": "友人の家を離れた後、パタゴニアに飛びました。悪天候のためにフライトがキャンセルされましたが、数日後にはなんとかパタゴニアに到着しました。危険なくらい風が強かったですが、公園の人気のハイキングルートであるWトレックを始めました。右側の写真はトーレス・デル・パイネで、世界七不思議の一つです。それらは巨大で美しかったです。",
            "chile-p4": "左側の最初の写真にあるアルミランテ・ニエト山に登頂する予定でした。しかし、風速80-90m/sという致命的な気象条件だったので、断念しました。その代わりに、左側の2番目の写真にある、ガイドなしでは立ち入り禁止のサイレントバレーにこっそりと入ってみました。このエリアは他とは全く異なっていました。恐ろしかったですが、正直に言うと、そこにいるのが好きでした。",
            "chile-p5": "トレッキングの残りは素晴らしかったです!右側の2番目にある写真はフレンチバレーで、最後の写真は氷河です。正直、ここは友達と一緒にハイキングしたかったのですが、色々な場所から来た素晴らしい人々と出会い、結果的には本当に価値がありました!",
            "chile-p6": "パタゴニアから地球で最も乾燥している地域であるアタカマ砂漠に移動しました。砂漠の中には500年間雨が降っていない場所もあります。また、アタカマは世界的な天文観測で有名です。皮肉なことに、私の訪問中は雲のために星を見ることができず、通常はそうではないのですが、残念でした。それでも、文句は言えませんでした。",
            "chile-p7": "しかし、私は地球の素晴らしい地理的特徴を見ました。右側と左下にある2枚の写真は、月の表面のように見えることから名付けられたムーンバレーで撮影されました。",

            // Jordan 
            "jordan-header": "ヨルダンへようこそ",
            "jordan-p1": "このページは近日中に更新されます",

            // Israel 
            "israel-header": "イスラエルへようこそ",
            "israel-p1": "このページは近日中に更新されます",

            // Palestine 
            "palestine-header": "パレスチナへようこそ",
            "palestine-p1": "このページは近日中に更新されます",

            // Japan 
            "japan-header": "日本へようこそ",
            "japan-p1": "このページは近日中に更新されます",
        },

        // Contact.html
        "contact-p": {
            "contact-subheading-1": "Let's connect! 皆さんのストーリーや夢をぜひお聞かせください。お気軽にご連絡頂ければ幸いです。",
            "contact-subheading-2": "Spread the Word, Ignite the Dream.",
        },

        "contact": {
            "contact-heading": "コンタクト",
            "contact-name": "名前",
            "contact-email": "メール",
            "contact-subject": "件名",
            "contact-message": "メッセージ",
            "contact-send": "送信"
        }
    }
};