const JobList = {

    template: `
 <div class="card">
      <div class="card-header">
        <h3>Job Explorer</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <router-link to="/">Overview</router-link>
        </li>
        <li 
          class="list-group-item" 
          v-for="job in jobs" 
          :key="job.job_id">
          <router-link :to="'/job/' + job.job_id">{{ job.job_id }}</router-link>
        </li>
      </ul>
    </div>
    `,

    data() {
        return{
            jobs: [
                {
                  "job_id": "MLA101",
                  "job_title": "Machine Learning Intern",
                  "category": "AI",
                  "location": "Remote",
                  "employment_type": "Internship",
                  "salary_range": "$25/hr",
                  "job_level": "Entry-Level",
                  "required_skills": ["Python", "Scikit-learn", "Git"],
                  "preferred_qualifications": ["Pandas", "Jupyter Notebooks"],
                  "job_description": "Join our AI team to assist with model training, evaluation, and data preprocessing. You will contribute to real-world projects and gain hands-on experience in machine learning pipelines and automation tools.",
                  "application_deadline": "2025-04-15",
                  "posted_date": "2025-03-29",
                  "company": "Swinburne AI Lab",
                  "supervisor": "Dr. Jane Doe",
                  "positions_available": 2,
                  "start_date": "2025-05-01",
                  "tags": ["machine learning", "internship", "AI"]
                },
                {
                  "job_id": "DSC202",
                  "job_title": "Data Science Assistant",
                  "category": "Data Science",
                  "location": "Melbourne",
                  "employment_type": "Part-time",
                  "salary_range": "$35/hr",
                  "job_level": "Mid-Level",
                  "required_skills": ["SQL", "Python", "PowerBI"],
                  "preferred_qualifications": ["Time series experience"],
                  "job_description": "Support the analytics team by preparing datasets, generating dashboards, and assisting with predictive modeling. This role is ideal for someone passionate about data storytelling and visualization.",
                  "application_deadline": "2025-04-10",
                  "posted_date": "2025-03-25",
                  "company": "DataLab Inc.",
                  "supervisor": "Ms. Ana Lee",
                  "positions_available": 1,
                  "start_date": "2025-04-20",
                  "tags": ["data", "analytics", "visualization"]
                },
                {
                  "job_id": "AIP303",
                  "job_title": "AI Research Assistant",
                  "category": "AI",
                  "location": "Hybrid",
                  "employment_type": "Full-time",
                  "salary_range": "$65,000 - $75,000",
                  "job_level": "Entry-Level",
                  "required_skills": ["Python", "PyTorch", "NLP"],
                  "preferred_qualifications": ["Transformers", "BERT", "Academic writing"],
                  "job_description": "Work closely with researchers to build and evaluate AI models. Responsibilities include literature reviews, experimentation, and documenting findings for publication or internal reports.",
                  "application_deadline": "2025-04-22",
                  "posted_date": "2025-03-28",
                  "company": "DeepThink Labs",
                  "supervisor": "Prof. Richard Lin",
                  "positions_available": 1,
                  "start_date": "2025-05-15",
                  "tags": ["research", "AI", "NLP"]
                },
                {
                  "job_id": "DEV404",
                  "job_title": "Full Stack Developer",
                  "category": "Software Development",
                  "location": "Sydney",
                  "employment_type": "Full-time",
                  "salary_range": "$80,000 - $100,000",
                  "job_level": "Mid-Level",
                  "required_skills": ["JavaScript", "Node.js", "Vue.js"],
                  "preferred_qualifications": ["Docker", "CI/CD"],
                  "job_description": "Build responsive web applications with an agile team. You'll work across the stack, contribute to design decisions, and implement efficient, scalable code with modern frameworks.",
                  "application_deadline": "2025-04-30",
                  "posted_date": "2025-03-27",
                  "company": "TechNova",
                  "supervisor": "Ms. Eva Zhou",
                  "positions_available": 2,
                  "start_date": "2025-05-20",
                  "tags": ["web", "vue", "fullstack"]
                },
                {
                  "job_id": "CLD505",
                  "job_title": "Cloud DevOps Engineer",
                  "category": "DevOps",
                  "location": "Remote",
                  "employment_type": "Contract",
                  "salary_range": "$60/hr",
                  "job_level": "Senior",
                  "required_skills": ["AWS", "Terraform", "CI/CD"],
                  "preferred_qualifications": ["Kubernetes", "Monitoring"],
                  "job_description": "Automate infrastructure and deployment pipelines. You'll maintain cloud environments and ensure system reliability, security, and performance across distributed platforms.",
                  "application_deadline": "2025-04-18",
                  "posted_date": "2025-03-29",
                  "company": "SkyNetWorks",
                  "supervisor": "Mr. John Ryu",
                  "positions_available": 1,
                  "start_date": "2025-04-25",
                  "tags": ["cloud", "AWS", "devops"]
                },
                {
                  "job_id": "DSA606",
                  "job_title": "Data Analyst Intern",
                  "category": "Data Science",
                  "location": "Melbourne",
                  "employment_type": "Internship",
                  "salary_range": "$20/hr",
                  "job_level": "Entry-Level",
                  "required_skills": ["Excel", "SQL", "Python"],
                  "preferred_qualifications": ["Tableau", "Descriptive stats"],
                  "job_description": "Assist the analytics team in extracting insights from large datasets. You'll clean and analyze data, build reports, and present findings to internal stakeholders.",
                  "application_deadline": "2025-04-12",
                  "posted_date": "2025-03-26",
                  "company": "InsightX",
                  "supervisor": "Dr. Karen Smith",
                  "positions_available": 2,
                  "start_date": "2025-04-22",
                  "tags": ["data", "intern", "analytics"]
                },
                {
                  "job_id": "NLP707",
                  "job_title": "NLP Project Assistant",
                  "category": "AI",
                  "location": "Hybrid",
                  "employment_type": "Part-time",
                  "salary_range": "$30/hr",
                  "job_level": "Mid-Level",
                  "required_skills": ["NLP", "Python", "SpaCy"],
                  "preferred_qualifications": ["Text classification", "Chatbot dev"],
                  "job_description": "Support a research project focused on natural language understanding. You'll annotate datasets, evaluate model outputs, and help refine NLP workflows.",
                  "application_deadline": "2025-04-19",
                  "posted_date": "2025-03-29",
                  "company": "LinguaAI",
                  "supervisor": "Dr. Yusuf Khan",
                  "positions_available": 1,
                  "start_date": "2025-05-03",
                  "tags": ["NLP", "annotation", "language"]
                },
                {
                  "job_id": "CVV808",
                  "job_title": "Computer Vision Intern",
                  "category": "AI",
                  "location": "Remote",
                  "employment_type": "Internship",
                  "salary_range": "$22/hr",
                  "job_level": "Entry-Level",
                  "required_skills": ["OpenCV", "Python", "Image processing"],
                  "preferred_qualifications": ["YOLO", "CNNs"],
                  "job_description": "Assist in developing and testing computer vision models for real-world applications. You'll work on preprocessing, data labeling, and performance evaluation tasks.",
                  "application_deadline": "2025-04-21",
                  "posted_date": "2025-03-29",
                  "company": "VisionWorks",
                  "supervisor": "Ms. Talia Cheng",
                  "positions_available": 1,
                  "start_date": "2025-05-10",
                  "tags": ["vision", "cv", "intern"]
                },
                {
                  "job_id": "SEC909",
                  "job_title": "Cybersecurity Analyst",
                  "category": "Cybersecurity",
                  "location": "Canberra",
                  "employment_type": "Full-time",
                  "salary_range": "$90,000 - $110,000",
                  "job_level": "Senior",
                  "required_skills": ["Network security", "Python", "SIEM"],
                  "preferred_qualifications": ["CISSP", "Incident response"],
                  "job_description": "Monitor, analyze, and respond to security incidents. You'll secure systems and networks, perform audits, and implement preventive controls against cyber threats.",
                  "application_deadline": "2025-04-25",
                  "posted_date": "2025-03-28",
                  "company": "SecureNet",
                  "supervisor": "Mr. Alan Green",
                  "positions_available": 1,
                  "start_date": "2025-05-20",
                  "tags": ["security", "cyber", "threat detection"]
                },
                {
                  "job_id": "RLS010",
                  "job_title": "Reinforcement Learning Engineer",
                  "category": "AI",
                  "location": "Remote",
                  "employment_type": "Full-time",
                  "salary_range": "$100,000 - $120,000",
                  "job_level": "Senior",
                  "required_skills": ["RL", "Python", "Gym"],
                  "preferred_qualifications": ["TensorFlow", "Multi-agent systems"],
                  "job_description": "Design and implement reinforcement learning algorithms for intelligent decision-making. You'll build simulations, train agents, and analyze model behavior under various environments.",
                  "application_deadline": "2025-04-30",
                  "posted_date": "2025-03-29",
                  "company": "AlphaMotion",
                  "supervisor": "Dr. Emily Tran",
                  "positions_available": 1,
                  "start_date": "2025-05-25",
                  "tags": ["RL", "deep learning", "AI"]
                }
              ]
              
        }
    }
}