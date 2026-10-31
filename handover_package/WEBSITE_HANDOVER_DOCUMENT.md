# Official Website Handover Document

**Project:** Annai Tuition Centre  
**Client:** Mr. S. Thiyagarajan, M.Sc. IT, B.Ed. (Founder & Managing Director)  
**Location:** Puthur, Tiruchirappalli (Trichy), Tamil Nadu, India  
**Delivered Date:** October 31, 2026  
**Status:** Live & Production Ready  

---

## 1. Executive Summary

This document serves as the official project handover for the redesigned, modernized, and production-deployed web application for **Annai Tuition Centre**. The project has been fully developed, optimized, tested across both desktop and mobile form factors, and successfully deployed to a global Content Delivery Network (CDN) via Vercel.

### Project Goals Achieved:
- **Clean Editorial Design:** Completely eliminated the repetitive "boxed/card" structure in favor of sleek, open, whitespace-oriented editorial sections.
- **Dark/Slate Color Theme:** Replaced stark white backgrounds with eye-friendly deep navy (`#071B45`), secondary blue-slate (`#0d1d3a`), and warm golden accents (`#FFC857`), fully adhering to WCAG contrast standards.
- **Clear Information Architecture:** Each section (Home, About Us, Classes, Faculty, Results, Contact) now displays exclusively relevant, unrepeated content.
- **Direct Lead Generation:** Integrated Admission Enquiry modal with one-click direct WhatsApp routing to `+91 94435 64495`.
- **Zero-Bug Responsiveness:** Verified zero horizontal scrollbars or layout shifts across viewports from 360px mobile to 4K ultra-wide screens.

---

## 2. Live Production URLs

The website is actively live and accessible globally:

| Page / Section | Direct Live URL |
| :--- | :--- |
| **Main Portal / Home** | [https://annai-tuition-centre-lv8z.vercel.app/](https://annai-tuition-centre-lv8z.vercel.app/) |
| **About Us (History & Facilities)** | [https://annai-tuition-centre-lv8z.vercel.app/about](https://annai-tuition-centre-lv8z.vercel.app/about) |
| **Classes & Curriculum (10th & 12th)** | [https://annai-tuition-centre-lv8z.vercel.app/classes](https://annai-tuition-centre-lv8z.vercel.app/classes) |
| **Faculty & Careers** | [https://annai-tuition-centre-lv8z.vercel.app/faculty](https://annai-tuition-centre-lv8z.vercel.app/faculty) |
| **Academic Results & Toppers** | [https://annai-tuition-centre-lv8z.vercel.app/results](https://annai-tuition-centre-lv8z.vercel.app/results) |
| **Contact & Campuses** | [https://annai-tuition-centre-lv8z.vercel.app/contact](https://annai-tuition-centre-lv8z.vercel.app/contact) |

---

## 3. Technology Stack & Architecture

- **Core Framework:** React 18 (SPA with `react-router-dom` client-side routing)
- **Bundler & Build Tool:** Vite 6 with code splitting and asset hashing
- **Styling Architecture:** Pure responsive CSS (`src/styles.css`) utilizing CSS variables, responsive typography (`clamp()`), and media queries
- **Iconography:** `lucide-react` vector icons
- **Deployment Platform:** Vercel Global Edge Network with automatic HTTPS/TLS encryption and Brotli/Gzip compression
- **Source Control:** Git on GitHub (`origin` and `vercel-repo`)

---

## 4. Deliverables Package Structure

The handover package directory contains all verified assets:

```
📁 handover_package/
 ├── 📄 Website_Handover_Document_Annai_Tuition_Centre.pdf   (Official PDF Deliverable)
 ├── 📄 handover_document.html                              (Clean Printable HTML Source)
 ├── 📄 WEBSITE_HANDOVER_DOCUMENT.md                        (Markdown Specification)
 └── 📂 screenshots/                                        (High-Resolution Screenshots)
      ├── 01_Home_Page_Desktop.png                          (Full Desktop Experience)
      ├── 02_Home_Page_Mobile.png                           (Optimized Mobile View)
      ├── 03_About_Us_Page.png                              (Institution & Facilities)
      ├── 04_Classes_Curriculum_Page.png                    (10th & 12th Stream Offerings)
      ├── 05_Faculty_Careers_Page.png                       (Leadership & Hiring Portal)
      ├── 06_Results_Toppers_Page.png                       (Board Exam Hall of Fame)
      └── 07_Contact_Campuses_Page.png                      (Locations & Interactive Map)
```

---

## 5. Security & Account Ownership Transfer

> **CRITICAL SECURITY NOTICE:** In accordance with modern cybersecurity standards and data protection best practices, **NO PASSWORDS ARE STORED OR SENT IN PLAIN TEXT**. Access is granted via authenticated account invitation and formal ownership transfer.

### A. Vercel Hosting Transfer (Project Ownership)
To transfer the live hosting environment to the client:
1. **Client Action:** Create a free account at [vercel.com/signup](https://vercel.com/signup) using the official institutional email address (e.g., `annaituitioncentre@gmail.com`).
2. **Developer Action:**
   - Log into the developer Vercel account.
   - Navigate to **Project: annai-tuition-centre** $\rightarrow$ **Settings** $\rightarrow$ **General**.
   - Scroll down to the **Transfer Project** section.
   - Enter the client's Vercel account username or registered email.
3. **Acceptance:** The client receives an email notification from Vercel. Clicking **"Accept Transfer"** immediately moves the production project, build pipelines, and analytics to the client's account.

### B. GitHub Repository Access (Source Code)
1. **Client Action:** Provide a registered GitHub username.
2. **Developer Action:**
   - Open GitHub repository $\rightarrow$ **Settings** $\rightarrow$ **Collaborators**.
   - Click **Add people** and invite the client with **Admin** access.
   - For complete ownership handover: Navigate to **Settings** $\rightarrow$ **Danger Zone** $\rightarrow$ **Transfer ownership** and assign the repository to the client's GitHub account or organization.

### C. Custom Domain Configuration (e.g., `annaituitioncentre.com`)
When the client purchases or connects their custom domain:
1. In Vercel Project Settings $\rightarrow$ **Domains**, add the domain (e.g., `annaituitioncentre.com`).
2. Update the DNS records in the domain registrar (GoDaddy, Hostinger, Namecheap, etc.):
   - **Type A Record:** Name `@` $\rightarrow$ Value `76.76.21.21`
   - **Type CNAME Record:** Name `www` $\rightarrow$ Value `cname.vercel-dns.com`
3. Vercel automatically generates and provisions an SSL Certificate (HTTPS) within 5–15 minutes.

---

## 6. Maintenance & Operational Guidance

- **Updating Course Offerings or Contacts:** Modified in `src/App.jsx`. Every `git push` to `main` automatically triggers an instant re-deploy on Vercel with zero downtime.
- **Admission Leads:** Parent inquiries submitted via the "Quick Admission Enquiry" form open WhatsApp directly to `+91 94435 64495` with pre-filled student details.
- **Uptime & Monitoring:** Vercel provides a 99.99% uptime guarantee with DDoS mitigation and global edge caching included by default.

---

**Prepared by:** Development Team  
**Handover Accepted by:** Mr. S. Thiyagarajan, Annai Tuition Centre  
**Date:** October 31, 2026
