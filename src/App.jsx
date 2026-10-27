import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  Award,
  BookOpen,
  Camera,
  Check,
  CheckCircle,
  ChevronDown,
  Facebook,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Lock,
  MapPin,
  Menu,
  Package,
  Phone,
  Quote,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Video,
  X,
} from 'lucide-react';

const phoneNumbers = ['96262 65456', '99941 48476'];
const apiErrorText = (data, fallback) => data?.detail || (data && Object.values(data).flat().filter(Boolean).join(' ')) || fallback;
const classes = ['Classes 1–8', '9th Standard', '10th Standard', '11th Standard', '12th Standard'];

const branchesInfo = [
  {
    type: 'Registered Office',
    name: 'Annai Tuition Centre',
    doorNo: 'Door No.: 21/87',
    street: 'Puthur Agraharam',
    landmark: 'Near Bishop School',
    city: 'Trichy – 17',
    fullAddress: 'Door No.: 21/87, Puthur Agraharam, Near Bishop School, Trichy – 17',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=21%2F87+Puthur+Agraharam+Near+Bishop+School+Trichy+17',
  },
  {
    type: 'Branch Campus',
    name: 'Annai Tuition Centre',
    doorNo: 'Branch 2',
    street: 'Ramakrishna Middle School',
    landmark: 'Near Aruna Theatre, Puthur',
    city: 'Trichy – 17',
    fullAddress: 'Ramakrishna Middle School, Near Aruna Theatre, Puthur, Trichy – 17',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Ramakrishna+Middle+School+Near+Aruna+Theatre+Puthur+Trichy+17',
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
          {['Home', 'About', 'Classes', 'Results', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive && location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'active' : ''
              }
            >
              {item}
            </NavLink>
          ))}
          <Link className="button button-primary nav-cta" to="/admissions" onClick={() => setOpen(false)}>
            Enquire now <ArrowRight size={15} />
          </Link>
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
          <Link to="/about">About us</Link>
          <Link to="/classes">Classes & Coaching</Link>
          <Link to="/results">Student results</Link>
          <Link to="/admissions">Admission enquiry</Link>
          <Link to="/contact">Our Branches</Link>
        </div>

        <div>
          <h3>Our Branches</h3>
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
          <a
            className="footer-directions"
            href={branchesInfo[0].mapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions <ArrowRight size={14} />
          </a>
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
            <Video size={14} /> CCTV Monitored Facility
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

function AppShell({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
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

/* 70,000+ Students Passed Out Achievement Banner */
function AchievementsStrip() {
  return (
    <section className="achievements-strip">
      <div className="container achievements-grid">
        <div className="achievement-item highlight-card">
          <div className="achievement-icon-wrap">
            <Trophy size={28} />
          </div>
          <div>
            <span className="achievement-number">70,000+</span>
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

/* Facilities Section (CCTV, Packing Facility, etc.) */
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
            <h3>CCTV Monitoring</h3>
            <p>
              Round-the-clock high-definition CCTV camera monitoring across all classrooms, entrances, and common
              corridors for complete safety and transparent supervision.
            </p>
            <span className="facility-tag">Safety & Security</span>
          </div>

          {/* Packing Facility */}
          <div className="facility-card">
            <div className="facility-icon package-icon">
              <Package size={24} />
            </div>
            <h3>Packing Facility</h3>
            <p>
              Dedicated packing and organizing facility for student study materials, printed question paper sets,
              formula booklets, and safe bicycle/vehicle packing zone during class hours.
            </p>
            <span className="facility-tag">Student Convenience</span>
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

          {/* Concept-Based Learning */}
          <div className="facility-card">
            <div className="facility-icon book-icon">
              <BookOpen size={24} />
            </div>
            <h3>Concept-Based Classrooms</h3>
            <p>
              Interactive whiteboard classrooms with comfortable seating, ample ventilation, and distraction-free
              ambience enabling maximum student focus and retention.
            </p>
            <span className="facility-tag">Academic Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Branch Addresses Section */
function BranchesSection() {
  return (
    <section className="branches-section section" id="branches">
      <div className="container">
        <SectionTitle
          eyebrow="Convenient Locations in Trichy"
          title="Our Branches"
          text="Visit either of our established campuses in Puthur, Trichy. Admissions and guidance counseling available at both locations."
          align="align-center"
        />

        <div className="branches-grid">
          {branchesInfo.map((branch, idx) => (
            <div className={`branch-card ${idx === 0 ? 'branch-card-primary' : ''}`} key={branch.type}>
              <div className="branch-card-header">
                <span className="branch-type-badge">{branch.type}</span>
                <span className="branch-icon-round">
                  <MapPin size={20} />
                </span>
              </div>
              <h3>{branch.name}</h3>
              <p className="branch-label-strong">{branch.type}</p>
              <div className="branch-address-box">
                <p>
                  <strong>{branch.doorNo}</strong>
                  <br />
                  {branch.street}
                  <br />
                  {branch.landmark}
                  <br />
                  <strong>{branch.city}</strong>
                </p>
              </div>

              <div className="branch-contact-info">
                <div>
                  <Phone size={14} />
                  <span>Call: 96262 65456 / 99941 48476</span>
                </div>
              </div>

              <div className="branch-actions">
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-outline"
                >
                  Get Directions <ArrowRight size={14} />
                </a>
                <Link to={`/admissions?branch=${encodeURIComponent(branch.fullAddress)}`} className="button button-gold">
                  Enquire Here
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

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-badge-group">
              <span className="eyebrow eyebrow-light">
                <span className="eyebrow-dot" /> Vijayadhasami & Regular Admissions Open
              </span>
              <span className="msme-badge-hero">
                <ShieldCheck size={13} /> MSME Registered
              </span>
            </div>
            <h1>
              Every learner has a <em>brighter</em> future.
            </h1>
            <p className="hero-lead">
              Trichy’s trusted tuition centre since 2008. Dedicated concept-based coaching for 10th & 12th Board
              Exams, nurturing confidence and academic excellence.
            </p>
            <p className="hero-tagline">Better Education... Brighter Future...</p>

            <div className="hero-actions">
              <Link to="/admissions" className="button button-gold">
                Apply for admission <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="button button-ghost">
                Talk to us <Phone size={16} />
              </Link>
            </div>

            <div className="hero-proof">
              <span className="proof-icon">
                <Trophy size={18} />
              </span>
              <span>
                <strong>70,000+ Students Passed Out</strong>
                <small>Established 2008 · Puthur, Trichy</small>
              </span>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-logo-showcase">
              <img
                src="/images/annai-logo.png"
                alt="Annai Tuition Centre Official Logo"
                className="hero-logo-img"
              />
              <div className="hero-logo-caption">
                <strong>Annai Tuition Centre</strong>
                <span>Since 2008 · Trichy</span>
              </div>
            </div>

            <div className="hero-student-preview">
              <img src="/images/student-vibilesh.jpg" alt="Annai Tuition Centre student Vibilesh S" />
              <div className="hero-note">
                <span className="hero-note-icon">
                  <Trophy size={19} />
                </span>
                <span>
                  <strong>Vibilesh S (477/500)</strong>
                  <small>Celebrating Centums & Top Scores</small>
                </span>
              </div>
            </div>
            <div className="hero-spark spark-a">✳</div>
            <div className="hero-spark spark-b">✦</div>
          </div>
        </div>
        <a className="scroll-cue" href="#achievements">
          <span>Scroll to explore</span>
          <ArrowDown size={14} />
        </a>
      </section>

      {/* 70,000+ Students Passed Out Stats Strip */}
      <div id="achievements">
        <AchievementsStrip />
      </div>

      {/* Welcome / About Summary */}
      <section className="welcome section" id="welcome">
        <div className="container welcome-grid">
          <div>
            <SectionTitle
              eyebrow="A little about us"
              title={
                <>
                  A steady place to <span className="serif-accent">grow</span>.
                </>
              }
              text="Annai Tuition Centre supports students and families in Trichy with a welcoming place to learn, build deep concept understanding, and achieve outstanding board exam results."
            />
            <p className="body-copy">
              Founded in 2008 by <strong>S. Thiyagarajan</strong> (M.Sc., IT., B.Ed.), Annai Tuition Centre has guided
              over <strong>70,000+ students</strong> with personalized academic care, certified MSME standards, and
              uncompromising safety for all learners.
            </p>
            <Link to="/about" className="text-link">
              Get to know Annai <ArrowRight size={16} />
            </Link>
          </div>
          <div className="welcome-cards">
            <div className="welcome-card">
              <span className="card-icon navy-icon">
                <BookOpen size={21} />
              </span>
              <span className="card-overline">Our Approach</span>
              <h3>Concept-Based Learning</h3>
              <p>Step-by-step clarity, regular assessments, and dedicated attention to each learner’s progress.</p>
            </div>
            <div className="welcome-card welcome-card-gold">
              <span className="card-icon gold-icon">
                <ShieldCheck size={21} />
              </span>
              <span className="card-overline">Safety & Trust</span>
              <h3>100% Safe for Girls & CCTV Monitored</h3>
              <p>Round-the-clock CCTV surveillance, disciplined atmosphere, and complete peace of mind for parents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Coaching Section for Classes 10 & 12 */}
      <CoachingSection />

      {/* Classes Overview Strip */}
      <section className="classes-strip section">
        <div className="container">
          <div className="strip-heading">
            <div>
              <span className="eyebrow">All Learning Paths</span>
              <h2>All Classes Supported</h2>
            </div>
            <Link to="/classes" className="text-link">
              Explore all classes <ArrowRight size={16} />
            </Link>
          </div>
          <div className="class-chips">
            {classes.map((c, i) => (
              <Link key={c} to={`/admissions?class=${encodeURIComponent(c)}`} className="class-chip">
                <span className="class-number">{i === 0 ? '01' : `0${i + 2}`}</span>
                <span>{c}</span>
                <ArrowRight size={15} />
              </Link>
            ))}
          </div>
          <p className="note-small">Contact us for current batch timings, subject combinations, and admissions.</p>
        </div>
      </section>

      {/* Girls' Safety and Security Section */}
      <GirlsSafetySection />

      {/* Facilities Section (CCTV, Packing Facility) */}
      <FacilitiesSection />

      {/* Student Results Preview */}
      <ResultsPreview />

      {/* Our Branches Section */}
      <BranchesSection />

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
            <p>Tell us what your child needs. We’ll help you find out more and secure their seat.</p>
          </div>
          <Link to="/admissions" className="button button-gold">
            Send an enquiry <ArrowRight size={16} />
          </Link>
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
        text="Annai Tuition Centre has been a cornerstone of quality education in Puthur, Trichy since 2008, helping over 70,000+ students excel academically."
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
                <span>Over 70,000+ Students Passed Out with distinction</span>
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
                <Package size={17} />
                <span>Organized Packing Facility for study materials</span>
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
              <img src="/images/student-vibilesh.jpg" alt="Annai Tuition Centre student Vibilesh S" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Safety Recap */}
      <GirlsSafetySection />
      <FacilitiesSection />
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
            <strong>70,000+</strong>
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
        eyebrow="Classes & Coaching Programs"
        title={
          <>
            The next step starts <em>here.</em>
          </>
        }
        text="Explore our comprehensive coaching programs from Class 1 to 12. Specialized batches for 10th and 12th Board examinations with proven centum results."
      />

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
              aria-label="Directions to Registered Office"
              target="_blank"
              rel="noreferrer"
              href={branchesInfo[0].mapLink}
            >
              <ArrowRight size={16} />
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
              aria-label="Directions to Ramakrishna Middle School location"
              target="_blank"
              rel="noreferrer"
              href={branchesInfo[1].mapLink}
            >
              <ArrowRight size={16} />
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
                <strong>Facilities:</strong> 24/7 CCTV Monitoring, Packing Facility, 100% Safe for Girls
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
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setBusy(true);
    setMessage('');
    try {
      const url = import.meta.env.VITE_API_BASE_URL;
      if (!url) throw new Error('Contact enquiries are not connected yet. Please call 96262 65456 or 99941 48476.');
      const r = await fetch(`${url.replace(/\/$/, '')}/contact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(apiErrorText(data, 'We could not save this enquiry. Please call us instead.'));
      setMessage('Your enquiry has been saved. We’ll be in touch.');
      form.reset();
    } catch (err) {
      setMessage(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="contact-form form-card">
      <label>
        Your name *
        <input name="parent_name" required maxLength="120" placeholder="Full name" />
      </label>
      <label>
        Mobile number *
        <input name="mobile" required inputMode="tel" pattern="[+0-9 ()-]{10,18}" placeholder="e.g. 98765 43210" />
      </label>
      <label>
        Email address
        <input type="email" name="email" maxLength="254" placeholder="Optional" autoComplete="off" />
      </label>
      <label>
        Message *
        <textarea
          name="message"
          required
          rows="4"
          maxLength="1200"
          placeholder="Which class or subject are you enquiring about?"
        />
      </label>
      <label className="consent">
        <input name="consent" type="checkbox" value="true" required />
        <span>I agree that Annai Tuition Centre may contact me regarding this enquiry. *</span>
      </label>
      <button disabled={busy} className="button button-primary">
        {busy ? 'Sending…' : 'Send enquiry'} <Send size={15} />
      </button>
      {message && (
        <p role="status" className="form-status">
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

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
