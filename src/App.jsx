import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  Car,
  Check,
  CheckCircle,
  CheckCircle2,
  Clock,
  Code,
  Dna,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  Layers,
  MapPin,
  MessageCircle,
  Menu,
  Monitor,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Video,
  X,
} from 'lucide-react';

/* =========================================================================
   GENUINE INSTITUTION DATA (PRESERVED 100%)
   ========================================================================= */
export const phoneNumbers = ['96262 65456', '99941 48476'];
export const classes = ['Classes 1–8', '9th Standard', '10th Standard', '11th Standard', '12th Standard'];

export const facultyFounder = {
  name: 'S. Thiyagarajan',
  qualifications: 'M.Sc. (IT), B.Ed.',
  role: 'Founder & Academic Director | Mathematics & CS Lead',
  experience: 'Working in Teaching Field Since 2008 · 16+ Years Experience',
  subjects: ['Higher Secondary Mathematics', 'Computer Science (Python & C++)', 'Board Exam Centum Drills'],
  about: 'Founded in 2008 by S. Thiyagarajan, M.Sc. (IT), B.Ed., Annai Tuition Centre has over 16+ years of proven teaching experience in Trichy, guiding more than 7,000 students to board exam distinction and centums through dedicated personal care and concept clarity.',
};

export const branchesInfo = [
  {
    type: 'Registered Office',
    name: 'Annai Tuition Centre',
    subtitle: 'Main Administrative Hub & Smart Board Classrooms',
    doorNo: 'Door No.: 21/87',
    street: 'Puthur Agraharam',
    landmark: 'Near Bishop School',
    city: 'Trichy – 17',
    fullAddress: 'Door No.: 21/87, Puthur Agraharam, Near Bishop School, Trichy – 17',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=21%2F87+Puthur+Agraharam+Near+Bishop+School+Trichy+17',
    directionsLink: 'https://www.google.com/maps/dir/?api=1&destination=21%2F87+Puthur+Agraharam+Near+Bishop+School+Trichy+17',
    timings: 'Morning: 5:30 AM – 7:00 AM & Evening: 6:30 PM – 9:00 PM',
    facilities: ['Dedicated Parking Facility', '24/7 CCTV Surveillance', 'Interactive Smart Board', '100% Safe for Girls'],
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
    timings: 'Morning: 5:30 AM – 7:00 AM & Evening: 6:30 PM – 9:00 PM',
    facilities: ['Dedicated Parking Facility', 'Spacious Classrooms & CCTV', 'Interactive Smart Board', '100% Safe for Girls'],
  },
];

export const featuredStudents = [
  { name: 'Vibilesh S', score: '477', total: '500', grade: '10th Standard', image: '/images/student-vibilesh.jpg' },
  { name: 'Mailesh S', score: '452', total: '500', grade: '10th Standard', image: '/images/student-mailesh.jpg' },
  { name: 'Srihari D.M', score: '437', total: '500', grade: '10th Standard', image: '/images/student-srihari.jpg' },
];

export const results12 = [
  ['Bhaarati Priyankaa S', '559', '600'],
  ['M. Meena', '519', '600'],
  ['Prasath A', '515', '600'],
  ['Anuradha G', '505', '600'],
  ['R. Shajitha', '499', '600'],
  ['G. Shobana', '494', '600'],
];

export const results10 = [
  ['Vibilesh S', '477', '500'],
  ['Hemendhu S', '457', '500'],
  ['Mailesh S', '452', '500'],
  ['Nilofar S', '449', '500'],
  ['Srihari D.M', '437', '500'],
  ['Deva Sri K', '402', '500'],
];

/* =========================================================================
   HEADER & NAVIGATION
   ========================================================================= */
