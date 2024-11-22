export const workExperience = [
  {
    company: "Artelus",
    role: "CTO and Director",
    startDate: "2023-03-22",
    endDate: new Date().toISOString().split("T")[0],
    description: [
      "Developed LLM-based mental health app for holistic diagnosis, including emotion detection and suicidal tendency analysis.",
      "Innovated synthetic data generation using StyleGAN3 model, enhancing DR1 image datasets. Conducted multiple statistical tests like Chi-Square, Mann-Whitney U-Test.",
      "Attained impressive sensitivity rates of 98.0% for moderate-to-severe non-proliferative DR and 98.7% for proliferative Diabetic Retinopathy with the DRISTi 2.1 algorithm, which got published in NHS.",
      "Created a framework combining natural data and unlabelled fundus images for unsupervised pre-training of robust medical foundational models using SimCLR and BYOL, enabling data-efficient generalization across various medical tasks.",
      "Constructed Inference Engine SaaS app, enabling project and point-and-click model training with deployment to Kubernetes servers via FastAPI and Next JS based interface."
    ],
    location: "Kolkata, IN",
    logo: "/images/logos/artelus_logo.webp",
  },
  {
    company: "CyberDeck",
    role: "Founder and ML Guy",
    startDate: "2022-03-03",
    endDate: "2023-03-20",
    description: [
      "Created a complete no-code platform for end-to-end Data Science and Machine Learning.",
      "This platform was capable of performing Data Processing, Exploratory Data Analysis, Inferential Statistical Tests, Machine Learning, Univariate and multivariate Time-Series Forecasting, Clustering and MLOPS at the click of a mouse.",
      "CyberDeck got selected in Startup-India, an initiative by the honorable Prime Minister of India to help boost the most promising startups in India.",
      "CyberDeck also got selected in Microsoft Startup Founders Hub and received $25000 in credit in Azure cloud.",
      "Onboarded and managed around 7000 users for the free tier of CyberDeck.",
    ],
    location: "Kolkata, IN",
    logo: "/images/logos/cyberdeck_logo.jpeg",
  },
  {
    company: "Hopscotch",
    role: "Machine Learning Lead",
    startDate: "2020-09-14",
    endDate: "2022-03-01",
    description: [
      "Implemented a Dynamic Pricing model based on Bayesian Optimization and Markov chain Monte Carlo Simulation. The pricing model initially predicts an optimized price based on historical price, demand and traffic data. Within 2 months of implementation for 10 product types, the total Margin has gone up by 4% with Individual margins at a product type level increasing by 30% all the way upto 172%.",
      "Created a purchase/demographics based user segmentation model with an unsupervised ML algorithm (Gaussian Mixture model) for better targeting of users. ",
      "In order to increase the LTV of customers, currently building a customer survival analysis with Kaplan Meier and Cox’s proportional Hazard models as these works much better with censored data than a regression model.",
      "Implemented multiple recommender systems for Product to Product (Word2Vec and BERT embedding method) and Customer to Product (ALS, Neural Networks, Singular Value Decomposition). This increased the PDP Click-Through Rate from 1.3% to 3.2%."
    ],
    location: "Kolkata, IN",
    logo: "/images/logos/hopscotch.ico",
  },
  {
    company: "Future Group - Tathastu",
    role: "Machine Learning Manager",
    startDate: "2017-10-10",
    endDate: "2020-09-05",
    description: [
      "Implemented a virtual try on pipeline, where given a person’s image and a cloth image, the model generates a new image of the person dressed with the new cloth using JPPNet and OpenPose. This model also had the ability to generate limbs e.g if the person was originally dressed in full sleeve dress and he/she chooses a sleeveless one.",
      "Created a novel Encoder – Decoder deep learning architecture chained with Monte Carlo based error correction and Attention mechanism to predict which customers will visit in the following week. Effectively targeting only those customers reduced the campaign operation cost by 4%.",
      "Created a supervised machine learning model (Xgboost) to predict how much a customer will spend in his/her next visit resulting in a margin of 7%.",
      "Created a deep neural product embedding model to find the best potential customers for a product promotion campaign. Combined with the visit prediction model, this resulted in a 4% reduction in operation cost.",
      "Created a Deep learning model (YOLO/Faster RCNN) to predict customer’s age, gender and emotion from live video feed."
    ],
    location: "Kolkata, IN",
    logo: "/images/logos/future_group_logo.jpg",
  },
  {
    company: "Edupristine",
    role: "Machine Learning Manager",
    startDate: "2017-05-10",
    endDate: "2017-10-01",
    description: [
      "Worked as an active faculty member for the Big Data and Data Science Certification Course with batches of 40 - 50 students on average.",
      "Organizing interactive sessions, demos and real-life project solving in Banking domain, retail sector and social media. The main challenge in this part is conveying the goal effectively to a huge batch of students and successfully accomplishing them together."
    ],
    location: "Kolkata, IN",
    logo: "/images/logos/edupristine_logo.png",
  },
  {
    company: "New York State Department of Health",
    role: "Senior Data Specialist",
    startDate: "2015-02-01",
    endDate: "2017-05-01",
    description: [
      "Spearheaded healthcare facility clustering using advanced unsupervised learning models such as KMeans and Gaussian Mixture Models, optimizing service delivery based on location data and accessibility metrics.",
      "Led a large-scale data migration project, transferring critical healthcare datasets from Oracle to Hadoop. Designed and implemented Shell Scripts to streamline data transfer processes, achieving a 30% reduction in data retrieval times.",
      "Supported the department’s Medicaid and Affordable Care Act initiatives by developing predictive analytics solutions to identify high-risk populations and optimize resource allocation, leading to a 5% improvement in healthcare service delivery for underserved communities."
    ],
    location: "Albany, US",
    logo: "/images/logos/nysdoh_logo.jpg",
  },
  {
    company: "Computer Science Corporation",
    role: "Database Developer",
    startDate: "2013-12-01",
    endDate: "2014-12-01",
    description: [
      "Developed for the original Affordable Care Act team (ObamaCare), which provided healthcare to 32 million Americans.",
      "Developed SQL utilities and scripts to monitor database performance",
    ],
    location: "Albany, US",
    logo: "/images/logos/csc_logo.png",
  },
  {
    company: "NASA",
    role: "Research Project Assistant",
    startDate: "2012-08-01",
    endDate: "2013-05-01",
    description: [
      "Computed the residual stress in the TGO layer by Photoluminescence and Raman spectroscopy.",
      "Studied the evolution of strain in the TBC system by taking depth measurements using in-situ transmission synchrotron X-ray diffraction.",
      "Used the measured strain values to understand the critical stages of strain evolution within the TGO.",
    ],
    location: "Orlando, US",
    logo: "/images/logos/nasa_logo.jpeg",
  },
  {
    company: "University of Central Florida",
    role: "Research Assistant",
    startDate: "2011-07-01",
    endDate: "2013-05-01",
    description: [
      "Completed Masters of Science in Materials Science and Engineering.", 
      "Dean's Fellowship recipient for the academic year 2011-2012.",
      "Performed baseline measurement tests on the PV modules like IV measurements, Dry leakage Tests, Electroluminescence, IR, and Wet Leakage Tests. ",
      "Developed models which produced 50K x 50K dense / partial dense / sparse matrix to assess state of the art mitigation solutions to the thermal and radiation problems.",
    ],
    location: "Orlando, US",
    logo: "/images/logos/ucf_logo_2.png",
  },
];
