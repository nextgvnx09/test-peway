# Design Guidelines - SMA NEGERI 2 TOMPASO Official Website

## Design Approach
**System-Based Approach** with formal, institutional aesthetics appropriate for a government high school. The design should convey professionalism, educational excellence, and trustworthiness while maintaining modern appeal.

## Color Palette
- **Primary Red:** #D62828 (main branding, headers, CTAs)
- **White:** #FFFFFF (backgrounds, text on dark)
- **Light Blue:** #1E90FF (accents, secondary elements)
- **Supporting Colors:** Light gray for borders/dividers, darker grays for text hierarchy

## Typography
- **Headings:** Merriweather Bold (Google Fonts) - formal, authoritative
- **Body Text:** Poppins Regular (Google Fonts) - clean, highly readable
- **Hierarchy:** H1 (48-56px), H2 (36-42px), H3 (24-28px), Body (16-18px), Small (14px)

## Layout System
**Tailwind Spacing:** Use units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 on desktop, py-12 on mobile
- Container: max-w-7xl with px-6 horizontal padding
- Card spacing: gap-6 to gap-8 in grids
- Element margins: mb-4, mb-6, mb-8 for vertical flow

## Page-Specific Designs

### 1. Beranda (Homepage)
- **Hero Section:** Full-width with school building background image, soft red overlay (rgba(214, 40, 40, 0.7))
- **Content:** Centered layout with school logo (large), school name "SMA NEGERI 2 TOMPASO" (H1), slogan "Semangat, Berprestasi, dan Berkarakter" (H3)
- **Navigation:** Horizontal menu bar with links: Profil | Guru & Staf | OSIS | Prestasi | Berita | Kontak
- **CTA Buttons:** Blur background effect for buttons on hero (backdrop-blur-md, semi-transparent white/red background)

### 2. Profil Sekolah
- **Welcome Section:** Photo and greeting from Principal Junus N. M. Akay with formal layout
- **Content Sections:** School history, Vision & Mission in card format with icons
- **Organizational Chart:** Visual hierarchy diagram showing school structure

### 3. Guru & Staf
- **Two View Modes:**
  - **Grid Card View:** 3-4 columns on desktop, 1-2 on tablet, 1 on mobile. Each card: placeholder avatar/photo, name (bold), subject taught, clean white cards with subtle shadows
  - **Table View:** Elegant table with columns: Nama | Jabatan | Mata Pelajaran, alternating row colors, responsive (stack on mobile)
- **Teacher List:** All 20 teachers with Kepala Sekolah highlighted

### 4. OSIS & Ekstrakurikuler
- **OSIS Structure:** Card-based layout showing leadership hierarchy (Ketua, Wakil, Sekretaris, Bendahara with names)
- **Activities Gallery:** Photo grid showcasing Pramuka, Paskibra, Seni, Olahraga activities
- **Section Layout:** Mix of cards and image galleries

### 5. Prestasi Sekolah
- **Table Layout:** Columns: Tahun | Nama Kegiatan | Tingkat | Hasil
- **Placeholder:** Stylized notice card: "Data prestasi akan segera diperbarui setelah verifikasi oleh pihak sekolah" with subtle icon

### 6. Berita & Pengumuman
- **Blog-Style Layout:** Thumbnail left (300px), title and summary right, horizontal card design
- **Metadata:** Date badge, category tag (Akademik/Kegiatan/OSIS/Umum) with color coding
- **Grid:** Stack vertically with dividers between posts

### 7. Kontak & Lokasi
- **Two-Column Layout:** Contact information left, Google Maps embed right (responsive stack)
- **Contact Details:** Address, email, phone with icons
- **Social Media:** Instagram, Facebook, YouTube icons with links
- **Map:** Embedded Google Maps showing school location in Tompaso, Minahasa

## Component Library

### Navigation
- Sticky header with school logo and horizontal menu
- Mobile: Hamburger menu transforming to vertical list
- Active state: Red underline or background

### Cards
- White background, border-radius: 12px, subtle shadow
- Hover: Slight lift (translateY) and enhanced shadow
- Padding: p-6 to p-8

### Buttons
- **Primary:** Red background, white text, rounded-lg, px-8 py-3
- **Secondary:** Light blue background or outlined
- **On Images:** Backdrop blur with semi-transparent background
- Hover states: Slightly darker shade, no complex animations

### Tables
- Clean borders (border-collapse), alternating row colors
- Header: Red or light blue background with white text
- Mobile: Responsive card transformation or horizontal scroll

### Footer
- **Main:** Dark background (gray-900) with white text, three columns: About/Links/Contact
- **Copyright:** Centered "© 2025 SMA NEGERI 2 TOMPASO" with tagline "Menyalakan Obor Ilmu, Menggapai Cita"
- **Credit:** Small text below: "Admin Website: Tian Lempoy"

## Images
- **Hero Image:** School building photograph (full-width, high-quality)
- **Principal Photo:** Professional headshot for welcome section
- **Activity Photos:** Gallery images for OSIS, Pramuka, Paskibra, Seni, Olahraga
- **Teacher Photos:** Professional portraits or placeholder avatars
- **News Thumbnails:** Rectangular images for blog-style news layout
- **Placeholders:** Use educational icons where photos unavailable

## Accessibility & Performance
- WCAG AA contrast ratios maintained
- Alt text for all images
- Semantic HTML structure
- Optimized images for regional internet speeds
- Fast loading priority for text content
- Mobile-first responsive design

## Visual Style
- Clean, formal institutional design
- Ample white space for readability
- Educational iconography (books, graduation caps, trophies)
- Professional photography when available
- Consistent spacing and alignment
- Minimal animations for fast performance