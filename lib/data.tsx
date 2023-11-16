export interface SectionProps {
  header: string;
  data: Content[];
  type: "work_experience" | "education" | "extracurrics";
}

export type Content = {
  title: string;
  designation?: string;
  title_right?: string;
  subtitle?: string;
  subtitle_right?: string;
  points: any;
};

const TextBold = ({ children }: { children?: React.ReactNode }) => {
  return <span className="font-semibold">{children}</span>;
};

export const headerData = {
  imageUrl: "/profile-full.jpeg", // this looks inside /public folder
  firstName: "Tejas",
  lastName: "Ladhe",
  designation: "Software Engineer",
  email: "tejasladhe24@gmail.com",
  phone: "+91-9001704788",
  linkedin: "/in/tejasladhe24",
  preferred_locations: ["Chennai", "Bengaluru", "Pune", "[Remote]"],
};

export const educationData = {
  header: "Education",
  data: [
    {
      title: "Indian Institute of Technology Bombay",
      title_right: "B.Tech + M.Tech (Dual Degree)",
      subtitle: "Mechanical Engineering · Computer Integrated Manufacturing",
      subtitle_right: "Jul'17 - Jun'22",
      points: [
        {
          title:
            "Predicting shape of microneedles fabricated using Photopolymerization",
          title_right: "Master's Thesis",
          subtitle:
            "Guided by Prof. Deepak Marla and Prof. Prasanna Gandhi - Dept. of Mechanical Engineering, IIT Bombay",
          subtitle_right: "Jun'21 - Jun'22",
          points: [
            <p>
              Engineered a comprehensive multiphysics laser-matter interaction
              model utilizing MATLAB, enabling the accurate simulation of 3D
              cured microneedle production processes.
            </p>,
            <p>
              Validated the model's efficacy by meticulously comparing its
              outcomes with experimental data, achieving an impressive 95%
              predictability accuracy in determining shape dimensions.
            </p>,
            <p>
              Conducted an exhaustive review of over 35 cited papers,
              systematically analyzing advancements in photopolymerization
              techniques, and meticulously documented research gaps to steer
              future investigations.
            </p>,
            // "Developed multiphysics laser-matter interaction model in MATLAB to simulate production of 3D cured microneedles",
            // "Compared model results with experimental data and obtained 95% predictability accuracy for shape dimensions",
            // "Explored 35+ cited papers to understand advancements and documented research gaps of photopolymerization",
          ],
        },
      ],
    },
  ],
  type: "education",
};

