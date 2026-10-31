import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Camera,
  Car,
  Check,
  CheckCircle,
  CheckCircle2,
  ChevronDown,
  Clock,
  Code,
  Cpu,
  Dna,
  ExternalLink,
  Facebook,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Layers,
  Lock,
  MapPin,
  MessageCircle,
  Menu,
  Microscope,
  Monitor,
  Navigation,
  Package,
  Phone,
  Quote,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  Tv,
  UserCheck,
  Users,
  Video,
  X,
} from 'lucide-react';

const phoneNumbers = ['96262 65456', '99941 48476'];
const apiErrorText = (data, fallback) => data?.detail || (data && Object.values(data).flat().filter(Boolean).join(' ')) || fallback;
const classes = ['Classes 1–8', '9th Standard', '10th Standard', '11th Standard', '12th Standard'];

export const facultyFounder = {
  name: 'S. Thiyagarajan',
  qualifications: 'M.Sc. (IT), B.Ed.',
  role: 'Founder & Academic Director | Mathematics & CS Lead',
  experience: 'Working in Teaching Field Since 2008 (16+ Years Experience)',
  subjects: ['Higher Secondary Mathematics', 'Computer Science (Python & C++)', 'Board Exam Centum Drills'],
  about: 'Working in the teaching field since 2008. Founder S. Thiyagarajan, M.Sc. (IT), B.Ed., has over 16+ years of proven teaching experience in Trichy, guiding thousands of students to board exam distinction and centums through shortcut techniques, concept visualization, and dedicated care.',
  initials: 'ST',
};

export const facultyPanels = [
  {
    department: 'Mathematics Faculty Panel',
    qualifications: 'Experienced Postgraduate & B.Ed. Mentors',
    experience: '7–8+ Years Teaching Experience',
    badge: 'Mathematics Department',
    focus: 'How We Improve Students:',
    points: [
      'Eliminating exam fear through step-by-step problem breakdown and formula clarity',
      'Daily 5-problem formula practice and speed calculation shortcut techniques',
      'Regular chapter unit tests with personalized correction and error analysis',
      'Proven blueprint drills for scoring 100/100 Centums in 10th & 12th Board Exams',
    ],
  },
  {
    department: 'Physics & Chemistry Faculty Panel',
    qualifications: 'Experienced Postgraduate & B.Ed. Mentors',
    experience: '7–8+ Years Teaching Experience',
    badge: 'Physical Sciences Panel',
    focus: 'How We Improve Students:',
    points: [
      'Translating complex theoretical derivations into intuitive real-life conceptual models',
      'Organic chemistry reaction roadmaps and named reaction memory tricks',
      'Intensive numerical problem workouts and dimensional formula cross-checks',
      'Previous 10-year board question analysis and mark-scoring presentation methods',
    ],
  },
  {
    department: 'Biology (Botany & Zoology) Faculty Panel',
    qualifications: 'Experienced Botany & Zoology Specialists',
    experience: '7–8+ Years Teaching Experience',
    badge: 'Biology Specialist Panel',
    focus: 'Key Focus Areas:',
    points: [
      'Line-by-line NCERT and Samacheer syllabus mastery',
      'Accurate scientific diagram drawing and labeling drills',
      'Clear concept maps for genetics and plant & human physiology',
      'Targeted revision sessions for board exam 100/100 centum prep',
    ],
  },
  {
    department: 'Computer Science Faculty Panel',
    qualifications: 'Experienced CS & IT Mentors',
    experience: '7–8+ Years Teaching Experience',
    badge: 'Computer Science Panel',
    focus: 'Key Focus Areas:',
    points: [
      'Python & C++ syllabus concepts and logic building',
      'Step-by-step syntax understanding and error debugging',
      'Complete MySQL database table queries and practical record guidance',
      'Targeted board exam practical and theory preparation',
    ],
  },
  {
    department: 'Commerce & Accountancy Faculty Panel',
    qualifications: 'Specialized Commerce & Accountancy Mentors',
    experience: '7–8+ Years Teaching Experience',
    badge: 'Commerce & Accounts Panel',
    focus: 'Key Focus Areas:',
    points: [
      'Step-by-step ledger balance, journal entries & final accounts practice',
      'Business Maths formula sheets and shortcut calculation techniques',
      'Economics and Commerce theory structured for full board marks',
      'Regular unit tests and past board exam question paper workouts',
    ],
  },
  {
    department: 'Foundation & Junior School Faculty (Classes 1–8)',
    qualifications: 'Trained Graduate & B.Ed. Certified Teachers',
    experience: '7–8+ Years Teaching Experience',
    badge: 'Junior Foundation Team',
    focus: 'How We Improve Students:',
    points: [
      'Daily homework assistance and steady concept strengthening in all subjects',
      'Mental arithmetic, spelling accuracy, and spotless handwriting practice',
      'Nurturing confidence, curiosity, and disciplined daily study habits',
      'Bridge courses and smooth transition into high school syllabus',
    ],
  },
];

export const smartClassFeatures = [
  {
    icon: 'Monitor',
    title: 'Digital Interactive Smart Panels',
    tagline: 'Multi-Touch Ultra-HD Visual Displays',
    desc: 'Teachers annotate diagrams, step-by-step calculus derivations, and live textbook highlights on large digital flat panels. Lecture notes are instantly exported as PDFs for students.',
    badge: 'Digital Touch',
  },
  {
    icon: 'Dna',
    title: '3D Biology & Science Animations',
    tagline: 'Concept Visualization at Depth',
    desc: 'Complex microscopic processes such as DNA replication, human cardiac anatomy, plant physiology, and atomic orbitals come alive with rich 3D animations and medical-grade graphics.',
    badge: '3D Science',
  },
  {
    icon: 'Code',
    title: 'Live Computer Science Coding Lab',
    tagline: 'Python, C++ & SQL on Big Screen',
    desc: 'Interactive live coding demonstrations where teachers and students write, compile, and debug code real-time. Full support for CBSE and State Board Class 11 & 12 practical exams.',
    badge: 'Coding Lab',
  },
  {
    icon: 'Tv',
    title: 'Audio-Visual Tutorial Archives',
    tagline: 'Recorded Lessons & Revision Playback',
    desc: 'Chapter-wise digital tutorials, concept recaps, and board exam question walkthroughs enable students to re-watch tough concepts before unit tests and revision exams.',
    badge: 'Tutorial Library',
  },
  {
    icon: 'Cpu',
    title: 'AI-Assisted Diagnostic Quizzes',
    tagline: 'Targeted Weak-Area Correction',
    desc: 'Speed quizzes and digital objective tests pinpoint individual student knowledge gaps, allowing our mentors to deliver personalized one-on-one remedial sessions.',
    badge: 'AI Diagnostics',
  },
  {
    icon: 'Car',
    title: 'Dedicated Parking & Safe Campus',
    tagline: 'Hassle-Free Transit for Families',
    desc: 'Spacious on-campus two-wheeler, bicycle, and parent vehicle parking zone under active 24/7 CCTV surveillance, guaranteeing zero road congestion and absolute student safety.',
    badge: 'Safe Parking',
  },
];

export const subjectsList = [
  {
    id: 'cs',
    title: 'Computer Science',
    grade: 'Classes 11 & 12 (CBSE & State Board)',
    icon: 'Code',
    color: 'cs',
    points: [
      'Python Programming: OOP, Functions, File Handling & Modules',
      'C++ Fundamentals, Data Structures & Logic Gates',
      'Database Management with MySQL & SQL Table Queries',
      'Practical record completion & viva-voce 100/100 scoring prep',
    ],
  },
  {
    id: 'bio',
    title: 'Biology (Botany & Zoology)',
    grade: 'Classes 9, 10, 11, 12 & NEET Foundation',
    icon: 'Dna',
    color: 'bio',
    points: [
      'NCERT & Samacheer line-by-line conceptual decoding',
      'Human Physiology, Plant Anatomy, Genetics & Biotechnology',
      'High-speed scientific diagrammatic drawing & labeling drills',
      'Weekly unit tests, previous 10-year board paper analyses',
    ],
  },
  {
    id: 'tut',
    title: 'Specialized Subject Tutorials',
    grade: 'Classes 1 to 12 · All Subjects',
    icon: 'Layers',
    color: 'tut',
    points: [
      '1-on-1 personalized doubt clearing tutorials with senior faculty',
      'Daily homework tracking & mental arithmetic drills for Classes 1–8',
      'Board exam crash tutorials & blueprint model question series',
      'Evening concept-strengthening tutorials for slow learners',
    ],
  },
  {
    id: 'math',
    title: 'Mathematics & Centum Coaching',
    grade: 'Classes 6 to 12 (CBSE & State Board)',
    icon: 'Cpu',
    color: 'math',
    points: [
      'Calculus, Trigonometry, Coordinate Geometry & Algebra mastery',
      'Proprietary formula mnemonics and speed shortcut techniques',
      'Daily 5-problem challenge & chapter-wise unit assessments',
      'Proven track record of centums (100/100) year after year',
    ],
  },
  {
    id: 'phy',
    title: 'Physics In-Depth',
    grade: 'Classes 11 & 12 & Foundation',
    icon: 'Sparkles',
    color: 'phy',
    points: [
      'Mechanics, Electromagnetism, Wave Optics & Modern Physics',
      'Derivations written step-by-step with mark allocation focus',
      'Numerical problem-solving formulas and dimensional checks',
      'Board blueprint-aligned revision drills',
    ],
  },
  {
    id: 'chem',
    title: 'Chemistry Mastery',
    grade: 'Classes 11 & 12 & Foundation',
    icon: 'Microscope',
    color: 'chem',
    points: [
      'Organic chemistry conversions, named reactions & mechanisms',
      'Physical chemistry thermodynamics, chemical kinetics & solutions',
      'Inorganic coordination compounds, p-block & d-block elements',
      'Chapter-wise formula sheets & quick memory maps',
    ],
  },
];


const branchesInfo = [
  {
    type: 'Registered Office',
    name: 'Annai Tuition Centre',
    subtitle: 'Main Administrative Hub & Smart Board',
    doorNo: 'Door No.: 21/87',
    street: 'Puthur Agraharam',
    landmark: 'Near Bishop School',
    city: 'Trichy – 17',
    fullAddress: 'Door No.: 21/87, Puthur Agraharam, Near Bishop School, Trichy – 17',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=21%2F87+Puthur+Agraharam+Near+Bishop+School+Trichy+17',
    directionsLink: 'https://www.google.com/maps/dir/?api=1&destination=21%2F87+Puthur+Agraharam+Near+Bishop+School+Trichy+17',
    embedMapUrl: 'https://maps.google.com/maps?q=21%2F87%2C+Puthur+Agraharam%2C+Near+Bishop+School%2C+Trichy+17&t=&z=16&ie=UTF8&iwloc=&output=embed',
    timings: 'Morning: 5:30 AM – 7:00 AM & Evening: 6:30 PM – 9:00 PM | Sunday: Special Batches',
    facilities: ['Dedicated Parking Facility', '24/7 CCTV Surveillance', 'Smart Board', '100% Safe for Girls'],
  },
  {
    type: 'Branch Campus',
    name: 'Annai Tuition Centre',
    subtitle: 'Secondary & Higher Secondary Exam Wing',
    doorNo: 'Branch 2',
    street: 'Ramakrishna Middle School',
    landmark: 'Near Aruna Theatre, Puthur',
    city: 'Trichy – 17',
    fullAddress: 'Ramakrishna Middle School, Near Aruna Theatre, Puthur, Trichy – 17',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Ramakrishna+Middle+School+Near+Aruna+Theatre+Puthur+Trichy+17',
    directionsLink: 'https://www.google.com/maps/dir/?api=1&destination=Ramakrishna+Middle+School+Near+Aruna+Theatre+Puthur+Trichy+17',
    embedMapUrl: 'https://maps.google.com/maps?q=Ramakrishna+Middle+School%2C+Near+Aruna+Theatre%2C+Puthur%2C+Trichy+17&t=&z=16&ie=UTF8&iwloc=&output=embed',
    timings: 'Morning: 5:30 AM – 7:00 AM & Evening: 6:30 PM – 9:00 PM | Sunday: Special Batches',
    facilities: ['Dedicated Parking Facility', 'Spacious Desks & CCTV', 'Smart Board', '100% Safe for Girls'],
  },
];