function Brand() {
  return (
    <Link className="brand-link" to="/" aria-label="Annai Tuition Centre home">
      <img className="brand-logo-img" src="/images/annai-logo.png" alt="Annai Tuition Centre Logo" />
      <div className="brand-info">
        <strong>Annai</strong>
        <small>Tuition Centre</small>
      </div>
    </Link>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="site-header">
      {/* Top Notification Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span>Annai Tuition Centre, Puthur, Trichy-17</span>
            <span className="top-bar-pill">
              <Clock size={11} /> Morning 5:30 AM – 7:00 AM &amp; Evening 6:30 PM – 9:00 PM
            </span>
          </div>
          <div className="top-bar-right">
            <a href="tel:+919626265456">
              <Phone size={12} /> 96262 65456
            </a>
            <a href="tel:+919994148476">
              <Phone size={12} /> 99941 48476
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container main-nav-wrap">
        <Brand />

        <button
          className="nav-toggle-btn"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main Navigation">
          {[
            { label: 'Home', path: '/' },
            { label: 'About Us', path: '/about' },
            { label: 'Learning Programmes', path: '/classes' },
            { label: 'Faculty & Careers', path: '/faculty' },
            { label: 'Achievements', path: '/results' },
            { label: 'Contact & Campuses', path: '/contact' },
          ].map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `nav-item ${isActive && location.pathname === item.path ? 'active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/admissions"
            className="btn btn-navy nav-cta"
            onClick={() => setOpen(false)}
          >
            Enquire for Admission
          </Link>
        </nav>
      </div>
    </header>
  );
}

/* =========================================================================
   APP SHELL & FOOTER
   ========================================================================= */
function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-columns-grid">
        <div className="footer-col">
          <Brand />
          <p style={{ marginTop: '16px', fontSize: '14px', lineHeight: 1.6, color: '#CBD5E1', maxWidth: '340px' }}>
            Empowering students in Puthur, Trichy since 2008. Dedicated to conceptual clarity, disciplined study habits, and outstanding board results.
          </p>
          <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '12px', background: 'rgba(255,200,87,0.15)', color: '#FFC857', padding: '4px 10px', borderRadius: '4px', fontWeight: 600 }}>
              16+ Years Experience
            </span>
            <span style={{ fontSize: '12px', background: 'rgba(255,200,87,0.15)', color: '#FFC857', padding: '4px 10px', borderRadius: '4px', fontWeight: 600 }}>
              Over 7,000+ Alumni
            </span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/classes">Learning Programmes</Link></li>
            <li><Link to="/faculty">Faculty &amp; Careers</Link></li>
            <li><Link to="/results">Student Achievements</Link></li>
            <li><Link to="/contact">Contact &amp; Campuses</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Programmes</h4>
          <ul className="footer-links-list">
            <li><Link to="/classes">10th Board Exam Excellence</Link></li>
            <li><Link to="/classes">12th Computer Science Stream</Link></li>
            <li><Link to="/classes">12th Biology Stream</Link></li>
            <li><Link to="/classes">12th Commerce &amp; Accountancy</Link></li>
            <li><Link to="/classes">Classes 1 to 9 Foundations</Link></li>
            <li><Link to="/faculty">Teaching Opportunities</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Campuses &amp; Enquiries</h4>
          <p style={{ fontSize: '13px', color: '#CBD5E1', marginBottom: '8px', lineHeight: 1.5 }}>
            <strong>Registered Office:</strong> 21/87, Puthur Agraharam, Near Bishop School, Trichy – 17
          </p>
          <p style={{ fontSize: '13px', color: '#CBD5E1', marginBottom: '14px', lineHeight: 1.5 }}>
            <strong>Branch 2:</strong> Ramakrishna Middle School, Near Aruna Theatre, Puthur, Trichy – 17
          </p>
          <p style={{ fontSize: '14px', color: '#FFC857', fontWeight: 700 }}>
            📞 96262 65456 / 99941 48476
          </p>
        </div>
      </div>

      <div className="container footer-bottom-bar">
        <div>
          © {new Date().getFullYear()} Annai Tuition Centre, Trichy. All Rights Reserved.
        </div>
        <div>
          Founder: S. Thiyagarajan, M.Sc. (IT), B.Ed.
        </div>
      </div>
    </footer>
  );
}

function MobileBottomBar() {
  return (
    <div className="mobile-bottom-bar" aria-label="Mobile Quick Actions">
      <a href="tel:+919626265456" className="mobile-bar-btn call">
        <Phone size={14} /> Call
      </a>
      <a
        href="https://wa.me/919626265456?text=Hello%20Annai%20Tuition%20Centre,%20I%20would%20like%20to%20enquire%20about%20admissions"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bar-btn whatsapp"
      >
        <MessageCircle size={14} /> Admission
      </a>
      <a
        href="https://wa.me/919626265456?text=Hi%2C%20I%20am%20interested%20in%20applying%20for%20a%20teaching%20position%20at%20Annai%20Tuition%20Centre"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bar-btn teaching"
      >
        <Briefcase size={14} /> Teaching Jobs
      </a>
    </div>
  );
}

function AppShell({ children }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      <MobileBottomBar />
    </>
  );
}

/* =========================================================================
   HOMEPAGE SECTIONS (MINIMAL, ELEGANT, EDITORIAL)
   ========================================================================= */