export const workData = {
  header: "Work Experience",
  data: [
    {
      title: "Cenizas Labs",
      designation: "Software Engineer",
      title_right: "Chennai, TN",
      subtitle:
        "NextJs · Tailwind CSS · shadcn/ui · Django · Bootstrap5 · MongoDB · MySQL · .NET · AWS · SocketIO · OpenCV",
      subtitle_right: "Dec'22 - Present",
      points: [
        <p>
          Currently <TextBold>managing</TextBold> a{" "}
          <TextBold>team of 4</TextBold> in the development of an innovative{" "}
          <TextBold>SaaS</TextBold> platform focused on providing{" "}
          <TextBold>AI-driven</TextBold> software consulting, management, and
          developmental tools.
        </p>,
        <p>
          Designed and implemented a Django based intranet solution, RTPMS
          (Real-Time Power Management System) tailored for mission-critical
          applications, facilitating real-time monitoring and configuration of
          proprietary RTUC-T/F-XX modules.
        </p>,
        <p>
          Engineered a versatile <TextBold>.NET</TextBold> based{" "}
          <TextBold>multiplatform</TextBold> software utility tailored for
          intuitive <TextBold>gesture-controlled</TextBold> proprietary CAD
          input devices, targeting gaming and design sectors to enhance user
          experience and efficiency.
        </p>,
        <p>
          Spearheaded the construction of company's portfolio showcase website,
          leveraging Next.js and Tailwind CSS, enhancing both presentation and
          functionality to showcase company products and solutions.
        </p>,
        <p>
          Contributed to an Admin intranet Django application by delivering key
          features such as <TextBold>real-time chat,</TextBold> a tax
          calculator, and other <TextBold>employee support</TextBold>{" "}
          functionalities, augmenting internal operational efficiency and user
          experience.
        </p>,
        // "Managed a team of 4, building SaaS which offers AI-driven software consulting, management, and development tools",
        // "Created an RTPMS platform for real-time monitoring and configuring proprietary RTUC-T/F-XX modules on the go",
        // "Engineered multiplatform software utility for intuitive gesture-controlled CAD input device focused on gaming and design",
        // "Built company portfolio showcase website with Next.js and Tailwind CSS for enhanced presentation and functionality",
        // "Delivered real-time chat, tax calculator, and other employee support features for Admin intranet Django application",
      ],
    },
    {
      title: "udaan.com",
      designation: "GTE - Data Platform",
      title_right: "Bengaluru, KA",
      subtitle:
        "python3 · React.js · Ant Design · TypeScript · Kotlin · SQLAlchemy · Azure Databricks",
      subtitle_right: "Aug'22 - Nov'22",
      points: [
        <p>
          Developed a React tsx components and UI dedicated to{" "}
          <TextBold>data profiling,</TextBold> showcasing detailed column-level
          profiling metrics, integrated with Kotlin multiplatform based API
          endpoints to fetch and display this data effectively.
        </p>,
        <p>
          Strengthened data security measures by orchestrating the migration of
          sensitive service credentials to <TextBold>HashiCorp Vault</TextBold>{" "}
          from an insecure database table. Utilized a Java-based client for
          seamless integration and heightened security protocols.
        </p>,
        <p>
          Improved <TextBold>operational efficiency</TextBold> by implementing a
          Python-based <TextBold>Slackbot</TextBold> capable of monitoring and
          instantly alerting any modifications in Azure public IP address
          ranges, proactively reducing the occurrence of job failures.
        </p>,
        <p>
          Optimized productivity by streamlining SQL queries for Create, Read,
          Update, and Delete (CRUD) operations on database tables. Leveraged
          SQLAlchemy ORM to automate these processes, resulting in a remarkable
          10-fold reduction in time and resource utilization.
        </p>,

        // "Created react based UI for data profiling to display column level profiling metrics utilising Kotlin based API endpoints",
        // "Enhanced data security by migrating service secrets from insecure DB table to HashiCorp Vault using java based client",
        // "Reduced jobs failure by building python based Slackbot to track and alert changes in Azure public IP address ranges",
        // "Reduced time cost by 10 folds by automating SQL queries for CRUD operations on DB tables using SQLAlchemy ORM",
      ],
    },
    {
      title: "Bazaarlytics - zFlux",
      designation: "Python Web Developer Intern",
      title_right: "Bengaluru, KA (Remote)",
      subtitle:
        "Django · Amazon SP-API · python3 · HTML/CSS · jQuery · AWS · Twilio ",
      subtitle_right: "Dec'21 - Jan'22",
      points: [
        <p>
          Created market analytics <TextBold>dashboard</TextBold> within a
          Django web application, integrating <TextBold>SP-API</TextBold> for an
          eCommerce business management platform.
        </p>,
        <p>
          Engineered a semi-automated <TextBold>WhatsApp chatbot</TextBold>{" "}
          utilizing Twilio's communications API to streamline one-to-one client
          interactions, enhancing user accessibility and support.
        </p>,
        // "Delivered market analytics tools & dashboard using Django & SP-API for an eCommerce business management platform",
        // "Developed semi-automated WhatsApp chatbot using Twilio communications API for easy one-to-one client interaction",
      ],
    },
    {
      title: "FirstCase",
      designation: "Full Stack Development Intern",
      title_right: "Bengaluru, KA (Remote)",
      subtitle:
        "Angular · Express.js · Node.js · MongoDB · Elasticsearch · AWS · python3 · Spacy · Regex · Dialogflow",
      subtitle_right: "Dec'20 - Jul'21",
      points: [
        <p>
          Spearheaded the implementation of <TextBold>POC</TextBold> &{" "}
          <TextBold>MVP</TextBold> encompassing a comprehensive full-stack web
          application tailored for legal research and analysis.
        </p>,
        <p>
          Architected and developed a optimized responsive UI utilizing Angular
          & Bootstrap4, integrated with <TextBold>REST APIs</TextBold> ensuring
          optimal performance.
        </p>,
        <p>
          Engineered a <TextBold>sub-second</TextBold> judgment analytics
          delivery system by implementing a query interface indexing and
          aggregating over <TextBold>3M+</TextBold> documents.
        </p>,
        <p>
          Orchestrated the development of an innovative pre-AGI chatbot,{" "}
          <TextBold>ILSA</TextBold>, capable of{" "}
          <TextBold>context handling</TextBold> and{" "}
          <TextBold>entity extraction</TextBold> enhancing user experience.
        </p>,
        // "Established POC and Minimum Viable Product consisting of full-stack web application for legal research and analysis",
        // "Designed responsive User Interface using Angular-CLI connected to REST APIs built with Node.js and Express.js",
        // "Delivered sub-second judgment research results while providing query analytics interface indexing 3M+ documents",
        // "Constructed python based ILSA chatbot utilising Dialogflow and Spacy for context handling and parameters extraction",
      ],
    },
  ],
  type: "work_experience",
};