const branches = [
  'Registered Office: 21/87, Puthur Agraharam, Near Bishop School, Trichy-17',
  'Branch 2: Ramakrishna Middle School, Near Aruna Theatre, Puthur, Trichy-17',
];

const featuredStudents = [
  { name: 'Vibilesh S', score: '477', total: '500', image: '/images/student-vibilesh.jpg' },
  { name: 'Mailesh S', score: '452', total: '500', image: '/images/student-mailesh.jpg' },
  { name: 'Srihari D.M', score: '437', total: '500', image: '/images/student-srihari.jpg' },
];

const results12 = [
  ['Bhaarati Priyankaa S', '559', '600'], ['Prasath A', '515', '600'], ['Anuradha G', '505', '600'],
  ['M. Meena', '519', '600'], ['R. Shajitha', '499', '600'], ['G. Shobana', '494', '600'],
];

const results10 = [
  ['Hemendhu S', '457', '500'], ['Nilofar S', '449', '500'], ['Deva Sri K', '402', '500'],
  ['Vibilesh S', '477', '500'], ['Mailesh S', '452', '500'], ['Srihari D.M', '437', '500'],
];

const results10MarksOnly = [['R. Radhakrishnan', '414'], ['B. Shiney Swetha', '425'], ['M. Nagaraj', '401']];

