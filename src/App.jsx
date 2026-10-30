import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Calculator,
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
  Menu,
  MessageCircle,
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
const classes = [
  'Classes 1–8 (Junior Foundation)',
  '9th Standard',
  '10th Standard (SSLC Board)',
  '11th Standard (Science Stream)',
  '11th Standard (Commerce Stream)',
  '12th Standard (Science Stream)',
  '12th Standard (Commerce Stream)',
];

export const facultyFounder = {
  name: 'S. Thiyagarajan',
  qualifications: 'M.Sc. (IT), B.Ed.',
  role: 'Founder & Academic Director | Mathematics & CS Lead',
  experience: '8+ Years Dedicated Teaching Experience',
  subjects: ['Higher Secondary Mathematics', 'Computer Science (Python & C++)', 'Board Exam Centum Drills'],
  about: 'Founded Annai Tuition Centre in 2008 in Puthur, Trichy. With over 8+ years of classroom teaching and personal mentorship, S. Thiyagarajan has directly guided thousands of students to board exam distinction and centums through shortcut techniques, concept visualization, and dedicated care.',
  initials: 'ST',
};

export const facultyPanels = [
  {
    department: 'Mathematics Faculty Panel',
    qualifications: 'Experienced Postgraduate & B.Ed. Mentors',
    experience: '8+ Years Average Experience',
    badge: 'Mathematics Department',
    focus: 'How We Improve Students:',
    points: [
      'Eliminating exam fear through step-by-step problem breakdown and formula clarity',
      'Daily 5-problem formula practice and speed calculation shortcut techniques',
      'Regular chapter unit tests with personalized correction and error analysis',
      'Proven blueprint drills for scoring 100/100 Centums in 10th & 12th State Board Exams',
    ],
  },
  {
    department: 'Physics & Chemistry Faculty Panel',
    qualifications: 'Experienced Postgraduate & B.Ed. Mentors',
    experience: '7+ Years Average Experience',
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
    department: 'Biology & Life Sciences Faculty Panel',
    qualifications: 'Experienced Botany & Zoology Specialists (State Board)',
    experience: '8+ Years Teaching Experience',
    badge: 'Life Sciences Panel',
    focus: 'How We Improve Students:',
    points: [
      'Samacheer Kalvi syllabus line-by-line concept mastery with high visual clarity',
      'Speed diagram drawing drills with accurate scientific labeling',
      'Concept maps for genetics, plant physiology, and human anatomy',
      'Systematic chapter-wise tests and 100/100 board exam scoring techniques',
    ],
  },
  {
    department: 'Commerce & Accountancy Faculty Panel',
    qualifications: 'Postgraduate (M.Com, M.Phil, B.Ed.) Mentors',
    experience: '8+ Years Average Experience',
    badge: 'Commerce & Management Wing',
    focus: 'How We Improve Students:',
    points: [
      'Accountancy ledger balancing, debit-credit rules & step-by-step problem accuracy',
      'Commerce blueprint analysis, point-wise presentation & scoring 100/100',
      'Business Mathematics speed shortcuts, formula charts & statistics workouts',
      'Economics concept maps, graphs & national income numerical practice',
    ],
  },
  {
    department: 'Foundation & Junior School Faculty (Classes 1–8)',
    qualifications: 'Trained Graduate & B.Ed. Certified Teachers',
    experience: '7+ Years Foundation Coaching',
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


export const tutorialSteps = [
  {
    step: '01',
    title: 'Board & Smart Board Teaching',
    desc: 'Teachers explain each concept and formula step-by-step on the blackboard & interactive Smart Board.',
    icon: 'BookOpen',
  },
  {
    step: '02',
    title: 'Daily Notebook Checking',
    desc: 'Mentors check each student’s calculation steps in class and correct mistakes immediately.',
    icon: 'CheckCircle2',
  },
  {
    step: '03',
    title: 'Direct Doubt Clearing',
    desc: 'Friendly, patient atmosphere where students ask questions freely without hesitation.',
    icon: 'MessageCircle',
  },
  {
    step: '04',
    title: 'Weekly Unit Tests',
    desc: 'Regular chapter tests to track progress, with results shared directly with parents.',
    icon: 'TrendingUp',
  },
];

export const tutorialTracks = [
  {
    id: '10th-board',
    title: '10th Standard Board Exam Coaching',
    category: 'Board Coaching',
    grade: 'Class 10 (Tamil Nadu State Board)',
    icon: 'Trophy',
    badge: '100% Centum Focus',
    timing: '6:30 PM – 9:00 PM (Daily & Sunday)',
    highlights: [
      'Maths, Science, Social Science, Tamil & English',
      'Daily formula drills & previous 10-year question practice',
      'Weekly unit tests with personal mark review',
    ],
    classParam: '10th Standard',
  },
  {
    id: '12th-board',
    title: '12th Standard HSC Board Coaching',
    category: 'Higher Secondary',
    grade: 'Class 12 (Science & Commerce)',
    icon: 'Award',
    badge: 'State Board Blueprint',
    timing: '6:30 PM – 9:00 PM (Daily & Sunday)',
    highlights: [
      'Maths, Physics, Chemistry, Biology, CS & Commerce',
      'Blueprint-based revision & step-by-step problem solving',
      'Full-length model pre-board exams before finals',
    ],
    classParam: '12th Standard',
  },
  {
    id: 'maths',
    title: 'Mathematics Centum Coaching',
    category: 'Math Excellence',
    grade: 'Classes 6 to 12 (State Board)',
    icon: 'Cpu',
    badge: 'Step-by-Step Logic',
    timing: '6:30 PM – 9:00 PM',
    highlights: [
      'Algebra, Geometry, Trigonometry & Calculus breakdown',
      'Formula shortcut memory tips that remove math fear',
      'Daily individual notebook checking for calculation accuracy',
    ],
    classParam: 'Mathematics',
  },
  {
    id: 'science',
    title: 'Science (Physics, Chemistry, Biology)',
    category: 'Visual Science',
    grade: 'Classes 9 to 12',
    icon: 'Sparkles',
    badge: 'Interactive Smart Board',
    timing: '6:30 PM – 9:00 PM',
    highlights: [
      'Interactive Smart Board visual 3D simulations',
      'Chemical equations, organic reaction maps & physics derivations',
      'Diagram drawing drills with correct scientific labeling',
    ],
    classParam: 'Science Stream',
  },
  {
    id: 'commerce',
    title: 'Commerce & Accountancy',
    category: 'Commerce Wing',
    grade: 'Classes 11 & 12',
    icon: 'Briefcase',
    badge: 'Balance Sheet Mastery',
    timing: '6:30 PM – 9:00 PM',
    highlights: [
      'Simple debit-credit rules & ledger balancing practice',
      'Balance sheet problem drills with zero confusion',
      'Business economics & accountancy blueprint coaching',
    ],
    classParam: 'Commerce & Accountancy',
  },
  {
    id: 'cs',
    title: 'Computer Science (Python & Theory)',
    category: 'Practical & Theory',
    grade: 'Classes 11 & 12',
    icon: 'Code',
    badge: 'Practical Record Prep',
    timing: '6:30 PM – 9:00 PM',
    highlights: [
      'Hands-on Python code logic, syntax & flowcharts',
      'MySQL database queries made simple and clear',
      'Practical record completion & viva interview prep',
    ],
    classParam: 'Computer Science',
  },
  {
    id: 'junior',
    title: 'Classes 1–8 Junior Foundation',
    category: 'All-Round Care',
    grade: 'Classes 1 to 8 (All Subjects)',
    icon: 'Layers',
    badge: 'Homework & Basics',
    timing: '6:30 PM – 8:30 PM',
    highlights: [
      'Daily school homework assistance and handwriting care',
      'Mental arithmetic & foundational concept clarity',
      'Disciplined daily evening study habit building',
    ],
    classParam: 'Classes 1-8 Junior Foundation',
  },
  {
    id: 'individual',
    title: '1-on-1 Individual Doubt Clearing',
    category: 'Personal Attention',
    grade: 'Any Subject · On Demand',
    icon: 'CheckCircle',
    badge: '1-on-1 Mentorship',
    timing: 'Flexible Evening & Sunday Slots',
    highlights: [
      'Dedicated teacher for difficult chapters',
      'Personal pace for students needing extra support',
      'Steady improvement with regular parent updates',
    ],
    classParam: '1-on-1 Tutorial Support',
  },
];

export const subjectsList = [
  {
    id: 'commerce',
    title: 'Commerce & Accountancy',
    grade: 'Classes 11 & 12 (Tamil Nadu State Board & CBSE)',
    icon: 'Briefcase',
    color: 'commerce',
    points: [
      'Step-by-step balance sheet & ledger balancing made crystal clear',
      'Zero exam stress with simple debit-credit rules & shortcut tricks',
      'Proven blueprint strategy for scoring 100/100 centum marks',
      'Real-world business economics with interactive classroom coaching',
    ],
  },
  {
    id: 'cs',
    title: 'Computer Science',
    grade: 'Classes 11 & 12 (Tamil Nadu State Board)',
    icon: 'Code',
    color: 'cs',
    points: [
      'Easy hands-on Python programming & C++ logic building',
      '100% practical record completion with full-marks viva prep',
      'Fast database MySQL query mastery & visual algorithm diagrams',
      'Consistent past board centum track record year after year',
    ],
  },
  {
    id: 'bio',
    title: 'Biology (Botany & Zoology)',
    grade: 'Classes 9, 10, 11, 12 (Tamil Nadu State Board)',
    icon: 'Dna',
    color: 'bio',
    points: [
      'Fast scientific diagram drawing drills with perfect labeling',
      'Line-by-line Samacheer Kalvi clarity that makes concepts stick',
      'Weekly unit tests with 10-year previous board question analysis',
      'Strong foundation building for future medical aspirants (NEET/MBBS)',
    ],
  },
  {
    id: 'tut',
    title: 'Specialized Subject Tutorials',
    grade: 'Classes 1 to 12 · All Subjects',
    icon: 'Layers',
    color: 'tut',
    points: [
      '1-on-1 personalized mentoring with daily doubt clearing',
      'Daily homework tracking & confidence building for junior classes',
      'Turning difficult subjects into high-scoring student strengths',
      'Flexible evening timings (6:30–9:00 PM) plus Sunday revision',
    ],
  },
  {
    id: 'math',
    title: 'Mathematics & Centum Coaching',
    grade: 'Classes 6 to 12 (Tamil Nadu State Board)',
    icon: 'Cpu',
    color: 'math',
    points: [
      'Speed shortcut techniques & easy formula memory mnemonics',
      'Daily 5-problem challenge for 100% calculation accuracy',
      'Step-by-step problem breakdown that removes all math fear',
      'Consistent 100/100 centum results produced every single year',
    ],
  },
  {
    id: 'phy',
    title: 'Physics In-Depth',
    grade: 'Classes 11 & 12 & Foundation',
    icon: 'Sparkles',
    color: 'phy',
    points: [
      'Visual learning on smart interactive boards for complex concepts',
      'Step-by-step derivation drills formatted for full board marks',
      'Easy numerical problem-solving formulas and dimensional checks',
      'Targeted board blueprint revision to maximize final scores',
    ],
  },
  {
    id: 'chem',
    title: 'Chemistry Mastery',
    grade: 'Classes 11 & 12 & Foundation',
    icon: 'Microscope',
    color: 'chem',
    points: [
      'Simplified organic reaction roadmaps & quick memory tricks',
      'Ready-to-use chapter formula charts for effortless recall',
      'Balanced equation workouts & hands-on practical exam readiness',
      'Chapter-wise mock tests ensuring total board exam confidence',
    ],
  },
];


const branchesInfo = [
  {
    type: 'Branch 1 (Registered Office)',
    name: 'Annai Tuition Centre',
    subtitle: 'Main Administrative Hub & State Board Coaching Wings',
    doorNo: 'Door No.: 21/87',
    street: 'Puthur Agraharam',
    landmark: 'Near Bishop School',
    city: 'Trichy – 17',
    fullAddress: 'Door No.: 21/87, Puthur Agraharam, Near Bishop School, Trichy – 17',
    image: '/images/annai-real-classroom.jpg',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=21%2F87+Puthur+Agraharam+Near+Bishop+School+Trichy+17',
    directionsLink: 'https://www.google.com/maps/dir/?api=1&destination=21%2F87+Puthur+Agraharam+Near+Bishop+School+Trichy+17',
    embedMapUrl: 'https://maps.google.com/maps?q=21%2F87%2C+Puthur+Agraharam%2C+Near+Bishop+School%2C+Trichy+17&t=&z=16&ie=UTF8&iwloc=&output=embed',
    timings: 'Class Timings: 6:30 PM – 9:00 PM | Mon – Sat & Sunday Special Classes',
    facilities: ['Dedicated Parking Facility', 'Interactive Smart Board', '24/7 CCTV Surveillance', 'Spacious Classrooms', '100% Safe for Girls'],
  },
  {
    type: 'Branch 2 (Campus)',
    name: 'Annai Tuition Centre',
    subtitle: 'Secondary & Higher Secondary Exam Wing',
    doorNo: 'Branch 2',
    street: 'Ramakrishna Middle School',
    landmark: 'Near Aruna Theatre, Puthur',
    city: 'Trichy – 17',
    fullAddress: 'Ramakrishna Middle School, Near Aruna Theatre, Puthur, Trichy – 17',
    image: '/images/annai-branch2-classroom.jpg',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Ramakrishna+Middle+School+Near+Aruna+Theatre+Puthur+Trichy+17',
    directionsLink: 'https://www.google.com/maps/dir/?api=1&destination=Ramakrishna+Middle+School+Near+Aruna+Theatre+Puthur+Trichy+17',
    embedMapUrl: 'https://maps.google.com/maps?q=Ramakrishna+Middle+School%2C+Near+Aruna+Theatre%2C+Puthur%2C+Trichy+17&t=&z=16&ie=UTF8&iwloc=&output=embed',
    timings: 'Class Timings: 6:30 PM – 9:00 PM | Mon – Sat & Sunday Special Classes',
    facilities: ['Dedicated Parking Facility', 'Interactive Smart Board', 'Spacious Desks & CCTV', 'Distraction-Free Environment', '100% Safe for Girls'],
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

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="header">
      <div className="topline">
        <div className="topline-left">
          <span className="topline-welcome">Welcome to Annai Tuition Centre, Trichy</span>
          <span className="topline-timing-pill">
            <Clock size={11} /> Timings: 6:30 PM – 9:00 PM (Sunday Classes Available)
          </span>
          <span className="msme-pill">
            <ShieldCheck size={12} /> MSME Registered
          </span>
        </div>
        <span className="topline-right">
          <span className="topline-loc">
            <MapPin size={13} /> Puthur, Trichy-17
          </span>
          <i></i>
          <a href="tel:+919626265456" className="topline-phone-link">
            <Phone size={13} /> 96262 65456
          </a>
          <i></i>
          <a href="tel:+919994148476" className="topline-phone-link">
            <Phone size={13} /> 99941 48476
          </a>
        </span>
      </div>
      <div className="nav-wrap container">
        <Brand />
        <div className="header-mobile-right">
          <a
            href="tel:+919626265456"
            className="mobile-header-call-btn"
            aria-label="Call Annai Tuition Centre"
          >
            <Phone size={18} />
          </a>
          <button
            className="menu-toggle"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && <div className="nav-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
        <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
          {[
            { label: 'Home', path: '/' },
            { label: 'Faculty', path: '/faculty' },
            { label: 'Courses', path: '/classes' },
            { label: 'Tutorials', path: '/tutorials' },
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
          <a
            href="https://wa.me/919626265456?text=Hi%20Annai%20Tuition%20Centre,%20I%20would%20like%20to%20enquire%20about%20admissions."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-nav-btn"
            onClick={() => setOpen(false)}
          >
            <MessageCircle size={15} />
            <span>Chat on WhatsApp</span>
          </a>
          <Link className="button button-gold nav-cta" to="/contact" onClick={() => setOpen(false)}>
            Enroll Now <ArrowRight size={15} />
          </Link>
          <div className="nav-mobile-info">
            <div className="nav-mobile-hours">
              <Clock size={13} />
              <span>Timings: 6:30 PM – 9:00 PM (Daily & Sunday)</span>
            </div>
            <div className="nav-mobile-location">
              <MapPin size={13} />
              <span>Campus: Puthur, Trichy – 17</span>
            </div>
            <div className="nav-mobile-call-row">
              <a href="tel:+919626265456" className="nav-mobile-phone-btn">
                <Phone size={13} /> Call 96262 65456
              </a>
              <a href="tel:+919994148476" className="nav-mobile-phone-btn">
                <Phone size={13} /> Call 99941 48476
              </a>
            </div>
          </div>
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
          <Link to="/">Home</Link>
          <Link to="/faculty">Faculty & Mentors</Link>
          <Link to="/classes">Classes & Subjects</Link>
          <Link to="/tutorials">Specialized Tutorials</Link>
          <Link to="/results">Student Results & Toppers</Link>
          <Link to="/contact">Contact & Campuses</Link>
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
}

function MobileBottomBar() {
  return (
    <nav className="mobile-bottom-bar" aria-label="Mobile quick actions">
      <a href="tel:+919626265456" className="mobile-bar-item mobile-bar-call">
        <Phone size={18} />
        <span>Call</span>
      </a>
      <a
        href="https://wa.me/919626265456?text=Hi%20Annai%20Tuition%20Centre,%20I%20would%20like%20to%20enquire%20about%20admissions."
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bar-item mobile-bar-whatsapp"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
      <Link to="/classes" className="mobile-bar-item mobile-bar-classes">
        <BookOpen size={18} />
        <span>Courses</span>
      </Link>
      <Link to="/tutorials" className="mobile-bar-item mobile-bar-tutorials">
        <Sparkles size={18} />
        <span>Tutorials</span>
      </Link>
      <Link to="/contact" className="mobile-bar-item mobile-bar-enquire">
        <GraduationCap size={18} />
        <span>Admission</span>
      </Link>
    </nav>
  );
}

function AppShell({ children }) {
  return (
    <>
      <ScrollToTop />
      <Header />
      {children}
      <Footer />
      <MobileBottomBar />
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
            <div className="coaching-card-badge">Class 10 (SSLC State Board)</div>
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
              <Link to="/contact?class=10th%20Standard" className="button button-gold">
                Enquire for 10th Admission <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* 12th Standard Card */}
          <div className="coaching-card coaching-card-12">
            <div className="coaching-card-badge navy-badge">Class 12 (+2 HSC State Board)</div>
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
              <Link to="/contact?class=12th%20Standard" className="button button-primary">
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

/* Facilities Section (CCTV, Dedicated Parking Facility, Spacious Classrooms, MSME) */
function FacilitiesSection() {
  return (
    <section className="facilities-section section" id="facilities">
      <div className="container">
        <SectionTitle
          eyebrow="Centre Infrastructure"
          title="Campus Facilities & Amenities"
          text="Modern infrastructure designed to provide a safe, convenient, and focused learning environment for all students."
          align="align-center"
        />

        <div className="facilities-grid">
          {/* CCTV Monitoring */}
          <div className="facility-card">
            <div className="facility-icon camera-icon">
              <Video size={24} />
            </div>
            <h3>24/7 CCTV Monitoring</h3>
            <p>
              Round-the-clock high-definition CCTV camera monitoring across all classrooms, entrances, corridors,
              and parking zones for complete safety and transparent supervision.
            </p>
            <span className="facility-tag">Zero-Compromise Security</span>
          </div>

          {/* Dedicated Parking Facility */}
          <div className="facility-card parking-facility-card">
            <div className="facility-icon parking-icon">
              <Car size={24} />
            </div>
            <h3>Dedicated Parking Facility</h3>
            <p>
              Spacious and organized on-premises two-wheeler, bicycle, and parent vehicle parking zone. Fully
              CCTV-monitored with safe drop-off and pick-up bays for effortless transit.
            </p>
            <span className="facility-tag">Safe Drop-off & Parking</span>
          </div>

          {/* Spacious & Well-Ventilated Classrooms */}
          <div className="facility-card">
            <div className="facility-icon monitor-icon">
              <BookOpen size={24} />
            </div>
            <h3>Spacious Classrooms</h3>
            <p>
              Comfortable individual study desks, bright natural ventilation, and a calm, disciplined learning atmosphere
              tailored for uninterrupted exam focus and high concentration.
            </p>
            <span className="facility-tag">Distraction-Free Learning</span>
          </div>

          {/* MSME Registered Quality */}
          <div className="facility-card">
            <div className="facility-icon msme-icon">
              <ShieldCheck size={24} />
            </div>
            <h3>MSME Registered Institution</h3>
            <p>
              Recognized and registered with MSME (Govt. of India), committed to ethical education, structured
              academic calendar, and student-first mentoring since 2008.
            </p>
            <span className="facility-tag">Government Certified</span>
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
              Since 2008, <strong>Annai Tuition Centre</strong> has empowered over <strong>7,000+ students</strong> across Trichy
              to achieve board exam success. We turn exam stress into genuine confidence, guiding every learner to top ranks
              and centum marks with personal care and proven shortcut techniques.
            </p>
            <div className="milestone-quote-box">
              <Quote size={20} className="milestone-quote-icon" />
              <p>
                “Every student has the power to excel. For 16+ years, our promise to parents has been simple — caring
                individual attention, crystal-clear concepts, and the confidence to achieve 100/100.”
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
            <span className="milestone-big-sub">Classes 10 & 12 Tamil Nadu State Board Examinations</span>

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
              <Link to="/contact" className="button button-gold">
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
            <h4>16+ Years of Trust</h4>
            <p>
              Trichy’s most trusted tuition landmark since 2008 with 2 modern, student-friendly Puthur campuses.
            </p>
          </div>

          <div className="milestone-pillar-card">
            <div className="pillar-icon-box blue">
              <CheckCircle size={22} />
            </div>
            <h4>100/100 Centum Mastery</h4>
            <p>
              Smart shortcut techniques & daily problem drills producing consistent top board rankers every year.
            </p>
          </div>

          <div className="milestone-pillar-card">
            <div className="pillar-icon-box green">
              <ShieldCheck size={22} />
            </div>
            <h4>MSME Certified & Safe Campus</h4>
            <p>
              Government-registered, 24/7 CCTV surveillance, 100% safety for girls, and dedicated on-site parking.
            </p>
          </div>

          <div className="milestone-pillar-card">
            <div className="pillar-icon-box purple">
              <Users size={22} />
            </div>
            <h4>Doctor & Engineer Alumni</h4>
            <p>
              Proud alumni excelling in premier Medical Colleges (MBBS), IITs, NIT Trichy, and global tech firms.
            </p>
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
          text="Dedicated educators with 7–8+ years of classroom teaching experience in Puthur, Trichy. Our focus is on continuous student improvement — converting weak concepts into strengths and guiding learners to high marks and centums."
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
              <h4>Concept-First Teaching</h4>
              <p>Step-by-step formula derivations, memory maps, and real-life examples making tough math and science intuitively clear.</p>
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

        {/* Careers & Apply for Teaching Position Card */}
        <div className="faculty-apply-band" id="careers">
          <div className="faculty-apply-content">
            <span className="eyebrow eyebrow-light">Faculty Recruitment & Careers</span>
            <h3>Join Our Faculty Panel — Apply for Teaching Positions</h3>
            <p>
              Are you an experienced educator dedicated to academic excellence? Annai Tuition Centre invites qualified <strong>Postgraduate (PG) & B.Ed. Teachers</strong> for <strong>Mathematics, Physics, Chemistry, Biology, English</strong>, and <strong>Junior Foundation</strong> for coaching batches in Puthur, Trichy.
            </p>
            <div className="faculty-apply-perks">
              <span className="apply-perk-badge"><CheckCircle size={14} /> Structured Batch Timings</span>
              <span className="apply-perk-badge"><CheckCircle size={14} /> Respectful Academic Environment</span>
              <span className="apply-perk-badge"><CheckCircle size={14} /> Competitive Compensation</span>
            </div>
          </div>
          <div className="faculty-apply-actions">
            <a
              href="https://wa.me/919626265456?text=Hello%2C%20I%20am%20interested%20in%20applying%20for%20a%20teaching%20position%20at%20Annai%20Tuition%20Centre."
              target="_blank"
              rel="noopener noreferrer"
              className="button button-gold"
            >
              Apply for Teaching Position <ArrowRight size={15} />
            </a>
            <a href="tel:+919626265456" className="button apply-call-btn">
              <Phone size={15} /> Call: 96262 65456
            </a>
          </div>
        </div>

        <div className="faculty-advisory-strip">
          <div>
            <strong>Need personalized academic guidance or subject counseling?</strong>
            <span>Meet Founder S. Thiyagarajan and our experienced faculty at our Puthur campus.</span>
          </div>
          <div className="faculty-strip-cta">
            <Link to="/contact" className="button button-primary">
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
              Science, Commerce & <span className="serif-accent">Specialized Tutorials</span>.
            </>
          }
          text="Master every subject with Trichy's top mentors. Simple concepts, smart shortcuts, and caring personal attention to help your child score top marks."
          align="align-center"
        />

        <div className="subjects-showcase-grid">
          {subjectsList.map((subj) => {
            const IconComponent =
              subj.icon === 'Briefcase'
                ? Briefcase
                : subj.icon === 'Code'
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
                    to={`/contact?class=${encodeURIComponent(subj.title)}`}
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
          text="Both campuses are fully equipped with dedicated parking facilities, 24/7 CCTV surveillance, and modern Smart-Base classrooms. Locate us via interactive Google Maps or get instant driving directions."
          align="align-center"
        />

        <div className="branches-grid">
          {branchesInfo.map((branch, idx) => (
            <div className={`branch-card ${idx === 0 ? 'branch-card-primary' : ''}`} key={branch.type}>
              <div className="branch-card-header">
                <span className="branch-type-badge">{branch.type}</span>
                <span className="branch-status-badge">● Admissions Open</span>
              </div>

              <div className="branch-photo-box">
                <img src={branch.image} alt={`${branch.name} - ${branch.doorNo} Classroom`} />
                <span className="branch-photo-badge">
                  <Camera size={13} /> {branch.doorNo === 'Branch 2' ? 'Branch 2 Classroom (Ramakrishna Middle School)' : 'Branch 1 Classroom (Puthur Agraharam)'}
                </span>
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
                  to={`/contact?branch=${encodeURIComponent(branch.fullAddress)}`}
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
   ORIGINAL PRESTIGIOUS NAVY & GOLD HERO (FIRST THEME RESTORED)
   ========================================================================= */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-badge-group">
            <span className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" /> Admissions Open · Est. 2008
            </span>
            <span className="msme-badge-hero">
              <ShieldCheck size={13} /> MSME Registered
            </span>
          </div>
          <h1>
            Every learner has a <em>brighter</em> future.
          </h1>
          <p className="hero-lead">
            Trichy’s trusted tuition centre in Puthur since 2008. Dedicated concept-based coaching for
            Classes 1 to 12 & Board Examinations with individual care, personal attention, and weekly tests.
          </p>
          <p className="hero-tagline">Better Education... Brighter Future...</p>

          <div className="hero-timing-pill">
            <Clock size={15} />
            <span>Class Timings: 6:30 PM – 9:00 PM (Sunday Classes Available)</span>
          </div>

          <div className="hero-actions">
            <a href="#enquiry" className="button button-gold">
              Apply for Admission <ArrowRight size={17} />
            </a>
            <a
              href="https://wa.me/919626265456?text=Hi%20Annai%20Tuition%20Centre,%20I%20would%20like%20to%20enquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="button button-whatsapp-hero"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
            <a href="tel:+919626265456" className="button button-ghost">
              <Phone size={15} /> 96262 65456
            </a>
          </div>

          <div className="hero-proof">
            <span className="proof-icon">
              <Trophy size={18} />
            </span>
            <span>
              <strong>7,000+ Students Passed Out</strong>
              <small>Established 2008 · 2 Campuses in Puthur, Trichy</small>
            </span>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-showcase-box">
            <div className="hero-showcase-head">
              <img src="/images/annai-logo.png" alt="Annai Tuition Centre Logo" className="hero-showcase-logo" />
              <div>
                <strong>Annai Tuition Centre</strong>
                <small>2 Campuses in Puthur, Trichy</small>
              </div>
            </div>
            <div className="hero-showcase-photos">
              <div className="hero-thumb">
                <img src="/images/annai-real-classroom.jpg" alt="Branch 1 Classroom - Puthur Agraharam" />
                <span>Branch 1 (Agraharam)</span>
              </div>
              <div className="hero-thumb">
                <img src="/images/annai-branch2-classroom.jpg" alt="Branch 2 Classroom - Ramakrishna Middle School" />
                <span>Branch 2 (Ramakrishna School)</span>
              </div>
            </div>
            <div className="hero-note">
              <span className="hero-note-icon">
                <Trophy size={18} />
              </span>
              <span>
                <strong>100% Board Exam Results</strong>
                <small>Maths Centums & Top Scores Year after Year</small>
              </span>
            </div>
          </div>
          <div className="hero-spark spark-a">✳</div>
          <div className="hero-spark spark-b">✦</div>
        </div>
      </div>

      {/* 5-Column Feature Strip */}
      <div className="container hero-features-wrap">
        <div className="ref-features-strip">
          <div className="ref-feature-item">
            <div className="ref-feature-icon icon-faculty">
              <GraduationCap size={24} />
            </div>
            <div className="ref-feature-text">
              <strong>Experienced Faculty</strong>
              <small>7–8+ Years Mentors</small>
            </div>
          </div>

          <div className="ref-feature-item">
            <div className="ref-feature-icon icon-subjects">
              <BookOpen size={24} />
            </div>
            <div className="ref-feature-text">
              <strong>All Subjects</strong>
              <small>Classes 1 - 12 & Commerce</small>
            </div>
          </div>

          <div className="ref-feature-item">
            <div className="ref-feature-icon icon-batches">
              <Users size={24} />
            </div>
            <div className="ref-feature-text">
              <strong>Small Batches</strong>
              <small>Personal Attention</small>
            </div>
          </div>

          <div className="ref-feature-item">
            <div className="ref-feature-icon icon-tests">
              <TrendingUp size={24} />
            </div>
            <div className="ref-feature-text">
              <strong>Regular Tests</strong>
              <small>& Progress Tracking</small>
            </div>
          </div>

          <div className="ref-feature-item">
            <div className="ref-feature-icon icon-results">
              <Trophy size={24} />
            </div>
            <div className="ref-feature-text">
              <strong>Better Results</strong>
              <small>Brighter Future</small>
            </div>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#achievements">
        <span>Scroll to explore</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}

/* =========================================================================
   REAL CLASSROOM SHOWCASE - BOTH BRANCHES 1 & 2 WITH AUTHENTIC PHOTOS
   ========================================================================= */
function RealClassroomSection() {
  return (
    <section className="real-classroom-section section" id="classroom">
      <div className="container">
        <SectionTitle
          eyebrow="Inside Our 2 Campuses in Puthur"
          title={
            <>
              Real Classrooms in <span className="serif-accent">Both Branches</span>
            </>
          }
          text="Authentic photos from our daily classes. Disciplined, concept-first teaching with blackboard and interactive Smart Board."
          align="align-center"
        />

        <div className="two-branch-real-grid">
          {/* Branch 1 Real Classroom */}
          <div className="real-branch-card">
            <div className="real-branch-img-box">
              <img
                src="/images/annai-real-classroom.jpg"
                alt="Branch 1 Classroom - 21/87 Puthur Agraharam, Trichy"
              />
              <span className="real-branch-badge gold-badge">
                <Camera size={13} /> Branch 1 (Registered Office)
              </span>
            </div>
            <div className="real-branch-info">
              <h3>Branch 1: 21/87, Puthur Agraharam</h3>
              <p className="real-branch-landmark">Near Bishop School, Puthur, Trichy – 17</p>
              <ul className="real-branch-points">
                <li><Check size={14} /> Individual desk seating with daily notebook checking</li>
                <li><Check size={14} /> Interactive Smart Board & concept blackboard coaching</li>
                <li><Check size={14} /> Class Timings: 6:30 PM – 9:00 PM (Sunday classes available)</li>
              </ul>
              <div className="real-branch-chips">
                <span className="chip"><ShieldCheck size={12} /> 100% Safe for Girls</span>
                <span className="chip"><Video size={12} /> 24/7 CCTV</span>
                <span className="chip"><Car size={12} /> Dedicated Parking</span>
              </div>
            </div>
          </div>

          {/* Branch 2 Real Classroom (User uploaded image!) */}
          <div className="real-branch-card">
            <div className="real-branch-img-box">
              <img
                src="/images/annai-branch2-classroom.jpg"
                alt="Branch 2 Classroom - Ramakrishna Middle School, Puthur, Trichy"
              />
              <span className="real-branch-badge navy-badge">
                <Camera size={13} /> Branch 2 (Campus)
              </span>
            </div>
            <div className="real-branch-info">
              <h3>Branch 2: Ramakrishna Middle School</h3>
              <p className="real-branch-landmark">Near Aruna Theatre, Puthur, Trichy – 17</p>
              <ul className="real-branch-points">
                <li><Check size={14} /> High-focus Mathematics, Science & Commerce classes</li>
                <li><Check size={14} /> Step-by-step formula drills and chapter revision tests</li>
                <li><Check size={14} /> Class Timings: 6:30 PM – 9:00 PM (Sunday classes available)</li>
              </ul>
              <div className="real-branch-chips">
                <span className="chip"><ShieldCheck size={12} /> 100% Safe for Girls</span>
                <span className="chip"><Video size={12} /> 24/7 CCTV</span>
                <span className="chip"><Car size={12} /> Dedicated Parking</span>
              </div>
            </div>
          </div>
        </div>

        <div className="real-class-actions">
          <a href="#enquiry" className="button button-gold">
            Book a Classroom Visit <ArrowRight size={15} />
          </a>
          <a
            href="https://wa.me/919626265456?text=Hi%20Annai%20Tuition%20Centre,%20I%20would%20like%20to%20visit%20your%20campus%20in%20Puthur."
            target="_blank"
            rel="noopener noreferrer"
            className="button button-outline"
          >
            <MessageCircle size={15} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   INTERACTIVE SMART BOARD DIGITAL CLASSROOM SECTION
   ========================================================================= */
function SmartBoardSection() {
  return (
    <section className="smart-board-section" id="smart-board">
      <div className="container">
        <div className="smart-board-grid">
          <div className="smart-board-copy">
            <span className="eyebrow eyebrow-light">Modern Technology</span>
            <h2>
              Interactive Smart Board <em>Digital Learning</em>
            </h2>
            <p className="smart-board-lead">
              We empower learners by combining blackboard concept depth with state-of-the-art interactive Smart Boards
              for high-definition visual clarity.
            </p>

            <div className="smart-features-list">
              <div className="smart-feature-item">
                <div className="smart-icon-badge">
                  <Tv size={18} />
                </div>
                <div className="smart-feature-text">
                  <strong>High-Definition Touch Display</strong>
                  <p>Interactive touch annotations, equation solvers, and real-time geometry breakdowns.</p>
                </div>
              </div>

              <div className="smart-feature-item">
                <div className="smart-icon-badge">
                  <Sparkles size={18} />
                </div>
                <div className="smart-feature-text">
                  <strong>3D Visual Science & Math Simulations</strong>
                  <p>Animated Biology anatomy, Physics ray optics, and Chemistry molecular reaction models.</p>
                </div>
              </div>

              <div className="smart-feature-item">
                <div className="smart-icon-badge">
                  <Code size={18} />
                </div>
                <div className="smart-feature-text">
                  <strong>Computer Science & Commerce Live Labs</strong>
                  <p>Live Python coding demonstrations, SQL database tables, and Accountancy balance sheet models.</p>
                </div>
              </div>

              <div className="smart-feature-item">
                <div className="smart-icon-badge">
                  <CheckCircle size={18} />
                </div>
                <div className="smart-feature-text">
                  <strong>Instant Digital Notes & Question Blueprints</strong>
                  <p>Annotated digital board notes and model question solutions shared directly for revision.</p>
                </div>
              </div>
            </div>

            <Link to="/classes" className="button button-gold">
              Explore Our Smart Curriculum <ArrowRight size={15} />
            </Link>
          </div>

          <div className="smart-board-visual">
            <div className="smart-board-img-card">
              <img
                src="/images/smart-classroom-hero.jpg"
                alt="Interactive Smart Board Classroom at Annai Tuition Centre"
              />
              <div className="smart-img-tag">
                <Tv size={14} /> Interactive Smart Board Classroom
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main>
      {/* 1. Original Prestigious Deep Navy & Gold Hero */}
      <Hero />

      {/* 2. 7,000+ Students Passed Out Achievement Stats Strip */}
      <div id="achievements">
        <AchievementsStrip />
      </div>

      {/* 3. Distinguished Faculty Spotlight */}
      <FacultySection />

      {/* 4. Specialized Board Exam Coaching (Classes 10 & 12) */}
      <CoachingSection />

      {/* 5. Subject Tutorials & Daily Teaching Routine */}
      <TutorialsSpotlightSection />

      {/* 6. Real Classroom Showcase - Both Branches with Photos */}
      <RealClassroomSection />

      {/* 7. Facilities Section (CCTV, Dedicated Parking Facility, Smart Boards, MSME) */}
      <FacilitiesSection />

      {/* 8. Student Results Preview */}
      <ResultsPreview />

      {/* 9. Our 2 Branches with Google Maps & Classroom Photos */}
      <BranchesSection />

      {/* 10. Direct Admission Enquiry Section (Prominent Enquiry Form on Home) */}
      <HomeEnquirySection />
    </main>
  );
}

/* =========================================================================
   HOME QUICK ADMISSION ENQUIRY SECTION (ENQUIRY FORM PROMINENT ON HOME)
   ========================================================================= */
function HomeEnquirySection() {
  return (
    <section className="section home-enquiry-section" id="enquiry">
      <div className="container">
        <SectionTitle
          eyebrow="Admissions Open 2026–2027"
          title={
            <>
              Direct Admission <span className="serif-accent">Enquiry</span>
            </>
          }
          text="Fill out your details below to enquire about classes, batch timings (6:30 PM – 9:00 PM), or visit either campus in Puthur, Trichy."
          align="align-center"
        />

        <div className="home-enquiry-grid">
          <div className="home-enquiry-info-card">
            <h3>Why Parents Choose Annai</h3>
            <p>16+ years of academic trust in Puthur, Trichy. Simple concept teaching, personal care, and high board marks.</p>

            <div className="enquiry-facts-list">
              <div className="enquiry-fact-item">
                <Clock size={18} />
                <div>
                  <strong>Class Timings</strong>
                  <span>6:30 PM – 9:00 PM (Mon–Sat + Sunday Special Classes)</span>
                </div>
              </div>

              <div className="enquiry-fact-item">
                <MapPin size={18} />
                <div>
                  <strong>2 Campuses in Puthur</strong>
                  <span>Branch 1 (Agraharam) & Branch 2 (Ramakrishna School)</span>
                </div>
              </div>

              <div className="enquiry-fact-item">
                <ShieldCheck size={18} />
                <div>
                  <strong>100% Safety for Girls</strong>
                  <span>24/7 CCTV Camera Monitored at Both Campuses</span>
                </div>
              </div>

              <div className="enquiry-fact-item">
                <Car size={18} />
                <div>
                  <strong>Dedicated Parking</strong>
                  <span>Safe parking facility for cycles & two-wheelers</span>
                </div>
              </div>
            </div>

            <div className="enquiry-direct-calls">
              <span>Need immediate assistance? Call us directly:</span>
              <div className="enquiry-call-row">
                <a href="tel:+919626265456" className="button button-primary">
                  <Phone size={14} /> 96262 65456
                </a>
                <a href="tel:+919994148476" className="button button-outline">
                  <Phone size={14} /> 99941 48476
                </a>
              </div>
            </div>
          </div>

          <div className="home-enquiry-form-card">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
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
              structured coaching for students from 1st standard to 12th standard (Science & Commerce), with specialized focus on 10th and
              12th Board examinations.
            </p>

            <div className="about-highlights-grid">
              <div className="about-point">
                <CheckCircle size={17} />
                <span>Over 7,000+ Students Passed Out with distinction</span>
              </div>
              <div className="about-point">
                <Clock size={17} />
                <span>Class Timings: 6:30 PM – 9:00 PM (Daily & Sunday Classes)</span>
              </div>
              <div className="about-point">
                <Tv size={17} />
                <span>Interactive Smart Board Digital Classrooms</span>
              </div>
              <div className="about-point">
                <BookOpen size={17} />
                <span>Spacious & Focused Classroom Learning Environment</span>
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
                <Briefcase size={17} />
                <span>Science, Computer Science, Biology & Commerce Streams</span>
              </div>
              <div className="about-point">
                <Shield size={17} />
                <span>100% Safe, Respectful Environment for Girls</span>
              </div>
            </div>

            <div className="about-cta-row">
              <Link to="/contact" className="button button-gold">
                Enquire for Admission <ArrowRight size={16} />
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
                src="/images/annai-real-classroom.jpg"
                alt="Real Classroom Coaching at Annai Tuition Centre"
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
        text="Explore our comprehensive coaching programs from Class 1 to 12. Specialized batches for Science & Commerce streams, Mathematics, Computer Science, Biology, and Board examinations with proven centum results."
      />

      {/* Specialized Science, Commerce & Tutorials */}
      <SubjectsTutorialsSection />

      {/* Dedicated Coaching Section for Classes 10 & 12 */}
      <CoachingSection />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="All Grade Levels & Streams"
            title="All Classes We Offer"
            text="Choose your class to enquire about class timings (6:30 PM – 9:00 PM), Sunday special classes, subjects, and batch availability."
          />
          <div className="courses-grid">
            {classes.map((c, i) => (
              <article className="course-card" key={c}>
                <span className="course-index">
                  0{i + 1} <span> / 0{classes.length}</span>
                </span>
                <span className="card-icon navy-icon">
                  {c.includes('Commerce') ? <Briefcase size={22} /> : <BookOpen size={22} />}
                </span>
                <h2>{c}</h2>
                <p>
                  {c.includes('10th') || c.includes('12th')
                    ? 'Intensive Board Exam coaching with blueprint unit tests, revision model series, and centum drill sessions.'
                    : c.includes('Commerce')
                    ? 'Comprehensive Accountancy, Commerce, Economics & Business Maths coaching with practical drills.'
                    : 'Concept-based coaching with daily homework support, foundational tests, and personalized care.'}
                </p>
                <div className="class-chip-timing">
                  <Clock size={12} /> Daily: 6:30 PM – 9:00 PM
                </div>
                <Link to={`/contact?class=${encodeURIComponent(c)}`} className="course-link">
                  Enquire about this class <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>

          <div className="course-contact">
            <div>
              <strong>Have a question about a class or batch timings (6:30 PM – 9:00 PM)?</strong>
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
  const [params] = useSearchParams();
  const classParam = params.get('class');
  const branchParam = params.get('branch');
  let defaultSubject = '';
  if (classParam) {
    defaultSubject = `I would like to enquire about coaching for ${classParam}.`;
  } else if (branchParam) {
    defaultSubject = `I would like to enquire about admissions at ${branchParam}.`;
  }

  return (
    <main>
      <PageHero
        eyebrow="Get in touch & Admissions"
        title={
          <>
            We’re just a call or message <em>away.</em>
          </>
        }
        text="Contact Annai Tuition Centre to ask about classes, admissions, batch timings (6:30 PM – 9:00 PM), or visit either campus in Puthur, Trichy."
      />

      <section className="phone-band">
        <div className="container">
          <span className="eyebrow eyebrow-light">Call or WhatsApp Directly</span>
          <div className="phone-links">
            {phoneNumbers.map((n) => (
              <a key={n} href={`tel:+91${n.replaceAll(' ', '')}`}>
                <Phone size={17} />
                {n}
              </a>
            ))}
            <a
              href="https://wa.me/919626265456?text=Hi%20Annai%20Tuition%20Centre,%20I%20would%20like%20to%20enquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-phone-link"
            >
              <MessageCircle size={17} /> WhatsApp: 96262 65456
            </a>
          </div>
        </div>
      </section>

      {/* Branches with detailed cards & Google Maps */}
      <BranchesSection />

      {/* Contact Form Section */}
      <section className="section" id="enquiry">
        <div className="container contact-form-layout">
          <div>
            <span className="eyebrow">Quick Enquiry</span>
            <h2>How can we help you?</h2>
            <p>Leave your enquiry below. Our team connects immediately via WhatsApp or phone to guide you on courses, batch timings, and admissions.</p>

            <div className="contact-side-card">
              <h3>Centre Operating Information</h3>
              <p>
                <strong>Centre Head:</strong> S. Thiyagarajan (M.Sc., IT., B.Ed.)
              </p>
              <p>
                <strong>Class Timings:</strong> 6:30 PM – 9:00 PM (Mon – Sat & Sunday Special Classes)
              </p>
              <p>
                <strong>Phone Numbers:</strong> 96262 65456, 99941 48476
              </p>
              <p>
                <strong>Facilities:</strong> 24/7 CCTV Monitoring, Dedicated Parking Facility, Smart Boards, 100% Safe for Girls
              </p>
              <div className="contact-social-embed">
                <strong>Follow us on Social Media:</strong>
                <SocialLinks />
              </div>
            </div>
          </div>
          <ContactForm defaultSubject={defaultSubject} />
        </div>
      </section>
    </main>
  );
}

function ContactForm({ defaultSubject = '' }) {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setBusy(true);
    setMessage('');

    const data = Object.fromEntries(new FormData(form));

    // Compile WhatsApp message
    const msgLines = [
      'Hello Annai Tuition Centre, I have an enquiry:',
      `• Name: ${data.parent_name}`,
      `• Mobile: ${data.mobile}`,
      data.email ? `• Email: ${data.email}` : null,
      `• Message / Subject: ${data.message}`,
    ].filter(Boolean);

    const waText = msgLines.join('\n');
    const waUrl = `https://wa.me/919626265456?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp directly
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    // Attempt background save if VITE_API_BASE_URL is set
    try {
      const url = import.meta.env.VITE_API_BASE_URL;
      if (url) {
        await fetch(`${url.replace(/\/$/, '')}/contact/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      }
    } catch {}

    setMessage('Your enquiry has been opened in WhatsApp. Please tap Send to complete. You can also call us directly at 96262 65456.');
    setBusy(false);
    form.reset();
  }

  return (
    <form onSubmit={submit} className="contact-form form-card">
      <label>
        Your name *
        <input name="parent_name" required maxLength="120" placeholder="Full name" autoComplete="name" />
      </label>
      <label>
        Mobile number *
        <input
          name="mobile"
          required
          inputMode="tel"
          pattern="[+0-9 ()-]{10,18}"
          placeholder="e.g. 98765 43210"
          autoComplete="tel"
        />
      </label>
      <label>
        Email address
        <input type="email" name="email" maxLength="254" placeholder="Optional" autoComplete="email" />
      </label>
      <label>
        Message *
        <textarea
          name="message"
          required
          rows="4"
          maxLength="1200"
          defaultValue={defaultSubject}
          placeholder="Which class or subject are you enquiring about?"
        />
      </label>
      <button disabled={busy} className="button button-gold form-submit" style={{ width: '100%', marginTop: '14px' }}>
        {busy ? 'Sending…' : 'Send enquiry'} <Send size={15} />
      </button>
      {message && (
        <p role="status" className="form-status success">
          {message}
        </p>
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
    if (!root) throw new Error('Set VITE_API_BASE_URL in .env.local and start the Django API.');
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
      if (!root) throw new Error('Set VITE_API_BASE_URL in .env.local and start the Django API.');
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


/* =========================================================================
   TUTORIALS SPOTLIGHT COMPONENT (HOME PAGE) - SIMPLE, SHORT & TRUTHFUL
   ========================================================================= */
export function TutorialsSpotlightSection() {
  return (
    <section className="tutorials-section section" id="tutorials-spotlight">
      <div className="container">
        <SectionTitle
          eyebrow="Annai Tuition Centre · Puthur, Trichy"
          title={
            <>
              Subject Tutorials & <span className="serif-accent">Concept Coaching</span>
            </>
          }
          text="Evening tuition batches (6:30 PM – 9:00 PM) for Classes 1 to 12. Small batches, personal attention, daily notebook checking, and weekly unit tests."
          align="align-center"
        />

        {/* 4 Truthful Method Steps */}
        <div className="tutorial-method-box">
          <div className="tutorial-method-header">
            <span className="eyebrow">Our Daily Routine</span>
            <h3>How Teaching Happens in Every Class</h3>
          </div>
          <div className="tutorial-steps-grid">
            {tutorialSteps.map((st) => (
              <div className="tutorial-step-card" key={st.step}>
                <span className="step-num">{st.step}</span>
                <h4>{st.title}</h4>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Featured Tutorial Tracks */}
        <div className="tutorials-grid">
          {tutorialTracks.slice(0, 4).map((trk) => {
            const Icon =
              trk.icon === 'Trophy'
                ? Trophy
                : trk.icon === 'Cpu'
                ? Cpu
                : trk.icon === 'Sparkles'
                ? Sparkles
                : trk.icon === 'Dna'
                ? Dna
                : trk.icon === 'Briefcase'
                ? Briefcase
                : trk.icon === 'Code'
                ? Code
                : BookOpen;

            return (
              <div className="tutorial-card" key={trk.id}>
                <div className="tutorial-card-top">
                  <div className="tutorial-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <div>
                    <span className="tutorial-badge">{trk.badge}</span>
                  </div>
                </div>

                <h3>{trk.title}</h3>
                <span className="tutorial-grade">{trk.grade}</span>

                <ul className="tutorial-highlights">
                  {trk.highlights.map((h, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={14} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="tutorial-timing-chip">
                  <Clock size={12} />
                  <span>{trk.timing}</span>
                </div>

                <div className="tutorial-card-actions">
                  <Link
                    to={`/contact?class=${encodeURIComponent(trk.classParam)}`}
                    className="button button-gold tutorial-enquire-btn"
                  >
                    Enquire for this Class <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="tutorials-view-all-wrap">
          <Link to="/tutorials" className="button button-outline">
            View All 8 Tutorial Programs & Batches <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   DEDICATED TUTORIALS PAGE (/tutorials & /tutorial) - SIMPLE & HONEST
   ========================================================================= */
export function TutorialsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Puthur, Trichy · Since 2008"
        title={
          <>
            Subject Tutorials & <em>Coaching Batches.</em>
          </>
        }
        text="Evening tuition batches (6:30 PM – 9:00 PM) for Classes 1 to 12. Led by Founder S. Thiyagarajan, M.Sc. (IT), B.Ed. and experienced mentors. Daily notebook checking, personal doubt solving, and weekly tests."
      />

      {/* 4 Truthful Highlights Bar */}
      <section className="tutorial-quick-strip">
        <div className="container tutorial-quick-grid">
          <div className="quick-item">
            <Clock size={20} />
            <div>
              <strong>6:30 PM – 9:00 PM</strong>
              <span>Daily + Sunday Special Classes</span>
            </div>
          </div>
          <div className="quick-item">
            <MapPin size={20} />
            <div>
              <strong>Puthur, Trichy</strong>
              <span>2 Campuses (Agraharam & School)</span>
            </div>
          </div>
          <div className="quick-item">
            <ShieldCheck size={20} />
            <div>
              <strong>100% Safe for Girls</strong>
              <span>24/7 CCTV Camera Monitored</span>
            </div>
          </div>
          <div className="quick-item">
            <Car size={20} />
            <div>
              <strong>Dedicated Parking</strong>
              <span>Safe cycle & two-wheeler parking</span>
            </div>
          </div>
        </div>
      </section>

      {/* How Teaching Happens (4 Steps) */}
      <section className="section tutorial-method-section">
        <div className="container">
          <SectionTitle
            eyebrow="Our Simple 4-Step Method"
            title="How Teaching Happens in Every Class"
            text="No unnecessary theory. Just clear concept explanation, daily problem practice, and personal attention."
            align="align-center"
          />

          <div className="tutorial-steps-grid">
            {tutorialSteps.map((st) => (
              <div className="tutorial-step-card" key={st.step}>
                <span className="step-num">{st.step}</span>
                <h4>{st.title}</h4>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All 8 Tutorial Programs */}
      <section className="section" id="all-tutorials">
        <div className="container">
          <SectionTitle
            eyebrow="Classes 1 to 12"
            title="All 8 Tutorial Coaching Programs"
            text="Choose your child's class or subject to enquire about batch timings and seats."
            align="align-center"
          />

          <div className="tutorials-grid">
            {tutorialTracks.map((trk) => {
              const Icon =
                trk.icon === 'Trophy'
                  ? Trophy
                  : trk.icon === 'Cpu'
                  ? Cpu
                  : trk.icon === 'Sparkles'
                  ? Sparkles
                  : trk.icon === 'Dna'
                  ? Dna
                  : trk.icon === 'Briefcase'
                  ? Briefcase
                  : trk.icon === 'Code'
                  ? Code
                  : trk.icon === 'Layers'
                  ? Layers
                  : trk.icon === 'CheckCircle'
                  ? CheckCircle
                  : BookOpen;

              return (
                <div className="tutorial-card" key={trk.id}>
                  <div className="tutorial-card-top">
                    <div className="tutorial-icon-wrap">
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="tutorial-badge">{trk.badge}</span>
                    </div>
                  </div>

                  <h3>{trk.title}</h3>
                  <span className="tutorial-grade">{trk.grade}</span>

                  <ul className="tutorial-highlights">
                    {trk.highlights.map((h, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="tutorial-timing-chip">
                    <Clock size={12} />
                    <span>{trk.timing}</span>
                  </div>

                  <div className="tutorial-card-actions">
                    <Link
                      to={`/contact?class=${encodeURIComponent(trk.classParam)}`}
                      className="button button-gold tutorial-enquire-btn"
                    >
                      Enquire for this Class <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free 1-Day Trial Class Banner */}
      <section className="section tutorial-trial-section">
        <div className="container">
          <div className="tutorial-trial-box">
            <div className="tutorial-trial-content">
              <span className="eyebrow eyebrow-light">Zero Cost · Experience First</span>
              <h2>Attend a Free 1-Day Trial Tutorial Class</h2>
              <p>
                Bring your child to attend an evening class at our Puthur campus. Meet our teachers, experience our
                Smart Board classroom, and see how our daily notebook checking helps.
              </p>
              <div className="tutorial-trial-actions">
                <a
                  href="https://wa.me/919626265456?text=Hi%20Annai%20Tuition%20Centre,%20I%20would%20like%20to%20attend%20a%20Free%201-Day%20Trial%20Class%20for%20my%20child."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-gold"
                >
                  <MessageCircle size={17} /> Message on WhatsApp
                </a>
                <a href="tel:+919626265456" className="button button-ghost">
                  <Phone size={16} /> Call 96262 65456
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Campuses in Puthur */}
      <BranchesSection />
    </main>
  );
}

function FacultyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Academic Leadership & Faculty Careers"
        title={
          <>
            Learn from Trichy’s <em>top mentors.</em>
          </>
        }
        text="Led by Founder S. Thiyagarajan, M.Sc. (IT), B.Ed., alongside 7–8+ years experienced postgraduate subject specialist faculty dedicated to continuous student improvement, personal concept clarity, and top board results. Now inviting applications for teaching positions."
      />
      <FacultySection />
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
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact" element={<Contact />} />
        {/* Simplified navigation aliases for backward compatibility */}
        <Route path="/tutorial" element={<TutorialsPage />} />
        <Route path="/about" element={<FacultyPage />} />
        <Route path="/admissions" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppShell>
  );
}