/* 1. HERO SECTION */
function HeroSection() {
  return (
    <section className="hero-editorial">
      <div className="container hero-editorial-grid">
        <div className="hero-copy">
          <div className="hero-pill">
            <Sparkles size={14} color="#071B45" /> Established 2008 · Trichy-17
          </div>

          <h1 className="hero-headline">
            Learn Better. <br />
            <span style={{ color: '#102D61' }}>Achieve More.</span>
          </h1>

          <p className="hero-supporting-text">
            Personal attention, expert guidance and focused learning to help every student succeed.
          </p>

          <div className="hero-cta-row">
            <Link to="/admissions" className="btn btn-gold">
              Enquire for Admission <ArrowRight size={16} />
            </Link>
            <Link to="/classes" className="btn btn-outline-navy">
              Explore Our Courses
            </Link>
          </div>

          <div className="hero-trust-row">
            <div className="trust-item">
              <CheckCircle2 size={16} /> Personal Care
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} /> Dedicated Parking
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} /> 24/7 CCTV Safety
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} /> Interactive Smart Board
            </div>
          </div>
        </div>

        <div className="hero-media-wrap">
          <div className="hero-photo-frame">
            <img
              src="/images/annai-classroom-students.jpg"
              alt="Students learning at Annai Tuition Centre"
            />
            <div className="hero-stat-floating">
              <strong>7,000+ Alumni</strong>
              <small>Guided with Care Since 2008</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 2. ABOUT US SECTION */