function Brand({ small = false }) {
  return (
    <Link className={`brand ${small ? 'brand-small' : ''}`} to="/" aria-label="Annai Tuition Centre home">
      <img className="brand-logo" src="/images/annai-logo.png" alt="Annai Tuition Centre Logo" />
      <span>
        <strong>Annai</strong>
        <small>Tuition Centre</small>
      </span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="header">
      <div className="topline">
        <div className="topline-left">
          <span>Welcome to Annai Tuition Centre, Trichy</span>
          <span className="msme-pill">
            <ShieldCheck size={12} /> MSME Registered
          </span>
        </div>
        <span className="topline-right">
          <MapPin size={13} /> Puthur, Trichy-17 <i></i>
          <a href="tel:+919626265456">
            <Phone size={13} /> 96262 65456
          </a>
          <i></i>
          <a href="tel:+919994148476">
            <Phone size={13} /> 99941 48476
          </a>
        </span>
      </div>
      <div className="nav-wrap container">
        <Brand />
        <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
          {[
            { label: 'Home', path: '/' },
            { label: 'About', path: '/about' },
            { label: 'Classes', path: '/classes' },
            { label: 'Faculty & Careers', path: '/faculty' },
            { label: 'Results', path: '/results' },
            { label: 'Contact', path: '/contact' },
          ].map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive && location.pathname === item.path ? 'active' : ''
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="button button-primary nav-cta" to="/admissions" onClick={() => setOpen(false)}>
            Enquire now <ArrowRight size={15} />
          </Link>
          <a
            href="https://wa.me/919626265456?text=Hi%2C%20I%20am%20interested%20in%20applying%20for%20a%20teaching%20position%20at%20Annai%20Tuition%20Centre"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-teacher-btn"
            onClick={() => setOpen(false)}
          >
            <Briefcase size={16} /> Apply for Teaching Positions on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links-row ${className}`}>
      <a
        href="https://www.instagram.com/annaituitioncentre_trichy/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn instagram-btn"
        aria-label="Follow Annai Tuition Centre on Instagram"
      >
        <Instagram size={17} />
        <span>Instagram</span>
      </a>
      <a
        href="https://www.facebook.com/search/top?q=Annai%20Tuition"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn facebook-btn"
        aria-label="Follow Annai Tuition on Facebook"
      >
        <Facebook size={17} />
        <span>Facebook</span>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Brand />
          <p className="footer-copy">
            Better Education... Brighter Future...
            <br />
            Learn Today... Lead Tomorrow.
          </p>
          <div className="footer-msme-badge">
            <ShieldCheck size={16} />
            <span>
              <strong>MSME Registered</strong>
              <small>Govt. of India Recognized</small>
            </span>
          </div>
          <div className="footer-phones">
            {phoneNumbers.map((n) => (
              <a key={n} href={`tel:+91${n.replaceAll(' ', '')}`}>
                <Phone size={14} />
                {n}
              </a>
            ))}
          </div>
          <div className="footer-social-wrap">
            <span className="footer-social-title">Follow Us:</span>
            <SocialLinks />
          </div>
        </div>

        <div>
          <h3>Explore</h3>
          <Link to="/about">About Us & 7,000+ Alumni</Link>
          <Link to="/classes">Classes & Batches</Link>
          <Link to="/faculty">Faculty & Careers</Link>
          <Link to="/results">Student Results & Centums</Link>
          <Link to="/admissions">Enquiry Now</Link>
          <Link to="/contact">Our Campuses & Parking</Link>
        </div>

        <div>
          <h3>Our Campuses</h3>
          <div className="footer-branch-item">
            <strong>Registered Office:</strong>
            <p>
              Door No.: 21/87, Puthur Agraharam,
              <br />
              Near Bishop School, Trichy – 17
            </p>
          </div>
          <div className="footer-branch-item">
            <strong>Branch 2:</strong>
            <p>
              Ramakrishna Middle School,
              <br />
              Near Aruna Theatre, Puthur, Trichy – 17
            </p>
          </div>
          <div className="footer-branch-maps">
            <a
              className="footer-directions"
              href={branchesInfo[0].mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={13} /> Branch 1 Google Map <ArrowRight size={13} />
            </a>
            <a
              className="footer-directions"
              href={branchesInfo[1].mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={13} /> Branch 2 Google Map <ArrowRight size={13} />
            </a>
          </div>
        </div>

        <div>
          <h3>Centre Head</h3>
          <p>
            <strong>S. Thiyagarajan</strong>
            <br />
            M.Sc., IT., B.Ed.
          </p>
          <p className="footer-safety-note">
            <Shield size={14} /> 100% Safe Environment for Girls
            <br />
            <Video size={14} /> 24/7 CCTV Monitored Facility
            <br />
            <Car size={14} /> Dedicated Campus Parking Facility
          </p>
          <Link to="/admin" className="footer-directions">
            Administrator sign in <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className="container copyright">
        © {new Date().getFullYear()} Annai Tuition Centre <span>Puthur, Trichy, Tamil Nadu</span>
      </div>
    </footer>
  );
}


function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919626265456?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20Annai%20Tuition%20Centre"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat on WhatsApp"
      title="Chat with Annai Tuition Centre on WhatsApp"
    >
      <MessageCircle size={22} />
      <span>Chat on WhatsApp</span>
    </a>
  );
}

function AppShell({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <div className="mobile-bottom-bar" aria-label="Quick mobile contact">
        <a href="tel:+919626265456" className="mobile-bar-btn call">
          <Phone size={13} /> Call
        </a>
        <a
          href="https://wa.me/919626265456?text=Hello%20Annai%20Tuition%20Centre,%20I%20would%20like%20to%20enquire%20about%20admissions"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-btn whatsapp"
        >
          <MessageCircle size={13} /> WhatsApp
        </a>
        <a
          href="https://wa.me/919626265456?text=Hi%2C%20I%20am%20interested%20in%20applying%20for%20a%20teaching%20position%20at%20Annai%20Tuition%20Centre"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-btn teaching"
        >
          <Briefcase size={13} /> Teaching Jobs
        </a>
      </div>
    </>
  );
}

function SectionTitle({ eyebrow, title, text, align = '' }) {
  return (
    <div className={`section-title ${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function CallButtons() {
  return (
    <div className="call-row">
      <a href="tel:+919626265456" className="button button-dark">
        <Phone size={16} /> Call 96262 65456
      </a>
      <a href="tel:+919994148476" className="button button-dark">
        <Phone size={16} /> Call 99941 48476
      </a>
      <a href="https://wa.me/919626265456" className="button button-outline" target="_blank" rel="noreferrer">
        WhatsApp enquiry <ArrowRight size={16} />
      </a>
    </div>
  );
}

/* 7,000+ Students Passed Out Achievement Banner */
function AchievementsStrip() {
  return (
    <section className="achievements-strip">
      <div className="container achievements-grid">
        <div className="achievement-item highlight-card">
          <div className="achievement-icon-wrap">
            <Trophy size={28} />
          </div>
          <div>
            <span className="achievement-number">7,000+</span>
            <strong className="achievement-title">Students Passed Out</strong>
            <p>Empowering students to achieve board exam mastery & academic success.</p>
          </div>
        </div>

        <div className="achievement-item">
          <div className="achievement-icon-wrap gold-icon">
            <Award size={26} />
          </div>
          <div>
            <span className="achievement-number">Since 2008</span>
            <strong className="achievement-title">16+ Years of Trust</strong>
            <p>Concept-based coaching led by experienced educationists.</p>
          </div>
        </div>

        <div className="achievement-item">
          <div className="achievement-icon-wrap navy-icon">
            <ShieldCheck size={26} />
          </div>
          <div>
            <span className="achievement-number">MSME</span>
            <strong className="achievement-title">Govt. Registered</strong>
            <p>Officially registered institution adhering to highest coaching quality.</p>
          </div>
        </div>

        <div className="achievement-item">
          <div className="achievement-icon-wrap green-icon">
            <CheckCircle size={26} />
          </div>
          <div>
            <span className="achievement-number">100%</span>
            <strong className="achievement-title">Board Exam Results</strong>
            <p>Consistent Math Centums and top rankings across Trichy district.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Dedicated Coaching Section for Classes 10 & 12 */
function CoachingSection() {
  return (
    <section className="coaching-section section" id="coaching">
      <div className="container">
        <SectionTitle
          eyebrow="Specialized Board Exam Coaching"
          title="Excellent Coaching for Classes 10 & 12"
          text="Concept-based structured coaching designed to build rock-solid subject foundations, eliminate exam fear, and secure top marks."
          align="align-center"
        />

        <div className="coaching-cards-grid">
          {/* 10th Standard Card */}
          <div className="coaching-card coaching-card-10">
            <div className="coaching-card-badge">Class 10 (SSLC & CBSE)</div>
            <div className="coaching-card-head">
              <span className="coaching-grade-num">10th</span>
              <div>
                <h3>10th Standard Board Exam Excellence</h3>
                <p>Concept Clarity · Chapter-wise Unit Tests · Centum Drills</p>
              </div>
            </div>

            <div className="coaching-subjects-list">
              <h4>Key Subjects Covered:</h4>
              <div className="subject-tags">
                <span>Mathematics</span>
                <span>Science (Physics, Chem, Bio)</span>
                <span>Social Science</span>
                <span>Tamil</span>
                <span>English</span>
              </div>
            </div>

            <ul className="coaching-features">
              <li>
                <Check size={16} /> Individual attention to weak areas & formula practice.
              </li>
              <li>
                <Check size={16} /> Regular chapter tests, weekly assessments & model board exams.
              </li>
              <li>
                <Check size={16} /> Special guidance for 100/100 Centum scoring in Mathematics & Science.
              </li>
              <li>
                <Check size={16} /> Proven track record with student toppers reaching 477/500, 452/500.
              </li>
            </ul>

            <div className="coaching-card-action">
              <Link to="/admissions?class=10th%20Standard" className="button button-gold">
                Enquire for 10th Admission <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* 12th Standard Card */}
          <div className="coaching-card coaching-card-12">
            <div className="coaching-card-badge navy-badge">Class 12 (+2 HSC & CBSE)</div>
            <div className="coaching-card-head">
              <span className="coaching-grade-num navy-grade">12th</span>
              <div>
                <h3>12th Standard Higher Secondary Coaching</h3>
                <p>Blueprint Focus · Previous 10-Year Papers · In-depth Problem Solving</p>
              </div>
            </div>

            <div className="coaching-subjects-list">
              <h4>Specialized Streams:</h4>
              <div className="subject-tags">
                <span>Mathematics</span>
                <span>Physics</span>
                <span>Chemistry</span>
                <span>Biology</span>
                <span>Computer Science</span>
                <span>Accountancy & Commerce</span>
              </div>
            </div>

            <ul className="coaching-features">
              <li>
                <Check size={16} /> Rigorous blueprint-based syllabus completion and revisions.
              </li>
              <li>
                <Check size={16} /> Step-by-step problem-solving methods for competitive & board marks.
              </li>
              <li>
                <Check size={16} /> Time-management training through full-length pre-board trials.
              </li>
              <li>
                <Check size={16} /> Exceptional alumni scores: 559/600, 519/600, 515/600.
              </li>
            </ul>

            <div className="coaching-card-action">
              <Link to="/admissions?class=12th%20Standard" className="button button-primary">
                Enquire for 12th Admission <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Dedicated Girls' Safety and Security Section */
function GirlsSafetySection() {
  return (
    <section className="safety-section section" id="safety">
      <div className="container safety-grid">
        <div className="safety-copy">
          <div className="safety-badge-wrap">
            <ShieldCheck size={20} />
            <span>Utmost Priority on Student Well-being</span>
          </div>
          <h2>Girls' Safety and Security</h2>
          <p className="safety-claim">
            <strong>100% Safe Environment for Girls</strong>
          </p>
          <p className="safety-desc">
            At Annai Tuition Centre, we recognize that safety and peace of mind are paramount. Parents can rest
            assured knowing that our facilities are purpose-built to maintain a secure, respectful, and disciplined
            environment.
          </p>

          <div className="safety-points-grid">
            <div className="safety-point">
              <div className="point-icon">
                <Video size={18} />
              </div>
              <div>
                <strong>24/7 CCTV Monitoring</strong>
                <p>Continuous surveillance covering all classrooms, corridors, entrances, and study spaces.</p>
              </div>
            </div>

            <div className="safety-point">
              <div className="point-icon">
                <HeartHandshake size={18} />
              </div>
              <div>
                <strong>Respectful & Disciplined Atmosphere</strong>
                <p>Comfortable separate seating arrangements and strict behavioural conduct standards.</p>
              </div>
            </div>

            <div className="safety-point">
              <div className="point-icon">
                <Users size={18} />
              </div>
              <div>
                <strong>Dedicated Faculty Presence</strong>
                <p>Mentors and staff are always on campus throughout class hours until every student departs safely.</p>
              </div>
            </div>

            <div className="safety-point">
              <div className="point-icon">
                <Lock size={18} />
              </div>
              <div>
                <strong>Safe Pickup & Drop Point</strong>
                <p>Well-lit street access with dedicated waiting area for parents and students.</p>
              </div>
            </div>
          </div>

          <div className="safety-action-row">
            <Link to="/contact" className="button button-dark">
              Visit Our Centre & Campus <ArrowRight size={16} />
            </Link>
            <a href="tel:+919626265456" className="safety-phone-link">
              <Phone size={15} /> Have safety questions? Call 96262 65456
            </a>
          </div>
        </div>

        <div className="safety-card-visual">
          <div className="safety-card-box">
            <div className="safety-shield-icon">
              <ShieldCheck size={44} />
            </div>
            <h3>Parental Peace of Mind</h3>
            <p>
              “Ensuring every student, especially our girl students, feels completely safe, valued, and encouraged
              to achieve their highest potential.”
            </p>
            <div className="safety-stat-box">
              <div className="safety-stat">
                <strong>CCTV</strong>
                <span>Continuous Recording</span>
              </div>
              <div className="safety-stat-divider" />
              <div className="safety-stat">
                <strong>100%</strong>
                <span>Safety Protocol</span>
              </div>
              <div className="safety-stat-divider" />
              <div className="safety-stat">
                <strong>MSME</strong>
                <span>Registered Centre</span>
              </div>
            </div>
            <div className="safety-footer-note">
              <span>Managed with care by S. Thiyagarajan, M.Sc., IT., B.Ed.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Facilities Section (CCTV, Dedicated Parking Facility, Smart Class, MSME) */
function FacilitiesSection() {
  return (
    <section className="facilities-section section" id="facilities">
      <div className="container">
        <SectionTitle
          eyebrow="Centre Infrastructure & Amenities"
          title="Campus Facilities Designed For Excellence & Safety"
          text="Modern infrastructure designed to provide a safe, convenient, and focused learning environment for all students."
          align="align-center"
        />

        <div className="facilities-grid">
          {/* CCTV Monitoring */}
          <div className="facility-card">
            <div className="facility-img-wrap">
              <img
                src="/images/facility-cctv.jpg"
                alt="24/7 CCTV Monitoring Camera"
                onError={(e) => { e.currentTarget.src = '/images/annai-classroom-students.jpg'; }}
              />
              <span className="facility-img-badge">
                <Video size={13} /> 24/7 Active Recording
              </span>
            </div>
            <div className="facility-card-body">
              <div className="facility-card-title-row">
                <div className="facility-icon camera-icon">
                  <Video size={20} />
                </div>
                <h3>24/7 CCTV Monitoring</h3>
              </div>
              <p>
                Round-the-clock high-definition CCTV camera monitoring across all classrooms, entrances, corridors,
                and parking zones for complete student safety and transparent supervision.
              </p>
              <span
                className="facility-tag"
                style={{
                  background: 'rgba(13, 27, 62, 0.95)',
                  border: '1.5px solid #f59e0b',
                  color: '#ffd875',
                  fontWeight: 900,
                  fontSize: '12px',
                  padding: '7px 18px',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  width: 'max-content',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                  marginTop: 'auto',
                }}
              >
                Zero-Compromise Security
              </span>
            </div>
          </div>

          {/* Dedicated Parking Facility */}
          <div className="facility-card parking-facility-card">
            <div className="facility-img-wrap">
              <img
                src="/images/facility-parking.jpg"
                alt="Dedicated Parking Facility"
                onError={(e) => { e.currentTarget.src = '/images/annai-classroom-students.jpg'; }}
              />
              <span className="facility-img-badge">
                <Car size={13} /> Dedicated Campus Bay
              </span>
            </div>
            <div className="facility-card-body">
              <div className="facility-card-title-row">
                <div className="facility-icon parking-icon">
                  <Car size={20} />
                </div>
                <h3>Dedicated Parking Facility</h3>
              </div>
              <p>
                Spacious and organized on-premises two-wheeler, bicycle, and parent vehicle parking zone. Fully
                CCTV-monitored with safe drop-off and pick-up bays for effortless transit.
              </p>
              <span
                className="facility-tag"
                style={{
                  background: 'rgba(13, 27, 62, 0.95)',
                  border: '1.5px solid #f59e0b',
                  color: '#ffd875',
                  fontWeight: 900,
                  fontSize: '12px',
                  padding: '7px 18px',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  width: 'max-content',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                  marginTop: 'auto',
                }}
              >
                Safe Drop-off &amp; Parking
              </span>
            </div>
          </div>

          {/* Interactive Smart Board */}
          <div className="facility-card smart-class-card">
            <div className="facility-img-wrap">
              <img
                src="/images/smart-classroom-hero.jpg"
                alt="Smart Board Interactive Classrooms"
                onError={(e) => { e.currentTarget.src = '/images/annai-classroom-students.jpg'; }}
              />
              <span className="facility-img-badge">
                <Monitor size={13} /> Interactive Digital AV
              </span>
            </div>
            <div className="facility-card-body">
              <div className="facility-card-title-row">
                <div className="facility-icon monitor-icon">
                  <Monitor size={20} />
                </div>
                <h3>Smart Board</h3>
              </div>
              <p>
                Equipped with interactive touch flat panels, high-lumen projectors, 3D science animations, and live
                coding displays for Computer Science, Biology, and Maths.
              </p>
              <span
                className="facility-tag"
                style={{
                  background: 'rgba(13, 27, 62, 0.95)',
                  border: '1.5px solid #f59e0b',
                  color: '#ffd875',
                  fontWeight: 900,
                  fontSize: '12px',
                  padding: '7px 18px',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  width: 'max-content',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                  marginTop: 'auto',
                }}
              >
                Interactive Smart Board
              </span>
            </div>
          </div>

          {/* MSME Registered Quality */}
          <div className="facility-card">
            <div className="facility-img-wrap">
              <img
                src="/images/facility-msme.jpg"
                alt="MSME Registered Institution Govt of India"
                onError={(e) => { e.currentTarget.src = '/images/annai-logo.png'; }}
              />
              <span className="facility-img-badge">
                <ShieldCheck size={13} /> Govt. of India Recognized
              </span>
            </div>
            <div className="facility-card-body">
              <div className="facility-card-title-row">
                <div className="facility-icon msme-icon">
                  <ShieldCheck size={20} />
                </div>
                <h3>MSME Registered Institution</h3>
              </div>
              <p>
                Recognized and registered with MSME (Govt. of India), committed to ethical education, structured
                academic calendar, and student-first mentoring since 2008.
              </p>
              <span
                className="facility-tag"
                style={{
                  background: 'rgba(13, 27, 62, 0.95)',
                  border: '1.5px solid #f59e0b',
                  color: '#ffd875',
                  fontWeight: 900,
                  fontSize: '12px',
                  padding: '7px 18px',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  width: 'max-content',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                  marginTop: 'auto',
                }}
              >
                Government Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   7,000+ STUDENTS PASSED OUT - COMPREHENSIVE MILESTONE SECTION
   ========================================================================= */
export function Legacy70kSection() {
  return (
    <section className="milestone-70k-section section" id="milestone-70k">
      <div className="container">
        <div className="milestone-lead-grid">
          <div>
            <div className="milestone-eyebrow">
              <Trophy size={14} /> Historic Milestone · Established 2008
            </div>
            <h2 className="milestone-heading">
              The 7,000+ Alumni Legacy: <br />
              <em>16+ Years</em> of Proven Academic Excellence
            </h2>
            <p className="milestone-intro-text">
              Since 2008, <strong>Annai Tuition Centre</strong> has trained and guided over <strong>7,000+ students</strong> to
              board exam triumph in Trichy. This milestone represents 16+ uninterrupted years of transformative teaching,
              turning academic stress into confidence and producing thousands of top board scorers and centum achievers.
            </p>
            <div className="milestone-quote-box">
              <Quote size={20} className="milestone-quote-icon" />
              <p>
                “7,000+ students passed out is not merely a number to us. It stands for 7,000+ families who trusted us with
                their children’s future, hundreds of doctors, engineers, and software professionals whom we helped nurture,
                and our unwavering commitment to concept clarity since day one.”
              </p>
              <div className="milestone-author">
                <strong>S. Thiyagarajan</strong>
                <small>Founder & Academic Director (M.Sc., IT., B.Ed.)</small>
              </div>
            </div>
          </div>

          <div className="milestone-stat-callout">
            <span className="milestone-big-number">7,000+</span>
            <strong className="milestone-big-label">Students Passed Out Successfully</strong>
            <span className="milestone-big-sub">Classes 10 & 12 Board Examinations (CBSE & State Board)</span>

            <div className="milestone-mini-badges">
              <div className="mini-badge">
                <CheckCircle2 size={16} />
                <span>100% Board Pass Consistency</span>
              </div>
              <div className="mini-badge">
                <Star size={16} />
                <span>5,000+ Subject Centums (100/100)</span>
              </div>
              <div className="mini-badge">
                <GraduationCap size={16} />
                <span>Alumni in Top Medical & Engineering Hubs</span>
              </div>
            </div>

            <div className="milestone-action-cta">
              <Link to="/admissions" className="button button-gold">
                Join Our Next Batch of Toppers <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Success */}
        <div className="milestone-pillars-grid">
          <div className="milestone-pillar-card">
            <div className="pillar-icon-box gold">
              <Award size={22} />
            </div>
            <h4>16+ Golden Years of Trust</h4>
            <p>
              Serving Trichy families since 2008 across 2 prime campuses in Puthur. Pioneering modern teaching methods
              with compassionate care.
            </p>
          </div>

          <div className="milestone-pillar-card">
            <div className="pillar-icon-box blue">
              <CheckCircle size={22} />
            </div>
            <h4>Consistent Centums (100/100)</h4>
            <p>
              Proven blueprint drills and individual problem solving yield centum scores in Mathematics, Physics, Chemistry,
              Biology, and Computer Science.
            </p>
          </div>

          <div className="milestone-pillar-card">
            <div className="pillar-icon-box green">
              <ShieldCheck size={22} />
            </div>
            <h4>MSME Certified & Safe Campus</h4>
            <p>
              Officially MSME-registered institution with 24/7 CCTV surveillance, 100% safety for girls, and dedicated on-site
              parking facility.
            </p>
          </div>

          <div className="milestone-pillar-card">
            <div className="pillar-icon-box purple">
              <Users size={22} />
            </div>
            <h4>Illustrious Alumni Network</h4>
            <p>
              Our passed-out students study in premier medical colleges (MBBS), IITs, NIT Trichy, and work in global tech
              companies and civil services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   SMART BASE CLASSROOMS SHOWCASE SECTION
   ========================================================================= */
export function SmartClassSection() {
  return (
    <section className="smart-class-section section" id="smart-class">
      <div className="container">
        <SectionTitle
          eyebrow="Next-Gen Classroom Technology"
          title={
            <>
              Smart Board: Learning with <span className="serif-accent">Digital Precision</span>.
            </>
          }
          text="Step into Trichy’s most technologically advanced tuition classrooms. We combine interactive touch panels, 3D animated science models, and live coding demos to accelerate concept absorption and student scores."
          align="align-center"
        />

        <div className="smart-feature-grid">
          {smartClassFeatures.map((feat) => {
            const IconComponent =
              feat.icon === 'Monitor'
                ? Monitor
                : feat.icon === 'Dna'
                ? Dna
                : feat.icon === 'Code'
                ? Code
                : feat.icon === 'Tv'
                ? Tv
                : feat.icon === 'Cpu'
                ? Cpu
                : Car;

            return (
              <div className="smart-card" key={feat.title}>
                <div className="smart-card-head">
                  <div
                    className={`smart-card-icon ${
                      feat.icon === 'Monitor'
                        ? 'cyan'
                        : feat.icon === 'Dna'
                        ? 'green'
                        : feat.icon === 'Code'
                        ? 'indigo'
                        : feat.icon === 'Tv'
                        ? 'purple'
                        : feat.icon === 'Cpu'
                        ? 'amber'
                        : 'rose'
                    }`}
                  >
                    <IconComponent size={24} />
                  </div>
                  <span className="smart-card-tag">{feat.badge}</span>
                </div>
                <h3>{feat.title}</h3>
                <span className="smart-card-sub">{feat.tagline}</span>
                <p>{feat.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="smart-class-banner">
          <div className="smart-banner-copy">
            <h3>Experience a Free Smart Classroom Session in Trichy</h3>
            <p>
              Visit our Puthur campus to witness how our interactive digital flat panels and visual tutorials make math,
              science, and coding effortlessly clear.
            </p>
          </div>
          <div className="smart-banner-actions">
            <Link to="/admissions?class=Smart%20Class%20Demo" className="button button-gold">
              Book Free Demo Class <ArrowRight size={15} />
            </Link>
            <a href="tel:+919626265456" className="button button-dark">
              <Phone size={15} /> Call 96262 65456
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   OUR DISTINGUISHED FACULTY & EXPERT SUBJECT PANELS
   ========================================================================= */
export function FacultySection() {
  return (
    <section className="faculty-section section" id="faculty">
      <div className="container">
        <SectionTitle
          eyebrow="Academic Leadership & Experienced Faculty"
          title={
            <>
              Led by Founder <span className="serif-accent">S. Thiyagarajan</span> & Experienced Faculty.
            </>
          }
          text="Dedicated educators with over a decade of classroom experience in Puthur, Trichy. Our focus is on continuous student improvement — converting weak concepts into strengths and guiding learners to high marks and centums."
          align="align-center"
        />

        {/* Founder & Academic Director Profile */}
        <div className="founder-director-card">
          <div className="founder-card-top">
            <div className="founder-avatar-wrap">
              <div className="founder-avatar">
                <span>{facultyFounder.initials}</span>
              </div>
              <span className="founder-badge-pill">
                <ShieldCheck size={13} /> Founder & Director
              </span>
            </div>
            <div className="founder-info">
              <div className="founder-title-row">
                <div>
                  <h3 className="founder-name">{facultyFounder.name}</h3>
                  <span className="founder-degrees">{facultyFounder.qualifications}</span>
                </div>
                <div className="founder-exp-tag">
                  <Award size={15} /> {facultyFounder.experience}
                </div>
              </div>
              <p className="founder-role-desc">{facultyFounder.role}</p>
              <p className="founder-bio">{facultyFounder.about}</p>
              <div className="founder-subjects-row">
                <span className="founder-subj-label">Direct Coaching & Mentorship:</span>
                <div className="faculty-subjects-tags">
                  {facultyFounder.subjects.map((subj) => (
                    <span className="faculty-subj-tag gold-tag" key={subj}>
                      <CheckCircle2 size={12} /> {subj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experienced Faculty Subject Panels */}
        <div className="faculty-panel-header">
          <div>
            <span className="eyebrow">Subject-Wise Mentorship Panels</span>
            <h3>Experienced Faculty Dedicated to Student Improvement</h3>
            <p>Our subject specialist teachers work collaboratively to identify learning gaps, eliminate exam stress, and accelerate student progress.</p>
          </div>
        </div>

        <div className="faculty-panels-grid">
          {facultyPanels.map((panel) => (
            <div className="faculty-panel-card" key={panel.department}>
              <div className="panel-card-head">
                <span className="panel-badge">{panel.badge}</span>
                <span className="panel-exp-pill">
                  <Clock size={12} /> {panel.experience}
                </span>
              </div>
              <h4>{panel.department}</h4>
              <span className="panel-qualifications">{panel.qualifications}</span>

              <div className="panel-improve-box">
                <strong className="panel-improve-title">
                  <Sparkles size={13} /> {panel.focus}
                </strong>
                <ul className="panel-points-list">
                  {panel.points.map((pt, i) => (
                    <li key={i}>
                      <Check size={14} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Student Improvement Methodology */}
        <div className="improvement-methodology-band">
          <div className="improvement-heading">
            <span className="eyebrow eyebrow-light">Proven Teaching System</span>
            <h3>How Annai Faculty Drives Continuous Student Improvement</h3>
          </div>
          <div className="improvement-steps-grid">
            <div className="step-card">
              <span className="step-num">01</span>
              <h4>Diagnostic Baseline</h4>
              <p>We analyze each student’s current conceptual gaps and board syllabus blueprint requirements.</p>
            </div>
            <div className="step-card">
              <span className="step-num">02</span>
              <h4>Smart Visual Teaching</h4>
              <p>Using interactive smart boards and 3D simulations to make abstract math and science intuitively clear.</p>
            </div>
            <div className="step-card">
              <span className="step-num">03</span>
              <h4>Weekly Testing & Corrections</h4>
              <p>Rigorous unit assessments with line-by-line answer key analysis to eliminate common exam mistakes.</p>
            </div>
            <div className="step-card">
              <span className="step-num">04</span>
              <h4>1-on-1 Doubt Clearing</h4>
              <p>Dedicated personal mentorship sessions to build unshakeable confidence before board exams.</p>
            </div>
          </div>
        </div>

        <div className="faculty-advisory-strip">
          <div>
            <strong>Need personalized academic guidance or subject counseling?</strong>
            <span>Meet Founder S. Thiyagarajan and our experienced faculty at our Puthur campus.</span>
          </div>
          <div className="faculty-strip-cta">
            <Link to="/admissions" className="button button-primary">
              Book Faculty Consultation <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   SPECIALIZED SUBJECTS & TUTORIALS SECTION (CS, BIO, TUTORIALS, ETC.)
   ========================================================================= */
export function SubjectsTutorialsSection() {
  return (
    <section className="subjects-section section" id="subjects-tutorials">
      <div className="container">
        <SectionTitle
          eyebrow="Subject Mastery & Special Batches"
          title={
            <>
              Computer Science, Biology & <span className="serif-accent">Specialized Tutorials</span>.
            </>
          }
          text="From high-scoring Computer Science coding labs and diagram-intensive Biology drills to daily 1-on-1 concept tutorials, we deliver targeted subject mastery for every student."
          align="align-center"
        />

        <div className="subjects-showcase-grid">
          {subjectsList.map((subj) => {
            const IconComponent =
              subj.icon === 'Code'
                ? Code
                : subj.icon === 'Dna'
                ? Dna
                : subj.icon === 'Layers'
                ? Layers
                : subj.icon === 'Cpu'
                ? Cpu
                : subj.icon === 'Sparkles'
                ? Sparkles
                : Microscope;

            return (
              <div className="subject-card" key={subj.id}>
                <div className={`subject-card-icon ${subj.color}`}>
                  <IconComponent size={24} />
                </div>
                <h3>{subj.title}</h3>
                <span className="subject-card-sub">{subj.grade}</span>
                <ul className="subject-card-points">
                  {subj.points.map((pt, idx) => (
                    <li key={idx}>
                      <Check size={14} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="subject-card-action">
                  <Link
                    to={`/admissions?class=${encodeURIComponent(subj.title)}`}
                    className="subject-link"
                  >
                    Enquire for {subj.title} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Branch Addresses Section with Google Maps */
function BranchesSection() {
  return (
    <section className="branches-section section" id="branches">
      <div className="container">
        <SectionTitle
          eyebrow="Google Maps & Prime Campuses"
          title={
            <>
              Our Two Branches in <span className="serif-accent">Puthur, Trichy</span>
            </>
          }
          text="Both campuses are fully equipped with dedicated parking facilities, 24/7 CCTV surveillance, and modern coaching rooms. Locate us via interactive Google Maps or get instant driving directions."
          align="align-center"
        />

        <div className="branches-grid">
          {branchesInfo.map((branch, idx) => (
            <div className={`branch-card ${idx === 0 ? 'branch-card-primary' : ''}`} key={branch.type}>
              <div className="branch-card-header">
                <span className="branch-type-badge">{branch.type}</span>
                <span className="branch-status-badge">● Active Campus</span>
              </div>

              <h3>{branch.name}</h3>
              <p className="branch-subtitle">{branch.subtitle}</p>

              {/* Interactive Google Map Embed */}
              <div className="branch-map-wrapper">
                <div className="branch-map-topbar">
                  <span className="branch-map-tag">
                    <MapPin size={13} /> Google Maps Live View
                  </span>
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="branch-map-expand-link"
                    title="Open larger map in Google Maps"
                  >
                    View Larger Map <ExternalLink size={12} />
                  </a>
                </div>
                <div className="branch-map-frame-box">
                  <iframe
                    title={`Google Map - ${branch.name} (${branch.type})`}
                    src={branch.embedMapUrl}
                    className="branch-map-iframe"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="branch-map-caption">
                  <MapPin size={12} />
                  <span>{branch.fullAddress}</span>
                </div>
              </div>

              <div className="branch-address-box">
                <div className="branch-addr-line">
                  <MapPin size={16} className="branch-addr-icon" />
                  <div>
                    <strong>{branch.doorNo}</strong>, {branch.street}
                    <br />
                    <span>{branch.landmark}</span>
                    <br />
                    <strong>{branch.city}</strong>
                  </div>
                </div>
                <div className="branch-hours-line">
                  <Clock size={14} />
                  <span>{branch.timings}</span>
                </div>
              </div>

              {/* Facilities Tags */}
              <div className="branch-tags-row">
                {branch.facilities.map((fac) => (
                  <span key={fac} className="branch-tag-pill">
                    {fac.includes('Parking') ? <Car size={12} /> : fac.includes('CCTV') ? <Video size={12} /> : <CheckCircle size={12} />}
                    {fac}
                  </span>
                ))}
              </div>

              <div className="branch-contact-info">
                <div>
                  <Phone size={14} />
                  <span>
                    Call: <a href="tel:+919626265456">96262 65456</a> / <a href="tel:+919994148476">99941 48476</a>
                  </span>
                </div>
              </div>

              <div className="branch-actions">
                <a
                  href={branch.directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-outline branch-dir-btn"
                >
                  <Navigation size={14} /> Get Directions
                </a>
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-outline"
                >
                  <ExternalLink size={14} /> Open Map
                </a>
                <Link
                  to={`/admissions?branch=${encodeURIComponent(branch.fullAddress)}`}
                  className="button button-gold branch-enquire-btn"
                >
                  Enquire for this Campus <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Social Media Section */
function SocialMediaSection() {
  return (
    <section className="social-section section">
      <div className="container social-inner">
        <div className="social-copy">
          <span className="eyebrow eyebrow-light">Stay Connected</span>
          <h2>Follow Us on Social Media</h2>
          <p>
            Stay updated with exam timetables, model question papers, board exam preparation tips, student results,
            and celebration updates from Annai Tuition Centre.
          </p>
        </div>

        <div className="social-cards-grid">
          <a
            href="https://www.instagram.com/annaituitioncentre_trichy/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-channel-card instagram-card"
          >
            <div className="channel-icon-circle instagram-circle">
              <Instagram size={28} />
            </div>
            <div>
              <strong>Instagram</strong>
              <span>@annaituitioncentre_trichy</span>
              <small>Follow for student highlights & updates →</small>
            </div>
          </a>

          <a
            href="https://www.facebook.com/search/top?q=Annai%20Tuition"
            target="_blank"
            rel="noopener noreferrer"
            className="social-channel-card facebook-card"
          >
            <div className="channel-icon-circle facebook-circle">
              <Facebook size={28} />
            </div>
            <div>
              <strong>Facebook</strong>
              <span>Annai Tuition</span>
              <small>Connect with our learning community →</small>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}


/* =========================================================================
   REFERENCE HERO SECTION (MATCHING USER REFERENCE DESIGN)
   ========================================================================= */
function ReferenceHero() {
  return (
    <section className="ref-hero">
      <div className="ref-hero-bg-shapes">
        <div className="ref-hero-glow glow-1" />
        <div className="ref-hero-glow glow-2" />
      </div>

      <div className="container ref-hero-grid">
        <div className="ref-hero-copy">
          <div className="ref-hero-welcome-badge">
            <span className="welcome-tag">Welcome to</span>
            <span className="ref-since-pill">
              <ShieldCheck size={13} /> Since 2008
            </span>
            <span className="ref-admissions-live-pill">
              <Sparkles size={13} /> Puthur, Trichy
            </span>
          </div>
          
          <h1 className="ref-hero-title">
            ANNAI <span className="title-highlight">TUITION CENTRE</span>
          </h1>

          <p className="ref-hero-tagline">Better Learning | Brighter Future</p>

          <p className="ref-hero-desc">
            We provide quality education with experienced faculty, personal attention and a supportive environment to help every student achieve their goals.
          </p>

          <div className="ref-hero-actions">
            <a href="#enquiry" className="ref-enroll-btn">
              Enroll Now <ArrowRight size={17} />
            </a>
            <a href="tel:+919626265456" className="ref-call-btn">
              <Phone size={15} /> Call: 96262 65456
            </a>
          </div>

          <div className="ref-founder-mini-badge">
            <div className="founder-mini-avatar">ST</div>
            <div>
              <strong>Founder: S. Thiyagarajan, M.Sc. (IT), B.Ed.</strong>
              <small>Working in Teaching Field Since 2008 · 16+ Years Experience</small>
            </div>
          </div>
        </div>

        <div className="ref-hero-visual">
          <div className="ref-hero-frame">
            {/* Real Classroom Image with Students */}
            <img
              src="/images/annai-classroom-students.jpg"
              alt="Annai Tuition Centre Classroom with Students"
              className="ref-hero-photo"
            />

            {/* Hand-drawn style chalk doodle: Small Steps Big Dreams */}
            <div className="ref-chalk-doodle" aria-hidden="true">
              <div className="doodle-sparkle">✦</div>
              <div className="doodle-text-wrap">
                <span className="doodle-row-1">Small Steps</span>
                <span className="doodle-row-2">Big Dreams</span>
              </div>
              <div className="doodle-cap">
                <GraduationCap size={22} />
              </div>
            </div>

            {/* Vibrant Yellow Brush Badge: Your Success Our Priority */}
            <div className="ref-brush-badge">
              <div className="brush-text">Your Success Our Priority</div>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Feature Strip Directly Under Hero */}
      <div className="container ref-features-wrap">
        <div className="ref-features-strip">
          <div className="ref-feature-card">
            <div className="ref-feature-icon icon-blue">
              <GraduationCap size={22} />
            </div>
            <h4>Experienced Faculty</h4>
            <p>7–8+ Yrs Expert Mentors</p>
          </div>

          <div className="ref-feature-card">
            <div className="ref-feature-icon icon-pink">
              <BookOpen size={22} />
            </div>
            <h4>All Subjects</h4>
            <p>Classes 1 - 12 (All Boards)</p>
          </div>

          <div className="ref-feature-card">
            <div className="ref-feature-icon icon-green">
              <Users size={22} />
            </div>
            <h4>Small Batches</h4>
            <p>Personal Attention</p>
          </div>

          <div className="ref-feature-card">
            <div className="ref-feature-icon icon-purple">
              <TrendingUp size={22} />
            </div>
            <h4>Regular Tests</h4>
            <p>& Progress Tracking</p>
          </div>

          <div className="ref-feature-card">
            <div className="ref-feature-icon icon-gold">
              <Trophy size={22} />
            </div>
            <h4>Better Results</h4>
            <p>Brighter Future</p>
          </div>
        </div>

        <div className="ref-winged-quote">
          <span className="quote-wing">〰</span>
          <p>Join Annai Tuition Centre and take the first step towards a successful tomorrow!</p>
          <span className="quote-wing">〰</span>
        </div>
      </div>
    </section>
  );
}


/* =========================================================================
   ENQUIRY NOW SECTION (CLEAN & CONCISE - NO HEAVY FORM)
   ========================================================================= */
function HomeEnquirySection() {
  return (
    <section className="enquiry-now-section section" id="enquiry">
      <div className="container">
        <div className="enquiry-now-card">
          <div className="enquiry-now-content">
            <span
              className="enquiry-now-badge"
              style={{
                  background: 'rgba(13, 27, 62, 0.95)',
                  border: '1.5px solid #f59e0b',
                  color: '#ffd875',
                  fontWeight: 900,
                  fontSize: '12px',
                  padding: '7px 18px',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  width: 'max-content',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                  marginTop: 'auto',
                }}
            >
              <Sparkles size={14} /> Instant Student Enquiry
            </span>
            <h2>Enquire for Batches &amp; Admission</h2>
            <p>
              Get current batch availability, subject combinations, and fee details. Dedicated coaching with 7–8+ years experienced faculty and safe parking.
            </p>
            <div
              className="enquiry-timing-pill"
              style={{
                background: '#08122c',
                border: '2px solid #f59e0b',
                color: '#ffd875',
                borderRadius: '12px',
                padding: '12px 20px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '15px',
                fontWeight: 800,
                margin: '14px 0',
                boxShadow: '0 6px 20px rgba(0,0,0,0.6)',
              }}
            >
              <Clock size={16} />
              <span><strong style={{ color: '#fbbf24' }}>Tuition Timings:</strong> Morning 5:30 AM – 7:00 AM &amp; Evening 6:30 PM – 9:00 PM</span>
            </div>
            <div className="enquiry-trust-strip">
              <span style={{
                  background: 'rgba(13, 27, 62, 0.95)',
                  border: '1.5px solid #f59e0b',
                  color: '#ffd875',
                  fontWeight: 900,
                  fontSize: '12px',
                  padding: '7px 18px',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  width: 'max-content',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                  marginTop: 'auto',
                }}>✓ Dedicated Parking Facility</span>
              <span style={{
                  background: 'rgba(13, 27, 62, 0.95)',
                  border: '1.5px solid #f59e0b',
                  color: '#ffd875',
                  fontWeight: 900,
                  fontSize: '12px',
                  padding: '7px 18px',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  width: 'max-content',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                  marginTop: 'auto',
                }}>✓ 100% Safe For Girls</span>
              <span style={{
                  background: 'rgba(13, 27, 62, 0.95)',
                  border: '1.5px solid #f59e0b',
                  color: '#ffd875',
                  fontWeight: 900,
                  fontSize: '12px',
                  padding: '7px 18px',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  width: 'max-content',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                  marginTop: 'auto',
                }}>✓ 24/7 CCTV Surveillance</span>
              <span style={{
                  background: 'rgba(13, 27, 62, 0.95)',
                  border: '1.5px solid #f59e0b',
                  color: '#ffd875',
                  fontWeight: 900,
                  fontSize: '12px',
                  padding: '7px 18px',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  width: 'max-content',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                  marginTop: 'auto',
                }}>✓ MSME Registered</span>
            </div>
          </div>

          <div className="enquiry-now-actions">
            <a
              href="https://wa.me/919626265456?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20Annai%20Tuition%20Centre"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-whatsapp-enquiry"
            >
              <MessageCircle size={18} /> Enquire on WhatsApp
            </a>
            <a href="tel:+919626265456" className="button button-call-enquiry">
              <Phone size={16} /> Call: 96262 65456
            </a>
            <Link
              to="/admissions"
              className="button button-outline"
              style={{
                background: '#f59e0b',
                color: '#000000',
                border: 'none',
                fontWeight: 900,
                padding: '0 24px',
                minHeight: '50px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '10px',
                textDecoration: 'none',
              }}
            >
              Admission Form <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   FACULTY CAREERS & TEACHING POSITIONS (HIRING SECTION)
   ========================================================================= */
function FacultyCareersSection() {
  return (
    <section className="faculty-careers-section section" id="careers">
      <div className="container">
        <div className="careers-simple-card">
          <div className="careers-simple-content">
            <span className="eyebrow eyebrow-gold">
              <Sparkles size={14} /> Join Our Faculty Team
            </span>
            <h2>Apply for Teaching Positions</h2>
            <p>
              We are inviting experienced subject specialist teachers (7–8+ years experience) for Higher Secondary (Maths, Computer Science, Biology, Commerce &amp; Accountancy) and Secondary classes in Puthur, Trichy.
            </p>
            <div className="careers-simple-points">
              <span>✓ Higher Secondary Maths, CS, Biology &amp; Commerce</span>
              <span>✓ Secondary Science, Maths &amp; Primary Foundation</span>
              <span>✓ Supportive Academic Environment &amp; Attractive Remuneration</span>
            </div>
          </div>
          <div className="careers-simple-action">
            <a
              href="https://wa.me/919626265456?text=Hello%20Annai%20Tuition%20Centre,%20I%20would%20like%20to%20apply%20for%20a%20teaching%20position"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-gold careers-whatsapp-main-btn"
            >
              <MessageCircle size={18} /> Apply for Teaching Positions on WhatsApp
            </a>
            <a href="tel:+919626265456" className="button button-outline careers-call-main-btn">
              <Phone size={15} /> Call 96262 65456
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   FOUNDER S. THIYAGARAJAN EXPERIENCE HIGHLIGHT (SINCE 2008)
   ========================================================================= */
function FounderHighlightSection() {
  return (
    <section className="founder-highlight-section section" id="founder-highlight">
      <div className="container">
        <div className="founder-highlight-box">
          <div className="founder-highlight-avatar">
            <span>ST</span>
          </div>
          <div className="founder-highlight-content">
            <div className="founder-since-pill">
              <ShieldCheck size={14} /> Working in Teaching Field Since 2008 (16+ Years Experience)
            </div>
            <h3>S. Thiyagarajan, M.Sc. (IT), B.Ed.</h3>
            <p className="founder-role-title">Founder & Academic Director | Higher Secondary Maths & CS Specialist</p>
            <p className="founder-highlight-desc">
              With over 16+ years of dedicated teaching experience in Trichy since 2008, S. Thiyagarajan personally leads our academic program. His proven formula breakdown, concept clarity, and centum drills have guided over 7,000+ students to board exam excellence.
            </p>
            <div className="founder-pills-row">
              <span className="fpill">✓ Higher Secondary Maths Lead</span>
              <span className="fpill">✓ Computer Science (Python & C++)</span>
              <span className="fpill">✓ 10th & 12th Board Centum Mentor</span>
              <span className="fpill">✓ Personal Attention Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   CLASSES 1 TO 12 SIMPLE & SWEET OVERVIEW (NO HEAVY THEORY)
   ========================================================================= */
function ClassesSimpleSection() {
  const classCards = [
    {
      badge: 'Classes 1 to 5',
      title: 'Primary Foundation',
      desc: 'Fun, concept-based learning in Maths, Science, English, and Tamil. Daily homework guidance and handwriting care.',
      icon: <BookOpen size={20} />,
      link: '/classes',
    },
    {
      badge: 'Classes 6 to 8',
      title: 'Middle School',
      desc: 'Deep concept building, formula mastery, and regular unit tests to eliminate exam fear and strengthen basic fundamentals.',
      icon: <Layers size={20} />,
      link: '/classes',
    },
    {
      badge: 'Classes 9 & 10',
      title: 'Secondary & 10th Board',
      desc: 'Intensive board preparation for State Board & CBSE. Chapter-wise test series, previous 10-year question analysis, and centum drills.',
      icon: <Trophy size={20} />,
      link: '/classes',
    },
    {
      badge: 'Classes 11 & 12',
      title: 'Higher Secondary Streams',
      desc: 'Dedicated coaching in Computer Science (Python/C++), Biology (Botany & Zoology), and Commerce (Accountancy & Commerce) with Centum drills.',
      icon: <GraduationCap size={20} />,
      link: '/classes',
    },
  ];

  return (
    <section className="classes-simple-section section" id="classes-simple">
      <div className="container">
        <div className="strip-heading">
          <div>
            <span className="eyebrow">Academic Batches</span>
            <h2>All Classes Supported (Classes 1 to 12)</h2>
          </div>
          <Link to="/classes" className="text-link">
            View full syllabus <ArrowRight size={16} />
          </Link>
        </div>

        <div className="classes-simple-grid">
          {classCards.map((c) => (
            <div className="class-simple-card" key={c.badge}>
              <div className="card-top-row">
                <span className="card-badge">{c.badge}</span>
                <span className="card-icon-pill">{c.icon}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <a href="#enquiry" className="card-enquire-link">
                Enquire for {c.badge} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Home() {
  return (
    <main>
      {/* Reference Hero Section matching user mockup */}
      <ReferenceHero />

      {/* Enquiry Now Section (Clean & Direct) */}
      <HomeEnquirySection />

      {/* Founder S. Thiyagarajan 16+ Years Experience Highlight (Since 2008) */}
      <FounderHighlightSection />

      {/* Simple & Sweet Classes 1 to 12 Overview (No heavy theory) */}
      <ClassesSimpleSection />

      {/* Essential Facilities: Dedicated Parking, CCTV, Safe for Girls */}
      <FacilitiesSection />

      {/* Girls' Safety and Security Section */}
      <GirlsSafetySection />

      {/* Student Results Preview (Real Toppers & 7,000+ Alumni) */}
      <ResultsPreview />

      {/* Our Two Branches in Puthur, Trichy (Google Maps, No branch images) */}
      <BranchesSection />

      {/* Apply for Teaching Positions on WhatsApp */}
      <FacultyCareersSection />

      {/* Social Media Links Section */}
      <SocialMediaSection />

      {/* Banner CTA */}
      <section className="banner-cta">
        <div className="container banner-inner">
          <span className="banner-icon">
            <GraduationCap size={25} />
          </span>
          <div>
            <span className="eyebrow eyebrow-light">Learn Today... Lead Tomorrow.</span>
            <h2>Ready to take the next step?</h2>
            <p>Secure your child's seat at Annai Tuition Centre. Small batches, personal care, and proven centums.</p>
          </div>
          <a href="#enquiry" className="button button-gold">
            Enquire for Admission <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <ContactPreview />
    </main>
  );
}

function ResultsPreview() {
  return (
    <section className="results-preview section">
      <div className="container">
        <div className="strip-heading">
          <div>
            <span className="eyebrow">Proven Student Results</span>
            <h2>
              Hard work deserves <span className="serif-accent">recognition.</span>
            </h2>
          </div>
          <Link to="/results" className="text-link">
            View all results <ArrowRight size={16} />
          </Link>
        </div>
        <div className="student-feature-grid">
          {featuredStudents.map((student) => (
            <Link to="/results" className="student-feature" key={student.name}>
              <img src={student.image} alt={student.name} />
              <span className="student-feature-copy">
                <strong>{student.name}</strong>
                <small>10th Standard</small>
              </span>
              <b>
                {student.score}
                <small> / {student.total}</small>
              </b>
            </Link>
          ))}
        </div>
        <p className="note-small">Student photos and marks from Annai Tuition Centre board examinations.</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <main>
      <PageHero
        eyebrow="Our story & legacy"
        title={
          <>
            A place to learn with <em>purpose.</em>
          </>
        }
        text="Annai Tuition Centre has been a cornerstone of quality education in Puthur, Trichy since 2008, helping over 7,000+ students excel academically."
      />

      <section className="section">
        <div className="container about-grid">
          <div>
            <SectionTitle
              eyebrow="Annai Tuition Centre (Since 2008)"
              title="Better Education... Brighter Future..."
              text="Our centre welcomes students and families looking for a supportive, disciplined, and empowering place to achieve academic success. We believe progress grows from steady effort, encouragement, and clear concept understanding."
            />
            <p className="body-copy">
              Led by founder <strong>S. Thiyagarajan</strong> (M.Sc., IT., B.Ed.), Annai Tuition Centre provides
              structured coaching for students from 1st standard to 12th standard, with specialized focus on 10th and
              12th Board examinations.
            </p>

            <div className="about-highlights-grid">
              <div className="about-point">
                <CheckCircle size={17} />
                <span>Over 7,000+ Students Passed Out with distinction</span>
              </div>
              <div className="about-point">
                <Monitor size={17} />
                <span>Smart Board with Digital Touch Panels</span>
              </div>
              <div className="about-point">
                <ShieldCheck size={17} />
                <span>MSME Registered Educational Institution</span>
              </div>
              <div className="about-point">
                <Video size={17} />
                <span>24/7 CCTV Camera Monitoring across all premises</span>
              </div>
              <div className="about-point">
                <Car size={17} />
                <span>Dedicated On-Premises Parking Facility with CCTV</span>
              </div>
              <div className="about-point">
                <Code size={17} />
                <span>Specialized Computer Science, Biology & Subject Tutorials</span>
              </div>
              <div className="about-point">
                <Shield size={17} />
                <span>100% Safe, Respectful Environment for Girls</span>
              </div>
            </div>

            <div className="about-cta-row">
              <Link to="/admissions" className="button button-primary">
                Ask about admission <ArrowRight size={16} />
              </Link>
              <a href="tel:+919626265456" className="button button-outline">
                <Phone size={15} /> 96262 65456
              </a>
              <a href="tel:+919994148476" className="button button-outline">
                <Phone size={15} /> 99941 48476
              </a>
            </div>
          </div>

          <div className="about-visual-column">
            <div className="about-logo-card">
              <img src="/images/annai-logo.png" alt="Annai Tuition Centre Logo" className="about-logo-display" />
              <strong>Annai Tuition Centre</strong>
              <span>Since 2008 · Puthur, Trichy</span>
            </div>
            <div className="about-visual">
              <img
                src="/images/smart-classroom-hero.jpg"
                alt="Annai Tuition Centre Smart Base Classroom"
                className="about-smart-preview-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7,000+ Students Passed Out Legacy Section */}
      <Legacy70kSection />

      {/* Our Distinguished Faculty */}
      <FacultySection />

      {/* Facilities & Safety Recap */}
      <FacilitiesSection />
      <GirlsSafetySection />
      <BranchesSection />

      <section className="mission-band">
        <div className="container mission-grid">
          <div>
            <span className="eyebrow eyebrow-light">Our Aim</span>
            <h2>
              Learn Today.
              <br />
              <span>Lead Tomorrow.</span>
            </h2>
          </div>
          <p>
            To provide a positive learning environment where students build deep understanding, exam confidence, and
            strong moral character for the future.
          </p>
          <div className="mission-stat">
            <GraduationCap size={22} />
            <strong>7,000+</strong>
            <small>Students Trained in Trichy</small>
          </div>
        </div>
      </section>
    </main>
  );
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
      <div className="page-hero-decoration" />
    </section>
  );
}

function ClassesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Classes, Subjects & Tutorials"
        title={
          <>
            The next step starts <em>here.</em>
          </>
        }
        text="Explore our comprehensive coaching programs from Class 1 to 12. Specialized batches for Computer Science, Biology, Mathematics, and Board examinations with proven centum results."
      />

      {/* Specialized Computer Science, Biology & Tutorials */}
      <SubjectsTutorialsSection />

      {/* Dedicated Coaching Section for Classes 10 & 12 */}
      <CoachingSection />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="All Grade Levels"
            title="All Classes We Offer"
            text="Choose your class to enquire about timing, subjects, and batch availability."
          />
          <div className="courses-grid">
            {classes.map((c, i) => (
              <article className="course-card" key={c}>
                <span className="course-index">
                  0{i + 1} <span> / 05</span>
                </span>
                <span className="card-icon navy-icon">
                  <BookOpen size={22} />
                </span>
                <h2>{c}</h2>
                <p>
                  {c === '10th Standard' || c === '12th Standard'
                    ? 'Intensive Board Exam coaching with unit tests, revision series, and centum drill sessions.'
                    : 'Concept-based coaching with daily homework support, foundational tests, and personalized care.'}
                </p>
                <Link to={`/admissions?class=${encodeURIComponent(c)}`} className="course-link">
                  Enquire about this class <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>

          <div className="course-contact">
            <div>
              <strong>Have a question about a class or batch timings?</strong>
              <span>We’ll guide you to the right program and batch for your child.</span>
            </div>
            <div className="course-contact-actions">
              <a href="tel:+919626265456" className="button button-dark">
                <Phone size={15} /> Call 96262 65456
              </a>
              <a href="tel:+919994148476" className="button button-dark">
                <Phone size={15} /> Call 99941 48476
              </a>
            </div>
          </div>
        </div>
      </section>

      <FacilitiesSection />
      <BranchesSection />
    </main>
  );
}

function ScoreCard({ row, className }) {
  return (
    <div className="score-card">
      <span>{row[0]}</span>
      <strong>
        {row[1]} {row[2] && <small>/ {row[2]}</small>}
      </strong>
      <i className={className} />
    </div>
  );
}

function Results() {
  const remaining10 = results10.filter((row) => !featuredStudents.some((student) => student.name === row[0]));
  return (
    <main>
      <PageHero
        eyebrow="Student achievements & milestones"
        title={
          <>
            Celebrating every <em>milestone.</em>
          </>
        }
        text="A selection of verified examination marks and achievements from Annai Tuition Centre students over the years."
      />

      <section className="section results-section">
        <div className="container">
          <div className="results-list results-featured-list">
            <div className="results-list-head">
              <span className="result-grade">10</span>
              <div>
                <span className="eyebrow">Student highlights</span>
                <h2>10th Standard Board Exam Scorers</h2>
              </div>
            </div>
            <div className="student-feature-grid">
              {featuredStudents.map((student) => (
                <article className="student-feature" key={student.name}>
                  <img src={student.image} alt={student.name} />
                  <span className="student-feature-copy">
                    <strong>{student.name}</strong>
                    <small>10th Standard</small>
                  </span>
                  <b>
                    {student.score}
                    <small> / {student.total}</small>
                  </b>
                </article>
              ))}
            </div>
          </div>

          <div className="results-columns results-columns-below">
            <div className="results-list">
              <div className="results-list-head">
                <span className="result-grade">12</span>
                <div>
                  <span className="eyebrow">Higher Secondary</span>
                  <h2>12th Standard Board Examination</h2>
                </div>
              </div>
              <div className="score-grid">
                {results12.map((r) => (
                  <ScoreCard row={r} key={r[0]} className="score-blue" />
                ))}
              </div>
            </div>

            <div className="results-list">
              <div className="results-list-head">
                <span className="result-grade">10</span>
                <div>
                  <span className="eyebrow">Secondary Examination</span>
                  <h2>More 10th Standard Results</h2>
                </div>
              </div>
              <div className="score-grid">
                {remaining10.map((r) => (
                  <ScoreCard row={r} key={r[0]} className="score-green" />
                ))}
              </div>
              <div className="marks-only">
                {results10MarksOnly.map(([name, mark]) => (
                  <div key={name}>
                    <span>{name}</span>
                    <strong>
                      {mark} <small>marks</small>
                    </strong>
                  </div>
                ))}
              </div>
              <p className="note-small">Marks recorded as published by the examination board.</p>
            </div>
          </div>
        </div>
      </section>

      <CoachingSection />
    </main>
  );
}

function Admissions() {
  const params = new URLSearchParams(useLocation().search);
  const initialClass = classes.includes(params.get('class')) ? params.get('class') : '';
  const initialBranch = params.get('branch') || '';
  const [status, setStatus] = useState('');

  function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    const message = [
      'Hello Annai Tuition Centre, I would like to apply for admission.',
      `Student name: ${data.student_name}`,
      `Parent name: ${data.parent_name}`,
      `Mobile: ${data.parent_mobile}`,
      `Alternative mobile: ${data.alternative_mobile || 'Not provided'}`,
      `Email: ${data.email || 'Not provided'}`,
      `Current class: ${data.current_class}`,
      `Applying for: ${data.applying_class}`,
      `Preferred branch: ${data.branch}`,
      `School: ${data.school_name || 'Not provided'}`,
      `Preferred contact: ${data.preferred_contact || 'Not specified'}`,
      `Subjects: ${data.subjects || 'Not specified'}`,
      `Message: ${data.message || 'None'}`,
    ].join('\n');

    window.open(`https://wa.me/919626265456?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setStatus('WhatsApp opened with your application details. Review the message and tap Send to submit.');
    form.reset();
  }

  return (
    <main>
      <PageHero
        eyebrow="Admissions enquiry"
        title={
          <>
            Let’s find the right <em>class.</em>
          </>
        }
        text="Share a few details and our academic counseling team will assist you with batch timings, course fees, and admission details."
      />

      <section className="section">
        <div className="container admission-layout">
          <form className="form-card" onSubmit={submit}>
            <div className="form-heading">
              <h2>Student Enquiry Form</h2>
              <p>
                Fields marked <span>*</span> are required.
              </p>
            </div>
            <div className="form-grid">
              <label>
                Student full name *
                <input name="student_name" required maxLength="120" autoComplete="name" placeholder="Student’s name" />
              </label>
              <label>
                Parent / guardian name *
                <input name="parent_name" required maxLength="120" placeholder="Parent or guardian’s name" />
              </label>
              <label>
                Parent mobile number *
                <input
                  name="parent_mobile"
                  required
                  inputMode="tel"
                  pattern="[+0-9 ()-]{10,18}"
                  placeholder="e.g. 98765 43210"
                />
              </label>
              <label>
                Alternative mobile
                <input name="alternative_mobile" inputMode="tel" pattern="[+0-9 ()-]{10,18}" placeholder="Optional" />
              </label>
              <label>
                Email address
                <input name="email" type="email" maxLength="254" placeholder="Optional" autoComplete="off" />
              </label>
              <label>
                Current class *
                <select name="current_class" required defaultValue="">
                  <option value="" disabled>
                    Select current class
                  </option>
                  {classes.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label>
                Class applying for *
                <select name="applying_class" required defaultValue={initialClass}>
                  <option value="" disabled>
                    Select class
                  </option>
                  {classes.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label>
                Preferred branch *
                <select name="branch" required defaultValue={initialBranch || ''}>
                  <option value="" disabled>
                    Select location
                  </option>
                  {branches.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </label>
              <label>
                School name
                <input name="school_name" maxLength="160" placeholder="Optional" />
              </label>
              <label>
                Preferred contact method
                <select name="preferred_contact" defaultValue="">
                  <option value="">No preference</option>
                  <option>Phone</option>
                  <option>WhatsApp</option>
                  <option>Email</option>
                </select>
              </label>
              <label className="full-field">
                Subjects required
                <input name="subjects" maxLength="250" placeholder="e.g. Maths, Science, Physics, Chemistry..." />
              </label>
              <label className="full-field">
                Message
                <textarea
                  name="message"
                  rows="4"
                  maxLength="1200"
                  placeholder="Anything specific you’d like us to know? (optional)"
                />
              </label>
              <label className="consent full-field">
                <input type="checkbox" name="consent" value="true" required />
                <span>I agree that Annai Tuition Centre may contact me about this admission enquiry. *</span>
              </label>
            </div>
            <button className="button button-primary form-submit" type="submit">
              Continue to WhatsApp <Send size={16} />
            </button>
            {status && (
              <p className="form-status success" role="status">
                {status}
              </p>
            )}
            <p className="form-privacy">
              <ShieldCheck size={15} /> Your details will open in WhatsApp so you can review before sending.
            </p>
          </form>

          <aside className="admission-aside">
            <div className="aside-card aside-dark">
              <span className="aside-icon">
                <Phone size={19} />
              </span>
              <span className="eyebrow eyebrow-light">Prefer to talk?</span>
              <h2>We’re happy to help.</h2>
              <p>Call our counselors directly or message on WhatsApp to discuss courses and batches.</p>
              <CallButtons />
            </div>

            <div className="aside-card">
              <span className="eyebrow">Our Branches</span>
              <h3>Two Locations in Puthur</h3>
              <p>
                <strong>Registered Office:</strong>
                <br />
                Door No.: 21/87, Puthur Agraharam,
                <br />
                Near Bishop School, Trichy – 17
              </p>
              <p>
                <strong>Branch 2:</strong>
                <br />
                Ramakrishna Middle School,
                <br />
                Near Aruna Theatre, Puthur, Trichy – 17
              </p>
              <Link to="/contact" className="text-link">
                View map and branch details <ArrowRight size={15} />
              </Link>
            </div>

            <div className="aside-card aside-gold-subtle">
              <span className="eyebrow">Safety & Trust</span>
              <h3>100% Safe Environment for Girls</h3>
              <p>24/7 CCTV surveillance, MSME registered institution, secure premises.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function ContactPreview() {
  return (
    <section className="contact-preview section">
      <div className="container contact-grid">
        <div>
          <SectionTitle
            eyebrow="Find us in Puthur"
            title={
              <>
                A quick conversation can <span className="serif-accent">help.</span>
              </>
            }
            text="Call the centre to ask about class details, branch locations, and current batch availability."
          />
          <CallButtons />
        </div>
        <div className="locations">
          <div className="location-card">
            <span className="location-icon">
              <MapPin size={18} />
            </span>
            <div>
              <span className="eyebrow">Registered Office</span>
              <p>
                <strong>Door No.: 21/87, Puthur Agraharam</strong>
                <br />
                Near Bishop School, Trichy – 17
              </p>
            </div>
            <a
              aria-label="View Registered Office in Google Maps"
              target="_blank"
              rel="noreferrer"
              href={branchesInfo[0].mapLink}
              className="location-map-btn"
              title="Open Google Maps"
            >
              <span>Google Map</span> <ExternalLink size={14} />
            </a>
          </div>

          <div className="location-card">
            <span className="location-icon">
              <MapPin size={18} />
            </span>
            <div>
              <span className="eyebrow">Branch 2</span>
              <p>
                <strong>Ramakrishna Middle School</strong>
                <br />
                Near Aruna Theatre, Puthur, Trichy – 17
              </p>
            </div>
            <a
              aria-label="View Branch 2 in Google Maps"
              target="_blank"
              rel="noreferrer"
              href={branchesInfo[1].mapLink}
              className="location-map-btn"
              title="Open Google Maps"
            >
              <span>Google Map</span> <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            We’re just a call <em>away.</em>
          </>
        }
        text="Contact Annai Tuition Centre to ask about classes, admission, or visiting either location in Puthur, Trichy."
      />

      <section className="phone-band">
        <div className="container">
          <span className="eyebrow eyebrow-light">Call Us Directly</span>
          <div className="phone-links">
            {phoneNumbers.map((n) => (
              <a key={n} href={`tel:+91${n.replaceAll(' ', '')}`}>
                <Phone size={17} />
                {n}
              </a>
            ))}
            <a
              href="https://wa.me/919626265456"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-phone-link"
            >
              WhatsApp: 96262 65456
            </a>
          </div>
        </div>
      </section>

      {/* Branches with detailed cards */}
      <BranchesSection />

      {/* Contact Form Section */}
      <section className="section">
        <div className="container contact-form-layout">
          <div>
            <span className="eyebrow">Write to us</span>
            <h2>How can we help?</h2>
            <p>Leave a contact enquiry and our academic counselors will follow up using your preferred details.</p>

            <div className="contact-side-card">
              <h3>Centre Operating Information</h3>
              <p>
                <strong>Center Head:</strong> S. Thiyagarajan (M.Sc., IT., B.Ed.)
              </p>
              <p>
                <strong>Admissions & Enquiries:</strong> Available Mon – Sat
              </p>
              <p>
                <strong>Phone Numbers:</strong> 96262 65456, 99941 48476
              </p>
              <p>
                <strong>Facilities:</strong> 24/7 CCTV Monitoring, Dedicated Parking Facility, Smart Board, 100% Safe for Girls
              </p>
              <div className="contact-social-embed">
                <strong>Follow us on Social Media:</strong>
                <SocialLinks />
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    const text = `Hello Annai Tuition Centre, I would like to make an enquiry.\n\nName: ${data.parent_name}\nMobile: ${data.mobile}${data.email ? `\nEmail: ${data.email}` : ''}\nMessage: ${data.message}`;
    const whatsappUrl = `https://wa.me/919626265456?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  }

  return (
    <form onSubmit={submit} className="contact-form form-card">
      <div className="form-card-title">
        <h3>Send Quick Enquiry</h3>
        <p>Direct response from academic coordinator via WhatsApp &amp; Call</p>
      </div>
      <label>
        Your name *
        <input name="parent_name" required maxLength="120" placeholder="Parent or Student Name" />
      </label>
      <label>
        Mobile number *
        <input name="mobile" required inputMode="tel" pattern="[+0-9 ()-]{10,18}" placeholder="e.g. 96262 65456" />
      </label>
      <label>
        Email address (Optional)
        <input type="email" name="email" maxLength="254" placeholder="Optional" autoComplete="off" />
      </label>
      <label>
        Message / Questions *
        <textarea
          name="message"
          required
          rows="3"
          maxLength="1200"
          placeholder="Which class or subject are you enquiring about?"
        />
      </label>
      <div className="contact-form-actions">
        <button type="submit" className="button button-gold contact-submit-btn">
          Send Enquiry via WhatsApp <Send size={15} />
        </button>
        <a href="tel:+919626265456" className="button button-outline contact-call-btn">
          <Phone size={15} /> Call 96262 65456
        </a>
      </div>
      {submitted && (
        <div className="form-status success">
          <CheckCircle2 size={16} />
          <span>Thank you! WhatsApp has been opened with your enquiry. You can also call us directly at 96262 65456.</span>
        </div>
      )}
    </form>
  );
}

function NotFound() {
  return (
    <main className="not-found">
      <span className="eyebrow">404 · Page not found</span>
      <h1>
        Let’s get you <em>back on track.</em>
      </h1>
      <p>That page isn’t here, but Annai Tuition Centre is ready to help.</p>
      <Link to="/" className="button button-primary">
        Back to home <ArrowRight size={16} />
      </Link>
    </main>
  );
}

const apiRoot = () => import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '');
function cookie(name) {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')
    .slice(1)
    .join('=') || '';
}

function Admin() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [items, setItems] = useState([]);
  const [metrics, setMetrics] = useState(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [detail, setDetail] = useState(null);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [csrf, setCsrf] = useState(cookie('csrftoken'));
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  async function request(path, options = {}) {
    const root = apiRoot();
    // root defaults to '/api' for Vercel multi-service routing
    const res = await fetch(`${root}${path}`, {
      credentials: 'include',
      ...options,
      headers: {
        ...(options.body ? { 'Content-Type': 'application/json' } : {}),
        ...(options.headers || {}),
      },
    });
    if (!res.ok) {
      let d = {};
      try {
        d = await res.json();
      } catch {}
      throw new Error(d.detail || `Request failed (${res.status}).`);
    }
    return res.headers.get('content-type')?.includes('application/json') ? res.json() : res;
  }

  async function refresh() {
    try {
      const query = new URLSearchParams({ page: String(page) });
      if (search.trim()) query.set('q', search.trim());
      if (filter) query.set('status', filter);
      const [list, stats] = await Promise.all([
        request(`/admin/admissions/?${query}`),
        request('/admin/admissions/metrics/'),
      ]);
      setItems(list.results || []);
      setCount(list.count || 0);
      setMetrics(stats);
    } catch (e) {
      if (e.message.includes('Authentication required') || e.message.includes('(401)')) setUser(null);
      else setError(e.message);
    }
  }

  useEffect(() => {
    request('/auth/me/')
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  useEffect(() => {
    if (user) refresh();
  }, [user, page]);

  async function login(e) {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      const root = apiRoot();
      // root defaults to '/api' for Vercel multi-service routing
      const token = await request('/auth/csrf/');
      const response = await request('/auth/login/', {
        method: 'POST',
        headers: { 'X-CSRFToken': token.csrfToken || cookie('csrftoken') },
        body: JSON.stringify({ username, password }),
      });
      setCsrf(response.csrfToken || '');
      setUser(response);
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  async function changeStatus(id, status) {
    setError('');
    try {
      await request(`/admin/admissions/${id}/status/`, {
        method: 'PATCH',
        headers: { 'X-CSRFToken': csrf || cookie('csrftoken') },
        body: JSON.stringify({ status }),
      });
      await refresh();
      if (detail?.id === id) setDetail({ ...detail, status });
    } catch (e) {
      setError(e.message);
    }
  }

  async function openDetail(id) {
    try {
      setDetail(await request(`/admin/admissions/${id}/`));
    } catch (e) {
      setError(e.message);
    }
  }

  async function logout() {
    try {
      await request('/auth/csrf/');
      await request('/auth/logout/', {
        method: 'POST',
        headers: { 'X-CSRFToken': cookie('csrftoken') },
      });
    } catch {}
    setUser(null);
    setItems([]);
    setMetrics(null);
  }

  if (!user) {
    return (
      <main>
        <PageHero
          eyebrow="Secure access"
          title={
            <>
              Administrator <em>sign in.</em>
            </>
          }
          text="Sign in with the centre’s Django administrator account to manage private enquiries."
        />
        <section className="section admin-login-wrap">
          <form className="form-card admin-login" onSubmit={login}>
            <span className="card-icon navy-icon">
              <ShieldCheck />
            </span>
            <h2>Centre Administration</h2>
            <label>
              Username
              <input autoComplete="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              Password
              <input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button disabled={busy} className="button button-primary">
              {busy ? 'Signing in…' : 'Sign in'} <ArrowRight size={15} />
            </button>
            {error && (
              <p role="alert" className="form-status">
                {error}
              </p>
            )}
            <p className="form-privacy">
              Administrator accounts are created on the server. No default password is configured.
            </p>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PageHero
        eyebrow="Private administrator area"
        title={
          <>
            Enquiry <em>dashboard.</em>
          </>
        }
        text={`Signed in as ${user.username}. Admission records are visible only to authorized centre staff.`}
      />
      <section className="section admin-section">
        <div className="container">
          <div className="admin-toolbar">
            <div>
              <span className="eyebrow">Admissions</span>
              <h2>Enquiry Overview</h2>
            </div>
            <button onClick={logout} className="button button-dark">
              Sign out
            </button>
          </div>
          {error && (
            <p className="form-status" role="alert">
              {error}
            </p>
          )}
          <div className="metrics-grid">
            {metrics &&
              [
                ['Total', metrics.total],
                ['New', metrics.new],
                ['Contacted', metrics.contacted],
                ['Visit scheduled', metrics.visit_scheduled],
                ['Admitted', metrics.admitted],
                ['Rejected', metrics.rejected],
              ].map(([label, value]) => (
                <div key={label} className="metric-card">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
          </div>
          <div className="admin-filters">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, phone or reference"
            />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="">All statuses</option>
              {['New', 'Contacted', 'Visit Scheduled', 'Admitted', 'Rejected'].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <button
              className="button button-primary"
              onClick={() => {
                setPage(1);
                refresh();
              }}
            >
              Search
            </button>
            <button
              className="button button-outline"
              onClick={() => {
                setSearch('');
                setFilter('');
                setPage(1);
                setTimeout(refresh, 0);
              }}
            >
              Clear
            </button>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Reference</th>
                  <th>Student</th>
                  <th>Parent / phone</th>
                  <th>Applying for</th>
                  <th>Branch</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((i) => (
                  <tr key={i.id}>
                    <td>
                      <strong>{i.reference}</strong>
                      <small>{new Date(i.created_at).toLocaleDateString()}</small>
                    </td>
                    <td>{i.student_name}</td>
                    <td>
                      {i.parent_name}
                      <small>{i.parent_mobile}</small>
                    </td>
                    <td>{i.applying_class}</td>
                    <td>{i.branch}</td>
                    <td>
                      <select value={i.status} onChange={(e) => changeStatus(i.id, e.target.value)}>
                        {['New', 'Contacted', 'Visit Scheduled', 'Admitted', 'Rejected'].map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <button className="table-link" onClick={() => openDetail(i.id)}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!items.length && (
              <p className="admin-empty">
                No online admission records found. Admission applications are sent directly to the centre in WhatsApp.
              </p>
            )}
          </div>
          <div className="admin-pagination">
            <span>
              {count} total enquiries · Showing page {page}
            </span>
            <div>
              <button
                className="button button-outline"
                disabled={page <= 1}
                onClick={() => {
                  setPage(page - 1);
                  setTimeout(refresh, 0);
                }}
              >
                Previous
              </button>
              <button
                className="button button-outline"
                disabled={page * 25 >= count}
                onClick={() => {
                  setPage(page + 1);
                  setTimeout(refresh, 0);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
      {detail && (
        <div role="dialog" aria-modal="true" className="detail-overlay" onClick={() => setDetail(null)}>
          <div className="detail-card" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close detail-close" onClick={() => setDetail(null)} aria-label="Close details">
              <X />
            </button>
            <span className="eyebrow">Admission enquiry</span>
            <h2>{detail.student_name}</h2>
            <p>
              <strong>Reference</strong> {detail.reference}
            </p>
            <p>
              <strong>Parent</strong> {detail.parent_name}
            </p>
            <p>
              <strong>Mobile</strong> <a href={`tel:${detail.parent_mobile}`}>{detail.parent_mobile}</a>
            </p>
            <p>
              <strong>Email</strong> {detail.email || '—'}
            </p>
            <p>
              <strong>Current class</strong> {detail.current_class}
            </p>
            <p>
              <strong>Applying class</strong> {detail.applying_class}
            </p>
            <p>
              <strong>Branch</strong> {detail.branch}
            </p>
            <p>
              <strong>Subjects</strong> {detail.subjects || '—'}
            </p>
            <p>
              <strong>Message</strong> {detail.message || '—'}
            </p>
            <p>
              <strong>Submitted</strong> {new Date(detail.created_at).toLocaleString()}
            </p>
            <label>
              Administrative notes
              <textarea defaultValue={detail.admin_notes || ''} rows="3" readOnly />
            </label>
            <p className="form-privacy">Notes can be managed in the secure Django admin.</p>
          </div>
        </div>
      )}
    </main>
  );
}

function FacultyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Academic Leadership & Experienced Faculty"
        title={
          <>
            Learn from Trichy’s <em>top mentors.</em>
          </>
        }
        text="Led by Founder S. Thiyagarajan, M.Sc. (IT), B.Ed., alongside experienced postgraduate subject specialist faculty with 7–8+ years teaching experience dedicated to continuous student improvement and board exam centums."
      />
      <FacultySection />
      {/* Faculty Careers & Teaching Positions Hiring Section with 1-click WhatsApp Apply */}
      <FacultyCareersSection />
      <Legacy70kSection />
      <BranchesSection />
    </main>
  );
}

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppShell>
  );
}