export const projectData = {
  header: "Key Projects",
  data: [
    {
      title: "Improving Rubik's Cube Solver by Parallelization",
      title_right: "High Performance Scientific Computing",
      subtitle:
        "C++· Object Oriented Programming · OpenMP Library · Google Colab",
      subtitle_right: "Mar'21 - Apr'21",
      points: [
        <p>
          Enhanced computational efficiency by up to <TextBold>50%</TextBold>{" "}
          for the <TextBold>IDA*</TextBold> search algorithm-based Cube Solver
          through the <TextBold>parallel computation</TextBold> implementation
          techniques.
        </p>,
        <p>
          Conducted comprehensive comparative analysis involving search
          algorithms, data structures, and computational costs across five
          Rubik's Cube solving methodologies, providing insights into their
          efficacy.
        </p>,
        <p>
          Engineered C++ code to simulate rotational movements of Rubik's Cube
          sides, validating generated arrays of movements as viable solutions
          within the solver.
        </p>,

        // "Achieved upto 50% computational savings for IDA* search algorithm based Cube Solver through parallel computation",
        // "Comparatively analyzed search algorithms, data structures, computational cost of 5 Rubik's Cube solving approaches",
        // "Developed C++ code for simulating sides rotation on rubik's cube to verify produced array of movements as solutions",
      ],
    },
  ],
  type: "work_experience",
};

export const extracurricsData = {
  header: "Extra-Curricular Activities",
  data: [
    {
      title: "Leadership",
      points: [
        {
          point: (
            <p>
              Teaching Assistant for ME338: Machining Processes II and ME119:
              Engineering Graphics and Drawing
            </p>
          ),
          year: "'19",
        },
        {
          point: (
            <p>
              Facilitated logistics and security of 20+ seminars, and shows at
              Mood Indigo and E-Summit
            </p>
          ),
          year: "'19",
        },
      ],
    },
    {
      title: "Competitions",
      points: [
        {
          point: (
            <p>
              Built a RPi-device for visually impaired incorporating 5+ features
              including ASR and OCR capabilities
            </p>
          ),
          year: "'18",
        },
        {
          point: (
            <p>
              Designed and fabricated remote controlled car and plane for
              technical project competitions at IITB
            </p>
          ),
          year: "'17",
        },
        {
          point: (
            <p>
              Awarded 1st prize among 600+ students in Talent Hunt Exam
              organized by SDITS, Khandwa
            </p>
          ),
          year: "'17",
        },
      ],
    },
    {
      title: "Community Service",
      points: [
        {
          point: (
            <p>
              Volunteered in Abhyuday’s food donation drive for underprivileged
              children in Powai slums
            </p>
          ),
          year: "'19",
        },
        {
          point: (
            <p>
              Devoted 80+ hours in spreading awareness about sustainable
              development with NSS
            </p>
          ),
          year: "'17",
        },
      ],
    },
    {
      title: "Hobbies",
      points: [
        {
          point:
            "Passionate Motorcyclist · Cooking · Gym Enthusiast · Swimming · Gaming · Hiking",
        },
      ],
    },
  ],
  type: "extracurrics",
};

export const skills = {
  web_framework: [
    "Next.js",
    "Django",
    "React.js",
    "Angular",
    "Node.js",
    "Express.js",
    "TypeScript",
    ".NET",
  ],
  frontend: ["shadcn-ui/RadixUI", "Tailwind CSS", "Ant Design", "Bootstrap5"],
  dbms: [
    "MongoDB",
    "MySQL",
    "SQLAlchemy",
    "Elasticsearch",
    "Prisma",
    "Drizzle",
  ],
  cloud: ["AWS", "Azure", "Dialogflow", "SocketIO"],
  others: ["C++"],
};