function AboutSection() {
  return (
    <section className="section section-white" id="about">
      <div className="container about-editorial-grid">
        <div className="about-photo-wrap">
          <img
            src="/images/smart-classroom-hero.jpg"
            alt="Annai Tuition Centre Modern Classroom"
          />
        </div>

        <div className="about-content-wrap">
          <div>
            <span className="eyebrow eyebrow-pill">About Annai Tuition Centre</span>
            <h2 className="section-title">
              Building Confidence. <br />
              <span className="accent-gold" style={{ color: '#102D61' }}>Shaping Futures.</span>
            </h2>
            <p className="about-lead">
              At Annai Tuition Centre, we believe every student can achieve more with the right guidance. We focus on clear concepts, personal attention and consistent practice to help students perform with confidence.
            </p>
          </div>

          <div className="about-highlights-list">
            <div className="about-highlight-item">
              <div className="highlight-bullet">
                <Check size={16} />
              </div>
              <div className="highlight-text">
                <strong>Personal Attention</strong>
                <p>Every student receives individual focus tailored to their learning pace and unique academic needs.</p>
              </div>
            </div>

            <div className="about-highlight-item">
              <div className="highlight-bullet">
                <Check size={16} />
              </div>
              <div className="highlight-text">
                <strong>Strong Fundamentals</strong>
                <p>Deep concept clarity in core subjects ensures students understand why formulas and rules work.</p>
              </div>
            </div>

            <div className="about-highlight-item">
              <div className="highlight-bullet">
                <Check size={16} />
              </div>
              <div className="highlight-text">
                <strong>Exam-Focused Learning</strong>
                <p>Regular assessments, blueprint question revisions, and step-by-step presentation practice build board exam mastery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3. COURSES SECTION (THE ONLY 2 DISTINCT CARDS) */
function CoursesSection() {
  return (
    <section className="section section-light" id="programmes">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow eyebrow-pill">Our Core Focus</span>
          <h2 className="section-title">Learning Programmes</h2>
          <p className="section-desc">
            Structured, exam-oriented tuition designed to build strong foundations and maximize board exam scores.
          </p>
        </div>

        <div className="programmes-grid">
          {/* 10th Standard Card */}
          <div className="programme-card grade-10">
            <div className="programme-header">
              <span className="programme-badge">Secondary Board Exam</span>
              <h3 className="programme-title">10th Standard – Board Exam Excellence</h3>
              <p className="programme-desc">
                Build strong concepts, practise regularly and prepare confidently for your board examinations.
              </p>
            </div>

            <div className="programme-subjects-wrap">
              <div className="programme-sub-title">Subjects Covered</div>
              <div className="subject-pills">
                <span className="subject-pill">Mathematics</span>
                <span className="subject-pill">Science</span>
                <span className="subject-pill">Social Science</span>
                <span className="subject-pill">Tamil</span>
                <span className="subject-pill">English</span>
              </div>
            </div>

            <ul className="programme-features-list">
              <li><CheckCircle2 size={16} /> Chapter-wise unit tests and error corrections</li>
              <li><CheckCircle2 size={16} /> Regular assessments with parent progress updates</li>
              <li><CheckCircle2 size={16} /> Individual guidance for difficult topics and doubts</li>
              <li><CheckCircle2 size={16} /> Board exam blueprint preparation and past paper drills</li>
            </ul>

            <div className="programme-action">
              <Link to="/admissions?class=10th%20Standard" className="btn btn-navy">
                Enquire for 10th <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* 12th Standard Card */}
          <div className="programme-card grade-12">
            <div className="programme-header">
              <span className="programme-badge">Higher Secondary Board Exam</span>
              <h3 className="programme-title">12th Standard – Higher Secondary Excellence</h3>
              <p className="programme-desc">
                Master important concepts, strengthen problem-solving skills and prepare for your board examinations.
              </p>
            </div>

            <div className="programme-subjects-wrap">
              <div className="programme-sub-title">Specialized Streams &amp; Subjects</div>
              <div className="subject-pills">
                <span className="subject-pill">Computer Science (Python &amp; C++)</span>
                <span className="subject-pill">Biology (Botany &amp; Zoology)</span>
                <span className="subject-pill">Commerce &amp; Accountancy</span>
                <span className="subject-pill">Business Maths &amp; Economics</span>
              </div>
            </div>

            <ul className="programme-features-list">
              <li><CheckCircle2 size={16} /> Subject-focused teaching by experienced mentors</li>
              <li><CheckCircle2 size={16} /> Blueprint-based preparation for maximum scoring</li>
              <li><CheckCircle2 size={16} /> Regular assessments and formula workout sessions</li>
              <li><CheckCircle2 size={16} /> Exam-oriented practice with past 10-year question banks</li>
            </ul>

            <div className="programme-action">
              <Link to="/admissions?class=12th%20Standard" className="btn btn-gold">
                Enquire for 12th <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 4. WHY CHOOSE ANNAI (NAVY SECTION, OPEN LAYOUT) */
function WhyChooseSection() {
  return (
    <section className="section section-navy" id="why-annai">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Proven Educational Care</span>
          <h2 className="section-title">Why Parents Choose Annai</h2>
          <p className="section-desc">
            With 16+ years of dedicated service in Trichy, we take pride in offering a disciplined, safe, and motivating learning atmosphere.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-item">
            <div className="why-icon-wrap">
              <Users size={24} />
            </div>
            <h3>Personal Care</h3>
            <p>Every student gets attention and caring guidance to overcome individual learning challenges.</p>
          </div>

          <div className="why-item">
            <div className="why-icon-wrap">
              <Sparkles size={24} />
            </div>
            <h3>Clear Teaching</h3>
            <p>Understand concepts with confidence through simplified explanations and real-life examples.</p>
          </div>

          <div className="why-item">
            <div className="why-icon-wrap">
              <Calendar size={24} />
            </div>
            <h3>Regular Practice</h3>
            <p>Learn through consistent weekly assessments, error analysis, and formula drills.</p>
          </div>

          <div className="why-item">
            <div className="why-icon-wrap">
              <Award size={24} />
            </div>
            <h3>Exam Preparation</h3>
            <p>Stay ready for board examinations with timed mock tests and blueprint question revisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 5. OUR TEACHING APPROACH (CLEAN TIMELINE) */
function TeachingApproachSection() {
  return (
    <section className="section section-white" id="approach">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow eyebrow-pill">Our Methodology</span>
          <h2 className="section-title">Simple Teaching. Strong Results.</h2>
          <p className="section-desc">
            A proven four-step learning roadmap that transforms doubt into confidence and understanding into top grades.
          </p>
        </div>

        <div className="steps-timeline">
          <div className="step-item">
            <div className="step-num-badge">1</div>
            <div>
              <h3>Understand</h3>
              <p>Learn the concepts clearly through structured explanations and step-by-step logic.</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-num-badge">2</div>
            <div>
              <h3>Practise</h3>
              <p>Improve through regular exercises, formula workbooks, and daily calculation problem drills.</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-num-badge">3</div>
            <div>
              <h3>Assess</h3>
              <p>Identify strengths and weak areas through weekly tests and one-on-one paper corrections.</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-num-badge">4</div>
            <div>
              <h3>Improve</h3>
              <p>Build confidence, eliminate careless mistakes, and perform at your highest potential on exam day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 6. CAMPUS FACILITIES (PARKING, CCTV, SMART BOARD - NO MSME IMAGE) */
function CampusFacilitiesSection() {
  return (
    <section className="section section-light" id="facilities">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow eyebrow-pill">Campus Infrastructure</span>
          <h2 className="section-title">Facilities Designed For Safety &amp; Focus</h2>
          <p className="section-desc">
            Modern, student-friendly amenities ensuring a secure, comfortable, and advanced study environment.
          </p>
        </div>

        <div className="facilities-editorial-grid">
          {/* 1. Dedicated Parking Facility */}
          <div className="facility-editorial-item">
            <div className="facility-photo-frame">
              <img
                src="/images/facility-parking.jpg"
                alt="Dedicated Parking Facility outside Annai Tuition Centre"
              />
            </div>
            <div className="facility-editorial-body">
              <h3>Dedicated Parking Facility</h3>
              <p>
                Spacious, organized on-premises two-wheeler, bicycle, and parent vehicle parking zone. Fully CCTV-monitored with safe drop-off bays.
              </p>
              <span className="facility-tag-simple">
                <Car size={15} /> Safe Drop-off &amp; Parking
              </span>
            </div>
          </div>

          {/* 2. 24/7 CCTV Monitoring */}
          <div className="facility-editorial-item">
            <div className="facility-photo-frame">
              <img
                src="/images/facility-cctv.jpg"
                alt="24/7 CCTV Security Camera Surveillance"
              />
            </div>
            <div className="facility-editorial-body">
              <h3>24/7 CCTV Monitoring</h3>
              <p>
                Continuous high-definition camera monitoring across all classrooms, entrances, and parking areas ensures 100% safety for students, especially girl students.
              </p>
              <span className="facility-tag-simple">
                <Video size={15} /> 100% Safe For Girls
              </span>
            </div>
          </div>

          {/* 3. Interactive Smart Board */}
          <div className="facility-editorial-item">
            <div className="facility-photo-frame">
              <img
                src="/images/smart-classroom-hero.jpg"
                alt="Interactive Smart Board Classroom at Annai Tuition Centre"
              />
            </div>
            <div className="facility-editorial-body">
              <h3>Interactive Smart Board</h3>
              <p>
                Equipped with interactive digital touch flat panels, high-resolution visual displays, and 3D science simulations for clear concept retention.
              </p>
              <span className="facility-tag-simple">
                <Monitor size={15} /> Interactive Digital Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 7. STUDENT ACHIEVEMENTS */
function AchievementsSection() {
  return (
    <section className="section section-white" id="achievements">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow-pill">Student Results</span>
          <h2 className="section-title">Every Achievement Matters.</h2>
          <p className="section-desc">
            Celebrating consistent effort, hard work, and outstanding academic distinction earned by our students.
          </p>
        </div>

        {/* Real student toppers with genuine photographs */}
        <div className="achievements-row">
          {featuredStudents.map((s) => (
            <div className="topper-strip-item" key={s.name}>
              <img src={s.image} alt={s.name} className="topper-avatar" />
              <div className="topper-details">
                <strong>{s.name}</strong>
                <small>{s.grade}</small>
              </div>
              <div className="topper-score-badge">
                {s.score} <small>/ {s.total}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Banner */}
        <div className="milestone-banner-clean">
          <div>
            <h3>Over 7,000+ Students Passed Out</h3>
            <p>
              Under the direct academic guidance of Founder S. Thiyagarajan, M.Sc. (IT), B.Ed., Annai Tuition Centre has helped thousands of students achieve distinction in 10th and 12th Board examinations since 2008.
            </p>
          </div>
          <Link to="/results" className="btn btn-gold" style={{ flexShrink: 0 }}>
            View Board Exam Results <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* 8. TEACHER HIRING BANNER */
function TeacherHiringSection() {
  return (
    <section className="section section-light" id="careers">
      <div className="container">
        <div className="teacher-hiring-strip">
          <div className="teacher-hiring-copy">
            <span className="eyebrow" style={{ color: '#102D61' }}>We Are Hiring</span>
            <h3>Apply for Teaching Positions</h3>
            <p>
              We are inviting experienced subject specialist teachers (7–8+ years experience) for Higher Secondary (Maths, Computer Science, Biology, Commerce &amp; Accounts) and Secondary classes in Puthur, Trichy.
            </p>
          </div>
          <a
            href="https://wa.me/919626265456?text=Hi%2C%20I%20am%20interested%20in%20applying%20for%20a%20teaching%20position%20at%20Annai%20Tuition%20Centre"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ flexShrink: 0 }}
          >
            <Briefcase size={16} /> Apply on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* 9. ADMISSION ENQUIRY SECTION */
function AdmissionEnquirySection() {
  return (
    <section className="section section-navy" id="enquiry">
      <div className="container">
        <div className="admission-banner-clean">
          <span className="eyebrow" style={{ color: '#FFC857' }}>Admissions Open</span>
          <h2>Give Your Child the Right Learning Support.</h2>
          <p>
            Have questions about admissions, batch schedules, or fee details? We are always happy to guide you.
          </p>

          <div className="admission-actions-row">
            <a
              href="https://wa.me/919626265456?text=Hello%20Annai%20Tuition%20Centre,%20I%20would%20like%20to%20enquire%20about%20admissions"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={17} /> Start Your Enquiry
            </a>
            <a href="tel:+919626265456" className="btn btn-outline-white">
              <Phone size={16} /> Call: 96262 65456
            </a>
            <Link to="/admissions" className="btn btn-outline-white">
              Admission Form <ArrowRight size={15} />
            </Link>
          </div>

          <div className="timing-bar-clean">
            <Clock size={16} />
            <span>Tuition Timings: Morning 5:30 AM – 7:00 AM &amp; Evening 6:30 PM – 9:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 10. CONTACT SECTION & CAMPUS DETAILS */
function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    const text = `Hello Annai Tuition Centre, I would like to make an enquiry.\n\nName: ${data.parent_name}\nMobile: ${data.mobile}${data.email ? `\nEmail: ${data.email}` : ''}\nMessage: ${data.message || 'General Enquiry'}`;
    const whatsappUrl = `https://wa.me/919626265456?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  }

  return (
    <section className="section section-white" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow-pill">Get in Touch</span>
          <h2 className="section-title">We're Here to Help.</h2>
          <p className="section-desc">
            Visit our campuses in Puthur, Trichy or connect directly via WhatsApp and phone.
          </p>
        </div>

        <div className="contact-layout-grid">
          <div>
            <div className="branch-info-block">
              <h3>Registered Office</h3>
              <p>Door No.: 21/87, Puthur Agraharam, Near Bishop School, Trichy – 17</p>
              <p style={{ marginTop: '6px', fontSize: '13px', color: '#102D61', fontWeight: 600 }}>
                Morning: 5:30 AM – 7:00 AM &amp; Evening: 6:30 PM – 9:00 PM
              </p>
              <a
                href={branchesInfo[0].mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                <MapPin size={14} /> Open in Google Maps <ExternalLink size={12} />
              </a>
            </div>

            <div className="branch-info-block">
              <h3>Branch 2 Campus</h3>
              <p>Ramakrishna Middle School, Near Aruna Theatre, Puthur, Trichy – 17</p>
              <p style={{ marginTop: '6px', fontSize: '13px', color: '#102D61', fontWeight: 600 }}>
                Secondary &amp; Higher Secondary Exam Wing
              </p>
              <a
                href={branchesInfo[1].mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                <MapPin size={14} /> Open in Google Maps <ExternalLink size={12} />
              </a>
            </div>

            <div style={{ marginTop: '24px', padding: '18px 20px', background: '#F5F7FC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#071B45', marginBottom: '4px' }}>
                Quick Phone Contact:
              </div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#071B45' }}>
                <a href="tel:+919626265456" style={{ marginRight: '16px' }}>📞 96262 65456</a>
                <a href="tel:+919994148476">📞 99941 48476</a>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="contact-form-clean">
            <h3>Quick Enquiry Form</h3>
            <p style={{ fontSize: '14px', color: '#46546B', marginTop: '-8px' }}>
              Submit your enquiry to chat with our academic team on WhatsApp.
            </p>
            <label>
              Parent or Student Name *
              <input name="parent_name" required maxLength="120" placeholder="e.g. S. Murugan" />
            </label>
            <label>
              Mobile Number *
              <input name="mobile" required inputMode="tel" pattern="[+0-9 ()-]{10,18}" placeholder="e.g. 96262 65456" />
            </label>
            <label>
              Class &amp; Subjects Interested
              <input name="message" placeholder="e.g. 10th Maths & Science or 12th Computer Science" />
            </label>
            <button type="submit" className="btn btn-navy" style={{ marginTop: '8px' }}>
              <Send size={15} /> Send Enquiry on WhatsApp
            </button>
            {submitted && (
              <p style={{ fontSize: '13px', color: '#10B981', fontWeight: 600 }}>
                WhatsApp opened with your details. Tap send to submit your enquiry!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   PAGE COMPONENTS
   ========================================================================= */

/* HOME PAGE */
function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <WhyChooseSection />
      <TeachingApproachSection />
      <CampusFacilitiesSection />
      <AchievementsSection />
      <TeacherHiringSection />
      <AdmissionEnquirySection />
      <ContactSection />
    </main>
  );
}

/* ABOUT US PAGE */
function About() {
  return (
    <main>
      <section className="section section-navy">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Our Story &amp; Legacy</span>
            <h1 className="section-title">Building Confidence. Shaping Futures.</h1>
            <p className="section-desc">
              Annai Tuition Centre has been a cornerstone of quality education in Puthur, Trichy since 2008, helping over 7,000+ students excel academically.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container about-editorial-grid">
          <div className="about-photo-wrap">
            <img src="/images/annai-classroom-students.jpg" alt="Classroom at Annai Tuition Centre" />
          </div>
          <div className="about-content-wrap">
            <span className="eyebrow eyebrow-pill">Our Philosophy</span>
            <h2 className="section-title">Better Education... Brighter Future...</h2>
            <p className="about-lead">
              Led by founder <strong>S. Thiyagarajan</strong> (M.Sc., IT., B.Ed.), Annai Tuition Centre provides structured coaching for students from 1st standard to 12th standard, with specialized focus on 10th and 12th Board examinations.
            </p>
            <p style={{ color: '#46546B', lineHeight: 1.7 }}>
              We believe progress grows from steady effort, encouragement, and clear concept understanding. Our small batches ensure that slow learners and high achievers alike receive the exact mentorship they need to build lasting academic confidence.
            </p>
            <div className="about-highlights-list">
              <div className="about-highlight-item">
                <div className="highlight-bullet"><Check size={16} /></div>
                <div className="highlight-text">
                  <strong>Over 7,000+ Alumni</strong>
                  <p>Guiding students to top scores and centums for more than 16 years in Trichy.</p>
                </div>
              </div>
              <div className="about-highlight-item">
                <div className="highlight-bullet"><Check size={16} /></div>
                <div className="highlight-text">
                  <strong>Dedicated Safety Protocols</strong>
                  <p>24/7 CCTV surveillance and dedicated on-campus parking for complete parental peace of mind.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeacherHiringSection />
      <AdmissionEnquirySection />
    </main>
  );
}

/* COURSES & PROGRAMMES PAGE */
function ClassesPage() {
  return (
    <main>
      <section className="section section-navy">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Comprehensive Coaching</span>
            <h1 className="section-title">Learning Programmes</h1>
            <p className="section-desc">
              Structured curriculum, experienced faculty, and board exam blueprint revision for Classes 1 to 12.
            </p>
          </div>
        </div>
      </section>
      <CoursesSection />
      <TeachingApproachSection />
      <CampusFacilitiesSection />
      <AdmissionEnquirySection />
    </main>
  );
}

/* FACULTY & CAREERS PAGE */
function FacultyPage() {
  return (
    <main>
      <section className="section section-navy">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Experienced Educators</span>
            <h1 className="section-title">Faculty &amp; Teaching Careers</h1>
            <p className="section-desc">
              Led by founder S. Thiyagarajan (M.Sc., IT., B.Ed.) with 16+ years of teaching expertise, supported by subject specialist mentors.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow eyebrow-pill">Our Leadership</span>
            <h2 className="section-title">Founder &amp; Academic Director</h2>
          </div>

          <div className="about-editorial-grid" style={{ alignItems: 'center' }}>
            <div className="about-photo-wrap">
              <img src="/images/annai-classroom-students.jpg" alt="Founder S. Thiyagarajan with students" />
            </div>
            <div>
              <h3 style={{ fontSize: '26px', color: '#071B45', fontWeight: 800, marginBottom: '4px' }}>
                S. Thiyagarajan, <span style={{ fontSize: '18px', fontWeight: 600, color: '#46546B' }}>M.Sc. (IT), B.Ed.</span>
              </h3>
              <p style={{ color: '#102D61', fontWeight: 700, fontSize: '15px', marginBottom: '16px' }}>
                Working in Teaching Field Since 2008 · 16+ Years Experience
              </p>
              <p style={{ color: '#46546B', lineHeight: 1.7, marginBottom: '20px' }}>
                With over 16 years of dedicated teaching in Trichy, S. Thiyagarajan specializes in Higher Secondary Mathematics and Computer Science. His concept visualization drills and formula shortcut techniques have produced hundreds of 100/100 centum scores.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <span className="subject-pill">Mathematics Centum Coaching</span>
                <span className="subject-pill">Computer Science (Python &amp; C++)</span>
                <span className="subject-pill">Individual Mentoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeacherHiringSection />
      <AdmissionEnquirySection />
    </main>
  );
}

/* RESULTS & ACHIEVEMENTS PAGE */
function Results() {
  return (
    <main>
      <section className="section section-navy">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Academic Distinction</span>
            <h1 className="section-title">Every Achievement Matters.</h1>
            <p className="section-desc">
              Real results produced through disciplined practice, concept clarity, and consistent mentoring.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow eyebrow-pill">10th Standard Board Exam Scorers</span>
            <h2 className="section-title">Featured High Achievers</h2>
          </div>

          <div className="achievements-row" style={{ marginBottom: '48px' }}>
            {featuredStudents.map((s) => (
              <div className="topper-strip-item" key={s.name}>
                <img src={s.image} alt={s.name} className="topper-avatar" />
                <div className="topper-details">
                  <strong>{s.name}</strong>
                  <small>{s.grade}</small>
                </div>
                <div className="topper-score-badge">
                  {s.score} <small>/ {s.total}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="section-header center" style={{ marginTop: '56px' }}>
            <span className="eyebrow eyebrow-pill">Board Exam Highlights</span>
            <h2 className="section-title">12th &amp; 10th Standard Exam Scorers</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {results12.map((r) => (
              <div key={r[0]} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', background: '#F5F7FC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <span style={{ fontWeight: 600, color: '#071B45' }}>{r[0]}</span>
                <span style={{ fontWeight: 800, color: '#102D61' }}>{r[1]} <small style={{ fontWeight: 500, color: '#64748B' }}>/ {r[2]}</small></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdmissionEnquirySection />
    </main>
  );
}

/* CONTACT & CAMPUS PAGE */
function Contact() {
  return (
    <main>
      <section className="section section-navy">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Connect With Us</span>
            <h1 className="section-title">We're Here to Help.</h1>
            <p className="section-desc">
              Find our campus locations, tuition timings, and direct phone contact.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
      <CampusFacilitiesSection />
    </main>
  );
}

/* ADMISSION ENQUIRY FORM PAGE */
function Admissions() {
  const [submitted, setSubmitted] = useState(false);

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
      `Current class: ${data.current_class}`,
      `Preferred branch: ${data.branch}`,
      `Subjects needed: ${data.subjects || 'All core subjects'}`,
      `Message: ${data.message || 'None'}`,
    ].join('\n');

    window.open(`https://wa.me/919626265456?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  }

  return (
    <main>
      <section className="section section-navy">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Admission Enquiry</span>
            <h1 className="section-title">Give Your Child the Right Learning Support.</h1>
            <p className="section-desc">
              Please share a few details below to start your enquiry with our academic director.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container" style={{ maxWidth: '680px' }}>
          <form onSubmit={submit} className="contact-form-clean">
            <h3 style={{ marginBottom: '8px' }}>Admission Application Form</h3>
            <p style={{ fontSize: '14px', color: '#46546B', marginBottom: '16px' }}>
              We will review your child's requirements and connect via WhatsApp and Phone.
            </p>

            <label>
              Student Name *
              <input name="student_name" required placeholder="Student's Full Name" />
            </label>
            <label>
              Parent Name *
              <input name="parent_name" required placeholder="Parent or Guardian Name" />
            </label>
            <label>
              Parent Mobile Number *
              <input name="parent_mobile" required inputMode="tel" pattern="[+0-9 ()-]{10,18}" placeholder="e.g. 96262 65456" />
            </label>
            <label>
              Current Class / Standard *
              <select name="current_class" required defaultValue="10th Standard">
                <option value="Classes 1 to 8">Classes 1 to 8 (Primary &amp; Middle)</option>
                <option value="9th Standard">9th Standard</option>
                <option value="10th Standard">10th Standard (Board Exam)</option>
                <option value="11th Standard">11th Standard</option>
                <option value="12th Standard">12th Standard (Board Exam)</option>
              </select>
            </label>
            <label>
              Preferred Campus *
              <select name="branch" required defaultValue="21/87 Puthur Agraharam">
                <option value="21/87 Puthur Agraharam">Registered Office: 21/87 Puthur Agraharam</option>
                <option value="Ramakrishna Middle School">Branch 2: Ramakrishna Middle School, Puthur</option>
              </select>
            </label>
            <label>
              Subjects Needed
              <input name="subjects" placeholder="e.g. Maths, Science or Computer Science" />
            </label>
            <label>
              Any Additional Notes
              <textarea name="message" rows="3" placeholder="Tell us about the student's current performance or goals" />
            </label>

            <button type="submit" className="btn btn-navy" style={{ marginTop: '8px' }}>
              <Send size={15} /> Submit Application via WhatsApp
            </button>

            {submitted && (
              <p style={{ fontSize: '14px', color: '#10B981', fontWeight: 600, marginTop: '8px' }}>
                WhatsApp has opened with your application details. Please review and tap Send!
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

/* NOT FOUND PAGE */
function NotFound() {
  return (
    <main>
      <section className="section section-navy" style={{ textAlign: 'center', padding: '120px 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '56px', color: '#FFC857', marginBottom: '16px' }}>404</h1>
          <h2 style={{ fontSize: '28px', color: '#FFFFFF', marginBottom: '16px' }}>Page Not Found</h2>
          <p style={{ color: '#CBD5E1', marginBottom: '32px' }}>The page you are looking for does not exist or has been moved.</p>
          <Link to="/" className="btn btn-gold">
            Return to Homepage
          </Link>
        </div>
      </section>
    </main>
  );
}

/* =========================================================================
   MAIN APP ROUTER
   ========================================================================= */
export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppShell>
  );
}
